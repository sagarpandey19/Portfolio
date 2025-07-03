"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, Linkedin, Github, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

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

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sagarpandey.in@gmail.com',
    href: 'mailto:sagarpandey.in@gmail.com',
    color: 'text-red-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6280804215',
    href: 'tel:+916280804215',
    color: 'text-green-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bhagalpur, Bihar, India',
    href: 'https://maps.google.com/?q=Bhagalpur,Bihar,India',
    color: 'text-blue-600',
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/sagarkumarpandey/',
    icon: Linkedin,
    color: 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/50',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/sagarpandey19',
    icon: Github,
    color: 'text-gray-800 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-950/50',
  },
  {
    name: 'Email',
    href: 'mailto:sagarpandey.in@gmail.com',
    icon: Mail,
    color: 'text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50',
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form data:', data);
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    form.reset();
    setIsSubmitting(false);
  };

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
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Let's connect! I'm open to opportunities, collaborations, and interesting conversations about technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Let's Start a Conversation</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. 
                  Whether you're looking for a developer, want to collaborate, or just want to say hello, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-4 p-4 rounded-lg border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
                    >
                      <div className={`p-3 rounded-lg bg-secondary/50 ${info.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.label}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Find Me Online</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-4 rounded-lg border border-border/50 ${link.color} transition-all duration-300`}
                      >
                        <Icon className="w-6 h-6" />
                        <span className="sr-only">{link.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Response Promise */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <MessageCircle className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold">Quick Response</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via phone or LinkedIn.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="border-2 hover:border-accent/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Send me a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject *</FormLabel>
                            <FormControl>
                              <Input placeholder="What's this about?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell me about your project, idea, or just say hello..."
                                rows={6}
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Be as detailed as you'd like. I love hearing about exciting projects!
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* FAQ or Additional Info */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">What type of projects are you looking for?</h4>
                      <p className="text-sm text-muted-foreground">
                        I'm interested in full-stack web development, AI/ML projects, and innovative applications that solve real-world problems.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Are you available for internships?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes! I'm actively seeking internship opportunities to gain more industry experience and contribute to meaningful projects.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Do you work on freelance projects?</h4>
                      <p className="text-sm text-muted-foreground">
                        I'm open to discussing freelance opportunities, especially projects that align with my skills and interests.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What's your preferred communication method?</h4>
                      <p className="text-sm text-muted-foreground">
                        Email is best for detailed discussions, while LinkedIn is great for professional networking and quick connections.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}