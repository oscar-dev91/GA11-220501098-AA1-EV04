export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white mt-16 py-8">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Columna 1 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Proyecto de Práctica</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Documentación completa del proceso formativo, auditoría,
                            metodología PSP y desarrollo del proyecto académico.
                        </p>
                    </div>

                    {/* Columna 2 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Navegación</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/" className="hover:underline text-gray-300 hover:text-white">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="/practicas" className="hover:underline text-gray-300 hover:text-white">
                                    Plan de Prácticas
                                </a>
                            </li>
                            <li>
                                <a href="/psp" className="hover:underline text-gray-300 hover:text-white">
                                    Metodología PSP
                                </a>
                            </li>
                            <li>
                                <a href="/auditoria" className="hover:underline text-gray-300 hover:text-white">
                                    Auditoría
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Desarrollado por</h3>
                        <p className="text-gray-300 text-sm">
                            <span className="font-semibold text-white">Oscar Palomino</span>
                        </p>
                    </div>
                </div>

                {/* Línea inferior */}
                <div className="border-t border-blue-700 mt-8 pt-4 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Oscar Palomino - Proyecto Académico • Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
