import React from "react";

export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Careers at Leedsphere
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Build Tools for Builders</h2>
        <p className="text-xl leading-relaxed mb-8">
          Working at Leedsphere means building the tools that other teams use to build the future. 
          It's a meta-challenge: we are our own most demanding customers. If we can make Leedsphere work for us, 
          we can make it work for anyone.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">How We Work</h2>
        <p>
          We are a remote-first, asynchronous-first company. We hire adults and treat them like adults. 
          This means no surveillance software, no mandatory 9-to-5 hours, and deeply respecting your autonomy.
        </p>
        <p>
          <strong>Writing is Thinking:</strong> Because we are remote, we rely heavily on the written word. 
          We value clear, concise communication over charismatic presentations. Most decisions are made in 
          Leedsphere channels or design documents, not in video meetings.
        </p>
        <p>
          <strong>Ownership:</strong> We have small teams with big responsibilities. You won't be a cog in a machine here. 
          You will own features from conception to deployment, and you'll see the impact of your work on users immediately.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Open Roles</h2>
        
        <div className="space-y-6 mt-8">
            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Senior Product Engineer</h3>
                        <p className="text-slate-400 mt-1">Remote (Americas/EMEA)</p>
                    </div>
                    <span className="text-slate-500 text-sm">Engineering</span>
                </div>
                <p className="text-slate-400 mt-4 text-sm">
                    Help us build the next generation of our real-time messaging engine. Experience with Elixir, Rust, or Go preferred.
                </p>
            </div>

            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/50 transition-colors cursor-pointer group">
                 <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Product Designer</h3>
                        <p className="text-slate-400 mt-1">Remote (Global)</p>
                    </div>
                    <span className="text-slate-500 text-sm">Design</span>
                </div>
                <p className="text-slate-400 mt-4 text-sm">
                    We are looking for a generalist who can take a rough idea and turn it into a polished, accessible UI. 
                    You code what you design.
                </p>
            </div>

            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/50 transition-colors cursor-pointer group">
                 <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Customer Success Manager</h3>
                        <p className="text-slate-400 mt-1">Remote (APAC)</p>
                    </div>
                    <span className="text-slate-500 text-sm">Sales</span>
                </div>
                <p className="text-slate-400 mt-4 text-sm">
                    Our customers are our partners. Help enterprise teams roll out Leedsphere and transform their culture.
                </p>
            </div>
        </div>

        <p className="mt-8 text-sm text-slate-500">
            Don't see a role that fits? Email <a href="mailto:careers@leedsphere.com" className="text-purple-400 hover:text-purple-300">careers@leedsphere.com</a> with your portfolio and tell us what we're missing.
        </p>
      </div>
    </div>
  );
}
