
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientDashboard from "@/components/dashboard/ClientDashboard";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  // In a real app, this would be fetched from an auth provider
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate authentication check
    const checkAuth = () => {
      // For demo purposes, we'll just set to true
      // In a real app, you would check if the user is authenticated
      setTimeout(() => {
        setIsLoggedIn(true);
        setIsLoading(false);
      }, 1000);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Acesso Restrito</h1>
          <p className="text-lg text-gray-600 mb-8">
            Por favor, faça login para acessar sua área de cliente.
          </p>
          <div className="flex justify-center gap-4">
            <Button>Login</Button>
            <Button variant="outline">Criar Conta</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ClientDashboard />
      <Footer />
    </div>
  );
};

export default Dashboard;
