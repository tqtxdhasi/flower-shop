import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useURLSync(state, deps, skipDimensions = false) {
  const router = useRouter();
  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(state).forEach(([key, val]) => {
      if (
        val !== null &&
        val !== undefined &&
        val !== false &&
        val !== "" &&
        !(skipDimensions && ["quantity", "flowerColor", "height"].includes(key))
      ) {
        params.set(key, val);
      }
    });

    const paramString = params.toString();
    const url = paramString ? `?${paramString}` : window.location.pathname;
    router.replace(url, { scroll: false });
  }, deps);
}
