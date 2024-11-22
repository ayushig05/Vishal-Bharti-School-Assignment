import React, { useState, useEffect } from "react";

const TextSlider = () => {
  const slides = [
    "Registrations are open for the classes of LKG, UKG, and I for the session 2025-26"
  ];

  return (
    <div className="relative w-full mx-auto text-center">
      <div className="text-3xl font-semibold text-black bg-slate-50 py-5 shadow-md overflow-hidden">
        <p className="animate-slideRightToLeft">{slides[0]}</p>
      </div>
    </div>
  );
};

export default TextSlider;
