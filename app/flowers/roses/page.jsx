"use client";
import React, { useState } from "react";
import OrderForm from "../../components/OrderForm";
import Image from "next/image";

const images = [
  "/roses2.jpg",
  "/roses1.jpg",
  "/roses3.jpg",
  "/roses4.jpg",
  "/roses5.jpg",
  "/roses6.jpg",
  "/roses7.jpg",
  "/roses8.jpg",
  "/roses9.jpg",
];

const FlowerPage = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className=" flex flex-col md:flex-row p-6 ">
      <div className="w-full md:w-2/3 items-center flex flex-col gap-4">
        <div className="max-h-[500px] aspect-square">
          <Image
            src={selectedImage}
            alt="Selected Flower"
            className="object-cover object-center rounded-lg w-full h-full"
            width={600}
            height={600}
          />
        </div>
        <div className="grid grid-cols-5 w-fit md:grid-cols-6 gap-2 ">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className=" md:w-24"
            >
              <div className="aspect-square ">
                <Image
                  src={img}
                  alt="Thumbnail"
                  className="object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-500 w-full h-full"
                  width={100}
                  height={100}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <OrderForm />
      </div>
    </div>
  );
};

export default FlowerPage;
