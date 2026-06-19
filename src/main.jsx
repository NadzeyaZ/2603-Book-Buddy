import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BookBuddyProvider from "./context/BookBuddyContext.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BookBuddyProvider>
        <App />
      </BookBuddyProvider>
    </BrowserRouter>
  </StrictMode>,
);
