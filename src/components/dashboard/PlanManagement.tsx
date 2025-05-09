
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PlanManagement = () => {
  // Mock data - in a real app, fetch this from API
  const currentPlan = "essential";
  const plans = [
    {
      id: "basic",
      name: "Básico",
      price: "R$ 29,90",
      features: [
        "1 domínio",
        "2 contas de email",
        "1 GB de armazenamento",
        "2 subdomínios",
        "SSL incluído",
      ],
    },
    {
      id: "essential",
      name: "Essencial",
      price: "R$ 39,90",
      features: [
        "1 domínio",
        "5 contas de email",
        "3 GB de armazenamento",
        "5 subdomínios",
        "SSL incluído",
      ],
    },
    {
      id: "professional",
      name: "Profissional",
      price: "R$ 59,90",
      features: [
        "2 domínios",
        "10 contas de email",
        "5 GB de armazenamento",
        "Subdomínios ilimitados",
        "SSL incluído",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Gerenciar Plano</h2>
        <p className="text-gray-600">Seu plano atual: <strong>{
          plans.find(plan => plan.id === currentPlan)?.name
        }</strong></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id} className={`flex flex-col ${currentPlan === plan.id ? 'border-primary' : ''}`}>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <CardTitle>{plan.name}</CardTitle>
                {currentPlan === plan.id && (
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                    Plano Atual
                  </span>
                )}
              </div>
              <CardDescription>Plano de Hospedagem</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-3xl font-bold text-gray-900 mb-4">
                {plan.price}
                <span className="text-sm text-gray-500 font-normal"> /mês</span>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {currentPlan === plan.id ? (
                <Button variant="outline" className="w-full" disabled>
                  Plano Atual
                </Button>
              ) : (
                <Button 
                  variant={plan.id === 'professional' ? 'default' : 'outline'}
                  className="w-full"
                >
                  {plan.id === 'professional' && currentPlan !== 'professional'
                    ? 'Fazer Upgrade' 
                    : plan.id === 'basic' || (currentPlan === 'professional' && plan.id !== 'professional')
                    ? 'Fazer Downgrade'
                    : 'Fazer Upgrade'}
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
        <CardContent>
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
