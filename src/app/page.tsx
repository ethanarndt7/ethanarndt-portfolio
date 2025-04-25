"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-16 font-sans flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full space-y-20">
        {/* Hero Section */}
       
        <section className="text-center mb-24">
  <h1 className="text-6xl md:text-7xl font-extrabold glitch leading-tight tracking-tight text-white mb-2" id="name">
    Ethan Arndt
  </h1>

  {/* Neon divider under name */}
  <div className="w-32 h-[2px] mx-auto mb-3 bg-cyan-400 shadow-[0_0_10px_#00ffe7]" />

  <p className="text-2xl text-cyan-300 font-mono -mt-2" id="role">
    Cybersecurity Student
  </p>

  <div className="flex justify-center items-center gap-10 mt-6 text-cyan-400 text-2xl">
    <a href="mailto:ethanarndt7@outlook.com" className="icon-link hover:text-white"><Mail /></a>
    <a href="https://github.com/ethanarndt7" target="_blank" className="icon-link hover:text-white"><Github /></a>
    <a href="https://linkedin.com/in/ethan-aarndt" target="_blank" className="icon-link hover:text-white"><Linkedin /></a>
  </div>
</section>




        <hr className="section-divider" />

         {/* Experience Section */}
         <section>
          <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow">
          <h3 className="text-xl font-bold">Cybersecurity Consultant Co-op, IBM</h3>
          <p className="text-sm text-gray-400 italic mb-2">May 2025 – Present</p>
          <br></br>
            <h3 className="text-xl font-bold">Coding Instructor, Code Ninjas</h3>
            <p className="text-sm text-gray-400 italic mb-2">Dec 2022 – Aug 2024</p>  
            <div className="text-sm text-gray-300 space-y-1 text-center">
              <p>- Taught JavaScript and C# to 100+ students (ages 7–14).</p>
              <p>- Guided projects on cryptography, game dev, and robotics.</p>
              <p>- Provided on-site IT support and workstation management.</p>
            </div>
          </div>
        </section>

        <hr className="section-divider" />


        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-900 p-5 border border-gray-700 shadow">
              <h3 className="text-xl font-semibold">ORY Website</h3>
              <p className="text-gray-400 text-sm mt-2">Developed a sample website for Ory, a South Korean magazine</p>
              <a href="https://orywebsite.vercel.app" target="_blank" rel="noopener noreferrer">ORY</a>
            </div>
            <br></br>
            <div className="rounded-lg bg-gray-900 p-5 border border-gray-700 shadow">
              <h3 className="text-xl font-semibold">Mock MySQL Database</h3>
              <p className="text-gray-400 text-sm mt-2">Designed a relational database using MySQL for a mock rental org. Implemented referential integrity and table joins.</p>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

       

        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow">
            <h3 className="text-xl font-bold">Penn State University</h3>
            <p className="text-sm text-gray-400">B.S. Cybersecurity Analytics and Operations, Law & Policy Focus – May 2026</p>
            <p className="text-sm text-gray-400">Minor: Security and Risk Analysis | GPA: 3.44</p>
            <p className="text-sm text-gray-400">Dean’s List: Fall 2022, Spring 2024</p>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-white">Languages</h4>
              <p>Python, Java, JavaScript, C++, C#, R, SQL</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Tools</h4>
              <p>Wireshark, Splunk, OWASP-ZAP, pfSense, Sparta</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Systems</h4>
              <p>Linux, Windows, MacOS</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Web</h4>
              <p>HTML, CSS, Git, GitHub</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Concepts</h4>
              <p>Networking, Threat Analysis, Incident Response</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
