
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Página Não Encontrada | EquilibriumDomain</title>
        <meta name="description" content="A página que você está procurando não foi encontrada." />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mt-4">Página não encontrada</h2>
        <p className="text-gray-500 mt-2 max-w-md">
          A página que você está procurando parece não existir ou foi movida.
        </p>
        
        <div className="mt-8">
          <Button onClick={() => navigate("/")} size="lg">
            Voltar para página inicial
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
