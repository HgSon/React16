function myFunc(name, weather, ...rest) {
	console.log(name)
	console.log(weather)
	for(let arg of rest) {
		console.log(arg)
	}
}

myFunc("adam", "rainy", "merry", "christ", "mas");

let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9]

let myArray = [...array1, ...array2, 0]

console.log(myArray);

class MyData {
	constructor() {
		this.name = "a";
		this.weather = "sunny";
	}

	printMessage = () => {
		// console.log(this);
		console.log(`my name is ${this.name}. today's weather is ${this.weather}`)
	}
}
let firstData = new MyData();
let secondData = {};
let myObject = {...Object.assign(secondData, firstData), weather: "cloudy"};


console.log(firstData);
console.log(secondData);
console.log(myObject);
secondData.printMessage();
myObject.printMessage();