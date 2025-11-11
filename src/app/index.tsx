import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { Routing } from "@app/providers/routing/Routing";

import { Loader } from "@shared/components/Loader/Loader.ui";

import "../shared/config/index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container with id 'root' not found");
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routing />
    <Loader />
  </BrowserRouter>,
);
