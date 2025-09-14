import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import DropdownMenu from '@/components/DropdownMenu'


export const metadata: Metadata = {
title: 'Folkeskole 2025/26 – Overblik',
description: 'Målrettet overblik over Folkeskolens Kvalitetsprogram – hurtigt, simpelt, urbant.'
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="da">
<body className="min-h-screen bg-white font-sans text-gray-900">
<div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
<header className="mb-6 sm:mb-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="text-center sm:text-left">
<div className="kicker">Folkeskole 2025/26</div>
<h1 className="h1">Kvalitetsprogram – hvad ændres for mig?</h1>
</div>

{/* Enhanced responsive navigation */}
<nav className="w-full sm:w-auto">
<div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3">
<a className="btn col-span-1 flex-1 sm:flex-none justify-center text-center" href="/">
<span className="hidden sm:inline">Overblik</span>
<span className="sm:hidden">Hjem</span>
</a>
<a className="btn col-span-1 flex-1 sm:flex-none justify-center text-center" href="/tidslinje">
<span className="hidden sm:inline">Tidslinje</span>
<span className="sm:hidden">Tid</span>
</a>
<div className="col-span-1">
<DropdownMenu trigger="Aktører" />
</div>
<a className="btn col-span-1 flex-1 sm:flex-none justify-center text-center" href="/timebank">
<span className="hidden sm:inline">Timebank</span>
<span className="sm:hidden">Bank</span>
</a>
<a className="btn col-span-2 sm:col-span-1 flex-1 sm:flex-none justify-center text-center" href="/kilder">
Kilder
</a>
</div>
</nav>
</div>
</header>
{children}
<footer className="mt-12 sm:mt-16 border-t pt-4 sm:pt-6 text-sm text-gray-500">
<div className="text-center sm:text-left">
Senest opdateret: <time>{new Date().toLocaleDateString('da-DK')}</time>
</div>
</footer>
</div>
</body>
</html>
)
}