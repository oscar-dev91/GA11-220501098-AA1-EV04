export default function Practicas() {
    return (
        <div className="min-h-screen bg-gray-50">

            <div className="max-w-5xl mx-auto px-6 py-12">

                <h1 className="text-3xl font-bold text-blue-700 mb-6" id="practicas">Plan de Prácticas – Documentación</h1>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Introducción</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Este documento describe el plan estructurado de prácticas, incluyendo los objetivos,
                        alcance, actividades, metodología y cronograma. Su propósito es organizar y evidenciar
                        el proceso formativo mediante una planificación clara y fundamentada.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Alcance</h2>
                    <p className="text-gray-700 leading-relaxed">
                        El proyecto abarca el análisis, diseño, desarrollo y documentación de una solución
                        orientada a la mejora de procesos tecnológicos. Se incluye la elaboración del plan de
                        trabajo, auditorías internas, control PSP y producción del informe final.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">Objetivo General</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Desarrollar el proyecto aplicando metodologías formales y documentación académica,
                        asegurando la calidad, trazabilidad y cumplimiento de los entregables.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600">Objetivos Específicos</h2>
                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                        <li>Planear adecuadamente el trabajo mediante sprints y cronogramas.</li>
                        <li>Aplicar PSP para mejorar precisión de tiempos y calidad.</li>
                        <li>Realizar auditorías internas y corregir desviaciones.</li>
                        <li>Generar el informe final con un diseño estructurado.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-600 mb-3">Cronograma por Sprints</h2>

                    <table className="w-full border text-left text-gray-700 bg-white shadow rounded-xl overflow-hidden">
                        <thead className="bg-blue-100">
                            <tr>
                                <th className="p-3 border">Sprint</th>
                                <th className="p-3 border">Fecha</th>
                                <th className="p-3 border">Actividad</th>
                                <th className="p-3 border">Responsable</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border font-semibold">Sprint 1</td>
                                <td className="p-3 border">Junio 2024</td>
                                <td className="p-3 border">Análisis del problema y levantamiento de información.</td>
                                <td className="p-3 border">Oscar Palomino</td>
                            </tr>
                            <tr>
                                <td className="p-3 border font-semibold">Sprint 2</td>
                                <td className="p-3 border">Julio 2024</td>
                                <td className="p-3 border">Estructura del documento y definición de objetivos.</td>
                                <td className="p-3 border">Oscar Palomino</td>
                            </tr>
                            <tr>
                                <td className="p-3 border font-semibold">Sprint 3</td>
                                <td className="p-3 border">Agosto 2024</td>
                                <td className="p-3 border">Desarrollo de contenido y metodología.</td>
                                <td className="p-3 border">Oscar Palomino</td>
                            </tr>
                            <tr>
                                <td className="p-3 border font-semibold">Sprint 4</td>
                                <td className="p-3 border">Septiembre 2024</td>
                                <td className="p-3 border">Diseño propio en CSS puro (sin frameworks).</td>
                                <td className="p-3 border">Oscar Palomino</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
}
