
import { Link } from 'react-router-dom'
import BackgroundSlideshow from '../components/BackgroundSlideshow'
import Img1 from '../assets/images/IMG_6487.png'
import Img2 from '../assets/images/IMG_6488.png'
import Img3 from '../assets/images/IMG_6489.png'
import Img4 from '../assets/images/IMG_6490.png'
import Img5 from '../assets/images/IMG_6491.png'
import Img6 from '../assets/images/IMG_6493.png'
// Add/remove images as needed

const imageList = [Img1, Img2, Img3, Img4, Img5, Img6]; // Control images here
const backgroundOpacity = 0.35; // Control opacity here (0 to 1)

const Landing = () => {
  return (
    <div className="relative">
      <div>
        <BackgroundSlideshow images={imageList} opacity={backgroundOpacity} />
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Home's <span className="text-blue-600">Hero</span> is Here
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with trusted handymen in your area for all your home repair and maintenance needs.
              From quick fixes to major projects, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Find a Handyman
              </Link>
              <Link
                to="/about"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
              <p className="text-blue-700 mt-4 font-semibold">
                Or Call Us (555) 123-4567
              </p>
          </div>
        </div>
      </section>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Short Waits, Small Rates
            </h2>
            <p className="text-lg text-gray-600">
              We specialize in small jobs and quick turnarounds to get your home back in shape fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Professionals</h3>
              <p className="text-gray-600">
                All our handymen are background-checked and verified to ensure quality and safety.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Get matched with available handymen in your area within minutes, not days.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                We stand behind our work with a satisfaction guarantee and customer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services We Offer (for now...)
            </h2>
            {/* <p className="text-lg text-gray-600">
              From small repairs to , we handle it all
            </p> */}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Drywall Repair',
              'Plumbing',
              'Carpentry',
              'Cabinet Repair',
              'Painting',
              'Flooring',
            ].map((service, index) => (
              <div key={index} className="bg-white p-12 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied homeowners who trust Home Hero
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Landing
