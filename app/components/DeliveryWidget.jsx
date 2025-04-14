const DeliveryWidget = () => (
  <section className="bg-rose-700 text-white p-4 rounded-xl shadow-md">
    <h2 className="text-lg font-bold mb-3">🚚 Szybka Dostawa w Krakowie</h2>

    <div className="space-y-3">
      <div className="flex items-start gap-2">
        <span className="shrink-0">📍</span>
        <div>
          <p className="font-medium">Obszar dostaw:</p>
          <p>Kraków</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span>⏲️</span>
        <p>
          <span className="font-medium">Godziny:</span> 8:00 - 23:59
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span>💸</span>
        <p className="font-medium">
          Koszt dostawy: <span className="text-lg">20 zł</span>
        </p>
      </div>

      <div className="pt-2 mt-2 border-t border-rose-600">
        <p className="text-xs opacity-90">
          Zmiana na odbiór osobisty ➔ zwrot 20 zł
        </p>
      </div>
    </div>
  </section>
);

export default DeliveryWidget;
