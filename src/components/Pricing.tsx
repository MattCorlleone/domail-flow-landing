
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "R$ 29.90",
      description: "Perfect for personal websites and small projects.",
      features: [
        "1 domain included",
        "2 email accounts",
        "1 GB of storage",
        "2 subdomains",
        "Free SSL certificate",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Essential",
      price: "R$ 39.90",
      description: "Ideal for growing businesses and professionals.",
      features: [
        "1 domain included",
        "5 email accounts",
        "3 GB of storage",
        "5 subdomains",
        "Free SSL certificate",
        "Priority support",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Professional",
      price: "R$ 59.90",
      description: "For businesses with advanced hosting needs.",
      features: [
        "2 domains included",
        "10 email accounts",
        "5 GB of storage",
        "Unlimited subdomains",
        "Free SSL certificate",
        "Priority support",
        "Daily backups",
      ],
      cta: "Get Started",
      popular: false,
    },
  ];

  return (
    <div id="plans" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Plans for businesses of all sizes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose the perfect plan for your needs. All plans include HestiaCP control panel and 24/7 support.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${
                plan.popular 
                  ? "border-2 border-primary ring-2 ring-primary ring-opacity-20 transform lg:-translate-y-2" 
                  : "border border-gray-200"
              }`}
            >
              <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                {plan.popular && (
                  <div className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary mb-4">
                    Most Popular
                  </div>
                )}
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">/month</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-3 text-base text-gray-500">{plan.description}</p>
              </div>
              <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white space-y-6 sm:p-10 sm:pt-6">
                <ul className="space-y-4">
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
