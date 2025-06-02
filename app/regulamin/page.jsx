import React from "react";
import Regulamin from "../components/Regulamin";
import { shopName } from "../data/mainData";

export const metadata = {
  title: `Regulamin | ${shopName}`,
  description: `Zapoznaj się z regulaminem korzystania z usług "${shopName}"`,
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
