import React, { useContext, useEffect, useState } from "react";
import { ContextAPI } from "./Context";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const breakfastOptions = ["Idli", "Dosa", "Poha", "Paratha", "Upma", "Bread Omelette"];

export default function AdminPage() {
    const [feedback, setFeedback] = useState([{}]);
    const [menu, setMenu] = useState(
        days.map(day => ({
            day,
            breakfast: "",
            lunchDryVeg: "",
            lunchGravyVeg: "",
            lunchRice: "",
            lunchDal: "",
            lunchChapati: "",
            lunchSalad: "",
            dinnerDryVeg: "",
            dinnerGravyVeg: "",
            dinnerRice: "",
            dinnerDal: "",
            dinnerChapati: "",
            dinnerSalad: ""
        }))
    );

    const [tab, setTab] = useState("edit");
    const [currentDayIndex, setCurrentDayIndex] = useState(0);

    const handleChange = (index, field, value) => {
        const updated = [...menu];
        updated[index][field] = value;
        setMenu(updated);
    };

    const generatePDF = () => {
        const doc = new jsPDF("landscape", "pt", "A4"); // Landscape for wider table

        doc.setFontSize(22);
        doc.setTextColor(40);
        doc.text("Weekly Canteen Menu", 40, 50);

        const columns = [
            { header: "Day", dataKey: "day" },
            { header: "Breakfast", dataKey: "breakfast" },
            { header: "Lunch: Dry Veg", dataKey: "lunchDryVeg" },
            { header: "Lunch: Gravy Veg", dataKey: "lunchGravyVeg" },
            { header: "Lunch: Rice", dataKey: "lunchRice" },
            { header: "Lunch: Dal", dataKey: "lunchDal" },
            { header: "Lunch: Chapati", dataKey: "lunchChapati" },
            { header: "Lunch: Salad", dataKey: "lunchSalad" },
            { header: "Dinner: Dry Veg", dataKey: "dinnerDryVeg" },
            { header: "Dinner: Gravy Veg", dataKey: "dinnerGravyVeg" },
            { header: "Dinner: Rice", dataKey: "dinnerRice" },
            { header: "Dinner: Dal", dataKey: "dinnerDal" },
            { header: "Dinner: Chapati", dataKey: "dinnerChapati" },
            { header: "Dinner: Salad", dataKey: "dinnerSalad" },
        ];

        const rows = menu.map(day => ({
            day: day.day,
            breakfast: day.breakfast,
            lunchDryVeg: day.lunchDryVeg,
            lunchGravyVeg: day.lunchGravyVeg,
            lunchRice: day.lunchRice,
            lunchDal: day.lunchDal,
            lunchChapati: day.lunchChapati,
            lunchSalad: day.lunchSalad,
            dinnerDryVeg: day.dinnerDryVeg,
            dinnerGravyVeg: day.dinnerGravyVeg,
            dinnerRice: day.dinnerRice,
            dinnerDal: day.dinnerDal,
            dinnerChapati: day.dinnerChapati,
            dinnerSalad: day.dinnerSalad,
        }));

        autoTable(doc, {
            head: [columns.map(col => col.header)],
            body: rows.map(row => columns.map(col => row[col.dataKey])),
            startY: 70,
            styles: {
                fontSize: 10,
                cellPadding: 8,
                halign: "center",
                valign: "middle",
            },
            headStyles: {
                fillColor: [63, 81, 181],
                textColor: 255,
                fontStyle: "bold",
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245],
            },
            margin: { left: 40, right: 40 },
            theme: "grid",
            tableWidth: "auto",
        });

        doc.save("WeeklyMenu.pdf");
    };

    const onClickFeedback = async () => {
        const response = await axios.get("http://localhost:4000/api/feedback");
        console.log(response.data.response);
        setFeedback(response.data.response);
    };

    useEffect(() => {
        onClickFeedback();
    }, []);

    return (
        <div className="flex min-h-screen bg-gradient-to-r from-purple-100 to-indigo-100 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-xl rounded-r-3xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-indigo-700">Admin Panel</h2>
                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => setTab("edit")}
                        className={`text-left px-4 py-2 rounded-lg ${tab === "edit" ? "bg-indigo-200 text-indigo-800 font-semibold" : "hover:bg-indigo-100"}`}
                    >
                        Edit / Generate
                    </button>
                    <button
                        onClick={() => setTab("feedback")}
                        className={`text-left px-4 py-2 rounded-lg ${tab === "feedback" ? "bg-indigo-200 text-indigo-800 font-semibold" : "hover:bg-indigo-100"}`}
                    >
                        Feedback
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-y-auto">
                {tab === "edit" && (
                    <div className="space-y-6">
                        <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
                            <h3 className="text-2xl font-semibold text-indigo-700 text-center">
                                {menu[currentDayIndex].day}
                            </h3>

                            {/* Breakfast */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Breakfast</label>
                                <select
                                    className="w-full p-2 border rounded-lg"
                                    value={menu[currentDayIndex].breakfast}
                                    onChange={(e) => handleChange(currentDayIndex, "breakfast", e.target.value)}
                                >
                                    <option value="">Select Breakfast</option>
                                    {breakfastOptions.map((item, i) => (
                                        <option key={i} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Lunch and Dinner Columns */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Lunch */}
                                <div className="space-y-3">
                                    <h4 className="text-lg font-medium text-indigo-600">Lunch</h4>
                                    {["DryVeg", "GravyVeg", "Rice", "Dal", "Chapati", "Salad"].map((field, i) => (
                                        <input
                                            key={i}
                                            type="text"
                                            placeholder={field}
                                            className="w-full p-2 border rounded-lg"
                                            value={menu[currentDayIndex][`lunch${field}`]}
                                            onChange={(e) => handleChange(currentDayIndex, `lunch${field}`, e.target.value)}
                                        />
                                    ))}
                                </div>

                                {/* Dinner */}
                                <div className="space-y-3">
                                    <h4 className="text-lg font-medium text-indigo-600">Dinner</h4>
                                    {["DryVeg", "GravyVeg", "Rice", "Dal", "Chapati", "Salad"].map((field, i) => (
                                        <input
                                            key={i}
                                            type="text"
                                            placeholder={field}
                                            className="w-full p-2 border rounded-lg"
                                            value={menu[currentDayIndex][`dinner${field}`]}
                                            onChange={(e) => handleChange(currentDayIndex, `dinner${field}`, e.target.value)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Next / Generate Button */}
                        <div className="flex justify-between pt-4">
                            {currentDayIndex < days.length - 1 ? (
                                <button
                                    onClick={() => setCurrentDayIndex(prev => prev + 1)}
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-3 rounded-full shadow-lg"
                                >
                                    Next Day
                                </button>
                            ) : (
                                <button
                                    onClick={generatePDF}
                                    className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full shadow-lg"
                                >
                                    Generate PDF
                                </button>
                            )}
                        </div>
                    </div>
                )}



                {tab === "feedback" ? (
                    feedback.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 m-4 border border-gray-100"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <div className="bg-indigo-100 text-indigo-600 font-bold rounded-full h-10 w-10 flex items-center justify-center uppercase">
                                        {item.name?.charAt(0) || "U"}
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm text-gray-700 font-medium">{item.name || "Anonymous"}</p>
                                        <p className="text-xs text-gray-400">Shared their experience</p>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-400">
                                    {item.date}
                                </div>
                            </div>
                            <p className="text-gray-800 text-base leading-relaxed italic">"{item.feedback}"</p>
                        </div>
                    ))
                ) : (
                    null
                )}
            </main>
        </div>
    );
}
