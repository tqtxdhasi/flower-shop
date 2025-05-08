"use client";
import React, { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  const images = [
    "/roses2.jpg",
    "/roses8.jpg",
    "/roses1.jpg",
    "/roses3.jpg",
    "/roses4.jpg",
    "/roses5.jpg",
    "/roses6.jpg",
    "/roses7.jpg",
    "/roses9.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full p-4 md:w-2/3  flex flex-col md:flex-row-reverse gap-4 rounded-xl bg-rose-50">
      <div className="max-w-[700px] aspect-square">
        <Image
          src={selectedImage}
          alt="Luksusowy bukiet świeżych róż online"
          className="object-cover object-center rounded-lg w-full h-full"
          width={900}
          height={900}
        />
      </div>
      <div className="grid grid-cols-5 md:flex md:flex-wrap w-fit gap-2 h-fit justify-center ">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className="w-16 md:w-24"
          >
            <div className="aspect-square ">
              <Image
                src={img}
                alt={`Miniaturka bukietu róż – opcja ${index + 1}`}
                className="object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-500 w-full h-full"
                width={100}
                height={100}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
