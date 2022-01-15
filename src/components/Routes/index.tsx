import { Route, Routes } from "react-router-dom";
import { Businesses } from "../../pages/Businesses";
import { BusinessDetails } from "../../pages/Businesses/BusinessDetails";
import { NotFound } from "../../pages/NotFound";
import { Layout } from "../Layout";

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Businesses />}></Route>
      <Route path="businesses" element={<Businesses />}></Route>
      <Route
        path="/businesses/:businessId"
        element={<BusinessDetails />}
      ></Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);
