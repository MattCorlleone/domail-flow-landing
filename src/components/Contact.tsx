
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Entre em Contato
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Fale com nossa equipe
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Tem dúvidas sobre nossos serviços de hospedagem? Estamos aqui para
            ajudar.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-sm border">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome"
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="seu@exemplo.com"
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <Textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Como podemos ajudar você?"
                className="mt-1"
              />
            </div>
            <Button className="w-full flex items-center justify-center">
              <Mail className="mr-2 h-4 w-4" />
              Enviar Mensagem
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
