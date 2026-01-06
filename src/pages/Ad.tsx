import React, { useState } from 'react';
import { Gift, Users, Zap } from 'lucide-react';

export default function MarketingLandingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for signing up!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.name]: e.value
    });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #3b82f6, #9333ea)' }}>
      {/* Header */}
      <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ width: '1.5rem', height: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '0.25rem' }}></div>
            <span style={{ fontWeight: 600 }}>Cap 360</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <div style={{ maxWidth: '80rem', width: '100%', margin: '0 auto' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {/* Left Side - Hero Image */}
              <div style={{ position: 'relative', height: '24rem', backgroundColor: '#e5e7eb' }}>
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
                  alt="Modern office space"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent)' }}>
                  <div style={{ padding: '3rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: 1.2 }}>
                     Accelerate Your Career Transition
                     </h1>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem', maxWidth: '28rem' }}>
                       Specialized career acceleration services for senior professionals. From personal branding 
                            to direct HR connects, we help you land your next leadership role faster.
                    </p>
                    <button style={{ marginTop: '1.5rem', width: '3rem', height: '3rem', backgroundColor: 'white', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', cursor: 'pointer', transition: 'transform 0.2s', border: 'none' }}>
                      <div style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderLeft: '12px solid #2563eb', borderBottom: '8px solid transparent', marginLeft: '0.25rem' }}></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div style={{ padding: '3rem', backgroundColor: 'white', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '100%' }}>
                  <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                    Transform Your Career
                  </h2>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                    Get personalized strategy session with our career experts
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => handleChange(e.target)}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem' }}
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => handleChange(e.target)}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem' }}
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => handleChange(e.target)}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem' }}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      type="button"
                      style={{ width: '100%', backgroundColor: '#f97316', color: 'white', fontWeight: 600, padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer', border: 'none', transition: 'background-color 0.2s' }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#ea580c'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#f97316'}
                    >
                      Book Free Strategy Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ backgroundColor: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '4rem', height: '4rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Zap style={{ width: '2rem', height: '2rem', color: '#ca8a04' }} />
              </div>
              <h3 style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Resume Design & LinkedIn Optimization</h3>
              <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>
                Very impressive you with fully customizable and highly performanceATS-friendly resumes and LinkedIn profiles that get noticed by recruiters and hiring managers in top companies
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '4rem', height: '4rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Users style={{ width: '2rem', height: '2rem', color: '#ca8a04' }} />
              </div>
              <h3 style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Direct HR Connects</h3>
              <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>
                Your CV delivered directly to relevant hiring managers and decision-makers, bypassing traditional application queues
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '4rem', height: '4rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Gift style={{ width: '2rem', height: '2rem', color: '#ca8a04' }} />
              </div>
              <h3 style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Personal Brand Building</h3>
              <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>
                Establish your thought leadership and professional presence to attract premium opportunities              </p>
            </div>
          </div>

          {/* Our Features Section */}
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', color: '#1f2937', marginBottom: '4rem' }}>
           Complete Career Acceleration Solutions
          </h2>

          {/* Feature 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '5rem' }}>
            <div>
              <img 
                src=""
                alt="Person using phone"
                style={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', width: '100%' }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
               Strategic Job Search That Works
              </h3>
              <p style={{ color: '#4b5563', lineHeight: 1.75 }}>
                        Stop applying blindly through job portals. Our proven job search strategy combines targeted 
                        networking, personal branding, and direct outreach to decision-makers. We help senior professionals 
                        position themselves as the obvious choice for leadership roles, cutting your job search time by 60%.              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                Expert Career Transition Support
              </h3>
              <p style={{ color: '#4b5563', lineHeight: 1.75 }}>
                        Making a career change? Our specialists guide senior professionals through industry pivots, 
                        role transitions, and salary negotiations. From crafting your compelling career story to preparing 
                        for C-suite interviews, we provide end-to-end support to ensure your next move is your best move.              </p>
            </div>
            <div style={{ order: 1 }}>
              <img 
                src="https://tse1.mm.bing.net/th/id/OIP.Aszk3Fe5erP_ETDiRMCT9QHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Leather bag and accessories"
                style={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}