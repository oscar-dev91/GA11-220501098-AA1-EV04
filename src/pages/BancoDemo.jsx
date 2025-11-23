import React from 'react'

export default function BancoDemo(){
  return (
    <section id="bancodemo" className="py-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-4">Caso Real: BancoDemoApp</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-semibold">Descripción</h4>
          <p className="mt-2 text-slate-700">
            BancoDemo emula movimientos bancarios: transferencias, consignaciones y retiros.
            Roles: usuario y operador. Movimientos registrados en tabla `logs` en MySQL.
          </p>
          <a href="https://oscarpalomino.dev/bancodemo/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 rounded bg-brand-600 text-white">Ver demo</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-semibold">Stack Técnico</h4>
          <ul className="mt-2 list-disc ml-5 text-slate-700">
            <li>Frontend: React + Vite</li>
            <li>Backend: Django + DRF</li>
            <li>Base de datos: MySQL</li>
            <li>Registro/auditoría: tabla logs</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
