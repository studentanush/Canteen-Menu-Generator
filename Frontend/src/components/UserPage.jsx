import React, { useContext, useEffect, useState } from "react";
import { nameContext } from "./UserLogin";
import { ContextAPI } from "./Context";
import axios from "axios";
import { toast } from "react-toastify";
import { images } from "../assets/images";
const UserPage = () => {
    const { name,pdfUrl } = useContext(ContextAPI);
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [called, setCalled] = useState(false);
    const [TodaysMenu, setTodaysMenu] = useState({});
    
    const day = new Date().getDay();
    console.log(day);
    const MenuData = async () => {
        
        console.log("controll is here")
        try {
            console.log("controll is here11")
            const response = await axios.get("http://localhost:4000/api/menu");
            console.log("controll is here22")
            const Menu = response.data.response;
            console.log(Menu);
            //console.log(response.data.response[1]);
            //setTodaysMenu(Menu)
            for (let i = 0; i < Menu.length; i++) {
                if (i == (day-1)) {
                    setTodaysMenu(Menu[i]);
                    console.log(Menu[i]);
                    break;
                }
            }

        } catch (error) {
            toast.error("Error occur in ")
        }
        console.log(TodaysMenu);


    }
    useEffect(() => {
        if (!called) {
            MenuData();
            setCalled(true);
        }
    }, [called]);
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            console.log("hi controll is here");
            const date = new Date().toLocaleString();
            const response = await axios.post("http://localhost:4000/api/feedback", {
                Feedback: feedback,
                Name: name,
                date: date
            })
            console.log(feedback);
            if (response.data.success) {

                //toast.success("Feedback Submitted..!");

                setFeedback("");
                alert("Feedback submitted")
            } else {
                toast.error("Error Occured in the feedback thing")
            }
        } catch (error) {
            toast.error("Error Occured");
        }

    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-8 px-4">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-green-700 ">🍽️ Canteen Menu Portal</h1>
                    <p className="text-gray-600 mt-2 text-lg">`Welcome {name} ! Stay updated with today’s meals and share your feedback.`</p>
                </div>

                {/* Weekly Menu PDF */}

                <div className="bg-white rounded-2xl shadow-lg p-6 transition hover:shadow-xl mt-6">
                    <h2 className="text-2xl font-semibold mb-3 text-green-700">📄 Weekly Menu</h2>
                    <a
                        href={pdfUrl}

                        className="text-blue-600 hover:text-blue-800 underline text-lg cursor-pointer"
                    >
                        Download this week’s menu (PDF)
                    </a>
                </div>


                {/* Today's Menu */}
                <div className="bg-white rounded-2xl shadow-lg p-6 transition hover:shadow-xl">
                    <h2 className="text-2xl font-semibold mb-3 text-green-700">🍛 Today’s Menu ({TodaysMenu.day})</h2>
                    <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                        <div>
                            <h3 className="font-bold">Breakfast</h3>
                            <p className="font-medium">{TodaysMenu.breakfast}</p>
                            <img className="w-30 h-30 rounded-2xl shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105 mt-2" src={images[TodaysMenu.breakfast]} alt="" />
                        </div>
                        <div> 
                            <h3 className="font-bold">Lunch</h3>    
                            <p className="font-medium" >{TodaysMenu.lunchChapati}</p>
                            <p className="font-medium">{TodaysMenu.lunchDal}</p>
                            <p className="font-medium">{TodaysMenu.lunchDryVeg}</p>
                            <p className="font-medium">{TodaysMenu.lunchGravyVeg}</p>
                            <p className="font-medium">{TodaysMenu.lunchRice}</p>
                            <p className="font-medium">{TodaysMenu.lunchSalad}</p>

                        </div>
                        <div>
                            <h3 className="font-bold">Dinner</h3>
                            <p className="font-medium" >{TodaysMenu.dinnerChapati}</p>
                            <p className="font-medium">{TodaysMenu.dinnerDal}</p>
                            <p className="font-medium">{TodaysMenu.dinnerDryVeg}</p>
                            <p className="font-medium">{TodaysMenu.dinnerGravyVeg}</p>
                            <p className="font-medium">{TodaysMenu.dinnerRice}</p>
                            <p className="font-medium">{TodaysMenu.dinnerSalad}</p>

                        </div>
                    </div>
                </div>

                {/* Meal Rating */}
                <div className="bg-white rounded-2xl shadow-lg p-6 transition hover:shadow-xl">
                    <h2 className="text-2xl font-semibold mb-3 text-green-700">⭐ Rate Todays Meal</h2>
                    <div className="flex space-x-3 text-3xl justify-center">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                onClick={() => setRating(num)}
                                className={`transition ${rating >= num ? "text-yellow-400 scale-110" : "text-gray-300"
                                    }`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>

                {/* Feedback Form */}
                <form onSubmit={onSubmitHandler} className="bg-white rounded-2xl shadow-lg p-6 transition hover:shadow-xl">
                    <h2 className="text-2xl font-semibold mb-3 text-green-700">📝 Submit Feedback</h2>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-green-400 focus:ring-2"
                        rows={4}
                        placeholder="Write your feedback here..."
                    />
                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                {/* Contact Details */}
                <div className="text-center text-sm text-gray-500 mt-12">
                    <p>📞 For issues or suggestions, contact us:</p>
                    <p>Email: <a href="mailto:canteen@college.edu" className="text-green-600 hover:underline">canteen@college.edu</a></p>
                    <p>Phone: <a href="tel:+911234567890" className="text-green-600 hover:underline">+91 12345 67890</a></p>
                </div>

            </div>
        </div>
    );
};

export default UserPage;
