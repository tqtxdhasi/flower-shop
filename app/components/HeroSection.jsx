import {
  FaWhatsapp,
  FaTelegramPlane,
  FaSms,
  FaFacebookMessenger,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { shopPhone } from "../data/mainData";

function HeroSection() {
  return (
    <header className="relative pt-8 px-8 sm:p-16 text-center text-rose-900 rounded-lg shadow-lg bg-rose-100">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 sm:block hidden">
        <img
          src="/Layer 2.png"
          alt="Dekoracyjny motyw kwiatowy - kwiaciarnia Kraków"
          className="w-32 sm:w-48"
        />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 sm:block hidden">
        <img
          src="/Layer 2.png"
          alt="Dekoracyjny motyw kwiatowy - kwiaciarnia Kraków"
          className="w-32 sm:w-48 transform scale-x-[-1] scale-y-[-1]"
        />
      </div>
      <div className="relative">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Świeże kwiaty z dostawa w Krakowie
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-prose mx-auto">
          Wybierz piękne bukiety na każdą okazję – nasza kwiaciarnia w Krakowie
          oferuje dostawę kwiatów i odbiór osobisty
        </p>
        <section className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Złóż zamówienie teraz – skontaktuj się z nami!
          </h2>
          <p className="mt-2 text-lg">
            Wybierz jedną z naszych metod kontaktu:
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={`tel:${shopPhone}`}
              className="bg-rose-700 py-3 px-8 rounded-lg hover:bg-rose-800 text-white font-bold transition-all"
            >
              Zamów teraz: {shopPhone}
            </a>
          </div>
          <div className="mt-6 flex justify-center gap-6">
            <IoLogoWhatsapp
              className="text-3xl"
              title="WhatsApp"
              aria-label="WhatsApp"
            />
            <FaTelegramPlane
              className="text-3xl"
              title="Telegram"
              aria-label="Telegram"
            />
            <FaSms className="text-3xl" title="SMS" aria-label="SMS" />
            <FaFacebookMessenger
              className="text-3xl"
              title="Messenger"
              aria-label="Messenger"
            />
          </div>
        </section>
        <p className="mt-4 text-sm text-gray-600">
          Zasady zamówień i akceptacji bukietu dostępne w{" "}
          <a href="#regulamin" className="underline">
            regulaminie
          </a>
        </p>
      </div>
      <div className="sm:hidden mt-8 flex justify-center">
        <img
          src="/Layer 3.png"
          alt="Kwiaciarnia mobilna wersja - Kraków"
          className="w-full"
        />
      </div>
    </header>
  );
}

export default HeroSection;
