
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in touch with our team
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Have questions about our hosting services? We're here to help.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-sm border">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                name="message"
                id="message"
                rows={4}
                placeholder="How can we help you?"
                className="mt-1"
              />
            </div>
            <Button className="w-full flex items-center justify-center">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
