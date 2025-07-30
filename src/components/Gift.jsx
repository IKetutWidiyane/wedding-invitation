import { FaCopy, FaQrcode } from 'react-icons/fa';

const Gift = () => {
  const bankAccounts = [
    {
      bank: 'BCA',
      name: 'I Ketut Surya',
      number: '123 456 7890'
    },
    {
      bank: 'Mandiri',
      name: 'Ayu Dewi',
      number: '098 765 4321'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Nomor rekening berhasil disalin!');
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-great-vibes text-4xl text-center text-rose-600 mb-6">Amplop Digital</h2>
        
        <p className="text-center text-gray-600 mb-8">
          Tanpa mengurangi rasa hormat, bagi yang ingin memberikan tanda kasih:
        </p>
        
        <div className="space-y-6">
          {bankAccounts.map((account, index) => (
            <div key={index} className="bg-rose-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-rose-600 mb-3">{account.bank}</h3>
              <div className="space-y-2">
                <p>Atas Nama: <span className="font-medium">{account.name}</span></p>
                <div className="flex justify-between items-center">
                  <p>No. Rekening: <span className="font-medium">{account.number}</span></p>
                  <button 
                    onClick={() => copyToClipboard(account.number.replace(/\s/g, ''))}
                    className="text-rose-600 hover:text-rose-700 flex items-center gap-1 text-sm"
                  >
                    <FaCopy /> Salin
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-rose-50 p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-xl font-semibold text-rose-600 mb-4">QRIS</h3>
          <div className="flex justify-center mb-4">
            <div className="bg-white p-4 rounded-lg inline-flex items-center justify-center">
              <FaQrcode className="text-6xl text-gray-400" />
            </div>
          </div>
          <button className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors flex items-center gap-2 mx-auto">
            <FaQrcode /> Lihat QR Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gift;