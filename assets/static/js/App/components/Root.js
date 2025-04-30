const { Component, xml } = owl;

import { Layout } from "./pages/Layout.js";

export class Root extends Component {

    static components = { Layout }

    static template = xml`
        <Layout />
    `;
}