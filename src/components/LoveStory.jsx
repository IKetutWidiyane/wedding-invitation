const LoveStory = () => {
  const milestones = [
    {
      year: "2018",
      title: "Pertemuan Pertama",
      description: "Bertemu di kampus Universitas Udayana"
    },
    {
      year: "2020",
      title: "Mulai Hubungan",
      description: "Resmi berpacaran setelah lulus kuliah"
    },
    {
      year: "2023",
      title: "Tunangan",
      description: "Melangsungkan acara tunangan di Bali"
    },
    {
      year: "2025",
      title: "Pernikahan",
      description: "Menikah di Ubud, Bali"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-great-vibes text-4xl text-center text-rose-600 mb-12">Perjalanan Cinta Kami</h2>
        
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-rose-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
              >
                <div className={`w-24 flex-shrink-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} md:px-4`}>
                  <span className="inline-block px-3 py-1 bg-rose-600 text-white rounded-full">
                    {milestone.year}
                  </span>
                </div>
                
                <div className="absolute left-1/2 w-4 h-4 rounded-full bg-rose-600 transform -translate-x-1/2 mt-2"></div>
                
                <div className={`flex-1 bg-rose-50 p-6 rounded-lg shadow-sm ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <h3 className="text-xl font-semibold text-rose-600 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;