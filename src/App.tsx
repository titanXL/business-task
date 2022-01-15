import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Businesses } from "@/pages/Businesses";
import { BusinessDetails } from "@/pages/Businesses/BusinessDetails";
import { NotFound } from "@/pages/NotFound";
import { useBusinesses } from "@/providers/Businesses";
import { Loading } from "@/pages/Loading";
import { ErrorPage } from "@/pages/Error";

const App: React.FC = () => {
  const { isLoading, isError } = useBusinesses();

  if (isLoading) return <Loading />;

  if (isError) return <ErrorPage />;

  return (
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
};

export default App;
