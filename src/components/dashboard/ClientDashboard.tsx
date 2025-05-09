
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountOverview from "./AccountOverview";
import PlanManagement from "./PlanManagement";
import AccountSettings from "./AccountSettings";
import PaymentMethods from "./PaymentMethods";

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Área do Cliente</h1>
      
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8 bg-white p-1 border rounded-lg shadow-sm">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="plans">Meu Plano</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
          <TabsTrigger value="payment">Pagamento</TabsTrigger>
        </TabsList>
        
        <div className="bg-white rounded-lg shadow p-6">
          <TabsContent value="overview">
            <AccountOverview />
          </TabsContent>
          
          <TabsContent value="plans">
            <PlanManagement />
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
  );
};

export default ClientDashboard;
