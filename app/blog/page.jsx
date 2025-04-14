import DeliveryWidget from "../components/DeliveryWidget";
import PopularBouquetsWidget from "../components/PopularBouquetsWidget";
import { HeaderBlog } from "../components/HeaderBlog";
import { BlogCard } from "../components/BlogCard";

const blogPosts = [
  {
    title: "Jak Wybrać Idealne Róże w Krakowie? Poradnik 2024",
    excerpt:
      "Poznaj sekrety wyboru najświeższych róż od lokalnych dostawców. Przewodnik po krakowskich dzielnicach i najlepszych okazjach!",
    image: "https://placehold.co/800x400.png?text=Proper+Watering+Technique",
    date: "15 Maj 2024",
    readingTime: "5 min czytania",
    href: "/blog/jak-wybrac-idealne-roze-krakow",
    location: "Kraków 🌹",
  },
  {
    title: "Jak Przedłużyć Życie Róż w Krakowie? 7 Sprawdzonych Metod",
    excerpt:
      "Poznaj tajniki krakowskich florystów! Dowiedz się jak twarda woda z Wisły wpływa na trwałość róż i zamów profesjonalną odżywkę z dostawą pod Twój adres.",
    image: "https://placehold.co/800x400.png?text=Proper+Watering+Technique",
    date: "20 Maj 2024",
    readingTime: "7 min czytania",
    href: "/blog/przedluzanie-zycia-roz-krakow",
    tags: ["Poradnik Kraków 🌹", "Roze"],
  },
];

const RoseCareBlogPost = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6">
      <HeaderBlog />
      <section className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        <aside className="space-y-6">
          <DeliveryWidget />
          <PopularBouquetsWidget />
        </aside>
      </section>
    </div>
  );
};

export default RoseCareBlogPost;
