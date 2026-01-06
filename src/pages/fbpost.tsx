import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, TrendingUp, Users, Target, Zap, Network } from 'lucide-react';

const SocialMediaPost = ({ title, subtitle, tagline, icon: Icon, stats, bgPattern }) => (
  <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl overflow-hidden shadow-2xl">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      {bgPattern === 'network' && (
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="network" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
            <line x1="2" y1="2" x2="12" y2="12" stroke="white" strokeWidth="0.5" />
            <circle cx="12" cy="12" r="1" fill="white" />
          </pattern>
          <rect width="100" height="100" fill="url(#network)" />
        </svg>
      )}
      {bgPattern === 'grid' && (
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      )}
      {bgPattern === 'dots' && (
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="dots" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="white" />
          </pattern>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      )}
      {bgPattern === 'waves' && (
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="white" opacity="0.1" />
          <path d="M0,60 Q25,40 50,60 T100,60 L100,100 L0,100 Z" fill="white" opacity="0.1" />
        </svg>
      )}
      {bgPattern === 'circuit' && (
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="circuit" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.5" fill="white" />
            <line x1="10" y1="10" x2="20" y2="10" stroke="white" strokeWidth="0.5" />
            <line x1="10" y1="10" x2="10" y2="0" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#circuit)" />
        </svg>
      )}
    </div>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20"></div>

    <div className="relative z-10 h-full flex flex-col p-8 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-2xl font-bold tracking-tight">CAP 360</div>
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">
          <Icon className="w-9 h-9" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center space-y-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-light text-purple-100">
            {subtitle}
          </p>
        </div>

        {/* Stats/Features */}
        {stats && (
          <div className="grid grid-cols-2 gap-4 my-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-purple-100 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tagline */}
        <div className="bg-gradient-to-r from-purple-500/30 to-cyan-500/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <p className="text-xl font-semibold italic text-center">
            {tagline}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-between">
        <div className="text-sm opacity-90">Your Career Transformation Partner</div>
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span>Ready to Transform</span>
        </div>
      </div>
    </div>
  </div>
);

const posts = [
  {
    title: "Direct Access to Decision Makers",
    subtitle: "Connect with HR & CXO networks instantly",
    tagline: "Stop searching. Start connecting.",
    icon: Users,
    bgPattern: "network",
    stats: [
      { value: "10+", label: "Years of Industry Connections" },
      { value: "Direct", label: "Access to HR & Senior Management" },
      { value: "Multi", label: "Industry Network Reach" },
      { value: "Instant", label: "Connection to Opportunities" }
    ]
  },
  {
    title: "Market Intelligence That Works",
    subtitle: "Find opportunities before they're posted",
    tagline: "Be proactive. Not reactive.",
    icon: TrendingUp,
    bgPattern: "grid",
    stats: [
      { value: "Early", label: "Access to Hidden Roles" },
      { value: "Smart", label: "Validation Before Applying" },
      { value: "Right", label: "Timing for Your Move" },
      { value: "Strategic", label: "Company Targeting" }
    ]
  },
  {
    title: "Build Your Personal Brand",
    subtitle: "Position as the next-in-line leader",
    tagline: "Transform from candidate to obvious choice.",
    icon: Target,
    bgPattern: "dots",
    stats: [
      { value: "Expand", label: "Your Market Reach" },
      { value: "Grow", label: "Your Professional Network" },
      { value: "Stand", label: "Out in Your Industry" },
      { value: "Lead", label: "Your Career Narrative" }
    ]
  },
  {
    title: "Job Applications Reimagined",
    subtitle: "Save time. Focus on results.",
    tagline: "Work smarter on your transformation.",
    icon: Zap,
    bgPattern: "waves",
    stats: [
      { value: "Save", label: "Time & Effort" },
      { value: "Get", label: "Application Support" },
      { value: "Focus", label: "On What Matters" },
      { value: "Achieve", label: "Better Outcomes" }
    ]
  },
  {
    title: "Your Dream Job Catalyst",
    subtitle: "Leverage decade-long industry connections",
    tagline: "A network that opens doors everywhere.",
    icon: Network,
    bgPattern: "circuit",
    stats: [
      { value: "10+", label: "Years Network Building" },
      { value: "Various", label: "Industries Covered" },
      { value: "Top", label: "CXO Level Access" },
      { value: "Your", label: "Career Accelerator" }
    ]
  }
];

export default function CAP360SocialPosts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((currentIndex + 1) % posts.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + posts.length) % posts.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            CAP 360 Social Media Posts
          </h2>
          <p className="text-gray-400">Instagram • LinkedIn • Facebook Ready</p>
        </div>

        <div className="relative">
          {/* Social Media Post Preview */}
          <div className="aspect-square mb-6 max-w-2xl mx-auto">
            <SocialMediaPost {...posts[currentIndex]} />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prev}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all backdrop-blur-sm border border-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <div className="flex space-x-2">
              {posts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex 
                      ? 'bg-purple-400 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all backdrop-blur-sm border border-white/20"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Post Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Post {currentIndex + 1} of {posts.length}
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-300">
              <div>
                <p className="text-sm text-gray-400 mb-1">Format</p>
                <p className="font-medium text-white">1:1 Square (1080x1080)</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Best For</p>
                <p className="font-medium text-white">
                  {currentIndex === 0 && "Instagram Feed, LinkedIn"}
                  {currentIndex === 1 && "LinkedIn, Twitter"}
                  {currentIndex === 2 && "Instagram Stories, LinkedIn"}
                  {currentIndex === 3 && "Facebook, Instagram"}
                  {currentIndex === 4 && "LinkedIn, Professional Networks"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Key Message</p>
                <p className="font-medium text-white">
                  {currentIndex === 0 && "Network Power"}
                  {currentIndex === 1 && "Market Intelligence"}
                  {currentIndex === 2 && "Personal Branding"}
                  {currentIndex === 3 && "Efficiency"}
                  {currentIndex === 4 && "Experience & Trust"}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm text-gray-400">
                💡 <span className="text-white font-medium">Suggested Caption:</span> "{posts[currentIndex].tagline}" + Add your CTA and relevant hashtags like #CareerTransformation #CAP360 #CareerGrowth #JobSearch #ProfessionalNetworking
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Professional infographic posts optimized for social media platforms</p>
        </div>
      </div>
    </div>
  );
}