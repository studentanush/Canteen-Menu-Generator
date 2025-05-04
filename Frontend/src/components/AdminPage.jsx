import React, { useState } from "react";

const AdminPage = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [dayIndex, setDayIndex] = useState(0);
  const [menuData, setMenuData] = useState(Array(7).fill({
    breakfast: "",
    lunch: { dry: "", gravy: "", rice: "", chapati: "", salad: "" },
    dinner: { dry: "", gravy: "", rice: "", chapati: "", salad: "" },
  }));

  const [feedbackList] = useState([
    { user: "Student A", comment: "Loved the lunch!", rating: 4 },
    { user: "Student B", comment: "Can improve dinner.", rating: 3 },
    { user: "Student C", comment: "Great variety!", rating: 5 },
  ]);

  const handleInput = (mealType, field, value) => {
    const updated = [...menuData];
    if (mealType === "breakfast") {
      updated[dayIndex]["breakfast"] = value;
    } else {
      updated[dayIndex][mealType][field] = value;
    }
    setMenuData(updated);
  };

  const nextDay = () => {
    if (dayIndex < 6) setDayIndex(dayIndex + 1);
  };

  const generateMenu = () => {
    console.log("Generated Menu:", menuData);
    alert("Menu generated! Check console for output.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-2">

        {/* Menu Input Section */}
        <div className="lg:col-span-2 bg-white shadow-2xl rounded-3xl p-8 space-y-6 border border-green-100">
          <h2 className="text-4xl font-extrabold text-green-700 tracking-wide text-center">🍽️ {days[dayIndex]}</h2>

          {/* Breakfast */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Breakfast</label>
            <select
              className="w-full border border-green-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50"
              value={menuData[dayIndex].breakfast}
              onChange={(e) => handleInput("breakfast", null, e.target.value)}
            >
              <option value="">Select Breakfast</option>
              <option value="Poha & Tea">Poha & Tea</option>
              <option value="Idli & Sambhar">Idli & Sambhar</option>
              <option value="Aloo Paratha">Aloo Paratha</option>
            </select>
          </div>

          {/* Lunch and Dinner */}
          <div className="grid md:grid-cols-2 gap-10">
            {["lunch", "dinner"].map((meal) => (
              <div key={meal} className="bg-green-50 p-4 rounded-2xl shadow-inner space-y-4">
                <h3 className="text-2xl font-semibold text-green-600 capitalize">{meal}</h3>
                {["dry", "gravy", "rice", "chapati", "salad"].map((item) => (
                  <input
                    key={item}
                    type="text"
                    placeholder={`${item.toUpperCase()}`}
                    className="w-full border border-green-200 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={menuData[dayIndex][meal][item]}
                    onChange={(e) => handleInput(meal, item, e.target.value)}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <button
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 disabled:opacity-50 transition"
              onClick={() => setDayIndex(dayIndex - 1)}
              disabled={dayIndex === 0}
            >
              ⬅ Previous
            </button>
            {dayIndex < 6 ? (
              <button
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                onClick={nextDay}
              >
                Next ➡
              </button>
            ) : (
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
                onClick={generateMenu}
              >
                🚀 Generate
              </button>
            )}
          </div>
        </div>

        {/* Feedback Viewer */}
        <div className="bg-white shadow-xl rounded-3xl p-6 space-y-6 border border-green-100 h-fit sticky top-10">
          <h2 className="text-2xl font-bold text-green-700 text-center">📝 User Feedback</h2>
          <div className="space-y-4">
            {feedbackList.map((fb, idx) => (
              <div
                key={idx}
                className="border-l-4 border-green-500 pl-4 py-3 px-3 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-green-700">{fb.user}</span> rated it <span className="font-bold">{fb.rating}★</span>
                </p>
                <p className="text-gray-600 italic mt-1 text-sm">"{fb.comment}"</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminPage;


