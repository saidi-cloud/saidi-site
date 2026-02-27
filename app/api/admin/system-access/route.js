import { NextResponse } from 'next/server'
import { getStore } from '@netlify/blobs'

const DEFAULT_DATA = {
  accounts: [
    { service: "Github", url: "https://github.com/saidi-cloud", username: "lv@saidi.sg", password: "kun123lu456!", notes: "" },
    { service: "Netlify", url: "https://app.netlify.com/teams/saidi-cloud/projects", username: "lv@saidi.sg", password: "kun123lu456!", notes: "" },
    { service: "Exabytes", url: "https://exabytes.sg", username: "lv@saidi.sg", password: "kun123lu456!", notes: "Requires 2FA handover." },
    { service: "Zoho (Email)", url: "https://mail.zoho.com", username: "lv@saidi.sg", password: "kun123lu456!", notes: "" }
  ],
  notes: [
    "All services are on the free tier - no billing or credit card setup is necessary."
  ]
}

async function getAccessData() {
  try {
    const store = getStore('system-access')
    const data = await store.get('access-data', { type: 'json' })
    return data || DEFAULT_DATA
  } catch (error) {
    console.error('Error fetching from Netlify Blobs:', error)
    return DEFAULT_DATA
  }
}

async function saveAccessData(data) {
  try {
    const store = getStore('system-access')
    await store.setJSON('access-data', data)
    return true
  } catch (error) {
    console.error('Error saving to Netlify Blobs:', error)
    return false
  }
}

export async function GET(request) {
  // Check authentication
  const authCookie = request.cookies.get('admin_authenticated')
  if (!authCookie || authCookie.value !== 'true') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const data = await getAccessData()
  return NextResponse.json(data)
}

export async function POST(request) {
  // Check authentication
  const authCookie = request.cookies.get('admin_authenticated')
  if (!authCookie || authCookie.value !== 'true') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const success = await saveAccessData(body)
    
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: 'Failed to save data' }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
