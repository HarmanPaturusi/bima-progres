import { TabelBelanja } from '@/components/setelan/tabel-belanja'
import React from 'react'

export default function page() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-6 lg:gap-6 lg:p-6">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Program Belanja</h1>
            </div>
            <TabelBelanja />
        </main>
    )
}
