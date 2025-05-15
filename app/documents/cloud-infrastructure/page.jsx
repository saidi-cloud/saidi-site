'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CloudInfraPage() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 text-white bg-black space-y-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-[#4487c5]">Cloud Infrastructure</h1>
      <p className="text-gray-300">
        SAIDI Cloud is powered by OpenStack — a modular, open-source cloud platform that gives us the flexibility and control to deploy GPU resources at scale, securely and efficiently. Below are key OpenStack services that power our platform:
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#e35275]">Blazar</h2>
        <p className="text-gray-300">
          Blazar is OpenStack's reservation service, allowing us to offer advance scheduling and resource allocation for dedicated GPU instances.
        </p>
        <Link
          href="https://docs.openstack.org/blazar/latest/"
          target="_blank"
          className="text-[#e35275] underline"
        >
          Read the official Blazar documentation
        </Link>

        <h2 className="text-2xl font-semibold text-[#e35275]">Horizon</h2>
        <p className="text-gray-300">
          Horizon is the dashboard interface for OpenStack. We use it internally to manage users, workloads, and compute resources in a visual, intuitive way.
        </p>
        <Link
          href="https://docs.openstack.org/horizon/latest/"
          target="_blank"
          className="text-[#e35275] underline"
        >
          Read the official Horizon documentation
        </Link>

        <h2 className="text-2xl font-semibold text-[#e35275]">Ironic</h2>
        <p className="text-gray-300">
          Ironic provides bare metal provisioning — giving customers direct access to physical GPU servers with no hypervisor layer, for maximum performance.
        </p>
        <Link
          href="https://docs.openstack.org/ironic/latest/"
          target="_blank"
          className="text-[#e35275] underline"
        >
          Read the official Ironic documentation
        </Link>

        <h2 className="text-2xl font-semibold text-[#e35275]">Magnum</h2>
        <p className="text-gray-300">
          Magnum delivers container orchestration engines (like Kubernetes) as a service, allowing GPU-powered container clusters to be spun up dynamically.
        </p>
        <Link
          href="https://docs.openstack.org/magnum/latest/"
          target="_blank"
          className="text-[#e35275] underline"
        >
          Read the official Magnum documentation
        </Link>

        <h2 className="text-2xl font-semibold text-[#e35275]">Nova</h2>
        <p className="text-gray-300">
          Nova is the core compute engine of OpenStack, responsible for provisioning and managing virtual machines — including GPU-enabled flavors on SAIDI Cloud.
        </p>
        <Link
          href="https://docs.openstack.org/nova/latest/"
          target="_blank"
          className="text-[#e35275] underline"
        >
          Read the official Nova documentation
        </Link>
      </section>

      <p className="text-sm text-gray-500 mt-10">
        Last updated: May 2025
      </p>
    </motion.div>
  )
}
