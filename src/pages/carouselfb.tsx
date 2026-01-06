import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, TrendingUp, Target, Zap, Network, Sparkles, Award, BarChart3 } from 'lucide-react';
import capLogo from '../assets/CAP_LOGO.png';

const SocialMediaPost = ({ title, subtitle, tagline, icon: Icon, stats, accentGradient }) => (
  <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl">
    {/* Yellow Background Pattern */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Large Yellow Gradient Circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-yellow-300 via-yellow-400 to-amber-400 rounded-full opacity-20 blur-3xl"></div>
      
      {/* Purple Accent Blobs */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-tl from-purple-400 to-purple-500 rounded-full opacity-10 blur-2xl"></div>
      
      {/* Yellow Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
        <defs>
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#fbbf24" strokeWidth="0.3"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
      
      {/* Decorative Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-10 right-20 w-16 h-16 border-2 border-yellow-400/30 rounded-lg rotate-12"></div>
      <div className="absolute bottom-20 left-16 w-12 h-12 border-2 border-purple-400/30 rounded-full"></div>
    </div>

    {/* Main Content Container */}
    <div className="relative z-10 h-full flex flex-col p-8">
      {/* Header with Logo and Icon */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-3xl font-bold tracking-tight mb-1 flex items-center">
            <img src={capLogo} alt="CAP 360 logo" className="w-[6.5rem] h-[6.5rem] object-contain mr-3 md:mr-4" />
            {/* <Sparkles className="w-6 h-6 ml-2 text-yellow-500" /> */}
          </div>
          <div className="text-xs font-bold tracking-widest text-gray-700 uppercase mt-[-21px]">Career Transformation</div>
        </div>
        <div className={`w-20 h-20 rounded-2xl ${accentGradient} flex items-center justify-center shadow-xl border-2 border-purple-200 relative group hover:scale-105 transition-transform`}>
          <Icon className="w-10 h-10 text-white relative z-10" strokeWidth={2} />
          <div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity"></div>
        </div>
      </div>

      {/* Main Title Section */}
      <div className="flex-1 flex flex-col justify-center space-y-6">
        <div className="space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 border-2 border-yellow-500/30 text-[1.2rem] font-bold shadow-lg">
            <Award className="w-4 h-4 inline mr-1.5 text-purple-700" />
            <span className="text-purple-900">Professional Excellence</span>
          </div>
          
          <h2 className="text-1xl md:text-5xl font-extrabold leading-tight text-gray-900">
            {title}
          </h2>

          <p className="text-xl md:text-[1.3rem] font-medium text-gray-700 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Stats Grid with Enhanced Design */}
        {stats && (
          <div className="grid grid-cols-2 gap-3 my-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Yellow Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-300 to-amber-400 opacity-20 rounded-bl-3xl"></div>
                
                {/* Purple Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/0 via-purple-100/0 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                    <div className={`text-[1.3rem] font-black ${
                      idx === 0 ? 'bg-gradient-to-r from-yellow-600 to-amber-600' :
                      idx === 1 ? 'bg-gradient-to-r from-purple-600 to-purple-700' :
                      idx === 2 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                      'bg-gradient-to-r from-purple-500 to-purple-600'
                    } bg-clip-text text-transparent drop-shadow-sm`}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-[1rem] text-gray-800 leading-snug font-bold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tagline Box */}
        <div className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-2xl p-6 border-2 border-purple-500 shadow-2xl overflow-hidden">
          {/* Yellow Accent Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
          
          <p className="text-xl md:text-[1.6rem] font-black text-center relative z-10 leading-snug text-white drop-shadow-lg">
            "{tagline}"
          </p>
        </div>
      </div>

      {/* Footer with CTA */}
      <div className="mt-8 pt-6 border-t-2 border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 border-2 border-white shadow-md"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-white shadow-md"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 border-2 border-white shadow-md"></div>
          </div>
          <div className="text-[0.87rem] font-bold text-gray-800">Join 1000+ Professionals</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse shadow-lg shadow-yellow-400/50"></div>
          <span className="text-[1rem] font-bold text-purple-700">Transform Today</span>
        </div>
      </div>
    </div>

    {/* Corner Decorative Elements */}
    <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-yellow-400 opacity-30 rounded-tl-3xl"></div>
    <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-purple-400 opacity-30 rounded-br-3xl"></div>
  </div>
);

const posts = [
  {
    title: "Direct Access to Decision Makers",
    subtitle: "Connect with HR & CXO networks across industries",
    tagline: "Your network is your net worth",
    icon: Users,
    accentGradient: "bg-gradient-to-br from-purple-600 to-purple-700",
    stats: [
      { value: "Proven Network", label: "Years of Professional Connections" },
      { value: "Exclusive Access", label: "Direct to HR & Senior Management" },
      { value: "Cross-Industry Reach", label: "Multi-Sector Network Coverage" },
      { value: "Immediate Opportunities", label: "Fast-Track to Openings" }
    ]
  },
  {
    title: "Market Intelligence That Wins",
    subtitle: "Discover opportunities before everyone else",
    tagline: "Be the first, not the crowd",
    icon: TrendingUp,
    accentGradient: "bg-gradient-to-br from-yellow-500 to-amber-600",
    stats: [
      { value: "First-Mover Advantage", label: "Access to Hidden Roles" },
      { value: "Data-Driven Insights", label: "Smart Validation Before Applying" },
      { value: "Perfect Timing", label: "Optimal Move Strategy" },
      { value: "Targeted Approach", label: "Precision Company Selection" }
    ]
  },
  {
    title: "Build Your Executive Brand",
    subtitle: "Position yourself as the next-in-line leader",
    tagline: "Lead the narrative of your career",
    icon: Target,
    accentGradient: "bg-gradient-to-br from-purple-500 to-purple-600",
    stats: [
      { value: "Market Visibility", label: "Market Reach Exponentially" },
      { value: "Elite Connections", label: "C-Suite Network Access" },
      { value: "Stand Out", label: "In Your Industry" },
      { value: "Success Narrative", label: "Own Your Career Story" }
    ]
  },
  {
    title: "Job Applications Reimagined",
    subtitle: "Focus on strategy, we handle the rest",
    tagline: "Work smarter, not harder",
    icon: Zap,
    accentGradient: "bg-gradient-to-br from-yellow-600 to-amber-600",
    stats: [
      { value: "Time Efficiency", label: "Save Valuable Hours & Energy" },
      { value: "Expert Guidance", label: "Professional Application Support" },
      { value: "Strategic Priority", label: "Focus on What Truly Matters" },
      { value: "Better Results", label: "Achieve Superior Outcomes" }
    ]
  },
  {
     title: "Your Dream Job Catalyst",
    subtitle: "Leverage decade-long industry connections",
    tagline: "A network that opens doors everywhere.",
    icon: Network,
    accentGradient: "bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800",
    stats: [
      { value: "Industry Connect", label: "Years of Network Building" },
      { value: "HR & Senior Management", label: "Multiple Sectors Covered" },
      { value: "Executive Access", label: "CXO Level Access" },
      { value: "Personalized Path", label: "Tailored Career Accelerator" }
    ]
  }
];

export default function CAP360SocialPosts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((currentIndex + 1) % posts.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + posts.length) % posts.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-yellow-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-2 rounded-full mb-4 shadow-lg">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-bold">Premium Social Media Creatives</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
            CAP 360 Professional Posts
          </h2>
          <p className="text-gray-600 font-semibold">Instagram • LinkedIn • Facebook • Twitter Ready</p>
        </div>

        <div className="relative">
          {/* Social Media Post Preview */}
          <div className="mb-6 max-w-2xl mx-auto h-96 md:h-[640px] lg:h-[820px]">
            <SocialMediaPost {...posts[currentIndex]} />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prev}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2 border-purple-500"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-bold">Previous</span>
            </button>

            <div className="flex space-x-2">
              {posts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`rounded-full transition-all ${
                    idx === currentIndex 
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 w-8 h-3 shadow-lg' 
                      : 'bg-yellow-400 hover:bg-yellow-500 w-3 h-3'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2 border-purple-500"
            >
              <span className="font-bold">Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Post Details Card */}
          <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-xl">
            <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-500" />
              Post {currentIndex + 1} of {posts.length} - Professional Details
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 border-2 border-yellow-200">
                <p className="text-[1.2rem] text-gray-600 mb-1 font-bold">Format</p>
                <p className="font-black text-gray-900">1:1 Square</p>
                <p className="text-xs text-gray-600 font-semibold">1080x1080px</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border-2 border-purple-200">
                <p className="text-[1.2rem] text-gray-600 mb-1 font-bold">Optimized For</p>
                <p className="font-black text-gray-900">
                  {currentIndex === 0 && "LinkedIn + Instagram"}
                  {currentIndex === 1 && "LinkedIn + Twitter"}
                  {currentIndex === 2 && "Instagram + LinkedIn"}
                  {currentIndex === 3 && "Facebook + LinkedIn"}
                  {currentIndex === 4 && "All Platforms"}
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 border-2 border-yellow-200">
                <p className="text-[1.2rem] text-gray-600 mb-1 font-bold">Theme</p>
                <p className="font-black text-gray-900">
                  {currentIndex === 0 && "Network Power"}
                  {currentIndex === 1 && "Intelligence"}
                  {currentIndex === 2 && "Executive Brand"}
                  {currentIndex === 3 && "Efficiency"}
                  {currentIndex === 4 && "Experience"}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-yellow-100 rounded-xl p-4 border-2 border-purple-300">
              <p className="text-[1.2rem] text-gray-800 leading-relaxed font-semibold">
                <span className="text-purple-700 font-black">💡 Caption Idea:</span> {posts[currentIndex].tagline} 
                <br/>
                <span className="text-xs text-gray-600 mt-2 block font-bold">
                  Hashtags: #CAP360 #CareerTransformation #ExecutiveSearch #ProfessionalGrowth #CareerAcceleration #NetworkingPower #LeadershipDevelopment #CareerStrategy
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-white rounded-full px-6 py-3 border-2 border-purple-300 shadow-lg">
            <p className="text-gray-700 text-[1.2rem] font-bold">
              <Sparkles className="w-4 h-4 inline mr-2 text-yellow-500" />
              Premium professional designs ready for immediate use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}