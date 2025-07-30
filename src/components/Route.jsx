import { Link } from 'react-scroll';

const Route = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-center space-x-6">
        {['Hero', 'Couple', 'Events', 'Story', 'RSVP', 'Gift'].map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={500}
            className="text-rose-600 hover:text-rose-700 cursor-pointer font-medium"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Route;