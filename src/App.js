import React from "react";
import { Provider as StoreProvider } from "react-redux";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import store from "./store";

export default function App() {
  return (
    <StoreProvider store={store}>
      <AppLayout>
        <Dashboard />
      </AppLayout>
    </StoreProvider>
  );
}
