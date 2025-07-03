"use client";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sagar Kumar Pandey",
    "jobTitle": "Software Developer",
    "description": "Experienced Software Developer specializing in MERN Stack, AI/ML, and modern web technologies",
    "url": "https://sagarpandey.dev",
    "image": "https://sagarpandey.dev/Profile1.jpg",
    "email": "sagarpandey.in@gmail.com",
    "telephone": "+91-6280804215",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Resham Nagar",
      "addressLocality": "Bhagalpur",
      "addressRegion": "Bihar",
      "postalCode": "813210",
      "addressCountry": "IN"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Lovely Professional University"
    },
    "knowsAbout": [
      "JavaScript",
      "Python",
      "React.js",
      "Node.js",
      "MongoDB",
      "Machine Learning",
      "TensorFlow",
      "Full Stack Development",
      "MERN Stack"
    ],
    "sameAs": [
      "https://linkedin.com/in/sagarkumarpandey/",
      "https://github.com/sagarpandey19"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}