'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu, BookOpen, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
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

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/50',
    skills: [
      { name: 'JavaScript', level: 90, experience: '2+ years' },
      { name: 'Python', level: 85, experience: '1.5+ years' },
      { name: 'C++', level: 80, experience: '2+ years' },
      { name: 'TypeScript', level: 75, experience: '1+ year' },
    ],
  },
  {
    title: 'Frontend Technologies',
    icon: Globe,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950/50',
    skills: [
      { name: 'React.js', level: 90, experience: '2+ years' },
      { name: 'HTML5/CSS3', level: 95, experience: '3+ years' },
      { name: 'Tailwind CSS', level: 88, experience: '1.5+ years' },
      { name: 'Next.js', level: 80, experience: '1+ year' },
    ],
  }
];

export default function MinimalSkillsPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              A comprehensive overview of my technical skills and professional capabilities
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
                  <CardHeader className={`${category.bgColor} border-b`}>
                    <CardTitle className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-white dark:bg-gray-800 ${category.color}`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl">{category.title}</span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {category.title === 'Programming Languages' && 'Core programming languages I work with regularly'}
                      {category.title === 'Frontend Technologies' && 'Modern frontend frameworks and styling tools'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid gap-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.1), duration: 0.5 }}
                          className="space-y-3"
                        >
                          <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-lg">{skill.name}</h4>
                            <div className="flex items-center space-x-3">
                              <span className="text-sm text-muted-foreground">{skill.experience}</span>
                              <Badge variant="outline" className={category.color}>
                                {skill.level}%
                              </Badge>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Progress value={Number(skill.level)} className="h-2" />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>Beginner</span>
                              <span>Proficient</span>
                              <span>Expert</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}