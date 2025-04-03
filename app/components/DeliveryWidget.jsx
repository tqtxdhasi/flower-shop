const DeliveryWidget = () => (
  <div className="bg-rose-700 text-white p-6 rounded-xl">
    <h3 className="text-xl font-bold mb-4">Dostawa Róż w Krakowie</h3>
    <div className="space-y-2">
      <p>🏙️ Obszar dostaw:</p>
      <ul className="list-disc pl-6">
        <li>Cały Kraków</li>
        <li>Wieliczka</li>
        <li>Skawina</li>
      </ul>
      <div className="mt-4">
        <p className="text-2xl font-bold">🚚 Koszt dostawy: 25 zł</p>
        <p className="text-sm">Przy zamówieniach powyżej 300 zł - gratis!</p>
      </div>
    </div>
  </div>
);

export default DeliveryWidget;
