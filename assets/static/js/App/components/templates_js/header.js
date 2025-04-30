const { xml } = owl;

export const HeaderTemplate = xml`
<header class="bg-gradient-to-r from-blue-100 via-white to-blue-100 fixed top-3 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl max-w-none w-[98.8%] px-4 py-2 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- Botón hamburguesa móvil con ícono dinámico -->
            <div class="md:hidden">
                <button t-on-click="toggleMenu" class="text-gray-700 focus:outline-none transition duration-300 ease-in-out">
                    <i t-att-class="state.menuOpen ? 'fas fa-times fa-2x text-red-500 transform scale-110 transition duration-300' : 'fas fa-bars fa-lg text-gray-700 transform scale-110 transition duration-300'"></i>
                </button>
            </div>
            <div class="text-indigo-600 font-bold text-2xl tracking-wide drop-shadow-sm hover:drop-shadow-lg transition duration-300 cursor-pointer">
                <t t-out="nameAplication" />
            </div>

            <!-- Navegación normal (pantallas grandes) -->
            <nav class="hidden md:flex gap-6 text-sm font-medium text-gray-700">
                <a href="#" t-out="translations.home"></a>
                <a href="#" t-out="translations.dashboard"></a>
                <a href="#" t-out="translations.profile"></a>
                <a href="#" t-out="translations.settings"></a>
                <a href="#" t-out="translations.notifications"></a>
                <a href="#" t-out="translations.logout"></a>
            </nav>

            <!-- Idioma (pantallas grandes) -->
            <div class="hidden md:flex items-center gap-4 bg-white px-3 py-1 rounded-full border border-gray-200 shadow">
                <button t-on-click="toggleLangToES" title="Español"
                        t-att-class="state.lang.value === 'es' ? 'scale-135' : 'scale-85'">
                    <img src="https://flagcdn.com/w40/co.png" alt="ES"
                        class="w-5 h-5 cursor-pointer transition-transform duration-300 ease-in-out" />
                </button>
                <span class="text-gray-400">|</span>
                <button t-on-click="toggleLangToEN" title="English"
                        t-att-class="state.lang.value === 'en' ? 'scale-135' : 'scale-85'">
                    <img src="https://flagcdn.com/w40/us.png" alt="EN"
                        class="w-5 h-5 cursor-pointer transition-transform duration-300 ease-in-out" />
                </button>
            </div>
        </div>

        <!-- Menú desplegable móvil -->
        <div t-if="state.menuOpen" class="md:hidden absolute top-14 right-0 w-60 bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center gap-6 z-50 animate-fade-down">
            <a href="#" t-out="translations.home"></a>
            <a href="#" t-out="translations.dashboard"></a>
            <a href="#" t-out="translations.profile"></a>
            <a href="#" t-out="translations.settings"></a>
            <a href="#" t-out="translations.notifications"></a>
            <a href="#" t-out="translations.logout"></a>
            <!-- Idioma (solo en móvil) -->
            <div class="flex items-center gap-4 bg-white px-3 py-2 rounded-full border border-gray-200 shadow w-fit self-center mt-2">
                <button t-on-click="toggleLangToES" title="Español" t-att-class="state.lang.value === 'es' ? 'scale-135' : 'scale-85'">
                    <img src="https://flagcdn.com/w40/co.png" alt="ES" class="w-5 h-5" />
                </button>
                <span class="text-gray-400">|</span>
                <button t-on-click="toggleLangToEN" title="English" t-att-class="state.lang.value === 'en' ? 'scale-135' : 'scale-85'">
                    <img src="https://flagcdn.com/w40/us.png" alt="EN" class="w-5 h-5" />
                </button>
            </div>
        </div>
    </div>
</header>
`;