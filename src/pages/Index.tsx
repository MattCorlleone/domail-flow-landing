
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>EquilibriumDomain | Hospedagem de Sites Premium</title>
        <meta name="description" content="EquilibriumDomain oferece hospedagem de sites com alto desempenho, preços acessíveis e suporte 24/7. Planos para empresas de todos os tamanhos." />
        <meta name="keywords" content="hospedagem, hospedagem de sites, servidor web, domínios, hospedagem wordpress, hospedagem brasil" />
        <link rel="canonical" href="https://equilibriumdomain.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://equilibriumdomain.com" />
        <meta property="og:title" content="EquilibriumDomain | Hospedagem de Sites Premium" />
        <meta property="og:description" content="Hospedagem de sites com alto desempenho, preços acessíveis e suporte 24/7." />
        <meta property="og:image" content="https://equilibriumdomain.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://equilibriumdomain.com" />
        <meta name="twitter:title" content="EquilibriumDomain | Hospedagem de Sites Premium" />
        <meta name="twitter:description" content="Hospedagem de sites com alto desempenho, preços acessíveis e suporte 24/7." />
        <meta name="twitter:image" content="https://equilibriumdomain.com/og-image.jpg" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "EquilibriumDomain",
            "url": "https://equilibriumdomain.com",
            "logo": "https://equilibriumdomain.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-9999-9999",
              "contactType": "customer service",
              "availableLanguage": ["Portuguese", "English"]
            },
            "sameAs": [
              "https://facebook.com/equilibriumdomain",
              "https://twitter.com/equilibriumdomain",
              "https://instagram.com/equilibriumdomain"
            ]
          }
        `}</script>
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
