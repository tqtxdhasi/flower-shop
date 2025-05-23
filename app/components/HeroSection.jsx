import {
  FaWhatsapp,
  FaTelegramPlane,
  FaSms,
  FaFacebookMessenger,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { shopPhone } from "../data/mainData";
import Image from "next/image";

function HeroSection() {
  return (
    <header className="relative pt-8 px-8 sm:p-16 text-center text-rose-900 rounded-lg shadow-lg bg-rose-100">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 sm:block hidden">
        <Image
          src="/Layer 2.jpg"
          alt="Dekoracyjny motyw kwiatowy - kwiaciarnia Kraków"
          width={192}
          height={192}
          className="w-32 sm:w-48"
          loading="lazy"
        />
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 sm:block hidden">
        <Image
          src="/Layer 2.jpg"
          alt="Dekoracyjny motyw kwiatowy - kwiaciarnia Kraków"
          width={192}
          height={192}
          className="w-32 sm:w-48 transform scale-x-[-1] scale-y-[-1]"
          priority
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
              className="bg-green-700 py-3 px-8 rounded-lg hover:bg-green-800 text-white font-bold transition-all"
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
      <div className="sm:hidden flex justify-center relative w-full h-48">
        <Image
          src="/Layer 3.jpg"
          alt="Kwiaciarnia mobilna wersja - Kraków"
          fill
          priority
          sizes="100vw"
          className="object-bottom object-contain"
        />
      </div>
    </header>
  );
}

export default HeroSection;
