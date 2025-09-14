import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center shamsy-bg-gradient">
      <div className="text-center px-4">
        <h1 className="mb-6 text-6xl font-light text-foreground">404</h1>
        <h2 className="mb-4 text-2xl font-medium text-foreground">Seite nicht gefunden</h2>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          Die von Ihnen gesuchte Seite existiert leider nicht. 
          Kehren Sie zur Startseite zurück, um ShamSy zu entdecken.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 text-white bg-shamsy-primary hover:bg-shamsy-dark rounded-lg shamsy-transition font-medium"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
