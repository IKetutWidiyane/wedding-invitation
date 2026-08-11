import { useState } from 'react';
import SectionTitle from '../components/wedding/SectionTitle';
import Reveal from '../components/animation/Reveal';
import GoldButton from '../components/wedding/GoldButton';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.attendance) {
      setSubmitted(true);
      setFormData({ name: '', attendance: '', message: '' });
    }
  };

  return (
    <section id="RSVP" className="py-24 px-4 bg-warm-white">
      <div className="max-w-2xl mx-auto">
        <SectionTitle
          eyebrow="RSVP"
          title="Konfirmasi Kehadiran"
          subtitle="We would be honored to celebrate this special day with you"
        />

        <Reveal>
          <div className="border border-champagne p-8 md:p-12">
            {submitted && (
              <div className="mb-8 p-4 border border-sage bg-sage/10 text-olive text-center">
                Terima kasih atas konfirmasinya!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-mocha mb-2 text-sm uppercase tracking-widest-2">
                  Nama Anda
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-champagne py-2 focus:outline-none focus:border-gold transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-mocha mb-4 text-sm uppercase tracking-widest-2">
                  Konfirmasi Kehadiran
                </label>
                <div className="flex flex-wrap gap-6">
                  {['Hadir', 'Tidak Hadir'].map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="attendance"
                        value={option}
                        checked={formData.attendance === option}
                        onChange={handleChange}
                        className="mr-2 accent-gold"
                        required
                      />
                      <span className="text-mocha">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-mocha mb-2 text-sm uppercase tracking-widest-2">
                  Ucapan (Opsional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-transparent border-b border-champagne py-2 focus:outline-none focus:border-gold transition-colors resize-none"
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <GoldButton type="submit" variant="solid">
                  Submit RSVP
                </GoldButton>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default RSVP;