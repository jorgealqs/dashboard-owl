const { xml } = owl;

export const LayoutTemplate = xml`
    <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <!-- Header -->
        <Header />

        <!-- Main content -->
        <main class="flex-1 container mx-auto">
            <t t-slot="default" />
        </main>

        <!-- Footer -->
        <Footer />

        <!-- Floating buttons -->
        <FloatingButtons />

    </div>`;