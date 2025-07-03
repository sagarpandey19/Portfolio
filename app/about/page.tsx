"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Github, Calendar, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const educationData = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Lovely Professional University',
    period: '2022 - Present',
    grade: 'CGPA: 7.66',
    status: 'current',
  },
  {
    degree: '12th Grade (Senior Secondary)',
    institution: 'DAV Public School, Bhagalpur',
    period: '2020 - 2022',
    grade: '74.4%',
    status: 'completed',
  },
  {
    degree: '10th Grade (Secondary)',
    institution: 'DAV Public School, Bhagalpur',
    period: '2017 - 2018',
    grade: '81.6%',
    status: 'completed',
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Get to know more about my journey, background, and what drives my passion for technology
            </p>
          </motion.div>

          {/* Personal Info Card */}
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left: Avatar and Contact */}
                  <div className="space-y-6">
                    <div className="flex flex-col items-center lg:items-start space-y-4">
                      <Avatar className="w-32 h-32 ring-4 ring-accent/20 ring-offset-4 ring-offset-background">
                        <AvatarImage src="/Profile1.jpg" alt="Sagar Kumar Pandey" />
                        <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
                          SP
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-center lg:text-left">
                        <h2 className="text-2xl font-bold">Sagar Kumar Pandey</h2>
                        <p className="text-muted-foreground">Software Developer</p>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-accent" />
                        <span>Resham Nagar, Bhagalpur, Bihar 813210</span>
                      </div>
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <Phone className="w-5 h-5 text-accent" />
                        <span>+91 6280804215</span>
                      </div>
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <Mail className="w-5 h-5 text-accent" />
                        <span>sagarpandey.in@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <Linkedin className="w-5 h-5 text-accent" />
                        <a href="https://linkedin.com/in/sagarkumarpandey/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                          linkedin.com/in/sagarkumarpandey/
                        </a>
                      </div>
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <Github className="w-5 h-5 text-accent" />
                        <a href="https://github.com/sagarpandey19" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                          github.com/sagarpandey19
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right: Personal Story */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          My journey into computer science began with a fascination for how technology can solve real-world problems. 
                          From my early days in Bhagalpur, Bihar, I've been captivated by the endless possibilities that programming offers.
                        </p>
                        <p>
                          Currently pursuing my B.Tech in Computer Science at Lovely Professional University, I've maintained a strong 
                          academic record while actively working on projects that challenge me to grow as a developer. My passion lies 
                          in full-stack development, particularly the MERN stack, and exploring the frontiers of AI technology.
                        </p>
                        <p>
                          What motivates me most is the opportunity to create solutions that can make a meaningful impact. Whether it's 
                          building a real-time chat application or developing AI-powered fraud detection systems, I approach each project 
                          with curiosity, dedication, and a commitment to excellence.
                        </p>
                        <p>
                          My goal is to contribute to innovative projects that push the boundaries of what's possible with technology, 
                          while continuously learning and adapting to the ever-evolving landscape of software development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="w-6 h-6 text-accent" />
                  <span>Education Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="relative pl-8 border-l-2 border-accent/20 last:border-l-0"
                    >
                      <div className="absolute -left-2 top-2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h4 className="font-semibold text-lg">{edu.degree}</h4>
                          <Badge variant={edu.status === 'current' ? 'default' : 'secondary'}>
                            {edu.status === 'current' ? 'In Progress' : 'Completed'}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="font-medium text-accent">
                            {edu.grade}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}