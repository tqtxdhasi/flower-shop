import Link from "next/link";

const PopularBouquetsWidget = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-rose-100">
    <h3 className="text-xl font-semibold text-rose-800 mb-4">
      Popularne Bukiety
    </h3>
    <div className="space-y-4">
      <Link href="/sklep/czerwone-roze" className="group">
        <div className="flex items-center gap-4">
          <img
            src="https://placehold.co/100x100.png?text=Czerwone"
            alt="Czerwone róże klasyczne"
            className="rounded-lg w-20 h-20 object-cover"
          />
          <div>
            <p className="font-medium group-hover:text-rose-700">
              Klasyczna Czerwień
            </p>
            <p className="text-sm">od 149 zł</p>
          </div>
        </div>
      </Link>
      {/* More products... */}
    </div>
  </div>
);
export default PopularBouquetsWidget;
