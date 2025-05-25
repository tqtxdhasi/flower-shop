import { shopName, shopPhone } from "../data/mainData";

function Footer() {
  return (
    <footer className="bg-rose-100 text-rose-900 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-3xl" aria-label="Ikona róż">
                🌹
              </span>
              <h2 className="text-2xl font-bold ml-2 text-rose-700">
                {shopName}
              </h2>
            </div>
            <p className="text-sm">
              Internetowa kwiaciarnia z siedzibą w Krakowie – świeże kwiaty,
              oryginalne kompozycje florystyczne tworzone z pasją i ekspresowa
              dostawa pod wskazany adres.{" "}
            </p>
            <p className="text-sm">
              Oferujemy również możliwość osobistego odbioru zamówień.{" "}
            </p>{" "}
            <p className="text-sm">
              Zamów online i spraw radość bliskim wyjątkowymi bukietami!{" "}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-rose-700">Nawigacja</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-rose-700 transition-colors">
                  Strona główna
                </a>
              </li>
              <li>
                <a
                  href="/kwiaty/roze"
                  className="hover:text-rose-700 transition-colors"
                >
                  Róże
                </a>
              </li>
              <li>
                <a
                  href="/regulamin"
                  className="hover:text-rose-700 transition-colors"
                >
                  Regulamin
                </a>
              </li>
              {/*<li>
                <a
                  href="/blog"
                  className="hover:text-rose-700 transition-colors"
                >
                  Poradnik
                </a>
              </li>*/}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-rose-700">Kontakt</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-rose-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {shopPhone}
              </p>
            </div>
          </div>

          {/* Social Media & Certificates 
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-rose-700">Śledź nas</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                aria-label="Profil na Facebooku"
                className="text-rose-700 hover:text-rose-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="Profil na Instagramie"
                className="text-rose-700 hover:text-rose-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>*/}
        </div>

        <div className="mt-12 border-t border-rose-200 pt-8 text-center">
          <p className="text-sm text-rose-700">
            © {new Date().getFullYear() + " " + shopName}. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
