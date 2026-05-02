import { useState } from 'react';
import { CheckCircle, AlertCircle, PartyPopper, Heart, Camera, Image, Music } from 'lucide-react';

const eventTypes = [
  { id: 'wedding', label: 'Wedding', icon: Heart },
  { id: 'birthday', label: 'Birthday', icon: PartyPopper },
  { id: 'event', label: 'Event', icon: Music },
  { id: 'portrait', label: 'Portrait', icon: Camera },
  { id: 'studio', label: 'Studio', icon: Image },
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
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date must be in the future';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const bookingData = `
=============================
  NEW BOOKING REQUEST
=============================
Date: ${new Date().toLocaleString()}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.date}
Message: ${formData.message}
=============================
`;

      const fileName = `members/jsubs/booking_${Date.now()}.txt`;
      const blob = new Blob([bookingData], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();

      const mailtoUrl = `mailto:vexorix.tech@gmail.com?subject=${encodeURIComponent(' New Booking - ' + formData.eventType)}&body=${encodeURIComponent(
        ` NEW BOOKING REQUEST \n\n` +
        ` Name: ${formData.name}\n` +
        ` Email: ${formData.email}\n` +
        ` Phone: ${formData.phone}\n` +
        ` Event Type: ${formData.eventType}\n` +
        ` Event Date: ${formData.date}\n\n` +
        ` Message:\n${formData.message}\n\n` +
        ` Thank you for choosing Vikky Photography! ✨`
      )}`;
      window.location.href = mailtoUrl;
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
              🎉 Book Another Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
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
            Fill out the form below and we'll get back to you soon! 
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 animate-fade-in"
        >
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
                  backgroundColor: 'var(--surface)',
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
                  backgroundColor: 'var(--surface)',
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                 Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border transition-all duration-300 text-sm"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: errors.phone ? '#ef4444' : 'var(--border)',
                  color: 'var(--text-primary)',
                }}
                placeholder="+91 9655058949"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
                <label
                className="block text-sm font-medium mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                Event Type *
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {eventTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, eventType: type.label }));
                      if (errors.eventType) {
                        setErrors(prev => ({ ...prev, eventType: '' }));
                      }
                    }}
                    className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg border transition-all duration-300 text-xs ${
                      formData.eventType === type.label ? 'scale-105' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{
                      backgroundColor: formData.eventType === type.label ? 'var(--accent)' : 'var(--surface)',
                      borderColor: errors.eventType ? '#ef4444' : 'var(--border)',
                      color: formData.eventType === type.label ? 'var(--bg-primary)' : 'var(--text-primary)',
                    }}
                  >
                    <type.icon size={18} />
                    <span className="font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
              {errors.eventType && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.eventType}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                 Event Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border transition-all duration-300 text-sm"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: errors.date ? '#ef4444' : 'var(--border)',
                  color: 'var(--text-primary)',
                }}
              />
              {errors.date && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.date}
                </p>
              )}
            </div>

            <div>
              {/* Empty div for alignment */}
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ color: 'var(--text-primary)' }}
            >
               Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2.5 rounded-lg border transition-all duration-300 resize-none text-sm"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
              placeholder="Tell us about your event... "
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-sm font-medium tracking-wider uppercase rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
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
