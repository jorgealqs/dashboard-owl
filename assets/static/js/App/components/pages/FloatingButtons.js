const { Component, xml } = owl;

export class FloatingButtons extends Component {
    static template = xml`
        <div class="fixed bottom-4 right-4 flex flex-col gap-4 z-50 md:bottom-6 md:right-8">
            <t t-foreach="this.buttons" t-as="btn" t-key="btn.icon">
                <a t-att-href="btn.url" target="_blank"
                    class="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white text-gray-600 hover:scale-110 hover:shadow-xl transition-all duration-300 animate-fade-in"
                    t-att-title="btn.title"
                >
                    <i t-att-class="btn.icon + ' text-2xl'"></i>
                </a>
            </t>
        </div>
    `;

    get buttons() {
        return this.env.translations.floatingIcons;
    }
}