import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const subjects = [
  'General Inquiry',
  'Booking Request',
  'Pricing Question',
  'Partnership',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const messages = JSON.parse(localStorage.getItem('messages') || '[]');
      messages.push({
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        status: 'unread',
      });
      localStorage.setItem('messages', JSON.stringify(messages));
      setIsSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-lg mx-auto text-center">
          <div
            className="p-8 rounded-lg animate-scale-in"
            style={{ backgroundColor: 'var(--surface)' }}
          >
            <CheckCircle
              size={64}
              className="mx-auto mb-4"
              style={{ color: 'var(--accent)' }}
            />
            <h1
              className="font-heading text-3xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Message Sent!
            </h1>
            <p
              className="text-lg opacity-80 mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              Thank you for reaching out. We'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  subject: '',
                  message: '',
                });
              }}
              className="px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--bg-primary)',
              }}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@lensandlight.com',
      description: 'We reply within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9am-6pm EST',
    },
    {
      icon: MapPin,
      title: 'Studio',
      details: 'New York, NY 10001',
      description: 'By appointment only',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Sat: 9am-6pm',
      description: 'Closed on Sundays',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Get In Touch
          </p>
          <h1
            className="font-heading text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Contact Us
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto opacity-80"
            style={{ color: 'var(--text-secondary)' }}
          >
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div
              className="p-8 rounded-lg mb-8 animate-fade-in"
              style={{ backgroundColor: 'var(--surface)' }}
            >
              <h2
                className="font-heading text-2xl font-semibold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: errors.name ? '#ef4444' : 'var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: errors.email ? '#ef4444' : 'var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: errors.subject ? '#ef4444' : 'var(--border)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subj) => (
                      <option key={subj} value={subj}>
                        {subj}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: errors.message ? '#ef4444' : 'var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-base font-medium tracking-wider uppercase rounded-lg transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--bg-primary)',
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div
              className="p-8 rounded-lg animate-slide-up"
              style={{ backgroundColor: 'var(--surface)' }}
            >
              <h2
                className="font-heading text-2xl font-semibold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div
                      className="flex-shrink-0 p-3 rounded-full"
                      style={{ backgroundColor: 'var(--bg-primary)' }}
                    >
                      <item.icon
                        size={24}
                        style={{ color: 'var(--accent)' }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-medium"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: 'var(--accent)' }}
                      >
                        {item.details}
                      </p>
                      <p
                        className="text-sm opacity-70"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-lg overflow-hidden h-64 md:h-80 animate-scale-in"
              style={{ backgroundColor: 'var(--surface)' }}
            >
              <iframe
                title="Location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889607932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}