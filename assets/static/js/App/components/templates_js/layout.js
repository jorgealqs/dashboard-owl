const { xml } = owl;

export const LayoutTemplate = xml`
    <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <!-- Header -->
        <div class="mb-10">
            <Header />
        </div>

        <!-- Main content -->
        <main class="flex-1 container mx-auto pt-20">
            <Home t-if="currentPage === 'home'" />
            <Dashboard t-if="currentPage === 'dashboard'" />
            <Settings t-if="currentPage === 'settings'" />
        </main>

        <!-- Footer -->
        <Footer class="mt-auto" />

        <!-- Floating buttons -->
        <FloatingButtons />
    </div>`;