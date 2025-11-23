import React from 'react'
import Table from '../components/Table'
import bitacoraData from '../data/bitacoraData' // we'll create this

export default function Bitacora(){
  return (
    <section id="bitacora" className="py-16 max-w-6xl mx-auto px-6 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-4">Bitácora del Proyecto — BancoDemoApp (por Sprints)</h2>
      <p className="mb-6 text-slate-700">Registro cronológico de sprints, actividades, observaciones y buenas prácticas.</p>

      {bitacoraData.map((s, i) => (
        <article key={i} className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
          <p className="text-sm text-slate-600 mb-2">{s.period}</p>
          <ul className="list-disc ml-6 mb-2">
            {s.activities.map((a, j) => <li key={j} className="mb-1">{a}</li>)}
          </ul>
          <div className="text-sm text-slate-600">Observaciones: {s.observations}</div>
        </article>
      ))}

    </section>
  )
}
