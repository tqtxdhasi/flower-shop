"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    {
      href: "/",
      text: "Strona główna",
      title: "Kwiaciarnia Kraków - Świeże Kwiaty z Dostawą | Kwiaty",
      schemaType: "WebPage",
    },
    {
      text: "Kwiaty",
      schemaType: "ItemList",
      submenu: [
        {
          href: "/kwiaty/roze",
          text: "Róże",
          title: "Róże w Krakowie - Najpiękniejsze Bukiet Róż | Kwiaty",
          schemaType: "Product",
        },
        {
          href: "/kwiaty/tulipany",
          text: "Tulipany",
          title: "Tulipany w Różnych Kolorach - Dostawa w Krakowie",
          schemaType: "Product",
        },
        {
          href: "/kwiaty/lilie",
          text: "Lilie",
          title: "Bukiety z Liliami - Elegancja i Zapach | Kwiaty",
          schemaType: "Product",
        },
        {
          href: "/kwiaty/mieszane",
          text: "Mieszane Bukiety",
          title: "Mieszane Kwiaty w Krakowie - Kompozycje na Każdą Okazję",
          schemaType: "Product",
        },
        {
          href: "/kwiaty/sloneczniki",
          text: "Słoneczniki",
          title: "Słoneczniki z Dostawą w Krakowie - Ciepło i Radość",
          schemaType: "Product",
        },
        {
          href: "/kwiaty/gerbery",
          text: "Gerbery",
          title: "Gerbery w Bukietach - Kwiaty Kraków Online",
          schemaType: "Product",
        },
        {
          href: "/kwiaty/egzotyczne",
          text: "Kwiaty Egzotyczne",
          title: "Egzotyczne Bukiety - Niebanalne Kompozycje Kraków",
          schemaType: "Product",
        },
        {
          href: "/kwiaty/suszone",
          text: "Suszone Kwiaty",
          title: "Suszone Kompozycje - Trwałe Dekoracje Kwiatowe Kraków",
          schemaType: "Product",
        },
      ],
    },

    {
      text: "Okazje",
      schemaType: "ItemList",
      submenu: [
        {
          href: "/okazje/urodziny",
          text: "Urodziny",
          title: "Kwiaty na Urodziny w Krakowie - Zamów z Dostawą",
          schemaType: "Product",
        },
        {
          href: "/okazje/imieniny",
          text: "Imieniny",
          title: "Bukiety na Imieniny - Kwiaciarnia Kraków",
          schemaType: "Product",
        },
        {
          href: "/okazje/walentynki",
          text: "Walentynki",
          title: "Kwiaty na Walentynki w Krakowie - Róże i Wiązanki Miłosne",
          schemaType: "Product",
        },
        {
          href: "/okazje/rocznica",
          text: "Rocznica",
          title: "Kwiaty na Rocznicę - Romantyczne Bukiety Kraków",
          schemaType: "Product",
        },
        {
          href: "/okazje/dzien-matki",
          text: "Dzień Matki",
          title: "Kwiaty na Dzień Matki - Wyjątkowe Kompozycje Kraków",
          schemaType: "Product",
        },
        {
          href: "/okazje/dzien-nauczyciela",
          text: "Dzień Nauczyciela",
          title: "Podziękuj Nauczycielowi Kwiatami - Dostawa Kraków",
          schemaType: "Product",
        },
        {
          href: "/okazje/bez-okazji",
          text: "Bez okazji",
          title: "Kwiaty Bez Okazji - Po Prostu z Miłości | Kwiaty Kraków",
          schemaType: "Product",
        },
      ],
    },
    {
      text: "Prezenty",
      schemaType: "ItemList",
      submenu: [
        {
          href: "/prezenty/czekoladki",
          text: "Czekoladki",
          title: "Czekoladki i Kwiaty - Słodki Dodatek do Bukietu",
          schemaType: "Product",
        },
        {
          href: "/prezenty/kartki",
          text: "Kartki Okolicznościowe",
          title: "Kartki z Życzeniami do Kwiatów - Personalizowane Dodatki",
          schemaType: "Product",
        },
        {
          href: "/prezenty/misie",
          text: "Pluszowe Misie",
          title: "Pluszaki do Kwiatów - Uroczy Dodatek na Prezent",
          schemaType: "Product",
        },
        {
          href: "/prezenty/wino",
          text: "Wino i Prosecco",
          title: "Wino i Prosecco do Kwiatów - Elegancki Prezent z Dostawą",
          schemaType: "Product",
        },
        {
          href: "/prezenty/świece",
          text: "Świece Zapachowe",
          title: "Naturalne Świece i Bukiety - Romantyczny Zestaw",
          schemaType: "Product",
        },
        {
          href: "/prezenty/kosze-upominkowe",
          text: "Kosze Upominkowe",
          title: "Ekskluzywne Kosze z Kwiatami i Prezentami - Kraków",
          schemaType: "Product",
        },
        {
          href: "/prezenty/kawa-herbata",
          text: "Kawa i Herbata",
          title: "Zestawy Kwiaty + Kawa lub Herbata - Relaksujący Upominek",
          schemaType: "Product",
        },
        {
          href: "/prezenty/biżuteria",
          text: "Biżuteria Handmade",
          title: "Kwiaty z Biżuterią - Wyjątkowy Prezent dla Niej",
          schemaType: "Product",
        },
        {
          href: "/prezenty/zestawy",
          text: "Zestawy Prezentowe",
          title: "Zestawy Prezentowe: Kwiaty + Prezenty - Gotowe do Wręczenia",
          schemaType: "Product",
        },
      ],
    },
    {
      text: "Dostawa",
      schemaType: "ItemList",
      submenu: [
        {
          href: "/dostawa/krakow",
          text: "Kraków",
          title: "Dostawa Kwiatów w Krakowie - Profesjonalnie i Punktualnie",
          schemaType: "GeoShape",
        },
        {
          href: "/dostawa/wieliczka",
          text: "Wieliczka",
          title: "Dostawa Kwiatów w Wieliczce - Szybko i Bezpiecznie",
          schemaType: "GeoShape",
        },
        {
          href: "/dostawa/nowa-huta",
          text: "Nowa Huta",
          title: "Dostawa Kwiatów Kraków Nowa Huta - Lokalne Kwiaty",
          schemaType: "GeoShape",
        },
        {
          href: "/dostawa/bronowice",
          text: "Bronowice",
          title: "Kwiaty z Dostawą do Bronowic - Kwiaty",
          schemaType: "GeoShape",
        },
        {
          href: "/dostawa/ruczaj",
          text: "Ruczaj",
          title: "Dostawa Kwiatów Ruczaj Kraków - Prezent na Czas",
          schemaType: "GeoShape",
        },
        {
          href: "/dostawa/podgorze",
          text: "Podgórze",
          title: "Kwiaty Kraków Podgórze - Zamów Online z Dostawą",
          schemaType: "GeoShape",
        },
      ],
    },

    {
      text: "Poradnik",
      schemaType: "CollectionPage",
      submenu: [
        {
          href: "/poradnik/pielegnacja",
          text: "Pielęgnacja Kwiatów",
          title: "Jak Przedłużyć Żywotność Kwiatów - Porady Ekspertów",
          schemaType: "TechArticle",
        },
        {
          href: "/poradnik/jak-zamawiac",
          text: "Jak zamawiać?",
          title: "Instrukcja Składania Zamówień - Krok po Kroku",
          schemaType: "HowTo",
        },
      ],
    },
    {
      href: "/kontakt",
      text: "Kontakt",
      title: "Skontaktuj się z Nami - Kwiaty Kraków",
      schemaType: "ContactPage",
      structuredData: {
        telephone: "+48-123-456-789",
        contactType: "customer service",
      },
    },
  ];

  return (
    <nav
      className="w-full sticky top-0 z-50 bg-rose-800 text-white transition-all"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a
            href="/"
            className="flex items-center text-2xl font-bold hover:text-rose-200 transition-colors space-x-2"
            aria-label=" Kwiaty Kraków - Strona główna"
            itemProp="url"
          >
            <img
              src="/icon1.png"
              alt="Kwiaciarnia Kwiaty - Dostawa kwiatów w Krakowie"
              className="w-10 h-10 rounded-full object-cover"
              width="40"
              height="40"
              loading="eager"
              itemProp="logo"
            />
            <span itemProp="name">
              <span className="sr-only">Kwiaciarnia</span>
              Kwiaty <span className="font-normal">Kraków</span>
            </span>
          </a>

          <ul
            className="hidden md:flex space-x-6 font-medium"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            {menuItems.map((item, index) => (
              <li
                key={item.href || item.text}
                className="relative group"
                itemProp="name"
              >
                {item.submenu ? (
                  <div className="relative">
                    <button
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="hover:text-rose-200 flex items-center space-x-1"
                      itemProp="url"
                    >
                      <span itemProp="name">{item.text}</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <ul
                      className="absolute top-full left-0 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 z-10 min-w-max"
                      role="menu"
                    >
                      {item.submenu.map((sub, subIndex) => (
                        <li
                          key={sub.href}
                          itemScope
                          itemType="https://schema.org/ListItem"
                          itemProp="itemListElement"
                        >
                          <a
                            href={sub.href}
                            className="block px-4 py-2 hover:bg-rose-100"
                            title={sub.title}
                            itemProp="url"
                          >
                            <meta
                              itemProp="position"
                              content={String(subIndex + 1)}
                            />
                            <span itemProp="name">{sub.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-rose-200 transition-colors"
                    title={item.title}
                    itemProp="url"
                  >
                    <span itemProp="name">{item.text}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-rose-700 transition-colors"
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {/* SVG hamburger menu icon should go here */}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[600px] py-2" : "max-h-0"
          }`}
          role="navigation"
          aria-label="Menu mobilne"
        >
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li
                key={`mobile-${item.text}`}
                itemScope
                itemType={`https://schema.org/${item.schemaType}`}
              >
                {item.submenu ? (
                  <>
                    <button
                      className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-rose-700 rounded-md"
                      aria-controls={`mobile-submenu-${index}`}
                      aria-expanded={openMobileSubmenu === index}
                      onClick={() =>
                        setOpenMobileSubmenu(
                          openMobileSubmenu === index ? null : index
                        )
                      }
                    >
                      <span itemProp="name">{item.text}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openMobileSubmenu === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <ul
                      id={`mobile-submenu-${index}`}
                      role="menu"
                      className={`pl-6 space-y-1 overflow-hidden transition-all duration-200 ${
                        openMobileSubmenu === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {item.submenu.map((sub, subIndex) => (
                        <li
                          key={`mobile-${sub.href}`}
                          itemScope
                          itemType="https://schema.org/ListItem"
                          itemProp="itemListElement"
                        >
                          <a
                            href={sub.href}
                            className="block py-2 px-2 text-sm hover:bg-rose-700 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                            title={sub.title}
                            itemProp="url"
                          >
                            <meta
                              itemProp="position"
                              content={String(subIndex + 1)}
                            />
                            <span itemProp="name">{sub.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block py-2 px-4 hover:bg-rose-700 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                    title={item.title}
                    itemProp="url"
                  >
                    <span itemProp="name">{item.text}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
