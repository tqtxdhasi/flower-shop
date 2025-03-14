import {
  FaWhatsapp,
  FaTelegramPlane,
  FaSms,
  FaFacebookMessenger,
} from "react-icons/fa";
function Header() {
  return (
    <header className="p-8 sm:p-16 text-center text-white rounded-lg shadow-lg">
      <h1 className="text-3xl sm:text-4xl font-bold">
        Świeże i przystępne cenowo kwiaty, dostarczone do Ciebie
      </h1>
      <p className="mt-4 text-lg sm:text-xl">
        Zamów świeże, piękne kwiaty na każdą okazję. Odbiór lub dostawa dostępna
        w Krakowie.
      </p>
      <div className="mt-8">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Gotowy do zamówienia? Skontaktuj się z nami teraz!
        </h2>
        <p className="mt-2 text-lg">
          Skontaktuj się z nami przez preferowaną metodę:
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="tel:+1234567890"
            className="bg-green-500 py-3 px-8 rounded-lg hover:bg-green-600 text-white font-bold transition-all"
          >
            Zamów teraz: +1 234 567 890
          </a>
        </div>
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition-all"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-all"
          >
            <FaTelegramPlane className="text-3xl" />
          </a>
          <a
            href="sms:+1234567890"
            className="text-gray-600 hover:text-gray-700 transition-all"
          >
            <FaSms className="text-3xl" />
          </a>
          <a
            href="https://m.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800 transition-all"
          >
            <FaFacebookMessenger className="text-3xl" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
