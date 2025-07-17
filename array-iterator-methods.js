// Task 1
let cityList = ["St. Louis", "Chicago", "Amsterdam", "Tokyo", "Copenhagen"];
cityList.forEach(city => {
    console.log(city.toUpperCase());
}) // ST. LOUIS CHICAGO AMSTERDAM TOKYO COPENHAGEN

// Task 2
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num ** 2);
console.log(squares); // 1, 4, 9, 16, 25

// Task 3
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(highScores); // 85, 90, 100

// Task 4
let favoriteFood = ["Steak", "Spaghetti", "Creme Brulee", "Spinach", "Pizza"];
let foundFood = favoriteFood.find(food => food.length > 4);
let foundFoodIndex = favoriteFood.findIndex(food => food === foundFood);
