const { Component, useState } = owl;

import { LayoutTemplate } from "../templates_js/layout.js";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { Home } from "./Home.js";
import { Dashboard } from "./Dashboard.js";
import { FloatingButtons } from "./FloatingButtons.js";
import { Settings } from "./Settings.js";


export class Layout extends Component {

    static components = { Header, Footer, FloatingButtons, Home, Dashboard, Settings };

    static template = LayoutTemplate;

    setup(){
        this.page = useState({
            currentPage: this.env.langState
        })
    }

    get currentPage() {
        return this.page.currentPage.page;
    }

}
