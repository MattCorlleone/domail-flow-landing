
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="text-center lg:text-left md:max-w-2xl md:mx-auto lg:mx-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Domain & Email</span>
                <span className="block text-primary">Made Simple</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Professional domain hosting and email services powered by HestiaCP.
                Fast, secure, and reliable hosting for your business needs.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button size="lg" className="px-8 py-6 text-base">
                    Start for free
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#plans" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    View plans
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full lg:max-w-md">
              <img
                className="w-full animate-fade-in"
                src="https://images.unsplash.com/photo-1591710668263-bee1e9db2a26?auto=format&fit=crop&q=80"
                alt="Domain hosting illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
