import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col space-y-3">
      <a
        href="https://t.me"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition-all"
      >
        <FaTelegramPlane size={20} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 text-white p-3 rounded-full shadow-md hover:bg-blue-500 transition-all"
      >
        <FaTwitter size={20} />
      </a>
    </div>
  );
};

export default FloatingButtons;