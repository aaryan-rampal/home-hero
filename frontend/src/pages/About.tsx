import AaryanHeadshot from '../assets/images/aaryan_headshot.jpg'
import JavierHeadshot from '../assets/images/javier_headshot.jpg'

const About = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Home Hero</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between students seeking work opportunities and homeowners needing affordable home repairs.
          </p>
        </div>

        {/* Mission Section */}
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To create an accessible platform where students can find meaningful work opportunities while helping homeowners get essential repairs done affordably. We believe that home maintenance shouldn't be a luxury reserved for those with deep pockets.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Coming from underprivileged families ourselves, we understand the frustration of living with needed repairs that seem financially out of reach. We're here to change that by connecting skilled students with homeowners who need reliable, budget-friendly solutions.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Student Opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Affordable Solutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="lg:grid lg:grid-cols-1 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Home Hero was born from a simple observation made by two university students. Javier, studying at SFU, and Aaryan, at UBC, noticed a clear gap in the market: students desperately seeking work opportunities, while homeowners struggled to find affordable help for small repairs and maintenance tasks.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Having grown up in families where money was tight, we both knew the reality of postponing necessary home repairs simply because professional services were too expensive. We watched our families live with leaky faucets, broken fixtures, and other issues that could be easily fixed if only there was an affordable option.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-blue-800 italic">
                "We realized we could solve two problems at once: give students meaningful work while making home repairs accessible to everyone, regardless of their financial situation."
              </p>
              <p className="text-blue-600 font-medium mt-2">- Javier & Aaryan, Co-Founders</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These core values drive everything we do, from how we select our student workers to how we serve our homeowner community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-100 w-24 h-24 rounded-lg mx-auto flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Accessibility</h3>
              <p className="text-gray-600">
                Home repairs shouldn't be a privilege. We make essential home maintenance affordable and accessible to all families, regardless of income.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-24 h-24 rounded-lg mx-auto flex items-center justify-center">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Opportunity</h3>
              <p className="text-gray-600">
                We create meaningful work opportunities for students, helping them gain skills, earn income, and build professional experience while studying.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-purple-100 w-24 h-24 rounded-lg mx-auto flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Community</h3>
              <p className="text-gray-600">
                We believe in the power of community support. By connecting neighbors and students, we strengthen local bonds and mutual aid.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Two students from different universities, united by a shared vision of making home repairs accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={JavierHeadshot} alt="Javier Taylor" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Javier (Anand) Taylor</h3>
                <p className="text-blue-600 font-medium">Co-Founder & CEO</p>
                <p className="text-gray-600 text-sm mt-2">
                  SFU student passionate about creating opportunities for fellow students while solving real community problems.
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src={AaryanHeadshot} alt="Aaryan Rampal" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Aaryan Rampal</h3>
                <p className="text-blue-600 font-medium">Co-Founder & Head of Operations</p>
                <p className="text-gray-600 text-sm mt-2">
                  UBC student dedicated to making essential home services accessible to families from all economic backgrounds.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
