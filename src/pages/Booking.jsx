import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

const eventTypes = [
  'Wedding',
  'Pre-wedding',
  'Event',
  'Portrait',
  'Fashion',
  'Other',
];

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      bookings.push({
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        status: 'pending',
      });
      localStorage.setItem('bookings', JSON.stringify(bookings));
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
              Booking Submitted!
            </h1>
            <p
              className="text-lg opacity-80 mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              Thank you for your booking request. We'll get back to you within 24-48
              hours to confirm your appointment.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  eventType: '',
                  date: '',
                  message: '',
                });
              }}
              className="px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--bg-primary)',
              }}
            >
              Book Another Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Book Your Session
          </p>
          <h1
            className="font-heading text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Request a Booking
          </h1>
          <p
            className="text-lg opacity-80"
            style={{ color: 'var(--text-secondary)' }}
          >
            Fill out the form below and we'll get back to you soon.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 animate-fade-in"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  backgroundColor: 'var(--surface)',
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
                  backgroundColor: 'var(--surface)',
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: errors.phone ? '#ef4444' : 'var(--border)',
                  color: 'var(--text-primary)',
                }}
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Event Type *
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: errors.eventType ? '#ef4444' : 'var(--border)',
                  color: 'var(--text-primary)',
                }}
              >
                <option value="">Select event type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.eventType && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.eventType}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Event Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: errors.date ? '#ef4444' : 'var(--border)',
                color: 'var(--text-primary)',
              }}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.date}
              </p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
              placeholder="Tell us about your event..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 text-base font-medium tracking-wider uppercase rounded-lg transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--bg-primary)',
            }}
          >
            Submit Booking Request
          </button>
        </form>
      </div>
    </div>
  );
}