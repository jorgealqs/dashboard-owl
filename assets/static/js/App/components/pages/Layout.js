const { Component } = owl;

import { LayoutTemplate } from "../templates_js/layout.js";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { FloatingButtons } from "./FloatingButtons.js";


export class Layout extends Component {

    static components = { Header, Footer, FloatingButtons };

    static template = LayoutTemplate;

}
