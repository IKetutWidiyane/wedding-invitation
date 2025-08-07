import { Link } from 'react-scroll';

const Route = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-sm z-50 backdrop-blur-md">
  <div className="max-w-screen-lg mx-auto px-4 py-3 flex flex-wrap justify-center space-x-4">
    {['Hero', 'Couple', 'Events', 'Story', 'RSVP', 'Gift'].map((item) => (
      <Link
        key={item}
        to={item}
        smooth={true}
        duration={500}
        className="text-rose-600 hover:text-rose-700 cursor-pointer font-semibold text-sm md:text-base"
      >
        {item}
      </Link>
    ))}
  </div>
</nav>

  );
};

export default Route;