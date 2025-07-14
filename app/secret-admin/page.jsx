"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "./useAuth";
import LoginForm from "./components/LoginForm";
import ProductFeedTable from "./components/ProductFeedTable";
import RoseTable from "./components/RoseTable";
import PremiumRoseTable from "./components/PremiumRoseTable";

export default function AdminPage() {
  const router = useRouter();
  const { authenticated, checkingAuth, setAuthenticated } = useAuth();

  if (checkingAuth)
    return <div className="p-6 text-center">Checking authentication...</div>;

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
        <LoginForm onLogin={() => setAuthenticated(true)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-auto bg-rose-50 flex flex-col items-center justify-start p-4 w-full">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Flower Shop Admin - Price Calculator
      </h1>
      Kwiaciarnia internetowa Kraków - Kwiaty z dostawą Florystyczna Poczta,
      Kwiatowa Dostawa Kraków
      <RoseTable />
      <PremiumRoseTable />
      <ProductFeedTable />
    </div>
  );
}
