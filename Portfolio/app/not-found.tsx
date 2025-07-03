"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="text-9xl font-bold text-primary/20 select-none">
              404
            </div>
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Search className="w-16 h-16 text-accent" />
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">
              Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
          </motion.div>

          {/* Suggestions Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Card className="border-2 border-dashed border-border/50">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold mb-4">Here's what you can do:</h3>
                <div className="grid gap-4 text-left">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Check the URL for any typos</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Go back to the previous page</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Visit the homepage and navigate from there</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Contact me if you think this is an error</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="group">
              <Link href="/">
                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Go Home
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" onClick={() => window.history.back()} className="group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-sm text-muted-foreground italic"
          >
            "The best error messages are the ones that help you find your way back." - Anonymous Developer
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}