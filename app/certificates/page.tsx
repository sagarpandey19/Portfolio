"use client";

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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

const certificates = [
  {
    title: 'Prompt Engineering',
    platform: 'Coursera',
    issuer: 'Google AI',
    completionDate: 'February 2024',
    description: 'Advanced techniques for crafting effective prompts for AI models, including best practices for natural language processing and model optimization.',
    skills: ['AI Prompt Design', 'Natural Language Processing', 'Model Optimization', 'AI Ethics'],
    credentialId: 'CERT-PE-2024-001',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/5Z8AS7H79KMM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course.',
    verified: true,
    category: 'AI/ML',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Data Structures and Algorithms',
    platform: 'NPTEL',
    issuer: 'IIT Madras',
    completionDate: 'March 2024',
    description: 'Comprehensive course covering fundamental data structures, algorithm design, complexity analysis, and problem-solving techniques.',
    skills: ['Data Structures', 'Algorithm Design', 'Complexity Analysis', 'Problem Solving'],
    credentialId: 'NPTEL24CS01',
    certificateUrl: 'https://pwskills.com/learn/certificate/a14e7671-72e5-487d-b41c-cd1d21e58a76/',
    verified: true,
    category: 'Computer Science',
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Full Stack Web Development using MERN',
    platform: 'Coursera',
    issuer: 'Meta',
    completionDate: 'July 2024',
    description: 'Complete MERN stack development course covering MongoDB, Express.js, React.js, and Node.js with practical project implementations.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Full Stack Development'],
    credentialId: 'META-MERN-2024',
    certificateUrl: 'https://www.cipherschools.com/certificate/preview?id=66a76d5ed15c5abc1ea65ec0',
    verified: true,
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Responsible & Safe AI Systems',
    platform: 'edX',
    issuer: 'MIT',
    completionDate: 'October 2024',
    description: 'Ethics and safety in AI development, covering bias mitigation, fairness, transparency, and responsible deployment of AI systems.',
    skills: ['AI Ethics', 'Bias Mitigation', 'AI Safety', 'Responsible AI', 'Fairness in ML'],
    credentialId: 'MIT-AI-SAFE-2024',
    certificateUrl: '#',
    verified: true,
    category: 'AI Ethics',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const categoryColors = {
  'AI/ML': 'bg-blue-500/10 text-blue-700 border-blue-200',
  'Computer Science': 'bg-green-500/10 text-green-700 border-green-200',
  'Web Development': 'bg-purple-500/10 text-purple-700 border-purple-200',
  'AI Ethics': 'bg-orange-500/10 text-orange-700 border-orange-200',
};

export default function Certificates() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">Certificates & Achievements</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Professional certifications and learning milestones in my development journey
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '4+', label: 'Certificates Earned', icon: Award },
                { number: '3', label: 'Platforms', icon: Star },
                { number: '100%', label: 'Verified', icon: CheckCircle },
                { number: '2024', label: 'Active Year', icon: Calendar },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-border/50"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                variants={itemVariants}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Certificate Image */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                      <motion.img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-48 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        whileHover={{ scale: 1.02 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge className={`text-xs ${categoryColors[certificate.category as keyof typeof categoryColors] || 'bg-gray-500/10 text-gray-700 border-gray-200'}`}>
                          {certificate.category}
                        </Badge>
                        {certificate.verified && (
                          <Badge variant="default" className="text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="lg:col-span-2 p-8 flex flex-col justify-between">
                      <div className="space-y-6">
                        <CardHeader className="p-0">
                          <div className="flex items-start justify-between mb-2">
                            <div className="space-y-2">
                              <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                                {certificate.title}
                              </CardTitle>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span className="font-semibold text-accent">{certificate.platform}</span>
                                <span>•</span>
                                <span>{certificate.issuer}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mb-4">
                            <Calendar className="w-4 h-4 mr-2" />
                            Completed: {certificate.completionDate}
                          </div>
                          <CardDescription className="text-base leading-relaxed">
                            {certificate.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="p-0 space-y-6">
                          {/* Skills Acquired */}
                          <div>
                            <h4 className="font-semibold mb-3">Skills Acquired</h4>
                            <div className="flex flex-wrap gap-2">
                              {certificate.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Credential Info */}
                          <div className="text-sm text-muted-foreground">
                            <p><span className="font-medium">Credential ID:</span> {certificate.credentialId}</p>
                          </div>
                        </CardContent>
                      </div>

                      {/* Action Button */}
                      <div className="pt-6">
                        <Button asChild className="group w-full sm:w-auto">
                          <a href={certificate.certificateUrl} target="_blank" rel="noopener noreferrer">
                            <Award className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                            View Certificate
                            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Learning Journey */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Continuous Learning Journey</CardTitle>
                <CardDescription>
                  Committed to staying updated with the latest technologies and industry best practices
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Award className="w-8 h-8 text-accent mx-auto" />
                    <h4 className="font-semibold">Quality Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Courses from top institutions and industry leaders
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Star className="w-8 h-8 text-accent mx-auto" />
                    <h4 className="font-semibold">Practical Application</h4>
                    <p className="text-sm text-muted-foreground">
                      Applying learned skills in real-world projects
                    </p>
                  </div>
                  <div className="space-y-2">
                    <CheckCircle className="w-8 h-8 text-accent mx-auto" />
                    <h4 className="font-semibold">Verified Skills</h4>
                    <p className="text-sm text-muted-foreground">
                      All certifications verified and industry-recognized
                    </p>
                  </div>
                </div>
                <Button asChild size="lg" className="mt-6">
                  <a href="/contact">
                    Discuss My Skills
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}