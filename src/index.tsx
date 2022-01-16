import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import App from "./App";
import getQueryClient from "@/utils/queryClient";
import { BusinessesProvider } from "@/providers/Businesses";

import "./styles/reset.css";
import "./styles/index.css";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = getQueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BusinessesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BusinessesProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
