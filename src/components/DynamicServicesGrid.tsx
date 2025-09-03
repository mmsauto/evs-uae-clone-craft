import { ServiceCard } from "./ServiceCard";

interface Service {
  title: string;
  description: string;
  buttonText: string;
}

interface DynamicServicesGridProps {
  services: Service[];
}

export const DynamicServicesGrid = ({ services }: DynamicServicesGridProps) => {
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