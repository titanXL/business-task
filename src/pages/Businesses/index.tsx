import { useBusinesses } from "@/providers/Businesses";
import { Outlet } from "react-router-dom";

export const Businesses: React.FC = () => {
  const { businesses } = useBusinesses();
  console.log(businesses);
  return (
    <div>
      <h1>Businesss</h1>
      <Outlet></Outlet>
    </div>
  );
};
