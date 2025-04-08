import {
  FaWhatsapp,
  FaTelegramPlane,
  FaSms,
  FaFacebookMessenger,
} from "react-icons/fa";

function Header() {
  return (
    <header className="relative pt-8 px-8 sm:p-16 text-center text-rose-900 rounded-lg shadow-lg bg-rose-100">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 sm:block hidden">
        <img
          src="/Layer 2.png"
          alt="Left decorative element"
          className="w-32 sm:w-48"
        />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 sm:block hidden">
        <img
          src="/Layer 2.png"
          alt="Right decorative element"
          className="w-32 sm:w-48 transform scale-x-[-1] scale-y-[-1]"
        />
      </div>
      <div className="relative ">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Świeże kwiaty dostarczone bezpośrednio do Ciebie w Krakowie
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          Wybierz piękne bukiety na każdą okazję z dostawą lub odbiorem w
          Krakowie.
        </p>
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Złóż zamówienie teraz – skontaktuj się z nami!
          </h2>
          <p className="mt-2 text-lg">
            Wybierz jedną z naszych metod kontaktu:
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="tel:+48731588515"
              className="bg-rose-700 py-3 px-8 rounded-lg hover:bg-rose-800 text-white font-bold transition-all"
            >
              Zamów teraz: +48 731-588-515
            </a>
          </div>
          <div className="mt-6 flex justify-center gap-6">
            <a
              href="https://wa.me/+48731588515"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition-all"
            >
              <FaWhatsapp className="text-3xl" />
            </a>
            <a
              href="https://t.me/olhafedko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-all"
            >
              <FaTelegramPlane className="text-3xl" />
            </a>
            <a
              href="sms:+48731588515"
              className="text-gray-600 hover:text-gray-700 transition-all"
            >
              <FaSms className="text-3xl" />
            </a>
            <a
              href="https://facebook.com/Olha.Fedko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 transition-all"
            >
              <FaFacebookMessenger className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="sm:hidden mt-8 flex justify-center">
        <img src="/Layer 3.png" alt="Mobile view image" className="w-full " />
      </div>
    </header>
  );
}

export default Header;
