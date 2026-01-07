import React, { useState, useEffect } from 'react';
import { Zap, Users, Award } from 'lucide-react';
import header from '../assets/hearder.jpg';
// import cap_Logo from '../assets/CAP_LOGO.png';

const Countdown = ({ targetDate }: { targetDate: Date | string }) => {
  const calc = () => {
    const now = new Date();
    const t = new Date(targetDate);
    const diff = Math.max(0, t.getTime() - now.getTime());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, total: diff };
  };

  const [timeLeft, setTimeLeft] = useState(calc());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (n: number) => String(n).padStart(2, '0');

  if (timeLeft.total <= 0) {
    return (
      <div className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
        Offer ended
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center space-x-3">
      <span className="hidden sm:inline">Limited Offer</span>
      <span className="px-2 py-0.5 rounded font-mono">
        {timeLeft.days}d {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
      </span>
    </div>
  );
};

export default function CAP360LandingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    CTC: '',
    Location: '',
    designation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const allowedLocations = [
    'Mumbai', 'Delhi', 'Bengaluru', 'Chennai', 'Kolkata',
    'Hyderabad', 'Pune', 'Noida', 'Gurgaon', 'Ahmedabad'
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'phone' || name === 'CTC') newValue = value.replace(/\D/g, '');
    if (['fullName', 'Location', 'designation'].includes(name))
      newValue = value.replace(/[^A-Za-z\s]/g, '');

    setFormData({ ...formData, [name]: newValue });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbytA-Ngsd1WuhKeeLXLDBlNplAIR8QxadsGBWUAC_UfW5Ai76PXHlh4ZuU0wx_OKVOq/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() })
        }
      );
      setShowSuccess(true);
      setFormData({ fullName: '', email: '', phone: '', CTC: '', Location: '', designation: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-400">
      
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="w-full px-4 sm:px-6 py-4 flex items-center justify-between text-white">
          <img
            src="https://cap360.in/cap-uploads/caplogo.png"
            alt="CAP360 Logo"
            className="h-8 sm:h-10 w-auto object-contain"
          />
          <Countdown targetDate={new Date(Date.now() + 3 * 86400000)} />
        </div>
      </header>

      {/* Hero */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-10 sm:py-16">
        <div className="max-w-7xl w-full mx-auto">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              
              {/* Image */}
              <div className="relative h-[420px] sm:h-[460px] md:h-auto">
                <img src={header} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 p-6 sm:p-10 flex flex-col justify-center">
                  <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">
                    Stop Applying <span className="text-red-500">Blindly</span><br />
                    Access the Right Opportunities Faster.
                  </h1>
                  <p className="text-white/90 text-base sm:text-lg max-w-md">
                    Partners with experienced professionals to strategize career moves, unlock hidden opportunities, and secure leadership roles through direct HR and senior management access
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="p-6 sm:p-8 md:p-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                  Start Your Career Transformation Journey
                </h2>
                <p className="text-gray-500 mb-6 text-sm sm:text-base">
                 Share your details and our team will connect with you to discuss the next steps and engagement options.
                </p>

                <div className="space-y-4">
                  {['fullName', 'designation', 'email', 'phone', 'CTC'].map((field, i) => (
                    <input
                      key={i}
                      name={field}
                      placeholder={field.toUpperCase()}
                      value={(formData as any)[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 border rounded-lg text-sm sm:text-base"
                    />
                  ))}

                  <select
                    name="Location"
                    value={formData.Location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-3.5 border rounded-lg text-sm sm:text-base"
                  >
                    <option value="">Select Location</option>
                    {allowedLocations.map(loc => (
                      <option key={loc}>{loc}</option>
                    ))}
                  </select>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-lg font-semibold text-sm sm:text-base"
                  >
                    {isSubmitting ? 'Submitting...' : 'Speak With a Career Strategist'}
                  </button>

                  {showSuccess && (
                    <div className="bg-green-500 text-white p-3 rounded-lg text-center text-sm">
                      ✓ Success! We’ll contact you soon.
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-800 mb-2 text-center">Career Transformation & Network Access</h3>
              <p className="text-gray-600 text-base text-center">
              Leverage our decade-long network to discover opportunities before they're posted. Get direct access to hiring managers and C-suite executives across multiple industries, and validate positions before you invest time applying.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-800 mb-2 text-center">Instant Decision-Maker Outreach</h3>
              <p className="text-gray-600 text-base text-center">
              Skip the application queue entirely. We provide warm introductions to recruitment leaders and company executives, fast-tracking you from initial contact to interview—positioning you ahead of the competition.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-800 mb-2 text-center">Career Brand Strategy & Visibility</h3>
              <p className="text-gray-600 text-base text-center">
                Shape your professional narrative and market positioning to stand out in competitive landscapes. Build recognition as an industry expert and future leader, attracting opportunities that align with your ambitions.
              </p>
            </div>
          </div>

          {/* Our Features Section */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-16">
            Our Features Suits All Types
          </h2>

          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://www.thecvspecialists.com/wp-content/uploads/2020/09/job-search.png"
                alt="Person using phone"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Strategic Job Search That Works
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Stop applying blindly through job portals. Our proven strategy combines targeted networking, personal branding, and direct outreach to decision-makers. We help senior professionals position themselves as the obvious choice for leadership roles, cutting job search time by 60%. Get career coaching, interview prep, and salary negotiation support all in one place.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Complete Career Transition Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Making a career pivot? Our specialists guide senior professionals through industry transitions, role changes, and executive positioning. From skill development and certification guidance to executive presence coaching and leadership development. We provide end-to-end support including mock interviews, STAR method training, and personalized career roadmaps to ensure your next move is your best move.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://framerusercontent.com/images/aUaOqJHHATRFOD61Qk6oapnTHjA.webp"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://www.sustainablebusinesstoolkit.com/wp-content/uploads/career-development.jpg"
                alt="Career coaching session"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Expert Career Coaching & Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized 1:1 coaching sessions with industry experts. Weekly or fortnightly sessions focused on goal setting, progress tracking, and accountability. We provide customized learning plans, skills gap analysis, and industry certification guidance. Develop both technical and soft skills with continuous feedback and upskilling recommendations tailored to your career goals.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Interview Mastery & Negotiation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Master the art of interviewing with comprehensive mock sessions and industry-specific preparation. Learn STAR & CARL method frameworks, practice role-specific questions, and develop winning follow-up strategies. Our experts coach you on salary negotiation tactics, benefits discussions, and offer evaluation to ensure you secure the best compensation package for your experience level.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1698047682091-782b1e5c6536?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional interview"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Feature 5 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                alt="Executive meeting"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Executive Presence & Leadership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Elevate your executive impact with proven strategies for senior professionals. Enhance your gravitas, communication style, and influence. Master stakeholder management, relationship building, and strategic decision-making. Learn executive storytelling techniques, improve visibility in your organization, and develop leadership agility for managing change effectively at the C-suite level.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          {/* <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Content Strategy & Thought Leadership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build your professional authority and online reputation with strategic content creation. We help you develop LinkedIn content plans, craft compelling professional pitches, and establish thought leadership in your industry. Learn networking messaging, create your personal branding toolkit, and implement an engagement framework that attracts recruiters, opportunities, and positions you as an industry expert.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
                alt="Content creation"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div> */}
        </div>
      </div>

      {/* Footer */}
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CAP360
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Career transformation services for senior professionals. Empowering leaders to reach their next milestone.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-100">Get in Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@cap360.in" 
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">info@cap360.in</span>
              </a>
              <a 
                href="tel:+911234567890" 
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+91 9810584055</span>
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-100">Connect With Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/cap360%C2%B0" 
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
               href="https://www.facebook.com/profile.php?id=61579769093228"
               aria-label="Facebook"
               className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110">
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
  </svg>
</a>
              <a 
                href="https://www.instagram.com/cap___360/" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} CAP360. All rights reserved</p>
            <p>Maven Info Solutions OPC Pvt Ltd</p>
          </div>
        </div>
      </div>
    </footer>

    </div>
  );
}