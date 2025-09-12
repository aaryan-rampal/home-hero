import { useState } from 'react'

interface FormData {
  name: string
  email: string
  countryCode: string
  phoneNumber: string
  description: string
  images: FileList | null
}

interface FormErrors {
  name?: string
  email?: string
  phoneNumber?: string
  description?: string
  images?: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    countryCode: '+1',
    phoneNumber: '',
    description: '',
    images: null
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const countryCodes = [
    { code: '+1', country: 'US/CA' },
    { code: '+44', country: 'UK' },
    { code: '+33', country: 'FR' },
    { code: '+49', country: 'DE' },
    { code: '+39', country: 'IT' },
    { code: '+34', country: 'ES' },
    { code: '+91', country: 'IN' },
    { code: '+86', country: 'CN' },
    { code: '+81', country: 'JP' },
    { code: '+61', country: 'AU' }
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone number validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number (10-15 digits)'
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters'
    }

    // Images validation (optional but if provided, check file types and size)
    if (formData.images && formData.images.length > 0) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
      const maxSizeInMB = 5

      for (let i = 0; i < formData.images.length; i++) {
        const file = formData.images[i]
        if (!allowedTypes.includes(file.type)) {
          newErrors.images = 'Only JPEG, PNG, and GIF images are allowed'
          break
        }
        if (file.size > maxSizeInMB * 1024 * 1024) {
          newErrors.images = `Each image must be less than ${maxSizeInMB}MB`
          break
        }
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, images: e.target.files }))

    // Clear error when user selects files
    if (errors.images) {
      setErrors(prev => ({ ...prev, images: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      console.log('Form submitted:', formData)
      setSubmitSuccess(true)

      // Reset form
      setFormData({
        name: '',
        email: '',
        countryCode: '+1',
        phoneNumber: '',
        description: '',
        images: null
      })

      // Reset file input
      const fileInput = document.getElementById('images') as HTMLInputElement
      if (fileInput) fileInput.value = ''

    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h2>
            <p className="text-green-700 mb-6">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team. We're here to help you find the perfect handyman for your home projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">hello@homehero.com</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">(555) 123-4567</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="flex">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="px-3 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code} ({country.country})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`flex-1 px-4 py-3 border-t border-r border-b rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
              </div>

              {/* Description Field */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Describe your project in detail. What kind of work do you need done?"
                />
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
              </div>

              {/* Images Field */}
              <div>
                <label htmlFor="images" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Images (Optional)
                </label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.images ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Upload images of your project (JPEG, PNG, GIF). Max 5MB per image.
                </p>
                {errors.images && <p className="mt-1 text-sm text-red-600">{errors.images}</p>}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors ${
                    isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
