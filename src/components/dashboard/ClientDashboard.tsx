
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountOverview from "./AccountOverview";
import PlanManagement from "./PlanManagement";
import AccountSettings from "./AccountSettings";
import PaymentMethods from "./PaymentMethods";
import { useIsMobile } from "@/hooks/use-mobile";
import { Helmet } from "react-helmet-async";

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const isMobile = useIsMobile();

  // Simulate fetching user data
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to get user data
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Get plan ID from localStorage (simulating real auth)
        const planId = localStorage.getItem("demo-user-plan") || "essential";
        
        setUserData({
          name: "Cliente Exemplo",
          email: "cliente@exemplo.com",
          planId: planId,
          memberSince: "01/01/2023",
          nextBillingDate: "01/01/2024",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Área do Cliente | EquilibriumDomain</title>
        <meta name="description" content="Gerencie sua conta, planos de hospedagem e métodos de pagamento na área do cliente EquilibriumDomain." />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Área do Cliente</h1>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="overflow-x-auto pb-2">
            <TabsList className="mb-8 bg-white p-1 border rounded-lg shadow-sm">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="plans">Meu Plano</TabsTrigger>
              <TabsTrigger value="settings">Configurações</TabsTrigger>
              <TabsTrigger value="payment">Pagamento</TabsTrigger>
            </TabsList>
          </div>

          <div className="bg-white rounded-lg shadow p-4 md:p-6 overflow-hidden">
            <TabsContent value="overview">
              {isLoading ? (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <AccountOverview userData={userData} />
              )}
            </TabsContent>

            <TabsContent value="plans">
              {isLoading ? (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <PlanManagement currentPlan={userData?.planId} />
              )}
            </TabsContent>

            <TabsContent value="settings">
              <AccountSettings />
            </TabsContent>

            <TabsContent value="payment">
              <PaymentMethods />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default ClientDashboard;
