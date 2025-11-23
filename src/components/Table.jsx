import React from 'react'

export default function Table({ columns = [], rows = [] }){
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-50">
            {columns.map((c, i) => <th key={i} className="border px-4 py-2 text-left">{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-slate-50' : ''}>
              {r.map((cell, j) => <td key={j} className="border px-4 py-2 align-top">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
