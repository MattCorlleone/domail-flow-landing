
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, RefreshCw } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";

// This helper function is used to determine the plan hierarchy
const getPlanRank = (planId: string): number => {
  const ranks = { basic: 1, essential: 2, professional: 3 };
  return ranks[planId as keyof typeof ranks] || 0;
};

// Helper function to determine if a plan is an upgrade
const isPlanUpgrade = (currentPlan: string, targetPlan: string): boolean => {
  const currentRank = getPlanRank(currentPlan);
  const targetRank = getPlanRank(targetPlan);
  return targetRank > currentRank;
};

interface PlanManagementProps {
  currentPlan?: string;
}

const PlanManagement = ({ currentPlan = "essential" }: PlanManagementProps) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [isUpdating, setIsUpdating] = useState(false);
  const [activePlan, setActivePlan] = useState(currentPlan);

  const plans = [
    {
      id: "basic",
      name: "Básico",
      price: "R$ 29,99",
      description: "Plano de Hospedagem",
      features: [
        "Domínios: 1",
        "vCPU: 2 cores",
        "RAM: 5 GB DDR4",
        "Armazenamento SSD NVMe: 15 GB",
        "Subdomínios: Ilimitados",
        "Rede: 1 Gbps",
        "Web Server: OpenLiteSpeed + LSCache",
        "CloudLinux: Sim",
        "Backups: a cada 12 h",
        "SSL: Let's Encrypt gratuito",
        "E-mail profissional: 10 contas",
        "AntiSpam Pro: SpamAssassin + ClamAV",
        "Webmail: Roundcube integrado",
        "FTP: Contas FTP ilimitadas",
        "Banco de dados: MySQL/MariaDB + Adminer",
        "Cron Jobs: 2",
        "1-Clique WordPress: WP-CLI ou Softaculous (opc.)",
        "Plugins Premium Grátis: Sim (via Softaculous/CLI)",
      ],
    },
    {
      id: "essential",
      name: "Essencial",
      price: "R$ 39,99",
      description: "Plano de Hospedagem",
      features: [
        "Domínios: 2",
        "vCPU: 2 cores",
        "RAM: 5 GB DDR4",
        "Armazenamento SSD NVMe: 25 GB",
        "Subdomínios: Ilimitados",
        "Rede: 1 Gbps",
        "Web Server: OpenLiteSpeed + LSCache",
        "CloudLinux: Sim",
        "Backups: a cada 12 h",
        "SSL: Let's Encrypt gratuito",
        "E-mail profissional: 25 contas",
        "AntiSpam Pro: SpamAssassin + ClamAV",
        "Webmail: Roundcube integrado",
        "FTP: Contas FTP ilimitadas",
        "Banco de dados: MySQL/MariaDB + Adminer",
        "Cron Jobs: 5",
        "1-Clique WordPress: WP-CLI ou Softaculous (opc.)",
        "Plugins Premium Grátis: Sim (via Softaculous/CLI)",
      ],
    },
    {
      id: "professional",
      name: "Profissional",
      price: "R$ 59,99",
      description: "Plano de Hospedagem",
      features: [
        "Domínios: 3",
        "vCPU: 2 cores",
        "RAM: 5 GB DDR4",
        "Armazenamento SSD NVMe: 50 GB",
        "Subdomínios: Ilimitados",
        "Rede: 1 Gbps",
        "Web Server: OpenLiteSpeed + LSCache",
        "CloudLinux: Sim",
        "Backups: a cada 12 h",
        "SSL: Let's Encrypt gratuito",
        "E-mail profissional: 50 contas",
        "AntiSpam Pro: SpamAssassin + ClamAV",
        "Webmail: Roundcube integrado",
        "FTP: Contas FTP ilimitadas",
        "Banco de dados: MySQL/MariaDB + Adminer",
        "Cron Jobs: 10",
        "1-Clique WordPress: WP-CLI ou Softaculous (opc.)",
        "Plugins Premium Grátis: Sim (via Softaculous/CLI)",
      ],
    },
  ];

  // Function to handle plan change
  const handlePlanChange = async (planId: string) => {
    setIsUpdating(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update active plan (in a real app, this would update in the database)
      setActivePlan(planId);
      localStorage.setItem('demo-user-plan', planId);
      
      toast({
        title: "Plano atualizado",
        description: `Seu plano foi alterado para ${plans.find(p => p.id === planId)?.name}.`,
      });
    } catch (error) {
      toast({
        title: "Erro ao atualizar plano",
        description: "Ocorreu um erro ao atualizar seu plano. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gerenciar Plano</h2>
          <p className="text-gray-600">Seu plano atual: <strong>{
            plans.find(plan => plan.id === activePlan)?.name
          }</strong></p>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-1"
          onClick={() => {
            // Refresh plan data (simulate fetching from API)
            toast({
              title: "Plano atualizado",
              description: "Informações do seu plano foram atualizadas.",
            });
          }}
        >
          <RefreshCw className="h-3.5 w-3.5" />
          <span className="hidden md:inline">Atualizar</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id} className={`flex flex-col ${activePlan === plan.id ? 'border-2 border-primary shadow-md' : 'border border-gray-200'}`}>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <CardTitle>{plan.name}</CardTitle>
                {activePlan === plan.id && (
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                    Plano Atual
                  </span>
                )}
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <div className="text-3xl font-bold text-gray-900 mb-4">
                {plan.price}
                <span className="text-sm text-gray-500 font-normal"> /mês</span>
              </div>
              <div className="overflow-y-auto max-h-[300px] md:max-h-[220px] pr-2">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              {activePlan === plan.id ? (
                <Button variant="outline" className="w-full" disabled>
                  Plano Atual
                </Button>
              ) : (
                <Button
                  variant={plan.id === 'professional' ? 'default' : 'outline'}
                  className="w-full"
                  disabled={isUpdating}
                  onClick={() => handlePlanChange(plan.id)}
                >
                  {isUpdating ? "Processando..." : 
                    isPlanUpgrade(activePlan, plan.id) ? "Fazer Upgrade" : "Fazer Downgrade"}
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informações Importantes</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <ul className="space-y-2 list-disc pl-5">
            <li>O upgrade de plano é aplicado imediatamente.</li>
            <li>O downgrade será efetivado ao final do período faturado atual.</li>
            <li>Os valores pagos não são reembolsáveis.</li>
            <li>Você pode alterar seu plano a qualquer momento.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlanManagement;
