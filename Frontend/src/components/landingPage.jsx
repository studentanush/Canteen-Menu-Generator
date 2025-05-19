import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function LandingPage() {
  const navigate = useNavigate();
  const names = ["Anush", "Vignesh", "Partha", "Nirav", "Krishna"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex flex-col items-center justify-center p-6 text-center">

        <h1 className="text-4xl font-bold text-orange-700 mb-2">🍽️ PICT Canteen</h1>
        <p className="text-lg text-gray-600 mb-6">Weekly menu, made simple and transparent.</p>

        {/* Food Images */}
        <div className="flex gap-6 mb-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7cmu91sWGXLthRlMGTT-n4V2_9V1PxtoONA&s"
            alt="Idli"
            className="w-20 h-20 object-cover rounded-full shadow-md"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9ZlIKymV-9WjNnPfbUP8nCdB_CsJJGGylg&s"
            alt="Paneer"
            className="w-20 h-20 object-cover rounded-full shadow-md"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnD4LLdW0OSpuVJEjC_-Na1hbNpW4Yax22YQ&s"
            alt="Poha"
            className="w-20 h-20 object-cover rounded-full shadow-md"
          />
        </div>

        {/* Login Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/student-login")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow-md transition"
          >
            Login as Student
          </button>
          <button
            onClick={() => navigate("/admin-login")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md transition"
          >
            Login as Admin
          </button>
        </div>

        {/* Optional Extras */}
        <div className="mt-10 text-sm text-gray-500">
          <p>🍛 Today's Breakfast: <span className="font-semibold text-gray-700">Idli, Sambar</span></p>
          <p>💬 “Tasty and clean!” – <i>Akash D.</i></p>
        </div>
        {/* Animated Made By Section */}
        <div className="mt-12 text-sm text-gray-600 text-center">
  <span className="inline-flex items-center">
    👨‍💻 Made with ❤️ by&nbsp;
    <span className="relative w-[80px] h-[20px] inline-block overflow-hidden align-middle">
      <AnimatePresence mode="wait">
        <motion.span
          key={names[currentIndex]}
          initial={{ opacity: 0, y: 10, position: "absolute" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="absolute w-full text-orange-700 font-semibold text-center left-0"
        >
          {names[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  </span>
</div>


      </div>

    </div>

  );
}

