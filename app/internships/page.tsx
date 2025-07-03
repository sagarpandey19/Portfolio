"use client";

import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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

const internship = {
  title: 'Project Intern',
  company: 'Infosys Springboard',
  location: 'Remote',
  duration: 'Oct 2024 – Dec 2024',
  type: 'Full-time',
  status: 'Completed',
  description: 'Worked on developing an AI-powered fraud detection system as part of the Infosys Springboard internship program. Gained hands-on experience with machine learning, backend development, and full-stack application development.',
  responsibilities: [
    'Developed AI-powered fraud detection system using TensorFlow/PyTorch for pattern recognition and anomaly detection',
    'Designed and implemented robust backend architecture with FastAPI & MongoDB for efficient data processing',
    'Built responsive frontend interface with React.js & Node.js featuring real-time data visualization',
    'Integrated AI-driven analytics dashboard with interactive charts and comprehensive reporting features',
    'Collaborated with team members on code reviews, documentation, and system optimization',
    'Implemented security best practices for handling sensitive financial data and user information',
  ],
  technologies: ['Python', 'TensorFlow', 'PyTorch', 'FastAPI', 'MongoDB', 'React.js', 'Node.js', 'JavaScript'],
  achievements: [
    'Successfully delivered a working fraud detection system with 92% accuracy rate',
    'Reduced false positive detection by 35% through advanced ML algorithm optimization',
    'Received excellent feedback from mentors for code quality and project documentation',
    'Gained practical experience in enterprise-level software development practices',
  ],
  companyLogo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200',
};

export default function Internships() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">Internship Experience</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Professional experience and learning journey through industry internships
            </p>
          </motion.div>

          {/* Internship Details */}
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden border-2 hover:border-accent/20 transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 pb-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden">
                      <img 
                        src={internship.companyLogo} 
                        alt={internship.company}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl mb-2">{internship.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-accent">
                        {internship.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default" className="text-sm">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {internship.status}
                    </Badge>
                    <Badge variant="secondary">{internship.type}</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm">{internship.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-sm">{internship.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Building2 className="w-4 h-4 text-accent" />
                    <span className="text-sm">Technology Sector</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8 space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">About the Role</h3>
                  <p className="text-muted-foreground leading-relaxed">{internship.description}</p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
                  <div className="grid gap-3">
                    {internship.responsibilities.map((responsibility, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                  <div className="grid gap-3">
                    {internship.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-start space-x-3 p-4 bg-accent/10 rounded-lg border border-accent/20"
                      >
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="font-medium leading-relaxed">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Learning Outcomes */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Learning Outcomes & Growth</CardTitle>
                <CardDescription>
                  The internship provided valuable insights into industry practices and enhanced my technical skills
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-accent">Technical Skills</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                        <span className="text-muted-foreground">Advanced machine learning implementation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                        <span className="text-muted-foreground">Backend API development with FastAPI</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                        <span className="text-muted-foreground">Database design and optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                        <span className="text-muted-foreground">Data visualization and analytics</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-accent">Professional Skills</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                        <span className="text-muted-foreground">Agile development methodologies</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                        <span className="text-muted-foreground">Code review and documentation practices</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                        <span className="text-muted-foreground">Cross-functional team collaboration</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                        <span className="text-muted-foreground">Project management and delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold">Looking for Internship Opportunities?</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              I'm actively seeking new internship opportunities to continue learning and contributing to innovative projects.
            </p>
            <Button asChild size="lg" className="mt-4">
              <a href="/contact">
                Let's Connect
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}