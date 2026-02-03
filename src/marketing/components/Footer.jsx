import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Github } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Overview", href: "/product/overview" },
        { name: "Team Channels", href: "/product/channels" },
        { name: "Team Messaging", href: "/product/messaging" },
        { name: "File Sharing", href: "/product/files" },
        { name: "Integrations", href: "/product/integrations" },
        { name: "Workspace Search", href: "/product/search" },
        { name: "Security", href: "/product/security" },
      ]
    },
    {
      title: "Teams",
      links: [
        { name: "Product Teams", href: "/solutions/engineering" },
        { name: "Engineering", href: "/solutions/engineering" },
        { name: "Support", href: "/solutions/support" },
        { name: "Remote Teams", href: "/solutions/remote" },
        { name: "Startups", href: "/solutions/startups" },
        { name: "Enterprises", href: "/solutions/enterprise" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Getting Started", href: "/start" },
        { name: "Product Updates", href: "/blog" },
        { name: "Guides", href: "/guides" },
        { name: "Community", href: "/community" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
      ]
    }
  ];

  return (
    <footer className="relative z-10 bg-slate-950/90 backdrop-blur-md text-slate-200 border-t border-slate-800/80">
      <div className="container mx-auto px-4 py-16">
        
        {/* Top Section: Logo & Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          {/* Brand Column (2 cols wide on large screens) */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
               <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">
                 <span className="text-xl font-bold">L</span>
               </div>
               <span className="text-xl font-bold text-white tracking-tight">Leedsphere</span>
            </Link>
            <p className="text-slate-300 leading-relaxed max-w-sm">
              Bring your team’s conversations, files, and tools into one shared workspace. 
              <br /><br />
              Work together, stay aligned, and move faster.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"><Github className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="font-semibold text-white mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm font-medium hover:text-purple-400 transition-colors text-slate-300/90">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div>
            © {new Date().getFullYear()} Leedsphere Ltd. Built for teams that work together.
          </div>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/refund-policy" className="hover:text-slate-300 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
