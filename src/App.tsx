import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Businesses } from "@/pages/Businesses";
import { BusinessDetails } from "@/pages/Businesses/Details";
import { NotFound } from "@/pages/NotFound";
import { useBusinesses } from "@/providers/Businesses";
import { SplashScreen } from "@/pages/Splash";

const App: React.FC = () => {
  const { isLoading } = useBusinesses();

  if (isLoading) return <SplashScreen />;

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
