
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/sonner";
import { CreditCard, Package } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PaymentMethods = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  // Mock data
  const paymentHistory = [
    {
      id: "INV-001",
      date: "05/04/2025",
      amount: "R$ 39,90",
      status: "Pago",
      method: "Cartão de Crédito",
    },
    {
      id: "INV-002",
      date: "05/03/2025",
      amount: "R$ 39,90",
      status: "Pago",
      method: "Cartão de Crédito",
    },
    {
      id: "INV-003",
      date: "05/02/2025",
      amount: "R$ 39,90",
      status: "Pago",
      method: "Cartão de Crédito",
    },
  ];

  const handleSavePaymentMethod = () => {
    toast.success("Método de pagamento salvo com sucesso!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Métodos de Pagamento</h2>
        <p className="text-gray-600">Gerencie suas formas de pagamento e veja seu histórico</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Método de Pagamento Atual</CardTitle>
          <CardDescription>Cartão de crédito terminando em 1234</CardDescription>
        </CardHeader>
        <CardContent className="pb-0">
          <div className="flex items-center space-x-3 mb-4">
            <div className="border p-2 rounded-md bg-gray-50">
              <CreditCard className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">VISA •••• 1234</p>
              <p className="text-sm text-gray-500">Expira em 06/2026</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alterar Método de Pagamento</CardTitle>
          <CardDescription>Escolha como deseja realizar seus pagamentos</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={paymentMethod}
            onValueChange={setPaymentMethod}
            className="space-y-4 mb-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit-card" id="credit-card" />
              <Label htmlFor="credit-card">Cartão de Crédito</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bank-slip" id="bank-slip" />
              <Label htmlFor="bank-slip">Boleto Bancário</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pix" id="pix" />
              <Label htmlFor="pix">PIX</Label>
            </div>
          </RadioGroup>

          {paymentMethod === "credit-card" && (
            <div className="space-y-4 border rounded-md p-4 bg-gray-50">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="cardNumber">Número do Cartão</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Validade</Label>
                    <Input id="expiry" placeholder="MM/AA" />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cardName">Nome no Cartão</Label>
                  <Input id="cardName" placeholder="João da Silva" />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === "bank-slip" && (
            <div className="border rounded-md p-4 bg-gray-50">
              <p className="text-gray-700">
                Ao selecionar Boleto Bancário, você receberá um boleto por email a cada período de faturamento.
                O boleto terá vencimento de 5 dias.
              </p>
            </div>
          )}

          {paymentMethod === "pix" && (
            <div className="border rounded-md p-4 bg-gray-50">
              <p className="text-gray-700 mb-4">
                Ao selecionar PIX, você receberá uma chave PIX por email a cada período de faturamento.
                O pagamento deve ser realizado em até 30 minutos após a geração da chave.
              </p>
            </div>
          )}

          <Button className="mt-6" onClick={handleSavePaymentMethod}>
            Salvar Método de Pagamento
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Histórico de Pagamentos</CardTitle>
          <CardDescription>Últimas faturas e pagamentos</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fatura</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Método</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {invoice.status}
                    </span>
                  </TableCell>
                  <TableCell>{invoice.method}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentMethods;
