
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Pricing = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const plans = [
    {
      id: "basic",
      name: "Básico",
      price: "R$ 29,99",
      description: "Recursos essenciais para projetos pequenos e/ou pessoais.",
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
      cta: "Assinar Básico",
      popular: false,
    },
    {
      id: "essential",
      name: "Essencial",
      price: "R$ 39,99",
      description: "Ideal para projetos de médio porte.",
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
      cta: "Assinar Essencial",
      popular: true,
    },
    {
      id: "professional",
      name: "Profissional",
      price: "R$ 59,99",
      description: "Para empresas e projetos avançados.",
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
      cta: "Assinar Profissional",
      popular: false,
    },
  ];

  const handlePlanSelect = (plan: any) => {
    navigate("/checkout", { state: { plan } });
  };

  return (
    <div id="plans" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Planos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Planos para empresas de todos os tamanhos
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Escolha o plano perfeito para suas necessidades. Todos os planos
            incluem painel de controle e suporte 24/7.
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${plan.popular
                ? "border-2 border-primary ring-2 ring-primary ring-opacity-20 transform md:-translate-y-2"
                : "border border-gray-200"
                }`}
            >
              <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                {plan.popular && (
                  <div className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary mb-4">
                    Mais Popular
                  </div>
                )}
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">/mês</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-3 text-base text-gray-500">{plan.description}</p>
              </div>
              <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white space-y-6 sm:p-10 sm:pt-6">
                <ul className="space-y-4 max-h-80 overflow-y-auto">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className={`${plan.popular ? "" : "mt-auto"}`}>
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full py-5 text-base"
                    onClick={() => handlePlanSelect(plan)}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
