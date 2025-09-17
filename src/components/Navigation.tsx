import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/geschichte", label: "Geschichte" },
    { href: "/projekte", label: "Aktuelle Projekte" },
    { href: "/vergangene-projekte", label: "Alte Projekte" },
    { href: "/mitmachen", label: "Mitmachen" },
  ];

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 shamsy-transition ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-lg' 
          : 'bg-white/95 backdrop-blur-md'
      } border-b border-shamsy-primary/10`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-bold text-shamsy-primary hover:text-shamsy-light shamsy-transition tracking-tight"
            >
              ShamSy
            </Link>

            {/* Desktop Navigation with Donate Button */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium shamsy-transition hover:text-shamsy-primary ${
                    location.pathname === link.href
                      ? 'text-shamsy-primary'
                      : 'text-foreground/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                asChild 
                className="bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition shamsy-shadow-green"
              >
                <Link to="/spenden" className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Jetzt Spenden
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-3 border-2 border-shamsy-primary rounded-lg shamsy-transition ${
                isMenuOpen 
                  ? 'bg-shamsy-primary/20 border-shamsy-dark' 
                  : 'bg-shamsy-primary/10 hover:bg-shamsy-primary/20'
              }`}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-shamsy-primary" />
              ) : (
                <Menu className="w-5 h-5 text-shamsy-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`md:hidden shamsy-transition overflow-hidden ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-shamsy-primary/10 shadow-lg">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block py-3 px-4 rounded-xl font-medium shamsy-transition ${
                    location.pathname === link.href
                      ? 'text-shamsy-primary bg-shamsy-primary/10'
                      : 'text-foreground hover:text-shamsy-primary hover:bg-shamsy-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-shamsy-primary/10">
                <Button 
                  asChild 
                  className="w-full bg-shamsy-primary hover:bg-shamsy-dark shamsy-transition"
                  size="lg"
                >
                  <Link to="/spenden" className="flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4" />
                    Jetzt Spenden
                  </Link>
                </Button>
              </div>
               
              {/* Language Options */}
              <div className="pt-4 border-t border-shamsy-primary/10">
                <p className="text-shamsy-primary font-semibold text-sm mb-2">Sprache:</p>
                <div className="flex space-x-4">
                  <span className="text-sm font-medium text-shamsy-primary">Deutsch</span>
                  <span className="text-sm text-muted-foreground">English</span>
                  <span className="text-sm text-muted-foreground">العربية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden shamsy-transition"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;