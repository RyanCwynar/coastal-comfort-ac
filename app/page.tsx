"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 bg-amber-500 text-white text-center py-2 px-4 text-sm font-medium z-[1001]">
        ✨ This is a free redesign mockup created by Ryan Cwynar — <a href="https://ryancwynar.com" className="underline hover:no-underline">Learn More</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-[1000] px-4 md:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">❄️</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:block">Coastal Comfort</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-sky-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-sky-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-sky-600 transition-colors">Contact</a>
          </div>
          <a href="tel:9547822665" className="bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-sky-700 transition-colors text-sm whitespace-nowrap">
            (954) 782-COOL
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-4 bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRIMjR2MmgxMnYtMnptMC04djJIMjR2LTJoMTJ6bTAgNEgyNHYyaDEydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-sky-600/30 text-sky-100 text-sm font-medium px-4 py-2 rounded-full mb-6">
              ❄️ Trusted Since 1985 • Family Owned & Operated
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expert HVAC Service for South Florida Homes & Businesses
            </h1>
            <p className="text-lg md:text-xl text-sky-100 mb-8 max-w-2xl">
              For nearly 40 years, Coastal Comfort has delivered quality HVAC repairs, installations, and maintenance at affordable prices. 24/7 emergency service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-white text-sky-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-sky-50 transition-colors text-center">
                Get Free Estimate
              </a>
              <a href="tel:9547822665" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors text-center">
                Call (954) 782-2665
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🏆</span>
              <span className="font-semibold text-gray-900">Since 1985</span>
              <span className="text-sm text-gray-500">40 Years Experience</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">👨‍👩‍👧‍👦</span>
              <span className="font-semibold text-gray-900">Family Owned</span>
              <span className="text-sm text-gray-500">Local & Accountable</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🕐</span>
              <span className="font-semibold text-gray-900">24/7 Emergency</span>
              <span className="text-sm text-gray-500">Always Available</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">📋</span>
              <span className="font-semibold text-gray-900">Licensed</span>
              <span className="text-sm text-gray-500">CAC041117</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our HVAC Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to complete system installations, we handle all your heating and cooling needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">AC Repair</h3>
              <p className="text-gray-600">Fast, reliable air conditioning repairs to get you comfortable again. Same-day service available.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">❄️</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">AC Installation</h3>
              <p className="text-gray-600">Expert installation of new high-efficiency AC systems with quality equipment and workmanship.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Heating Services</h3>
              <p className="text-gray-600">Keep your home warm during cooler months with our heating repair and installation services.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Maintenance</h3>
              <p className="text-gray-600">Preventive maintenance plans to keep your system running efficiently and prevent costly breakdowns.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Home Automation</h3>
              <p className="text-gray-600">Smart thermostat installation and home automation integration for total comfort control from anywhere.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Commercial HVAC</h3>
              <p className="text-gray-600">Complete commercial heating, ventilation, and refrigeration services for businesses of all sizes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your South Florida Team for Comfort & Value
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 1985, owners Tim Waterhouse and Tony Plastini have built Coastal Comfort from the ground up with a simple philosophy: quality work at an affordable price is the key to success.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As a family-run business, we take pride and accountability in every job. Our experienced team is recognized for achieving the highest level of competence in the HVAC industry.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-sky-600 mb-1">40+</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-sky-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Service</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-600 to-sky-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Coastal Comfort?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-sky-200 mt-1">✓</span>
                  <span>Family owned with direct owner access & accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-200 mt-1">✓</span>
                  <span>Nearly 40 years of South Florida HVAC expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-200 mt-1">✓</span>
                  <span>Licensed, insured, and fully certified technicians</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-200 mt-1">✓</span>
                  <span>Affordable pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-200 mt-1">✓</span>
                  <span>24-hour emergency on-call service available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-200 mt-1">✓</span>
                  <span>Residential & commercial expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-sky-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need HVAC Service? We're Here to Help
          </h2>
          <p className="text-lg text-sky-100 mb-8">
            Whether it's an emergency repair or a new installation, our expert team is ready to deliver the quality service you deserve.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:9547822665" className="bg-white text-sky-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-sky-50 transition-colors">
              📞 (954) 782-COOL
            </a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">
              Get in touch for a free estimate or emergency service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">
                881 W. McNab Road<br />
                Pompano Beach, FL 33060
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:9547822665" className="text-sky-600 hover:underline font-semibold">
                  (954) 782-COOL (2665)
                </a>
                <br />
                <span className="text-sm">24/7 Emergency Available</span>
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🕐</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">
                Mon - Fri: 8am - 5pm<br />
                <span className="text-sm">24-hour emergency service</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">❄️</span>
              </div>
              <div>
                <div className="font-bold text-white">Coastal Comfort AC</div>
                <div className="text-sm">License #CAC041117</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm">
                © {new Date().getFullYear()} Coastal Comfort, Inc. All rights reserved.
              </div>
              <div className="text-sm mt-1">
                Serving Pompano Beach, Boca Raton & South Florida Since 1985
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var params = new URLSearchParams(window.location.search);
              var ref = params.get('ref');
              if (ref) {
                var img = new Image();
                img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
              }
            })();
          `,
        }}
      />
    </div>
  );
}
