import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import SWRProvider from "./providers/SWRProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SWRProvider>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </SWRProvider>
  </React.StrictMode>,
);
