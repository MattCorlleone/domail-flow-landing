
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AccountOverview = () => {
  // Mock data for the account - in a real app, fetch this from API
  const user = {
    name: "João Silva",
    email: "joao.silva@exemplo.com",
    plan: "Essential",
    planPrice: "R$ 39,90",
    domains: ["meusite.com.br"],
    storage: {
      used: 1.2,
      total: 3
    },
    emails: 3,
    validUntil: "15/06/2025"
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Bem-vindo, {user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <Button>Suporte</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Plano Atual</CardTitle>
            <CardDescription>Plano {user.plan}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary mb-2">{user.planPrice}<span className="text-sm text-gray-500 font-normal">/mês</span></div>
            <div className="text-sm text-gray-500">Válido até {user.validUntil}</div>
            <Button variant="outline" className="w-full mt-4">Gerenciar Plano</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Armazenamento</CardTitle>
            <CardDescription>Uso e capacidade</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-2 flex justify-between text-sm">
              <span>{user.storage.used} GB usados</span>
              <span>{user.storage.total} GB total</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full" 
                style={{ width: `${(user.storage.used / user.storage.total) * 100}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Domínios</CardTitle>
            <CardDescription>Seus domínios registrados</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {user.domains.map(domain => (
                <li key={domain} className="flex items-center justify-between">
                  <span className="font-medium">{domain}</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Ativo</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full mt-4">Gerenciar Domínios</Button>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Resumo da Conta</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Plano</h3>
              <p className="text-lg font-semibold">{user.plan}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Contas de Email</h3>
              <p className="text-lg font-semibold">{user.emails} de 5</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Armazenamento</h3>
              <p className="text-lg font-semibold">{user.storage.used} GB de {user.storage.total} GB</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Pagamento</h3>
              <p className="text-lg font-semibold">Cartão de Crédito</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountOverview;
