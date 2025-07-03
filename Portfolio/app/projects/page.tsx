"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Zap, Code2, Brain, MessageSquare, Database, Globe, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const projects = [
  {
    title: 'Real-Time Chat Application',
    description: 'A comprehensive chat application built with modern web technologies, featuring real-time messaging, user authentication, and responsive design.',
    longDescription: 'Built a real-time chat app with Socket.io enabling smooth instant communication. Features include user authentication, message history, typing indicators, and online status. Implemented with React for the frontend and Node.js with Express for the backend.',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    timeline: 'Nov 2024 – Jan 2025',
    features: [
      'Real-time messaging with Socket.io',
      'User authentication and authorization',
      'Message history and persistence',
      'Typing indicators and online status',
      'Responsive design for all devices',
      'File sharing and emoji support',
      'Group chat functionality',
      'Message encryption for security'
    ],
    githubUrl: 'https://github.com/sagarpandey19/chat-app',
    demoUrl: '', // You can add demo link later
    status: 'completed',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500',
    demoFeatures: [
      'Live messaging demo',
      'Multi-user support',
      'Mobile responsive',
      'Dark/Light themes'
    ]
  },
  {
    title: 'Feature-Rich Blog Platform',
    description: 'A modern blogging platform with content management capabilities, user profiles, and social features.',
    longDescription: 'Developed a comprehensive blog platform with features like content creation, user management, comments system, and SEO optimization. Built using the MERN stack with modern UI/UX design principles.',
    image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
    timeline: 'Aug 2024 – Oct 2024',
    features: [
      'Rich text editor for content creation',
      'User authentication and profiles',
      'Comment and reaction system',
      'SEO optimization and meta tags',
      'Responsive design and dark mode',
      'Image upload and optimization',
      'Search and filtering capabilities',
      'Social media integration'
    ],
    githubUrl: 'https://github.com/sagarpandey19/blog-platform',
    demoUrl: '', // You can add demo link later
    status: 'completed',
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
    demoFeatures: [
      'Content management',
      'User interactions',
      'SEO optimized',
      'Performance focused'
    ]
  },
  {
    title: 'AI-Powered Aadhaar Fraud Management System',
    description: 'An intelligent system for detecting and preventing Aadhaar card fraud using machine learning algorithms.',
    longDescription: 'Developed an AI-powered fraud detection system using TensorFlow/PyTorch for pattern recognition. Designed backend with FastAPI & MongoDB for efficient data processing. Built frontend with React.js featuring AI-driven analytics dashboard.',
    image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'MongoDB'],
    timeline: 'May 2024 – Jul 2024',
    features: [
      'AI-powered fraud detection algorithms',
      'Real-time data processing and analysis',
      'Interactive analytics dashboard',
      'Secure data handling and encryption',
      'RESTful API with comprehensive documentation',
      'Machine learning model training pipeline',
      'Automated alert system',
      'Performance monitoring and logging'
    ],
    githubUrl: 'https://github.com/sagarpandey19/aadhaar-fraud-detection',
    demoUrl: '', // You can add demo link later
    status: 'completed',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    demoFeatures: [
      '92% accuracy rate',
      'Real-time detection',
      'ML-powered insights',
      'Secure processing'
    ]
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Enhanced Page Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl mb-6"
            >
              <Code2 className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              A showcase of my technical projects and development journey, featuring real-world applications 
              built with modern technologies and best practices.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>3 Completed Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Full-Stack Applications</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Production Ready</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/30 bg-gradient-to-br from-background to-secondary/20">
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Project Image */}
                      <div className={`relative overflow-hidden bg-gradient-to-br ${project.color} ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <div className="relative h-80 lg:h-full">
                          {/* Background Image */}
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            whileHover={{ scale: 1.05 }}
                          />
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          
                          {/* Project Icon */}
                          <div className="absolute top-6 left-6">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                          </div>

                          {/* Status Badge */}
                          <div className="absolute top-6 right-6">
                            <Badge className="bg-green-500/90 text-white border-0">
                              <Zap className="w-3 h-3 mr-1" />
                              {project.status}
                            </Badge>
                          </div>

                          {/* Demo Features */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="grid grid-cols-2 gap-2">
                              {project.demoFeatures.map((feature, idx) => (
                                <motion.div
                                  key={feature}
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="text-xs text-white bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/30"
                                >
                                  {feature}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className={`p-8 lg:p-12 flex flex-col justify-between ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                        <div className="space-y-8">
                          <CardHeader className="p-0">
                            <div className="flex items-start justify-between mb-4">
                              <div className="space-y-3">
                                <CardTitle className="text-3xl lg:text-4xl group-hover:text-accent transition-colors duration-300 leading-tight">
                                  {project.title}
                                </CardTitle>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Calendar className="w-4 h-4 mr-2 text-accent" />
                                  {project.timeline}
                                </div>
                              </div>
                            </div>
                            <CardDescription className="text-lg leading-relaxed text-muted-foreground">
                              {project.longDescription}
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="p-0 space-y-8">
                            {/* Technologies */}
                            <div>
                              <h4 className="font-semibold text-lg mb-4 flex items-center">
                                <Code2 className="w-5 h-5 mr-2 text-accent" />
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech) => (
                                  <Badge 
                                    key={tech} 
                                    variant="secondary" 
                                    className="text-sm py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Key Features */}
                            <div>
                              <h4 className="font-semibold text-lg mb-4 flex items-center">
                                <Zap className="w-5 h-5 mr-2 text-accent" />
                                Key Features
                              </h4>
                              <div className="grid gap-3">
                                {project.features.map((feature, featureIndex) => (
                                  <motion.div
                                    key={featureIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: featureIndex * 0.05, duration: 0.3 }}
                                    className="flex items-start space-x-3 group/feature"
                                  >
                                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0 group-hover/feature:scale-125 transition-transform" />
                                    <span className="text-muted-foreground leading-relaxed group-hover/feature:text-foreground transition-colors">
                                      {feature}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border/50">
                          <Button asChild className="group flex-1" size="lg">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                              View Source Code
                            </a>
                          </Button>
                          
                          {/* Demo Button - Always redirects to GitHub if no demo URL */}
                          {project.demoUrl ? (
                            <Button variant="outline" asChild className="group flex-1" size="lg">
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                Live Demo
                              </a>
                            </Button>
                          ) : (
                            <Button variant="outline" asChild className="group flex-1" size="lg">
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                Demo App
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Call to Action */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12 text-center"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="relative space-y-6">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4"
              >
                <MessageSquare className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-3xl lg:text-4xl font-bold text-primary">
                Interested in Collaborating?
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm always excited to work on innovative projects and explore new technologies. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="group">
                  <a href="/contact">
                    Get In Touch
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" asChild size="lg" className="group">
                  <a href="/skills">
                    View My Skills
                    <Code2 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}