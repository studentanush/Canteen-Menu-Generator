// Base Meal class representing any meal type
class Meal {
  constructor() {
    // We'll assign these properties after creating the object
    this.type = "";   // Meal type like "Breakfast", "Lunch", "Dinner"
    this.items = {};  // Details about the meal items
  }

  // Method to display meal info as a string
  showMeal() {
    let details = this.type + " - ";
    for (let key in this.items) {
      details += key + ": " + this.items[key] + ", ";
    }
    // Remove last comma and space
    return details.slice(0, -2);
  }
}

// Lunch inherits Meal
class Lunch extends Meal {
  constructor() {
    super();
    this.type = "Lunch";
  }
}

// Dinner inherits Meal
class Dinner extends Meal {
  constructor() {
    super();
    this.type = "Dinner";
  }
}

// Breakfast inherits Meal, only mainDish needed
class Breakfast extends Meal {
  constructor() {
    super();
    this.type = "Breakfast";
  }
}

// Create weekly meal data (simulate input)
const weeklyMealsData = {
  Monday: {
    breakfast: "Idli Sambhar",
    lunch: {
      DryVeg: "Aloo Gobi",
      GravyVeg: "Paneer Butter Masala",
      Rice: "Jeera Rice",
      Dal: "Dal Fry",
      Chapati: "2",
      Salad: "Cucumber",
    },
    dinner: {
      DryVeg: "Cabbage",
      GravyVeg: "Chana Masala",
      Rice: "Steamed Rice",
      Dal: "Dal Tadka",
      Chapati: "3",
      Salad: "Onion",
    },
  },
  Tuesday: {
    breakfast: "Dosa with Chutney",
    lunch: {
      DryVeg: "Bhindi",
      GravyVeg: "Palak Paneer",
      Rice: "Lemon Rice",
      Dal: "Dal Makhani",
      Chapati: "2",
      Salad: "Tomato",
    },
    dinner: {
      DryVeg: "Baingan",
      GravyVeg: "Rajma",
      Rice: "Steamed Rice",
      Dal: "Toor Dal",
      Chapati: "3",
      Salad: "Onion",
    },
  },
  // Add other days here...
};

// Get days array
const days = Object.keys(weeklyMealsData);

// Loop over each day
for (let i = 0; i < days.length; i++) {
  let day = days[i];
  console.log("\n=== " + day + " ===");

  // Create Breakfast object and assign mainDish
  let breakfast = new Breakfast();
  breakfast.items.mainDish = weeklyMealsData[day].breakfast;

  // Create Lunch object and assign items
  let lunch = new Lunch();
  lunch.items = weeklyMealsData[day].lunch;

  // Create Dinner object and assign items
  let dinner = new Dinner();
  dinner.items = weeklyMealsData[day].dinner;

  // Print meal details
  console.log(breakfast.showMeal());
  console.log(lunch.showMeal());
  console.log(dinner.showMeal());
}

