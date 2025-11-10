import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router";

import '../shared/config/index.css'
import {Routing} from "@app/providers/routing/Routing.tsx";

const container = document.getElementById("root");

if (!container) {
    throw new Error("Root container with id 'root' not found");
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routing />
    </BrowserRouter>
);