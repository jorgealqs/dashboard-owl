const { Component, useState } = owl;
import { FooterTemplate } from "../templates_js/footer.js";

export class Footer extends Component {
    static template = FooterTemplate

    setup() {
        this.state = useState({
            lang: this.env.langState,
        });
    }

    get translations() {
        return this.env.translations[this.state.lang.value]?.footer || {};
    }

}