// src/components/Features.tsx
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      name: "HestiaCP",
      description:
        "Painel de controle moderno que torna o gerenciamento de servidor fácil e intuitivo.",
    },
    {
      name: "99,9% de disponibilidade",
      description:
        "Garantimos que seu site estará disponível quando seus clientes precisarem.",
    },
    {
      name: "Certificados SSL gratuitos",
      description:
        "Proteja seu site com certificados SSL gratuitos incluídos em todos os planos.",
    },
    {
      name: "Hospedagem de e-mail",
      description:
        "Hospedagem de e-mail profissional com proteção contra spam e sincronização móvel.",
    },
    {
      name: "Gerenciamento de DNS fácil",
      description:
        "Interface simples para gerenciar seus registros DNS e subdomínios.",
    },
    {
      name: "Suporte 24/7",
      description:
        "Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana para ajudar em qualquer problema.",
    },
  ];

  return (
    <div id="features" className="py-16 bg-white sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Recursos
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tudo o que você precisa para construir sua presença online
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Nossos planos de hospedagem foram projetados para fornecer todas as
            ferramentas de que você precisa para ter sucesso online.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative bg-gray-50 rounded-lg shadow p-6"
              >
                <div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                      <Check className="h-6 w-6 text-white" />
                    </span>
                    <h3 className="ml-6 text-lg font-medium text-gray-900">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
