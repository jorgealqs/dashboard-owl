const { xml } = owl;

export const FooterTemplate = xml`
<footer class="bg-gray-100 text-gray-700 py-10 mt-10 animate-fade-in-up">
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Column 1: Technologies -->
        <div class="animate-fade-in-up animate-delay-100">
            <h3 class="text-lg font-semibold mb-4">
                <t t-esc="this.translations.technologies"/>
            </h3>
            <ul class="space-y-2 text-sm">
                <t t-foreach="this.translations.technologiesList" t-as="tech" t-key="tech.name">
                    <li>
                        <a t-att-href="tech.url" target="_blank" class="hover:text-blue-500">
                            <t t-esc="tech.name"/>
                        </a>
                    </li>
                </t>
            </ul>
        </div>

        <!-- Column 2: Contact -->
        <div class="animate-fade-in-up animate-delay-200">
            <h3 class="text-lg font-semibold mb-4">
                <t t-esc="this.translations.contact"/>
            </h3>
            <ul class="space-y-2 text-sm">
                <t t-foreach="this.translations.contactList" t-as="contact" t-key="contact.label">
                    <li>
                        <t t-if="contact.url">
                            <span><t t-esc="contact.label"/>: </span>
                            <a t-att-href="contact.url" class="hover:text-blue-500">
                                <t t-esc="contact.value"/>
                            </a>
                        </t>
                        <t t-if="!contact.url">
                            <span><t t-esc="contact.label"/>: <t t-esc="contact.value"/></span>
                        </t>
                    </li>
                </t>
            </ul>
        </div>

        <!-- Column 3: About -->
        <div class="animate-fade-in-up animate-delay-300">
            <h3 class="text-lg font-semibold mb-4">
                <t t-esc="this.translations.about"/>
            </h3>
            <p class="text-sm leading-relaxed">
                <t t-esc="this.translations.aboutText"/>
            </p>
        </div>

    </div>

    <div class="text-center text-xs text-gray-500 mt-10">
        <t t-out="this.translations.rightsReserved"/>
    </div>
</footer>
`;