const { xml } = owl;

export const HomeTemplate = xml`
<div class="flex items-center justify-center">
    <div class="w-full max-w-7xl bg-white rounded-2xl shadow-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        <!-- Tabla de contenido -->
        <div class="md:col-span-1 border-r pr-4">
            <h2 class="text-xl font-bold mb-4 text-gray-800">📚 Tabla de Contenido</h2>
            <ul class="space-y-2 text-blue-600 font-medium">
                <li><a href="#intro" class="hover:underline">Introducción</a></li>
                <li><a href="#odoo" class="hover:underline">Odoo</a></li>
                <li><a href="#python" class="hover:underline">Python</a></li>
                <li><a href="#proyectos" class="hover:underline">Proyectos</a></li>
            </ul>
        </div>

        <!-- Contenido -->
        <div class="md:col-span-2">
        <section id="intro" class="mb-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Introducción</h3>
            <p class="text-gray-700">Bienvenido a mi Wiki personal sobre desarrollo, Odoo, Python y más.</p>
        </section>

        <section id="odoo" class="mb-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Odoo</h3>
            <p class="text-gray-700">Aquí explico módulos, views, controladores y personalizaciones comunes en Odoo.</p>
        </section>

        <section id="python" class="mb-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Python</h3>
            <p class="text-gray-700">Scripts, tips y proyectos útiles en Python para automatización, análisis de datos, etc.</p>
        </section>

        <section id="proyectos" class="mb-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Proyectos</h3>
            <p class="text-gray-700">Documentación de mis proyectos como el CMS, apuestas deportivas, y más.</p>
        </section>
        </div>

    </div>
</div>
`;