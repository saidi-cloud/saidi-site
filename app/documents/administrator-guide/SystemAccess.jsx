'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trash2, Plus, Save, Edit2, Loader2 } from 'lucide-react'

export default function SystemAccess() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch('/api/admin/system-access')
      if (!res.ok) throw new Error('Failed to fetch data')
      const json = await res.json()
      setData(json)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/admin/system-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to save data')
      setIsEditing(false)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const updateAccount = (index, field, value) => {
    const newAccounts = [...data.accounts]
    newAccounts[index] = { ...newAccounts[index], [field]: value }
    setData({ ...data, accounts: newAccounts })
  }

  const addAccount = () => {
    setData({
      ...data,
      accounts: [...data.accounts, { service: '', url: '', username: '' }]
    })
  }

  const removeAccount = (index) => {
    const newAccounts = data.accounts.filter((_, i) => i !== index)
    setData({ ...data, accounts: newAccounts })
  }

  const updateNote = (index, value) => {
    const newNotes = [...data.notes]
    newNotes[index] = value
    setData({ ...data, notes: newNotes })
  }

  const addNote = () => {
    setData({ ...data, notes: [...data.notes, ''] })
  }

  const removeNote = (index) => {
    const newNotes = data.notes.filter((_, i) => i !== index)
    setData({ ...data, notes: newNotes })
  }

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <Loader2 className="w-8 h-8 animate-spin text-[#4487c5]" />
    </div>
  )

  if (error) return (
    <div className="text-red-500 text-center p-4 bg-red-900/20 rounded-lg">
      Error: {error}
      <button onClick={fetchData} className="ml-4 text-sm underline">Retry</button>
    </div>
  )

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-[#e35275]">System Access</h2>
        <div className="flex gap-2">
          {isEditing ? (
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition disabled:opacity-50"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#4487c5] hover:bg-[#357abd] text-white rounded-md transition"
            >
              <Edit2 className="w-4 h-4" />
              Edit Information
            </button>
          )}
        </div>
      </div>

      <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-4 text-[#4487c5] font-semibold w-1/4">Service</th>
              <th className="py-3 px-4 text-[#4487c5] font-semibold w-1/3">URL</th>
              <th className="py-3 px-4 text-[#4487c5] font-semibold w-1/4">Username</th>
              {isEditing && <th className="py-3 px-4 w-12"></th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {data.accounts.map((account, index) => (
              <tr key={index} className="hover:bg-gray-800/30 transition">
                <td className="py-3 px-4">
                  {isEditing ? (
                    <input
                      type="text"
                      value={account.service}
                      onChange={(e) => updateAccount(index, 'service', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white focus:outline-none focus:border-[#4487c5]"
                    />
                  ) : (
                    <span className="text-gray-300">{account.service}</span>
                  )}
                </td>
                <td className="py-3 px-4">
                  {isEditing ? (
                    <input
                      type="text"
                      value={account.url}
                      onChange={(e) => updateAccount(index, 'url', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white focus:outline-none focus:border-[#4487c5]"
                    />
                  ) : (
                    <a href={account.url} target="_blank" rel="noopener noreferrer" className="text-[#4487c5] hover:underline truncate block max-w-xs">
                      {account.url}
                    </a>
                  )}
                </td>
                <td className="py-3 px-4">
                  {isEditing ? (
                    <input
                      type="text"
                      value={account.username}
                      onChange={(e) => updateAccount(index, 'username', e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white focus:outline-none focus:border-[#4487c5]"
                    />
                  ) : (
                    <span className="text-gray-300 font-mono text-sm">{account.username}</span>
                  )}
                </td>
                {isEditing && (
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => removeAccount(index)}
                      className="text-red-500 hover:text-red-400 p-1 hover:bg-red-900/20 rounded transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        
        {isEditing && (
          <button
            onClick={addAccount}
            className="mt-4 flex items-center gap-2 text-[#4487c5] hover:text-[#357abd] text-sm font-medium transition"
          >
            <Plus className="w-4 h-4" />
            Add Service
          </button>
        )}
      </div>

      <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm space-y-4">
        <h3 className="text-xl font-semibold text-[#e35275]">Notes & Credentials</h3>
        <ul className="space-y-3">
          {data.notes.map((note, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-300">
              <span className="text-[#4487c5] mt-1">•</span>
              {isEditing ? (
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => updateNote(index, e.target.value)}
                    className="flex-1 bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white focus:outline-none focus:border-[#4487c5]"
                  />
                  <button
                    onClick={() => removeNote(index)}
                    className="text-red-500 hover:text-red-400 p-1 hover:bg-red-900/20 rounded transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <span>{note}</span>
              )}
            </li>
          ))}
        </ul>
        
        {isEditing && (
          <button
            onClick={addNote}
            className="mt-2 flex items-center gap-2 text-[#4487c5] hover:text-[#357abd] text-sm font-medium transition"
          >
            <Plus className="w-4 h-4" />
            Add Note
          </button>
        )}
      </div>
    </div>
  )
}
