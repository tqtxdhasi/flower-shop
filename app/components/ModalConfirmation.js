export default function ModalConfirmation({ data, onClose }) {
  if (!data) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 max-w-md w-full text-rose-900 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Zamówienie otrzymane!</h2>
        <div className="bg-rose-50 p-4 rounded text-sm space-y-2">
          <p>
            <strong>Budżet:</strong> {data.budget} zł
          </p>
          <p>
            <strong>Ilość róż:</strong> {data.quantity}
          </p>
          <p>
            <strong>Długość łodyg:</strong> {data.height} cm
          </p>
          <p>
            <strong>Opakowanie:</strong> {data.packaging || "Brak / Wstążka"}
          </p>
          <p>
            <strong>Kolor róż:</strong> {data.flowerColor}
          </p>
          <p>
            <strong>Dostawa:</strong> {data.delivery ? "Tak" : "Nie"}
          </p>
          <p>
            <strong>List:</strong> {data.letterOption ? "Tak" : "Nie"}
          </p>
          <p>
            <strong>Zdjęcie:</strong> {data.imageOption ? "Tak" : "Nie"}
          </p>
          <p>
            <strong>Cena podstawowa:</strong> {data.totalPrice} zł
          </p>
          <p>
            <strong>Koszt opakowania:</strong> {data.packagingCost} zł
          </p>
          <p>
            <strong>Suma końcowa:</strong> {data.finalPrice} zł
          </p>
          <p>
            <strong>Numer telefonu:</strong> {data.phoneNumber}
          </p>
        </div>

        <p className="mt-4">
          Dziękujemy! Skontaktujemy się z Tobą wkrótce przez SMS lub telefon w
          celu potwierdzenia zamówienia.
        </p>
        <button
          className="mt-6 w-full py-2 bg-rose-700 text-white rounded-lg hover:bg-rose-800"
          onClick={onClose}
        >
          Zamknij
        </button>
      </div>
    </div>
  );
}
