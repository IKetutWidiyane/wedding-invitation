import { useState } from 'react';
import { FaCheck, FaTimes, FaQuestion } from 'react-icons/fa';

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
      // Here you would typically send the data to a server
      setFormData({ name: '', attendance: '', message: '' });
    }
  };

  return (
    <section className="py-16 px-4 bg-rose-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-great-vibes text-4xl text-center text-rose-600 mb-8">Konfirmasi Kehadiran</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              Terima kasih atas konfirmasinya!
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Nama Anda</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Konfirmasi Kehadiran</label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: 'Hadir', icon: <FaCheck className="mr-1" /> },
                  { value: 'Tidak Hadir', icon: <FaTimes className="mr-1" /> },
                  { value: 'Mungkin', icon: <FaQuestion className="mr-1" /> }
                ].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value={option.value}
                      checked={formData.attendance === option.value}
                      onChange={handleChange}
                      className="mr-2 text-rose-600 focus:ring-rose-500"
                      required
                    />
                    <span className="flex items-center">
                      {option.icon} {option.value}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Ucapan (Opsional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors shadow-md"
            >
              Kirim Konfirmasi
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP;