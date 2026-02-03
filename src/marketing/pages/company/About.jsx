import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Target, 
  Shield, 
  Users, 
  Globe, 
  Server, 
  Layout, 
  Lock,
  MessageSquare,
  Zap,
  Award
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative overflow-hidden w-full">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-purple-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-[500px] bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 py-24 md:py-32 max-w-7xl relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-24 md:mb-32"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-xs font-medium text-slate-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            About Us
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
            About Leedsphere
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Enterprise Communication Software for Modern Organizations
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 text-lg text-slate-300 max-w-4xl mx-auto">
            <p className="mb-4">
              <span className="font-semibold text-white">Leed Sphere Technologies Ltd</span> is a United Kingdom–incorporated technology company building secure, scalable communication and collaboration software for modern teams and organizations.
            </p>
            <p>
              Leedsphere is designed to address the growing complexity of workplace communication by providing a structured, centralized platform that enables teams to collaborate effectively, maintain transparency, and operate with confidence at scale.
            </p>
          </motion.div>
        </motion.div>

        {/* --- Who We Are Section --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-32"
        >
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                <Target className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
                <ul className="space-y-4">
                  {[
                    "Purpose-driven product design",
                    "Operational stability and scalability",
                    "Strong governance and trust foundations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      {item}
                    </li>
                  ))}
                </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">Who We Are</motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg">
              <p>
                Leed Sphere Technologies Ltd operates as a software-as-a-service (SaaS) company with a clear focus on reliability, simplicity, and long-term product value.
              </p>
              <p>
                As organizations increasingly rely on digital communication, fragmented tools often lead to inefficiencies, data silos, and operational risk. Leedsphere was created to solve this problem by offering a unified communication environment that aligns with professional workflows and enterprise expectations.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Mission & Vision Grid --- */}
        <div className="mb-32">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="col-span-1 md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Layout className="w-48 h-48" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                 <Building2 className="w-6 h-6 text-purple-400" />
                 Our Mission
               </h3>
               <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                 Our mission is to empower organizations with a dependable communication platform that improves productivity, strengthens collaboration, and supports sustainable growth. We aim to build software that integrates seamlessly into business operations while maintaining high standards of usability, security, and performance.
               </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-slate-900 border border-slate-700/50 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
            >
               <div className="absolute -bottom-10 -right-10 bg-purple-500/20 w-40 h-40 blur-3xl rounded-full" />
               <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                 <Globe className="w-6 h-6 text-blue-400" />
                 Our Vision
               </h3>
               <p className="text-slate-300">
                 To become a globally trusted communication platform for organizations seeking clarity, structure, and reliability in how their teams work together.
               </p>
            </motion.div>
          </div>
        </div>

        {/* --- What We Build --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What We Build</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Leedsphere is a communication and collaboration platform engineered to support teams of varying sizes and structures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, title: "Centralized Communication", desc: "For teams and organizations" },
              { icon: Layout, title: "Structured Conversations", desc: "Reduce noise and confusion" },
              { icon: Users, title: "Member Management", desc: "For operational control" },
              { icon: Zap, title: "Real-time Collaboration", desc: "With dependable performance" },
              { icon: Server, title: "Scalable Architecture", desc: "To support business growth" },
              { icon: Award, title: "Evolutionary Design", desc: "Evolves with your needs" },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Enterprise Focus --- */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl -z-10 blur-xl" />
          <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-16 text-center backdrop-blur-sm">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Enterprise Focus & Reliability</h2>
             <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12">
               Leedsphere is developed with an enterprise-first mindset. We prioritize system reliability, clean architecture, and thoughtful feature development over unnecessary complexity. Our roadmap is guided by real business use cases.
             </p>
             <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
               {[
                 "Professional workflows",
                 "Growing teams & distributed workforces",
                 "Long-term operational use"
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center gap-3">
                   <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                     <span className="text-purple-400 font-bold text-lg">{i + 1}</span>
                   </div>
                   <span className="text-white font-medium">{item}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* --- Trust & Security --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Trust, Security & Data Responsibility</h2>
            <p className="text-lg text-slate-400 mb-8">
              Trust is fundamental to everything we do. Leed Sphere Technologies Ltd follows industry best practices in software development and data protection to ensure that customer information is handled responsibly and securely.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Secure infrastructure & hosting",
                "Role-based access control",
                "Encrypted data transmission",
                "Privacy-by-design principles"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-slate-500">
              We align our processes with global data protection expectations, including GDPR-aligned practices.
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-green-500/10 rounded-full blur-3xl" />
             <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative">
                <Lock className="w-16 h-16 text-slate-700 mb-6 mx-auto" />
                <div className="space-y-4">
                  <div className="h-2 w-full bg-slate-800 rounded-full" />
                  <div className="h-2 w-3/4 bg-slate-800 rounded-full" />
                  <div className="h-2 w-5/6 bg-slate-800 rounded-full" />
                </div>
                <div className="mt-8 text-center">
                   <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm font-medium">
                     Security First Architecture
                   </span>
                </div>
             </div>
          </div>
        </div>

        {/* --- Leadership --- */}
        <div className="mb-32">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <motion.div 
               initial="hidden" 
               whileInView="visible" 
               variants={containerVariants}
               viewport={{ once: true }}
               className="relative z-10"
            >
              <h2 className="text-sm font-bold text-purple-400 mb-2 uppercase tracking-wider">Leadership</h2>
              <h3 className="text-4xl font-bold text-white mb-2">Pranjul Tandon</h3>
              <p className="text-xl text-slate-400 mb-8">Founder & Director</p>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    Leedsphere is founded and led by <span className="text-white font-medium">Pranjul Tandon</span>, who brings a strong focus on building practical, scalable, and high-quality software products.
                  </p>
                  <p>
                    As Founder and Director, Pranjul oversees product strategy, technical direction, and long-term vision for Leed Sphere Technologies Ltd. His approach emphasizes disciplined execution, system reliability, and customer trust.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Leadership Philosophy</h4>
                  <ul className="space-y-4 text-slate-300">
                     {[
                       "Building software with real operational value",
                       "Maintaining strong governance and transparency",
                       "Focusing on long-term product sustainability"
                     ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
                         {item}
                       </li>
                     ))}
                  </ul>
                  <p className="mt-6 text-sm text-slate-400 italic">
                    "Centered on clarity, responsibility, and continuous improvement."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- Corporate Info & Looking Ahead --- */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-slate-800 pt-16">
           <div className="md:col-span-2">
             <h3 className="text-2xl font-bold text-white mb-6">Looking Ahead</h3>
             <p className="text-slate-400 mb-4">
               Leed Sphere Technologies Ltd is committed to building software that organizations can rely on as they grow and evolve.
             </p>
             <p className="text-slate-300 font-medium">
               Leedsphere is not built for short-term adoption—it is built for long-term use, trust, and professional collaboration.
             </p>
           </div>
           
           <div>
             <h3 className="text-lg font-bold text-white mb-6">Corporate Information</h3>
             <ul className="space-y-3 text-sm text-slate-400">
               <li className="flex justify-between border-b border-slate-800 pb-2">
                 <span>Legal Name:</span>
                 <span className="text-slate-200">Leed Sphere Technologies Ltd</span>
               </li>
               <li className="flex justify-between border-b border-slate-800 pb-2">
                 <span>Company Number:</span>
                 <span className="text-slate-200">16968104</span>
               </li>
               <li className="flex justify-between border-b border-slate-800 pb-2">
                 <span>Type:</span>
                 <span className="text-slate-200">Private Limited Company</span>
               </li>
               <li className="flex justify-between pb-2">
                 <span>Jurisdiction:</span>
                 <span className="text-slate-200">United Kingdom</span>
               </li>
             </ul>
             
             <div className="mt-6">
                <span className="block text-xs uppercase text-slate-500 font-bold mb-2">Registered Office</span>
                <address className="not-italic text-sm text-slate-300">
                  86-90 Paul Street<br />
                  London, Greater London<br />
                  England, EC2A 4NE
                </address>
                
                <div className="mt-4 space-y-1 text-sm text-slate-300">
                  <p><span className="text-slate-500 mr-2">Phone:</span> +44 7367109730</p>
                  <p><span className="text-slate-500 mr-2">Email:</span> support@leedsphere.com</p>
                </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
