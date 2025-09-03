import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  className?: string;
}

export const ServiceCard = ({ title, description, buttonText, className = "" }: ServiceCardProps) => {
  return (
    <Card className={`group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-lg">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-4">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group-hover:animate-glow">
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button variant="outline" className="border-border hover:border-primary hover:text-primary">
          Contact us
        </Button>
      </CardContent>
    </Card>
  );
};