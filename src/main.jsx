import "./mocks";
import "./bootstrap";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Index from "./router/Index";
import Navbar from "./components/Layouts/Navbar";

// Import standard tailwind styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("app")).render(
    <BrowserRouter>
        <Navbar />
        <Index />
    </BrowserRouter>
);
