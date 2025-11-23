
import React from 'react'

export default function Navbar(){
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-brand-600 flex items-center justify-center text-white font-bold">QC</div>
          <div>
            <div className="font-semibold">Calidad · BancoDemoApp</div>
            <div className="text-xs text-slate-500">Instrumentos y bitácoras</div>
          </div>
        </div>

        <nav className="flex gap-4 text-sm">
          <a href="#instrumentos" className="hover:underline">Instrumentos</a>
          <a href="#practicas" className="hover:underline">Prácticas</a>
          <a href="#psp" className="hover:underline">PSP</a>
          <a href="#bancodemo" className="hover:underline">BancoDemo</a>
          <a href="#bitacora" className="hover:underline">Bitácora</a>
          <a href="#auditoria" className="hover:underline">Aseguramiento</a>
        </nav>
      </div>
    </header>
  )
}
