import Navbar from "../components/Navbar";export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold mb-6 text-blue-700">Proyecto de Práctica – Documentación Completa</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Este proyecto corresponde al desarrollo integral del plan de trabajo, auditoría,
                    metodología PSP y documentación académica aplicada durante la práctica formativa.
                    En esta página encontrarás la información organizada y presentada de manera clara,
                    moderna y estructurada, reflejando todo el contenido del documento original.
                </p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <a href="#practicas" className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer border">
                        <h3 className="text-xl font-bold mb-2 text-blue-700">Plan de Prácticas</h3>
                        <p className="text-gray-600">Objetivos, actividades, cronograma y justificación general del proyecto.</p>
                    </a>
                    <a href="#psp" className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer border">
                        <h3 className="text-xl font-bold mb-2 text-blue-700">Metodología PSP</h3>
                        <p className="text-gray-600">Sprints, métricas, estimaciones y procesos aplicados en el desarrollo.</p>
                    </a>
                    <a href="#auditoria" className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer border">
                        <h3 className="text-xl font-bold mb-2 text-blue-700">Auditoría</h3>
                        <p className="text-gray-600">Checklist, hallazgos, acciones correctivas y conclusiones.</p>
                    </a>
                </div>
            </section>
        </div>
    );
}
