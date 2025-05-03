
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      name: "HestiaCP Powered",
      description: "Modern control panel that makes server management easy and intuitive."
    },
    {
      name: "99.9% Uptime",
      description: "We guarantee your website will be available when your customers need it."
    },
    {
      name: "Free SSL Certificates",
      description: "Secure your website with free SSL certificates included with all plans."
    },
    {
      name: "Email Hosting",
      description: "Professional email hosting with spam protection and mobile sync."
    },
    {
      name: "Easy DNS Management",
      description: "Simple interface to manage your DNS records and subdomains."
    },
    {
      name: "24/7 Support",
      description: "Our support team is available 24/7 to help with any issues you might have."
    }
  ];

  return (
    <div id="features" className="py-16 bg-white sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build your online presence
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our hosting plans are designed to provide you with all the tools you need to succeed online.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                        <Check className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">{feature.name}</h3>
                  </div>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
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
