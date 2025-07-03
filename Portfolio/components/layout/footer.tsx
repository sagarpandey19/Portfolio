"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronUp, Heart, Code, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/sagarpandey19',
    icon: Github,
    color: 'hover:text-gray-900 dark:hover:text-gray-100',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/sagarkumarpandey/',
    icon: Linkedin,
    color: 'hover:text-blue-600',
  },
  {
    name: 'Email',
    href: 'mailto:sagarpandey.in@gmail.com',
    icon: Mail,
    color: 'hover:text-red-600',
  },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
];

const resourceLinks = [
  { name: 'Internships', href: '/internships' },
  { name: 'Certificates', href: '/certificates' },
  { name: 'Contact', href: '/contact' },
  { name: 'Download CV', href: '/cv/Sagar_Kumar_Pandey_CV.pdf' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-primary/5 to-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  SP
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Sagar Kumar Pandey</h3>
                  <p className="text-muted-foreground">Software Developer & AI Enthusiast</p>
                </div>
              </div>
              
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Passionate about creating efficient, scalable solutions with modern technologies. 
                Building the future one line of code at a time.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-amber-600" />
                <span>using</span>
                <Code className="w-4 h-4 text-accent" />
                <span>Next.js</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-foreground"
            >
              Quick Links
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col space-y-3"
            >
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 w-fit block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-foreground"
            >
              Resources
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col space-y-3"
            >
              {resourceLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 w-fit block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0"
        >
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Sagar Kumar Pandey. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex space-x-4"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full bg-secondary/50 transition-all duration-300 ${link.color}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Back to Top */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group"
            >
              <ChevronUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Top
            </Button>
          </div>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center mt-8"
        >
          <div className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-green-700 dark:text-green-400 font-medium">
              Available for opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}