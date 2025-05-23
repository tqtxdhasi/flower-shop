import Checkbox from "./Checkbox";
import {
  DELIVERY_CHARGE,
  LETTER_COST,
  IMAGE_COST,
} from "../kwiaty/roze/roseData";

export default function Extras({
  delivery,
  setDelivery,
  letterOption,
  setLetterOption,
  imageOption,
  setImageOption,
}) {
  return (
    <>
      <Checkbox
        label={`Dołącz dostawę (+${DELIVERY_CHARGE} zl)`}
        checked={delivery}
        onChange={() => setDelivery(!delivery)}
      />
      <Checkbox
        label={`Dołącz list (+${LETTER_COST} zl)`}
        checked={letterOption}
        onChange={() => setLetterOption(!letterOption)}
      />
      <Checkbox
        label={`Dołącz zdjęcie (+${IMAGE_COST} zl)`}
        checked={imageOption}
        onChange={() => setImageOption(!imageOption)}
      />
    </>
  );
}
