import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

import Help from "./pages/Help";
import AppLayout from "./pages/AppLayout";
import Customers from "./components/Customers";
import Promote from "./components/Promote";
import Income from "./components/Income";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test-deshboard" element={<AppLayout />}>
          <Route index element={<Navigate replace to="customers" />} />
          <Route path="customers" element={<Customers />} />
          <Route path="income" element={<Income />} />
          <Route path="promote" element={<Promote />} />
        </Route>
        <Route path="help" element={<Help />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
