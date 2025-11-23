import React from 'react'
import Table from '../components/Table'
import { pspRows, instrumentosPlan } from '../data/instrumentosData'

export default function Instrumentos(){
  return (
    <section id="instrumentos" className="py-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-4">Instrumentos de Calidad — BancoDemoApp</h2>

      <p className="mb-6 text-slate-700">
        Aquí se presentan los instrumentos diseñados y diligenciados. Están alineados con el componente formativo
        "Fundamentos de calidad de software" y con los marcos PSP/TSP/SCRUM.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Registro PSP (resumen)</h3>
      <Table
        columns={["Actividad", "Tiempo (min)", "Errores encontrados", "Descripción"]}
        rows={pspRows}
      />

      <h3 className="text-xl font-semibold mt-8 mb-3">Instrumento de Planificación</h3>
      <Table
        columns={["Elemento","Descripción"]}
        rows={instrumentosPlan}
      />
    </section>
  )
}
