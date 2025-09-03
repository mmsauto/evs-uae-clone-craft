import { ServiceCard } from "./ServiceCard";

export const ServicesGrid = () => {
  const services = [
    {
      title: "Warranty Plans",
      description: "Drive confidently. We've got you covered.",
      buttonText: "View Warranty Packages"
    },
    {
      title: "Smart Diagnostics", 
      description: "Software, updates, control — all under one roof.",
      buttonText: "View Service"
    },
    {
      title: "Quick Maintenance",
      description: "Get in. Get serviced. Get moving.",
      buttonText: "View Service"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              className="animate-fade-in"
            />
          ))}
        </div>
      </div>
    </section>
  );
};