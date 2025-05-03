
const Testimonials = () => {
  const testimonials = [
    {
      content: "DomainFlow has been essential for our company's online presence. The email hosting is reliable and the HestiaCP interface makes everything easy to manage.",
      author: "Maria Silva",
      role: "CEO, TechStart",
    },
    {
      content: "Moving our domains to DomainFlow was one of the best decisions we made. The support team is incredibly responsive and helpful.",
      author: "João Pereira",
      role: "Founder, CreativeLab",
    },
    {
      content: "We've been using DomainFlow for over a year now and couldn't be happier. The service is stable and the interface is intuitive.",
      author: "Ana Souza",
      role: "IT Manager, GrowBiz",
    },
  ];

  return (
    <div id="about" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by businesses of all sizes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="text-lg italic text-gray-700 mb-4">
                "{testimonial.content}"
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
