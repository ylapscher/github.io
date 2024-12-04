'use client';

import Image from 'next/image';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px',
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a 
              href="#" 
              className="text-lg font-medium tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Joe Lapscher
            </a>
            <div className="flex items-center">
              {/* Navigation Links */}
              <div className="flex gap-8 mr-8 border-r border-gray-200 dark:border-gray-700 pr-8">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className={`text-sm relative transition-colors
                      ${activeSection === href.slice(1)
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }
                      ${activeSection === href.slice(1) && 'after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:rounded-full'}
                    `}
                  >
                    {label}
                  </a>
                ))}
              </div>
              {/* Contact Links */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:yoel@lapscher.com"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
                    aria-label="Email Me"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ylapscher/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <svg
                      className="w-4 h-4 text-gray-700 dark:text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <a
                    href="https://drive.google.com/file/d/1xGWebBdenzHo2Q7hjaM1R-Ep7yr8M8FU/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Resume
                  </a>
                  <a
                    href="https://world.hey.com/yoel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 relative">
            <Image
              src="/images/profile.jpg"
              alt="Joe Lapscher"
              fill
              priority
              className="rounded-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Joe Lapscher
            <span className="block text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mt-2">
              Senior Product Manager
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Dynamic Senior Product Manager with a knack for driving innovation and launching successful products. I excel at managing the entire product life cycle, optimizing processes, and collaborating with teams to turn customer insights into solutions that really make a difference.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-4xl">
        {/* Work Experience Section */}
        <section id="experience" className="mb-20 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                role: "Senior Product Manager",
                company: "Veeam Software",
                duration: "2023 - Present",
                location: "Prague, Czech Republic",
                achievements: [
                  "Leading product strategy for enterprise backup solutions",
                  "Managing cross-functional teams across multiple time zones",
                  "Driving innovation in cloud data protection solutions"
                ],
                image: {
                  src: "/images/transcard.png",
                  alt: "Transcard Project"
                }
              },
              {
                role: "Product Manager",
                company: "Avast",
                duration: "2021 - 2023",
                location: "Prague, Czech Republic",
                achievements: [
                  "Led development of consumer security products",
                  "Increased user engagement by 35% through feature optimization",
                  "Managed product lifecycle for mobile security solutions"
                ]
              },
              {
                role: "Associate Product Manager",
                company: "Cisco",
                duration: "2020 - 2021",
                location: "Prague, Czech Republic",
                achievements: [
                  "Collaborated on network security product development",
                  "Implemented agile methodologies improving delivery time by 25%",
                  "Conducted market research and competitive analysis"
                ]
              },
              {
                role: "Product Marketing Specialist",
                company: "Red Hat",
                duration: "2019 - 2020",
                location: "Brno, Czech Republic",
                achievements: [
                  "Developed go-to-market strategies for enterprise solutions",
                  "Created product messaging and positioning frameworks",
                  "Coordinated with global teams on product launches"
                ]
              },
              {
                role: "Technical Project Manager",
                company: "Oracle",
                duration: "2018 - 2019",
                location: "Prague, Czech Republic",
                achievements: [
                  "Managed cloud infrastructure projects",
                  "Led team of 8 developers across multiple projects",
                  "Improved project delivery efficiency by 30%"
                ]
              },
              {
                role: "Business Analyst",
                company: "SAP",
                duration: "2017 - 2018",
                location: "Prague, Czech Republic",
                achievements: [
                  "Analyzed business requirements for enterprise solutions",
                  "Developed detailed functional specifications",
                  "Facilitated communication between stakeholders and development teams"
                ]
              }
            ].map((job, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                  {job.image && (
                    <div className="flex-shrink-0">
                      <Image
                        src={job.image.src}
                        alt={job.image.alt}
                        width={48}
                        height={48}
                        className="rounded-lg bg-gray-100 dark:bg-gray-800"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl">{job.role}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <p>{job.duration}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Product Strategy & Roadmapping",
              "User Research & Analytics",
              "Agile & Scrum Management",
              "Stakeholder Communication",
              "Data-Driven Decision Making",
              "Cross-functional Team Leadership",
            ].map((skill, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
