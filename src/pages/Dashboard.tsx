
import { Helmet } from "react-helmet-async";
import ClientDashboard from "@/components/dashboard/ClientDashboard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check authentication status (simulated)
    const checkAuth = async () => {
      // Simulate a brief delay to check auth
      await new Promise(resolve => setTimeout(resolve, 500));
      const isLoggedIn = localStorage.getItem("demo-user-session") === "true";
      setIsAuthenticated(isLoggedIn);
      
      // If not authenticated, redirect to home page
      if (!isLoggedIn) {
        navigate("/");
      }
    };
    
    checkAuth();
  }, [navigate]);

  // Show loading while checking auth
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Only show dashboard if authenticated
  return (
    <>
      <Helmet>
        <title>Painel do Cliente | EquilibriumDomain</title>
        <meta name="description" content="Acesse seu painel de controle na EquilibriumDomain para gerenciar planos, configurações e pagamentos." />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <ClientDashboard />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
