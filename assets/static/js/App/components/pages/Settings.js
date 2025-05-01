const { Component } = owl;

import { SettingsTemplate } from "../templates_js/settings.js";
import { translations } from "../../../../i18n/translations.js";
import { useAutofocus } from "../../../../../../utils/utils.js"

export class Settings extends Component {
    static template = SettingsTemplate;

    setup() {
        this.translations = translations;
        this.inputRef = useAutofocus("appName")
    }

    saveApplicationName() {
        const inputValue = this.inputRef.el?.value;
        this.translations.nameAplication = inputValue;  // ✅ Actualiza el JSON
        console.log("✅ Nombre guardado en JSON:", this.translations.nameAplication);
    }
}