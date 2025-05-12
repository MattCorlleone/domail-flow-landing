
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useIsMobile } from "@/hooks/use-mobile";
import { Check, CreditCard, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const checkoutSchema = z.object({
  name: z.string().min(3, "Nome completo é obrigatório"),
  email: z.string().email("Email inválido"),
  cardNumber: z.string().regex(/^\d{16}$/, "Número do cartão deve ter 16 dígitos"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Data de validade deve estar no formato MM/YY"),
  cvv: z.string().regex(/^\d{3,4}$/, "CVV deve ter 3 ou 4 dígitos"),
});

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  useEffect(() => {
    // Get plan data from location state (when navigating from plans page)
    if (location.state?.plan) {
      setSelectedPlan(location.state.plan);
    } else {
      // If no plan in state, redirect back to plans
      navigate("/");
    }
  }, [location, navigate]);

  const onSubmit = async (data: z.infer<typeof checkoutSchema>) => {
    setIsProcessing(true);
    
    // Simulate API call to process payment
    try {
      // In a real app, this would be an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful payment
      toast({
        title: "Pagamento processado com sucesso!",
        description: `Você assinou o plano ${selectedPlan?.name}.`,
      });
      
      // Store some data in localStorage to simulate a logged-in state with an active subscription
      localStorage.setItem("demo-user-session", "true");
      localStorage.setItem("demo-user-plan", selectedPlan?.id);
      
      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Erro ao processar pagamento",
        description: "Verifique os dados do cartão e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (!selectedPlan) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Checkout - Plano {selectedPlan.name} | EquilibriumDomain</title>
        <meta name="description" content={`Finalize sua assinatura do plano ${selectedPlan.name} na EquilibriumDomain. Hospedagem de sites confiável e de alto desempenho.`} />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 pt-20 pb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para planos
          </Button>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Finalizar Assinatura</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Order Summary */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
                <CardDescription>Detalhes do seu plano</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-lg">{selectedPlan.name}</h3>
                      <p className="text-sm text-muted-foreground">{selectedPlan.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-xl">{selectedPlan.price}</span>
                      <p className="text-sm text-muted-foreground">/mês</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Recursos inclusos:</h4>
                    <ul className="space-y-1.5">
                      {selectedPlan.features.slice(0, 6).map((feature: string) => (
                        <li key={feature} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {selectedPlan.features.length > 6 && (
                        <li className="text-sm text-muted-foreground pl-6">
                          + {selectedPlan.features.length - 6} outros recursos
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-medium">
                      <span>Total (mensal):</span>
                      <span>{selectedPlan.price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Payment Form */}
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Dados de Pagamento</CardTitle>
                <CardDescription>Preencha os dados do seu cartão</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome no Cartão</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="cardNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número do Cartão</FormLabel>
                          <FormControl>
                            <Input placeholder="1234 5678 9012 3456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="expiryDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Validade</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/YY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="cvv"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CVV</FormLabel>
                            <FormControl>
                              <Input placeholder="123" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <CardFooter className="px-0 pt-6">
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isProcessing}
                      >
                        {isProcessing ? 
                          "Processando..." : 
                          <>
                            <CreditCard className="mr-2 h-4 w-4" />
                            Finalizar Pagamento
                          </>
                        }
                      </Button>
                    </CardFooter>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
