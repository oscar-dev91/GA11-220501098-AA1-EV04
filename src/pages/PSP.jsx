export default function PSP() {
    return (
        <div className="min-h-screen bg-gray-50">
            
            <div className="max-w-5xl mx-auto px-6 py-12">

                <h1 className="text-3xl font-bold text-blue-700 mb-6" id="psp">Metodología PSP</h1>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600">Descripción</h2>
                    <p className="text-gray-700 leading-relaxed">
                        La metodología PSP (Personal Software Process) permite gestionar tiempos,
                        calidad y esfuerzo durante el desarrollo del proyecto. Se aplicó en el proceso
                        mediante el uso de sprints, métricas y mejora continua.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600">Sprints Ejecutados</h2>

                    <table className="w-full border text-left bg-white shadow rounded-xl overflow-hidden">
                        <thead className="bg-blue-100 text-gray-700">
                            <tr>
                                <th className="p-3 border">Sprint</th>
                                <th className="p-3 border">Duración</th>
                                <th className="p-3 border">Objetivos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border font-semibold">Sprint 1</td>
                                <td className="p-3 border">1 mes</td>
                                <td className="p-3 border">Planificación y análisis del problema.</td>
                            </tr>
                            <tr>
                                <td className="p-3 border font-semibold">Sprint 2</td>
                                <td className="p-3 border">1 mes</td>
                                <td className="p-3 border">Documentación estructural y objetivos.</td>
                            </tr>
                            <tr>
                                <td className="p-3 border font-semibold">Sprint 3</td>
                                <td className="p-3 border">1 mes</td>
                                <td className="p-3 border">Desarrollo de contenido y estructura del informe.</td>
                            </tr>
                            <tr>
                                <td className="p-3 border font-semibold">Sprint 4</td>
                                <td className="p-3 border">1 mes</td>
                                <td className="p-3 border">
                                    Desarrollo de diseño en CSS puro creado por mí (Oscar Palomino).
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600">Métricas PSP</h2>
                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                        <li>Estimaciones de tiempo por actividad.</li>
                        <li>Control de calidad y errores por sprint.</li>
                        <li>Registro del tiempo real invertido.</li>
                        <li>Comparación estimado vs real.</li>
                    </ul>
                </section>

            </div>
        </div>
    );
}
