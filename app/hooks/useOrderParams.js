import { useEffect } from "react";

export default function useOrderParams(setters) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(setters).forEach(([key, setter]) => {
      const raw = params.get(key);
      if (raw != null) {
        if (raw === "true" || raw === "false") setter(raw === "true");
        else if (!isNaN(Number(raw))) setter(Number(raw));
        else setter(raw);
      }
    });
  }, []);
}
