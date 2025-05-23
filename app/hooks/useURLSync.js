import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useURLSync(state, deps) {
  const router = useRouter();
  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(state).forEach(([key, val]) => {
      if (val !== null && val !== undefined && val !== false && val !== "") {
        params.set(key, val);
      }
    });
    router.replace(`?${params.toString()}`, { scroll: false });
  }, deps);
}
