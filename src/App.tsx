import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  TrendingUp, 
  Zap, 
  Database, 
  Mail, 
  BarChart3, 
  Cpu, 
  Globe, 
  ChevronRight, 
  ExternalLink, 
  Phone, 
  Mail as MailIcon, 
  MapPin, 
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Workflow,
  Menu,
  X,
  Download
} from 'lucide-react';
import { BACKLINK_DATA, AI_TOOLS, Backlink } from './constants';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Backlinks', href: '#backlinks' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Stack', href: '#aistack' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          RUPESH<span className="text-brand-blue">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-brand-blue text-black font-bold text-sm hover:bg-white transition-all transform hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark-bg border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-brand-blue"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-brand-blue mb-6">
            <Zap size={14} /> AI-DRIVEN GROWTH STRATEGIST
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
            I Turn <span className="text-brand-blue italic">Traffic</span> <br /> 
            Into <span className="text-glow">Revenue</span>
          </h1>
          <p className="text-xl text-white/60 max-w-lg mb-8 leading-relaxed">
            SEO | Paid Ads | AI Growth Systems. I don't just run campaigns. I build high-performance revenue engines that scale businesses globally.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 rounded-xl bg-white text-black font-bold flex items-center gap-2 hover:bg-brand-blue transition-all group">
              View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-xl glass font-bold hover:bg-white/10 transition-all">
              Hire Me
            </a>
            <a 
              href="/resume.pdf" 
              download="Rupesh_Choudhary_Resume.pdf"
              className="px-8 py-4 rounded-xl border border-white/10 text-white/60 hover:text-white transition-all flex items-center gap-2"
            >
              <Download size={18} /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 p-8 bg-gradient-to-br from-brand-blue/10 via-brand-purple/10 to-transparent flex flex-col items-center justify-center text-center relative group">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
            
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 text-white">
                RUPESH <br />
                <span className="text-brand-blue">CHOUDHARY</span>
              </h2>
              <div className="h-1 w-20 bg-brand-purple mx-auto mb-4 rounded-full" />
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-white/60">
                Digital Marketing Specialist
              </p>
            </motion.div>

            {/* Surrounding Icons */}
            <div className="absolute inset-0 pointer-events-none">
              {/* SEO */}
              <motion.div 
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-12 left-12 p-3 rounded-xl glass text-brand-blue"
              >
                <Search size={24} />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">SEO</span>
              </motion.div>

              {/* SEMRUSH */}
              <motion.div 
                animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-20 right-12 p-3 rounded-xl glass text-brand-purple"
              >
                <BarChart3 size={24} />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">SEMRUSH</span>
              </motion.div>

              {/* SOCIAL MEDIA */}
              <motion.div 
                animate={{ y: [0, -10, 0], x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute bottom-24 right-16 p-3 rounded-xl glass text-brand-blue"
              >
                <Globe size={24} />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">SOCIAL</span>
              </motion.div>

              {/* SHOPIFY */}
              <motion.div 
                animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-32 left-16 p-3 rounded-xl glass text-emerald-400"
              >
                <TrendingUp size={24} />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">SHOPIFY</span>
              </motion.div>

              {/* WORDPRESS */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 -left-4 p-3 rounded-xl glass text-white/40"
              >
                <Layers size={24} />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">WP</span>
              </motion.div>

              {/* AI TOOLS */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 p-4 rounded-full glass text-brand-purple border-brand-purple/30"
              >
                <Cpu size={32} />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">AI TOOLS</span>
              </motion.div>
            </div>
          </div>
          {/* Floating Stats */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 glass p-6 rounded-2xl z-20"
          >
            <div className="text-3xl font-bold text-brand-blue">40+</div>
            <div className="text-xs text-white/50 uppercase tracking-widest">AI Tools Stack</div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl z-20"
          >
            <div className="text-3xl font-bold text-brand-purple">3+ Y</div>
            <div className="text-xs text-white/50 uppercase tracking-widest">SEO Experience</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">The Growth Architect</h2>
            <p className="text-xl text-white/70 leading-relaxed">
              With over 3 years in SEO and a deep focus on performance marketing, I've transitioned from running simple campaigns to building full-funnel revenue systems.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl glass space-y-2">
                <Search className="text-brand-blue" />
                <h3 className="font-bold">3+ Years SEO</h3>
                <p className="text-sm text-white/50">Technical, Entity, & Authority SEO specialist.</p>
              </div>
              <div className="p-6 rounded-2xl glass space-y-2">
                <TrendingUp className="text-brand-purple" />
                <h3 className="font-bold">Performance</h3>
                <p className="text-sm text-white/50">Paid Ads & ROI-driven growth systems.</p>
              </div>
              <div className="p-6 rounded-2xl glass space-y-2">
                <Mail className="text-brand-blue" />
                <h3 className="font-bold">Email Systems</h3>
                <p className="text-sm text-white/50">10+ successful email marketing projects.</p>
              </div>
              <div className="p-6 rounded-2xl glass space-y-2">
                <Cpu className="text-brand-purple" />
                <h3 className="font-bold">AI Native</h3>
                <p className="text-sm text-white/50">Automating execution with 40+ AI tools.</p>
              </div>
            </div>
          </div>
          <div className="glass p-12 rounded-[40px] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Workflow size={200} />
            </div>
            <blockquote className="text-3xl font-medium italic leading-tight relative z-10">
              "I don’t run campaigns. I build <span className="text-brand-blue">revenue systems</span>. In 2026, SEO is no longer about keywords. It’s about entities, intent, and AI ecosystems."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-sm uppercase tracking-[0.3em] text-white/40">Rupesh Choudhary</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const serviceCategories = [
    {
      id: 'core',
      title: 'Core Services',
      icon: <Zap className="w-6 h-6" />,
      services: [
        { name: 'Performance Marketing (Paid Ads)', desc: 'Data-driven advertising strategies focused on high ROI and scalable growth.' },
        { name: 'Lead Generation Campaigns', desc: 'Custom-built funnels designed to capture and qualify high-intent leads.' },
        { name: 'Conversion Rate Optimization (CRO)', desc: 'Optimizing user journeys to turn more visitors into paying customers.' },
        { name: 'Funnel Building & Optimization', desc: 'Architecting seamless sales funnels from awareness to conversion.' },
        { name: 'Marketing Strategy & Growth Consulting', desc: 'Long-term strategic planning to dominate your market niche.' },
      ]
    },
    {
      id: 'seo',
      title: 'Advanced SEO',
      icon: <Search className="w-6 h-6" />,
      services: [
        { name: 'Technical SEO Audit', desc: 'Deep-dive analysis of site structure, speed, and indexability.' },
        { name: 'On-Page SEO Optimization', desc: 'Strategic content and metadata optimization for target entities.' },
        { name: 'Keyword Research & Intent Mapping', desc: 'Mapping search intent to high-value conversion opportunities.' },
        { name: 'Competitor Analysis', desc: 'Reverse-engineering competitor success to find growth gaps.' },
        { name: 'Content SEO Strategy', desc: 'Building topical authority through strategic content pillars.' },
        { name: 'EEAT Optimization', desc: 'Enhancing Experience, Expertise, Authoritativeness, and Trustworthiness.' },
        { name: 'Entity SEO', desc: 'Optimizing for knowledge graphs and semantic relationships.' },
        { name: 'GEO & AEO', desc: 'Generative and Answer Engine Optimization for AI search results.' },
        { name: 'AI Citation Optimization', desc: 'Ensuring your brand is cited correctly by LLMs and AI agents.' },
        { name: 'Local & International SEO', desc: 'Dominating local maps and expanding into global markets.' },
      ]
    },
    {
      id: 'backlinks',
      title: 'Backlink & Off-Page',
      icon: <Layers className="w-6 h-6" />,
      services: [
        { name: 'High Authority Backlink Building', desc: 'Acquiring powerful links from reputable, niche-relevant domains.' },
        { name: 'Guest Posting Outreach', desc: 'Strategic content placement on high-traffic industry blogs.' },
        { name: 'Business Directory Submissions', desc: 'Ensuring consistent NAP data across authoritative local directories.' },
        { name: 'Social Bookmarking & Image Strategy', desc: 'Diversifying your link profile with visual and social signals.' },
        { name: 'Link Audit & Toxic Removal', desc: 'Protecting your site from negative SEO and spammy link penalties.' },
      ]
    },
    {
      id: 'paid',
      title: 'Paid Advertising',
      icon: <TrendingUp className="w-6 h-6" />,
      services: [
        { name: 'Google Ads Management', desc: 'Expertly managed Search, Display, and Video campaigns.' },
        { name: 'Meta Ads (FB & IG)', desc: 'Highly targeted social ads for brand awareness and lead gen.' },
        { name: 'Retargeting Campaigns', desc: 'Bringing back lost visitors with strategic follow-up ads.' },
        { name: 'Ad Copywriting & Creatives', desc: 'High-converting ad copy and visual assets that stop the scroll.' },
        { name: 'Budget Scaling & ROAS', desc: 'Aggressively scaling winning campaigns while maintaining profitability.' },
      ]
    },
    {
      id: 'email',
      title: 'Email Marketing',
      icon: <Mail className="w-6 h-6" />,
      services: [
        { name: 'Email Campaign Strategy', desc: 'Building automated sequences that nurture leads into customers.' },
        { name: 'Automation & Drip Sequences', desc: 'Behavior-based triggers that deliver the right message at the right time.' },
        { name: 'Lead Nurturing Funnels', desc: 'Strategic follow-ups that build trust and drive conversions.' },
        { name: 'Customer Retention Flows', desc: 'Maximizing LTV through post-purchase engagement and loyalty.' },
        { name: 'CRM Integration', desc: 'Seamlessly syncing your marketing data with your sales tools.' },
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics & Tracking',
      icon: <BarChart3 className="w-6 h-6" />,
      services: [
        { name: 'GA4 & GSC Setup', desc: 'Advanced configuration of Google Analytics 4 and Search Console.' },
        { name: 'Conversion Tracking', desc: 'Precise tracking of pixels, events, and custom conversions.' },
        { name: 'Funnel Tracking', desc: 'Visualizing where users drop off in your conversion journey.' },
        { name: 'Performance Dashboards', desc: 'Real-time reporting that makes data-driven decisions easy.' },
        { name: 'Data Analysis & Insights', desc: 'Turning raw numbers into actionable growth strategies.' },
      ]
    },
    {
      id: 'ai',
      title: 'AI-Driven Marketing',
      icon: <Cpu className="w-6 h-6" />,
      services: [
        { name: 'AI Content Workflows', desc: 'Leveraging AI to produce high-quality content at scale.' },
        { name: 'Automated SEO Audits', desc: 'Using AI agents to monitor and fix SEO issues in real-time.' },
        { name: 'AI Ad Creative Generation', desc: 'Rapidly testing AI-generated visuals for ad performance.' },
        { name: 'AI-Based Keyword Research', desc: 'Finding hidden opportunities using advanced LLM analysis.' },
        { name: 'Marketing Automation Systems', desc: 'Building self-optimizing systems that run on autopilot.' },
      ]
    },
    {
      id: 'content',
      title: 'Content & Creative',
      icon: <MessageSquare className="w-6 h-6" />,
      services: [
        { name: 'SEO Blog Writing', desc: 'Content that ranks high and converts readers into leads.' },
        { name: 'Website Optimization', desc: 'Polishing your core pages for maximum clarity and impact.' },
        { name: 'Ad Copywriting', desc: 'Persuasive copy designed to drive clicks and sales.' },
        { name: 'Landing Page Content', desc: 'High-impact messaging that drives one specific action.' },
        { name: 'Visual Content Strategy', desc: 'Cohesive branding across all your digital touchpoints.' },
      ]
    },
    {
      id: 'social',
      title: 'Social Media',
      icon: <Globe className="w-6 h-6" />,
      services: [
        { name: 'Social Media Strategy', desc: 'Building a brand presence that resonates with your audience.' },
        { name: 'Content Planning & Posting', desc: 'Consistent, high-quality engagement across all platforms.' },
        { name: 'Engagement Growth', desc: 'Building a community around your brand and products.' },
        { name: 'Brand Positioning', desc: 'Defining your unique voice in a crowded digital space.' },
        { name: 'Influencer Collaboration', desc: 'Partnering with key voices to expand your reach.' },
      ]
    },
    {
      id: 'web',
      title: 'Website & Funnel',
      icon: <ExternalLink className="w-6 h-6" />,
      services: [
        { name: 'Landing Page Design', desc: 'Beautiful, fast-loading pages built for conversion.' },
        { name: 'Sales Funnel Setup', desc: 'End-to-end technical setup of your conversion paths.' },
        { name: 'UX/UI Optimization', desc: 'Improving user experience to reduce friction and bounce rates.' },
        { name: 'Speed Optimization', desc: 'Ensuring your site loads instantly on all devices.' },
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4">Digital Marketing Services</h2>
          <p className="text-white/50">Comprehensive growth systems built for the modern digital landscape.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`glass rounded-3xl overflow-hidden transition-all duration-500 border border-white/5 hover:border-brand-blue/20 ${
                activeCategory === category.id ? 'md:col-span-2 lg:col-span-2 ring-2 ring-brand-blue/30' : ''
              }`}
            >
              <div 
                className="p-8 cursor-pointer flex items-center justify-between group"
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    activeCategory === category.id ? 'bg-brand-blue text-black' : 'bg-white/5 text-brand-blue group-hover:bg-brand-blue/20'
                  }`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <p className="text-sm text-white/40">{category.services.length} Specialized Services</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: activeCategory === category.id ? 180 : 0 }}
                  className="text-white/30"
                >
                  <ChevronRight />
                </motion.div>
              </div>

              <AnimatePresence>
                {activeCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pt-4 border-t border-white/5 bg-white/5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {category.services.map((service, sIdx) => (
                          <motion.div 
                            key={sIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: sIdx * 0.05 }}
                            className="space-y-2 p-4 rounded-2xl hover:bg-white/5 transition-colors group/item"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                              <h4 className="font-bold text-white/90 group-hover/item:text-brand-blue transition-colors">{service.name}</h4>
                            </div>
                            <p className="text-sm text-white/50 leading-relaxed pl-3.5">
                              {service.desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const skills = [
    { title: "Technical SEO", desc: "Core Web Vitals, Schema Markup, & Crawlability optimization." },
    { title: "EEAT 2.0", desc: "Building Experience, Expertise, Authoritativeness, & Trustworthiness." },
    { title: "Entity SEO", desc: "Optimizing for knowledge graphs and semantic search relationships." },
    { title: "GEO & AEO", desc: "Generative Engine & Answer Engine Optimization for AI search." },
    { title: "AI Citation", desc: "Ensuring brand presence in LLM training data and AI responses." },
    { title: "Full Funnel", desc: "Integrating SEO with Paid Ads and Email for maximum ROI." },
  ];

  return (
    <section id="expertise" className="py-24 bg-glow-purple">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">SEO Expertise</h2>
          <p className="text-white/50">Advanced strategies for the AI-first search era.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl glass border-white/5 hover:border-brand-blue/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-black transition-all">
                <ShieldCheck />
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-white/50 leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BacklinkSystem = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Business Directory', 'Guest Posting', 'Social Bookmarking', 'Image Backlink'];
  
  const filteredData = activeCategory === 'All' 
    ? BACKLINK_DATA 
    : BACKLINK_DATA.filter(item => item.category === activeCategory);

  return (
    <section id="backlinks" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-5xl font-bold mb-4">Backlink Intelligence <span className="text-brand-blue">System</span></h2>
            <p className="text-white/50 max-w-xl">
              This is not just a list. It's an authority engineering system with 100+ vetted sources ranging from DA 40 to 95+.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeCategory === cat ? 'bg-brand-blue text-black' : 'glass hover:bg-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl glass text-center">
            <div className="text-4xl font-bold text-brand-blue mb-1">100+</div>
            <div className="text-xs uppercase tracking-widest text-white/40">Vetted Sources</div>
          </div>
          <div className="p-6 rounded-2xl glass text-center">
            <div className="text-4xl font-bold text-brand-purple mb-1">40-95+</div>
            <div className="text-xs uppercase tracking-widest text-white/40">DA Range</div>
          </div>
          <div className="p-6 rounded-2xl glass text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-1">0-3%</div>
            <div className="text-xs uppercase tracking-widest text-white/40">Spam Score Avg</div>
          </div>
          <div className="p-6 rounded-2xl glass text-center">
            <div className="text-4xl font-bold text-amber-400 mb-1">100%</div>
            <div className="text-xs uppercase tracking-widest text-white/40">Manual Filtering</div>
          </div>
        </div>

        <div className="glass rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-6 text-xs uppercase tracking-widest text-white/40 font-bold">Website</th>
                  <th className="p-6 text-xs uppercase tracking-widest text-white/40 font-bold">DA</th>
                  <th className="p-6 text-xs uppercase tracking-widest text-white/40 font-bold">PA</th>
                  <th className="p-6 text-xs uppercase tracking-widest text-white/40 font-bold">Spam Score</th>
                  <th className="p-6 text-xs uppercase tracking-widest text-white/40 font-bold">Category</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-medium flex items-center gap-2">
                      <Globe size={14} className="text-brand-blue" /> {item.website}
                    </td>
                    <td className="p-6"><span className="px-2 py-1 rounded bg-brand-blue/10 text-brand-blue text-xs font-bold">{item.da}</span></td>
                    <td className="p-6 text-white/60">{item.pa}</td>
                    <td className="p-6 text-white/60">{item.spamScore}</td>
                    <td className="p-6">
                      <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-white/10 text-white/40">
                        {item.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Revenue Scaling",
      problem: "Stagnant organic traffic and high CAC on paid channels.",
      action: "Implemented Entity-based SEO and AI-driven ad creative testing.",
      result: "40% increase in organic traffic and 2.5x ROAS improvement.",
      tags: ["SEO", "Meta Ads", "Shopify"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "SaaS Lead Gen System",
      problem: "Low conversion rates on landing pages and poor lead quality.",
      action: "Built a full-funnel automation system with personalized email sequences.",
      result: "300% increase in MQLs and 45% reduction in Cost Per Lead.",
      tags: ["Automation", "Email", "CRM"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Local Authority Domination",
      problem: "Client invisible in local search despite high-quality service.",
      action: "GEO/AEO optimization and strategic local directory engineering.",
      result: "Top 3 ranking for 50+ high-intent keywords in 3 months.",
      tags: ["Local SEO", "AEO", "Directories"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-glow-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4">Strategic Case Studies</h2>
          <p className="text-white/50">Real impact. Real growth. Real systems.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.div 
              key={idx}
              className="glass rounded-[32px] overflow-hidden flex flex-col"
            >
              <div className="h-56 bg-white/5 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-brand-blue px-2 py-1 rounded bg-brand-blue/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-6">{p.title}</h3>
                
                <div className="space-y-4 mb-8 flex-1">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Problem</div>
                    <p className="text-sm text-white/70">{p.problem}</p>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Action</div>
                    <p className="text-sm text-white/70">{p.action}</p>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Result</div>
                    <p className="text-sm text-emerald-400 font-medium">{p.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AIStack = () => {
  return (
    <section id="aistack" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">The AI Stack</h2>
          <p className="text-white/50">40+ tools integrated into one automated marketing machine.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {AI_TOOLS.map((cat, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl">
              <h3 className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                {cat.category}
              </h3>
              <ul className="space-y-3">
                {cat.tools.map(tool => (
                  <li key={tool} className="text-sm text-white/60 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500" /> {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-12 glass rounded-[40px] border-brand-blue/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Cpu size={200} />
          </div>
          <div className="max-w-3xl relative z-10">
            <h3 className="text-3xl font-bold mb-6">Automation System Flow</h3>
            <div className="flex flex-col md:flex-row items-center gap-4 text-center">
              <div className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="font-bold text-brand-blue mb-1">INPUT</div>
                <div className="text-xs text-white/40">Data & Strategy</div>
              </div>
              <ArrowRight className="hidden md:block text-white/20" />
              <div className="flex-1 p-6 rounded-2xl bg-brand-blue/10 border border-brand-blue/20">
                <div className="font-bold text-brand-blue mb-1">AI AGENTS</div>
                <div className="text-xs text-white/40">Processing & Creation</div>
              </div>
              <ArrowRight className="hidden md:block text-white/20" />
              <div className="flex-1 p-6 rounded-2xl bg-brand-purple/10 border border-brand-purple/20">
                <div className="font-bold text-brand-purple mb-1">AUTOMATION</div>
                <div className="text-xs text-white/40">Execution & Distribution</div>
              </div>
              <ArrowRight className="hidden md:block text-white/20" />
              <div className="flex-1 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="font-bold text-emerald-400 mb-1">REVENUE</div>
                <div className="text-xs text-white/40">ROI & Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold mb-8">Let's Build Your <br /><span className="text-brand-blue">Revenue System</span></h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Ready to scale? Whether it's SEO, Paid Ads, or a full AI growth stack, I'm here to help you dominate your market.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-blue">
                  <Phone />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Call Me</div>
                  <div className="text-xl font-bold">+91 9479875568</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-purple">
                  <MailIcon />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Email Me</div>
                  <div className="text-xl font-bold">rupeshchoudhary8076@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-blue">
                  <MapPin />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Location</div>
                  <div className="text-xl font-bold">Dewas, MP, India</div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href="tel:9479875568" className="px-8 py-4 rounded-xl bg-brand-blue text-black font-bold flex items-center gap-2 hover:bg-white transition-all">
                Call Now
              </a>
              <a href="mailto:rupeshchoudhary8076@gmail.com" className="px-8 py-4 rounded-xl glass font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                Send Email
              </a>
              <a href="https://wa.me/919479875568" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-xl bg-emerald-500 text-white font-bold flex items-center gap-2 hover:bg-emerald-600 transition-all">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="glass p-10 rounded-[40px]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold px-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-blue transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold px-1">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-blue transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold px-1">Service Required</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-blue transition-all appearance-none">
                  <option className="bg-dark-bg">SEO Strategy</option>
                  <option className="bg-dark-bg">Paid Ads Management</option>
                  <option className="bg-dark-bg">AI Growth Systems</option>
                  <option className="bg-dark-bg">Full Funnel Marketing</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold px-1">Message</label>
                <textarea rows={4} placeholder="Tell me about your business goals..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-blue transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-5 rounded-xl bg-white text-black font-bold text-lg hover:bg-brand-blue transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter">
          RUPESH<span className="text-brand-blue">.</span>
        </div>
        <div className="text-sm text-white/40">
          © 2026 Rupesh Choudhary. All rights reserved. Built for high performance.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-white/40 hover:text-brand-blue transition-colors"><Search size={20} /></a>
          <a href="#" className="text-white/40 hover:text-brand-blue transition-colors"><Globe size={20} /></a>
          <a href="#" className="text-white/40 hover:text-brand-blue transition-colors"><MessageSquare size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="bg-dark-bg text-white selection:bg-brand-blue selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <BacklinkSystem />
        <Projects />
        <AIStack />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
