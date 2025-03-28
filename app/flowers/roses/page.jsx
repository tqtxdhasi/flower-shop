import React, { Suspense } from "react";
import OrderForm from "../../components/OrderForm";
import Image from "next/image";

const FlowerPage = () => {
  return (
    <div className="relative flex flex-col md:flex-row p-6 gap-8 max-h[400px]">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 w-full  ">
        <Image
          src={"/1223.jpg"}
          alt={"Róże"}
          className="object-cover rounded-lg"
          width={500}
          height={200}
        />
        <Image
          src={"/1223.jpg"}
          alt={"Róże"}
          className="object-cover rounded-lg"
          width={500}
          height={200}
        />
        <Image
          src={"/1223.jpg"}
          alt={"Róże"}
          className="object-cover rounded-lg"
          width={500}
          height={200}
        />
        <Image
          src={"/1223.jpg"}
          alt={"Róże"}
          className="object-cover rounded-lg"
          width={500}
          height={200}
        />
        <Image
          src={"/1223.jpg"}
          alt={"Róże"}
          className="object-cover rounded-lg"
          width={500}
          height={200}
        />
        <Image
          src={"/1223.jpg"}
          alt={"Róże"}
          className="object-cover rounded-lg"
          width={500}
          height={200}
        />
      </div>
      <div>
        <OrderForm />
      </div>
    </div>
  );
};

export default FlowerPage;
