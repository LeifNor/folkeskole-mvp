import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'


export const metadata: Metadata = {
title: 'Folkeskole 2025/26 – Overblik',
description: 'Målrettet overblik over Folkeskolens Kvalitetsprogram – hurtigt, simpelt, urbant.'
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="da">
<body className="min-h-screen bg-white font-sans text-gray-900">
<div className="mx-auto max-w-6xl px-4 py-6">
<header className="mb-8 flex items-center justify-between">
<div>
<div className="kicker">Folkeskole 2025/26</div>
<h1 className="h1">Kvalitetsprogram – hvad ændres for mig?</h1>
</div>
<nav className="hidden md:flex gap-2">
<a className="btn" href="/">Overblik</a>
<a className="btn" href="/kilder">Kilder</a>
</nav>
</header>
{children}
<footer className="mt-16 border-t pt-6 text-sm text-gray-500">
Senest opdateret: <time>{new Date().toLocaleDateString('da-DK')}</time>
</footer>
</div>
</body>
</html>
)
}