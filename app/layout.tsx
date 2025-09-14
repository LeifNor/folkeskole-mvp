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
<div>
<div className="kicker">Folkeskole 2025/26</div>
<h1 className="h1">Kvalitetsprogram – hvad ændres for mig?</h1>
</div>
<nav className="flex gap-2 sm:gap-3">
<a className="btn flex-1 sm:flex-none justify-center" href="/">Overblik</a>
<a className="btn flex-1 sm:flex-none justify-center" href="/tidslinje">Tidslinje</a>
<DropdownMenu trigger="Aktører" />
<a className="btn flex-1 sm:flex-none justify-center" href="/timebank">Timebank</a>
<a className="btn flex-1 sm:flex-none justify-center" href="/kilder">Kilder</a>
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