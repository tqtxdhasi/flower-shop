import React from "react";
import Regulamin from "../components/Regulamin";

export const metadata = {
  title: "Regulamin – Kwiaciarnia Kraków Online",
  description:
    "Zapoznaj się z regulaminem korzystania z usług Kwiaciarni Kraków Online.",
  alternates: {
    canonical: "/regulamin",
  },
};

const page = () => {
  return (
    <div className="p-3">
      <Regulamin />
    </div>
  );
};

export default page;
