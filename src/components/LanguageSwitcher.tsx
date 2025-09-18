import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentLanguage = () => {
    const path = location.pathname;
    if (path.startsWith('/en')) return 'en';
    if (path.startsWith('/ar')) return 'ar';
    return 'de';
  };

  const getBasePath = () => {
    const path = location.pathname;
    if (path.startsWith('/en/')) return path.substring(3);
    if (path.startsWith('/ar/')) return path.substring(3);
    return path;
  };

  const switchLanguage = (language: string) => {
    const basePath = getBasePath();
    
    if (language === 'de') {
      navigate(basePath || '/');
    } else {
      navigate(`/${language}${basePath || ''}`);
    }
  };

  const currentLang = getCurrentLanguage();

  const languages = {
    de: { name: 'Deutsch', flag: '🇩🇪' },
    en: { name: 'English', flag: '🇬🇧' },
    ar: { name: 'العربية', flag: '🇸🇾' }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline">
            {languages[currentLang as keyof typeof languages].flag} {languages[currentLang as keyof typeof languages].name}
          </span>
          <span className="md:hidden">
            {languages[currentLang as keyof typeof languages].flag}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, lang]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => switchLanguage(code)}
            className={`cursor-pointer ${currentLang === code ? 'bg-accent' : ''}`}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;