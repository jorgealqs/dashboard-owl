const { xml } = owl;

export const SettingsTemplate = xml`
    <div class="min-h-screen flex items-center justify-center">
        <div class="w-full max-w-7xl rounded-2xl shadow-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div class="w-full">
                <label class="block font-semibold mb-2">Application Name:</label>
                <input
                    class="w-full border rounded px-4 py-2 mb-4"
                    type="text"
                    t-ref="appName"
                    t-att-value="translations.nameAplication"
                />
                <button
                    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    t-on-click="saveApplicationName"
                >
                    Guardar
                </button>
            </div>
        </div>
    </div>
`;