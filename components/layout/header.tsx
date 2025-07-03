"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, FolderOpen, Briefcase, Award, Wrench, MessageCircle, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Internships', href: '/internships', icon: Briefcase },
  { name: 'Certificates', href: '/certificates', icon: Award },
  { name: 'Skills', href: '/skills', icon: Wrench },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const handleDownloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement('a');
    link.href = '/cv/Sagar_Kumar_Pandey_CV.pdf'; // You'll need to add this file
    link.download = 'Sagar_Kumar_Pandey_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                SP
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.div>
            <motion.span 
              className="text-xl font-bold text-primary hidden sm:block"
              whileHover={{ scale: 1.02 }}
            >
              Sagar Pandey
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      'relative flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary rounded-lg -z-10"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Download CV Button - Desktop */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadCV}
              className="hidden md:flex items-center space-x-2 group"
            >
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>CV</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 relative"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="w-9 h-9"
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-border/50 mt-2 pt-4 pb-4 bg-background/95 backdrop-blur-lg rounded-b-lg"
            >
              <div className="space-y-2">
                {navigation.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className={cn(
                            'flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300',
                            isActive
                              ? 'bg-primary text-primary-foreground shadow-lg'
                              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                          )}
                        >
                          <Icon className="w-5 h-5" />
                          <span>{item.name}</span>
                          {isActive && (
                            <motion.div
                              className="ml-auto w-2 h-2 bg-accent rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                            />
                          )}
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile CV Download */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
                  className="pt-2 border-t border-border/50"
                >
                  <Button
                    variant="outline"
                    onClick={handleDownloadCV}
                    className="w-full justify-start space-x-3 py-3"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download CV</span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}