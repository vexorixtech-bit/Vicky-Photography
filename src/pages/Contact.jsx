import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, CheckCircle, AlertCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    label: 'Email',
    details: 'vexorix.tech@gmail.com',
    description: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    title: 'Phone',
    label: 'Phone',
    details: '+91 9655058949',
    description: 'Mon-Sat, 9am-6pm IST',
  },
  {
    icon: MapPin,
    title: 'Studio',
    label: 'Address',
    details: '2/544 Anna Nagar, Chennai - 600002',
    description: 'By appointment only',
  },
];

const subjects = [
  'General Inquiry',
  'Bookng Request',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const contactData = `
=============================
  NEW CONTACT MESSAGE
=============================
Date: ${new Date().toLocaleString()}
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
=============================
`;

      const fileName = `members/jsubs/contact_${Date.now()}.txt`;
      const blob = new Blob([contactData], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();

      const mailtoUrl = `mailto:vexorix.tech@gmail.com?subject=${encodeURIComponent(' ' + formData.subject)}&body=${encodeURIComponent(
        ` NEW CONTACT MESSAGE 🎊\n\n` +
        ` Name: ${formData.name}\n` +
        ` Email: ${formData.email}\n` +
        ` Subject: ${formData.subject}\n\n` +
        ` Message:\n${formData.message}\n\n` +
        ` Thank you for contacting Vikky Photography! `
      )}`;
      window.location.href = mailtoUrl;
      setIsSubmitted(true);
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
              Message Sent! 🎊
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

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
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
            className="text-lg opacity-80"
            style={{ color: 'var(--text-secondary)' }}
          >
            Have a question or want to work together? We'd love to hear from you! 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className="rounded-lg overflow-hidden h-64 md:h-80"
            style={{ backgroundColor: 'var(--surface)' }}
          >
            <iframe
              title="Location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889607932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

          <div
            className="p-6 md:p-8 rounded-lg"
            style={{ backgroundColor: 'var(--surface)' }}
          >
            <h4
              className="font-heading text-lg font-semibold mb-4 flex items-center gap-2"
              style={{ color: 'var(--accent)' }}
            >
               Send a Message
            </h4>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border transition-all duration-300 text-sm"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: errors.name ? '#ef4444' : 'var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border transition-all duration-300 text-sm"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: errors.email ? '#ef4444' : 'var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border transition-all duration-300 text-sm"
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
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border transition-all duration-300 resize-none text-sm"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: errors.message ? '#ef4444' : 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                  placeholder="Your message... "
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 text-sm font-medium tracking-wider uppercase rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="p-4 rounded-lg text-center"
              style={{ backgroundColor: 'var(--surface)' }}
            >
              <info.icon
                size={24}
                className="mx-auto mb-2"
                style={{ color: 'var(--accent)' }}
              />
              <p
                className="font-medium text-sm mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {info.label}
              </p>
              <p
                className="text-sm"
                style={{ color: 'var(--accent)' }}
              >
                {info.details}
              </p>
              <p
                className="text-xs mt-1 opacity-60"
                style={{ color: 'var(--text-secondary)' }}
              >
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}