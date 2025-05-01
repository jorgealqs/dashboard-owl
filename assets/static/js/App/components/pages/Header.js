const { Component, useState } = owl;

import { HeaderTemplate } from "../templates_js/header.js";
import { setLang } from "../../../../../../utils/lang.js";
import { setSection } from "../../../../../../utils/sections.js";

export class Header extends Component {
    static template = HeaderTemplate;

    setup() {
        this.state = useState({
            lang: this.env.langState,
            menuOpen: false
        });
    }

    get translations() {
        return this.env.translations[this.state.lang.value].header;
    }

    get nameAplication(){
        return this.env.translations.nameAplication
    }

    toggleLangToEN() {
        setLang("en");
        this.env.langState.value = "en";
    }

    toggleLangToES() {
        setLang("es");
        this.env.langState.value = "es";
    }

    toggleMenu() {
        this.state.menuOpen = !this.state.menuOpen;
    }

    onChangeMain(ev) {
        const option = ev.currentTarget.dataset.option;
        setSection(option)
        this.env.langState.page = option;
    }
}