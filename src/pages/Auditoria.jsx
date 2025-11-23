export default function Auditoria() {
    return (
        <div className="min-h-screen bg-gray-50">
            
            <div className="max-w-5xl mx-auto px-6 py-12">

                <h1 className="text-3xl font-bold text-blue-700 mb-6" id="auditoria">Auditoría Interna</h1>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600">Objetivo de la Auditoría</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Evaluar el cumplimiento del cronograma, calidad del contenido y coherencia
                        general del proyecto mediante una revisión estructurada.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600">Checklist de Auditoría</h2>

                    <table className="w-full border mb-6 bg-white shadow rounded-xl overflow-hidden">
                        <thead className="bg-blue-100">
                            <tr>
                                <th className="p-3 border">Ítem</th>
                                <th className="p-3 border">Cumple</th>
                                <th className="p-3 border">Observaciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border">Documento estructurado correctamente</td>
                                <td className="p-3 border">Sí</td>
                                <td className="p-3 border">Cumple con la guía oficial</td>
                            </tr>
                            <tr>
                                <td className="p-3 border">Cronograma claro</td>
                                <td className="p-3 border">Sí</td>
                                <td className="p-3 border">Sprints bien definidos</td>
                            </tr>
                            <tr>
                                <td className="p-3 border">Metodología PSP aplicada</td>
                                <td className="p-3 border">Sí</td>
                                <td className="p-3 border">Incluye métricas y estimaciones</td>
                            </tr>
                            <tr>
                                <td className="p-3 border">Diseño final del documento</td>
                                <td className="p-3 border">Sí</td>
                                <td className="p-3 border">CSS propio creado por Oscar Palomino</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-600">Conclusiones</h2>
                    <p className="text-gray-700 leading-relaxed">
                        La auditoría confirma un cumplimiento adecuado del plan de trabajo,
                        logrando un documento completo, coherente y con evidencias claras de la
                        aplicación de metodologías formales durante el desarrollo del proyecto.
                    </p>
                </section>

            </div>
        </div>
    );
}
