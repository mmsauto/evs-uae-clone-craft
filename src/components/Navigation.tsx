import { Button } from "@/components/ui/button";
import { EVSLogo } from "./EVSLogo";
import { ChevronDown, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navigation = () => {
  const location = useLocation();
  const isActivePage = (path: string) => location.pathname === path;
  
  const services = [
    "EV Warranty Packages",
    "EV Roadside Assistance", 
    "EV Vehicle Health Check",
    "EV Repair",
    "High Voltage Battery Repair",
    "EV Drive Unit Repair",
    "EV Software Updates"
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <EVSLogo />
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/">
            <Button variant="ghost" className={`${isActivePage('/') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              HOME
            </Button>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-foreground hover:text-primary flex items-center gap-1">
                SERVICES <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-card border-border">
              {services.map((service) => (
                <DropdownMenuItem key={service} className="text-card-foreground hover:bg-muted">
                  {service}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/warranty">
            <Button variant="ghost" className={`${isActivePage('/warranty') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              WARRANTY
            </Button>
          </Link>
          <Link to="/roadside-assistance">
            <Button variant="ghost" className={`${isActivePage('/roadside-assistance') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              ROADSIDE ASSISTANCE
            </Button>
          </Link>
          <Link to="/branches">
            <Button variant="ghost" className={`${isActivePage('/branches') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              BRANCHES
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" className={`${isActivePage('/about') ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
              ABOUT EVS
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 animate-glow">
            BOOK SERVICE
          </Button>
          <Link to="/admin">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Admin
            </Button>
          </Link>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card">
              <div className="flex flex-col gap-4 mt-8">
                <Button variant="ghost" className="justify-start">HOME</Button>
                <Button variant="ghost" className="justify-start">SERVICES</Button>
                <Button variant="ghost" className="justify-start">WARRANTY</Button>
                <Button variant="ghost" className="justify-start">ROADSIDE ASSISTANCE</Button>
                <Button variant="ghost" className="justify-start">BRANCHES</Button>
                <Button variant="ghost" className="justify-start">ABOUT EVS</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};