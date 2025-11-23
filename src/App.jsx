import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Instrumentos from './pages/Instrumentos'
import Bitacora from './pages/Bitacora'
import BancoDemo from './pages/BancoDemo'
import Practicas from './pages/Practicas'
import PSP from './pages/PSP'
import Auditoria from './pages/Auditoria'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Home />
        <Instrumentos />
        <Practicas />
        <PSP />
        <BancoDemo />
        <Bitacora />
        <Auditoria />
      </main>
      <Footer />
    </div>
  )
}
