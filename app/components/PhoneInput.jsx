import FieldGroup from "./FieldGroup";

export default function PhoneInput({
  phoneNumber,
  setPhoneNumber,
  phoneError,
  setPhoneError,
}) {
  const validatePhoneNumber = (number) => /^\+?[0-9]{9,15}$/.test(number);

  return (
    <FieldGroup label="Podaj numer telefonu:">
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => {
          const value = e.target.value;
          setPhoneNumber(value);
          setPhoneError(
            validatePhoneNumber(value) ? "" : "Nieprawidłowy numer telefonu"
          );
        }}
        className={`bg-white w-full px-4 py-2 rounded-lg text-rose-900 border-2 ${
          phoneError ? "border-red-500" : "border-rose-200"
        } focus:ring-rose-500 focus:outline-none focus:border-rose-500`}
        placeholder="np. +48123456789"
        required
      />
      {phoneError && <span className="text-red-600 text-sm">{phoneError}</span>}
    </FieldGroup>
  );
}
