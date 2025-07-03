"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Briefcase, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const techStack = [
  'React.js', 'Node.js', 'Python', 'MongoDB', 'TensorFlow', 'JavaScript', 'TypeScript', 'Next.js'
];

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            {/* Avatar with Floating Animation */}
            <motion.div 
              variants={itemVariants} 
              className="flex justify-center"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="relative"
              >
                <Avatar className="w-40 h-40 ring-4 ring-accent/20 ring-offset-8 ring-offset-background shadow-2xl">
                  <AvatarImage src="/Profile1.jpg" alt="Sagar Kumar Pandey" className="object-cover" />
                  <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    SP
                  </AvatarFallback>
                </Avatar>
                {/* Status Indicator */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </motion.div>
            </motion.div>

            {/* Greeting with Enhanced Typography */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
                  Sagar Kumar Pandey
                </span>
                <motion.span
                  animate={{ 
                    rotate: [0, 20, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="inline-block ml-4"
                >
                  👋
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <p className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  Software Developer | MERN Stack | AI Enthusiast
                </p>
                <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                    >
                      <Badge variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Bio */}
            <motion.div 
              variants={itemVariants}
              className="max-w-4xl mx-auto space-y-6"
            >
              <p className="text-xl text-muted-foreground leading-relaxed">
                Passionate about creating efficient, scalable solutions with modern web technologies. 
                Currently pursuing B.Tech in Computer Science and building innovative projects that make a difference.
              </p>
              
              {/* Key Highlights */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {[
                  { icon: Code, label: '3+ Projects', desc: 'Production Ready' },
                  { icon: Briefcase, label: '1 Internship', desc: 'Industry Experience' },
                  { icon: Award, label: '4+ Certificates', desc: 'Verified Skills' },
                  { icon: Users, label: '100%', desc: 'Client Satisfaction' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                    className="text-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary/80 transition-colors"
                  >
                    <item.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-lg font-bold text-primary">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Link href="/projects">
                <Button size="lg" className="group px-8 py-4 text-lg font-semibold">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button variant="outline" size="lg" className="group px-8 py-4 text-lg font-semibold">
                  Get In Touch
                  <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>

              <Button variant="ghost" size="lg" className="group px-8 py-4 text-lg font-semibold">
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center space-x-6 pt-8"
            >
              {[
                { href: "https://github.com/sagarpandey19", icon: Github, label: "GitHub", color: "hover:bg-gray-900 hover:text-white" },
                { href: "https://linkedin.com/in/sagarkumarpandey/", icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
                { href: "mailto:sagarpandey.in@gmail.com", icon: Mail, label: "Email", color: "hover:bg-red-600 hover:text-white" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 rounded-full bg-secondary/50 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Professional Highlights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A snapshot of my journey in software development and continuous learning
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: '3+', label: 'Projects Completed', desc: 'Full-stack applications' },
              { number: '1', label: 'Internship', desc: 'Industry experience' },
              { number: '4+', label: 'Certificates', desc: 'Verified achievements' },
              { number: '5+', label: 'Technologies', desc: 'Modern tech stack' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 bg-background rounded-2xl shadow-lg border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing technical expertise and problem-solving skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Fraud Detection System',
                desc: 'Machine learning powered fraud detection with 92% accuracy',
                tech: ['Python', 'TensorFlow', 'FastAPI'],
                image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Real-Time Chat App',
                desc: 'Full-featured chat application with Socket.io integration',
                tech: ['React', 'Node.js', 'Socket.io'],
                image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Blog Platform',
                desc: 'Modern blogging platform with rich content management',
                tech: ['MERN', 'TailwindCSS', 'JWT'],
                image: 'https://images.pexels.com/photos/34600/pexels-photo-34600.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <Button size="lg" variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}