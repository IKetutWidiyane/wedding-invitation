import { FaClock, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const EventDetail = () => {
  const events = [
    {
      title: "Akad Nikah",
      date: "Sabtu, 30 Agustus 2025",
      time: "08:00 - 10:00 WITA",
      location: "Kediaman Mempelai Wanita, Ubud, Bali"
    },
    {
      title: "Resepsi",
      date: "Sabtu, 30 Agustus 2025",
      time: "11:00 - 15:00 WITA",
      location: "Gedung Serba Guna, Ubud, Bali"
    }
  ];

  return (
    <section className="py-16 px-4 bg-rose-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-great-vibes text-4xl text-center text-rose-600 mb-12">Detail Acara</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-rose-600 mb-4">{event.title}</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaCalendarAlt className="text-rose-400 mt-1 flex-shrink-0" />
                  <p>{event.date}</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaClock className="text-rose-400 mt-1 flex-shrink-0" />
                  <p>{event.time}</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-rose-400 mt-1 flex-shrink-0" />
                  <p>{event.location}</p>
                </div>
              </div>
              
              <button className="mt-6 px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all flex items-center gap-2 mx-auto">
                <FaMapMarkerAlt /> Lihat Lokasi
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.028920711012!2d115.25972231533865!3d-8.733752393758266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246bc8b3b08a5%3A0x4c1e3b0d5b9d5b1f!2sUbud%2C%20Gianyar%2C%20Bali!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetail;