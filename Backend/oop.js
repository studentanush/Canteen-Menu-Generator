// Base class representing a generic Meal
// A class is like a blueprint for creating objects with similar properties and behaviors
class Meal {
    // The constructor method initializes new objects created from this class
    // Here we pass the type of meal (breakfast/lunch/dinner) and items (food details)
    constructor(type, items) {
        this.type = type;  // e.g., "lunch"
        this.items = items; // an object containing food items, e.g., {Rice: "Jeera Rice", Dal: "Dal Fry"}
    }

    // A method (function inside class) to display meal details as a formatted string
    display() {
        // Object.entries(this.items) converts items object to array of [key, value] pairs
        // We then map each pair to a string "key: value" and join them with commas
        return `${this.type.toUpperCase()} includes: ${Object.entries(this.items)
            .map(([key, value]) => `${key}: ${value}`)
            .join(", ")}`;
    }
}

// Child class Lunch inherits from Meal
// Inheritance means Lunch gets all properties/methods of Meal but can add or override some
class Lunch extends Meal {
    constructor(items) {
        // Calls the parent class constructor with "lunch" as type and items passed here
        super("lunch", items);
    }

    // Override the display method to customize lunch-specific output
    display() {
        return "🍽️ LUNCH MENU → " + super.display(); // super.display() calls parent's display()
    }
}

// Child class Dinner inherits from Meal
class Dinner extends Meal {
    constructor(items) {
        super("dinner", items);
    }

    display() {
        return "🌙 DINNER MENU → " + super.display();
    }
}

// Child class Breakfast inherits from Meal
class Breakfast extends Meal {
    // For breakfast, we only expect a mainDish string instead of many items
    constructor(mainDish) {
        // Create an items object with only one key 'mainDish'
        const items = { mainDish };
        super("breakfast", items);
    }

    display() {
        return `🌅 BREAKFAST → ${this.items.mainDish}`;
    }
}

// Factory function demonstrating polymorphism:
// Polymorphism means the same interface (createMeal) can create different types of meals
function createMeal(type, items) {
    switch (type) {
        case "breakfast":
            return new Breakfast(items.mainDish);
        case "lunch":
            return new Lunch(items);
        case "dinner":
            return new Dinner(items);
        default:
            return new Meal(type, items);
    }
}

// Create objects (instances) of different meals using the factory function
const mondayLunch = createMeal("lunch", {
    DryVeg: "Aloo Gobi",
    GravyVeg: "Paneer Butter Masala",
    Rice: "Jeera Rice",
    Dal: "Dal Fry",
    Chapati: "2",
    Salad: "Cucumber"
});

const tuesdayDinner = createMeal("dinner", {
    DryVeg: "Cabbage",
    GravyVeg: "Chana Masala",
    Rice: "Steamed Rice",
    Dal: "Dal Tadka",
    Chapati: "3",
    Salad: "Onion"
});

const wednesdayBreakfast = createMeal("breakfast", {
    mainDish: "Idli Sambhar"
});

// Demonstrate polymorphism: calling display() on different meal objects behaves differently
const weeklyMeals = [mondayLunch, tuesdayDinner, wednesdayBreakfast];
weeklyMeals.forEach(meal => console.log(meal.display()));
