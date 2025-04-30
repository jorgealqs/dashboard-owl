const { mount, reactive } = owl;

import { Root } from "./App/components/Root.js";
import { translations } from "../i18n/translations.js";
import { getLang } from "../../../utils/lang.js";
import { routes } from "./App/components/routes.js";

const langState = reactive({ value: getLang() });

const env = {
    translations: translations,
    langState: langState,
    routesWitnTemplate: routes
};

mount(Root, document.body, { env: env, dev: true });