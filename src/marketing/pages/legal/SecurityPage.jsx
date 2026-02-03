import React from "react";

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Security at Leedsphere
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <p className="text-xl leading-relaxed mb-8">
          Leedsphere is designed with security and reliability at its core.
          We treat your data with the highest level of care.
        </p>

        <h3 className="text-2xl font-bold text-white mt-12 mb-4">Core Principles</h3>
        <ul className="list-disc pl-5 space-y-4">
            <li><strong>Data Protection:</strong> Encrypted everywhere, always.</li>
            <li><strong>Role-Based Access:</strong> Detailed permission models for every user type.</li>
            <li><strong>Workspace Isolation:</strong> Your data is logically separated from others.</li>
            <li><strong>Enterprise Readiness:</strong> SSO, Audit Logs, and MDM support.</li>
        </ul>

        <div className="mt-12 p-6 bg-blue-900/10 border border-blue-500/30 rounded-xl">
            <h4 className="text-blue-400 font-bold mb-2">Security Whitepaper</h4>
            <p className="text-slate-400 text-sm">
                For a deep dive into our architecture and compliance certifications (SOC2, HIPAA, GDPR), 
                please contact our sales team for the full security whitepaper.
            </p>
        </div>
      </div>
    </div>
  );
}
