import React from "react";
import { useNavigate } from "react-router-dom";


export default function LandingPage() {
  const navigate = useNavigate();

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
      </div>
     
    </div>
    
  );
}

