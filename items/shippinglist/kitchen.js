// Registration of items in the order as shown in the shipping records.
// This list contains the items listed in the sixth section.

registerItem({
	"name":"Rice Flour",
	"category":"Ingredient",
	"sell":40,
	"buy":100,
	"effects":{
		// None
	},
	"cookingeffects":{},
	"flavourtext":"Powder used to make rice dumplings. Adds stickiness to the resulting dish.",
	"pricemultiplier":"Sd" // Confirmed
})

registerItem({
	"name":"Curry Powder",
	"category":"Ingredient",
	"sell":70,
	"buy":300,
	"effects":{
		// None
	},
	"cookingeffects":{},
	"flavourtext":"Powder used to cook curry. Made by mixing various spices. Goes well with lots of stuff.",
	"pricemultiplier":"Sd" // Confirmed
})

registerItem({
	"name":"Oil",
	"category":"Ingredient",
	"sell":250,
	"buy":650,
	"effects":{ // uses the minor effects multipliers
		"fireresP":-30
	},
	"cookingeffects":{},
	"flavourtext":"Often used in fried recipes to add flavor and prevent sticking. Careful, it's highly flammable.",
	"pricemultiplier":"Sd" // Confirmed
})

registerItem({
	"name":"Flour",
	"category":"Ingredient",
	"sell":125,
	"buy":320,
	"effects":{
		// None
	},
	"cookingeffects":{},
	"flavourtext":"Made by grinding wheat. A necessity in making dough, used in many recipes. Pretty amazing if you think about it.",
	"pricemultiplier":"Sd" // Confirmed
})

registerItem({
	"name":"Honey",
	"category":"Diary",
	"sell":680,
	"buy":1800,
	"effects":{ // follows the minor effects multiplier
		"rp":15
	},
	"cookingeffects":{},
	"flavourtext":"Honey collected for a queen bee. Very nutritious and popular for its natural sweetness.",
	"pricemultiplier":"Ch" // Confirmed
})

registerItem({
	"name":"Yogurt",
	"category":"Diary",
	"sell":800,
	"buy":3000,
	"effects":{ // unclear if standard or minor
		"rp":50
	},
	"cookingeffects":{},
	"flavourtext":"Made by processing milk. It eases upset stomachs.",
	"pricemultiplier":"C1", // Confirmed
	"cookinglevel":19,
	"materials":["Sweet Powder","Milk (S)"]
})

registerItem({
	"name":"Cheese",
	"category":"Diary",
	"sell":400,
	"buy":2500,
	"effects":{ // unclear if standard or minor
		"rp":30
	},
	"cookingeffects":{},
	"flavourtext":"Made by processing milk. Has a distinctive flavor. You can eat it as it is, or use it in various recipes.",
	"pricemultiplier":"Ch", // Confirmed
	"cookinglevel":22,
	"materials":["Sour Drop","Milk (S)"]
})

registerItem({
	"name":"Mayonnaise",
	"category":"Diary",
	"sell":720,
	"buy":2200,
	"effects":{ // unclear if standard, minor or some undiscovered effects multiplier
		"hp":5
	},
	"cookingeffects":{},
	"flavourtext":"A condiment made by processing eggs. Used in various recipes with vegetables and fish.",
	"pricemultiplier":"Ch",
	"cookinglevel":28,
	"materials":["Oil","Egg (S)"]
})

registerItem({
	"name":"Egg (L)",
	"category":"Diary",
	"sell":480,
	"buy":1800,
	"effects":{ // standard
		"hp":30,
		"rp":30
	},
	"cookingeffects":{},
	"flavourtext":"A large Cluckadoodle egg. Has a soft white shell.",
	"pricemultiplier":"E" // Confirmed
})

registerItem({
	"name":"Egg (M)",
	"category":"Diary",
	"sell":380,
	"buy":1500,
	"effects":{ // possibly follows an effect multiplier that is neither standard or minor.
		"hp":20,
		"rp":20
	},
	"cookingeffects":{},
	"flavourtext":"A Cluckadoodle egg. Has a soft white shell.",
	"pricemultiplier":"Ch" // Confirmed
})

registerItem({
	"name":"Egg (S)",
	"category":"Diary",
	"sell":280,
	"buy":1200,
	"effects":{ // appears to follow the minor effect multipliers
		"hp":10,
		"rp":10
	},
	"cookingeffects":{},
	"flavourtext":"A small Cluckadoodle egg. Has a soft white shell.",
	"pricemultiplier":"Sd" // Confirmed
})

registerItem({
	"name":"Milk (L)",
	"category":"Diary",
	"sell":500,
	"buy":2800,
	"effects":{ // standard
		"hp":90
	},
	"cookingeffects":{},
	"flavourtext":"A large amount of milk taken from a Buffamoo. High in calcium.",
	"pricemultiplier":"E" // Confirmed
})

registerItem({
	"name":"Milk (M)",
	"category":"Diary",
	"sell":380,
	"buy":2000,
	"effects":{ // Does not follow standard or minor effects multipliers.
		"hp":60
	},
	"cookingeffects":{},
	"flavourtext":"A medium portion of Milk taken from a Buffamoo. High in calcium.",
	"pricemultiplier":"Ch" // Confirmed
})

registerItem({
	"name":"Milk (S)",
	"category":"Diary",
	"sell":260,
	"buy":1600,
	"effects":{ // follows the minor effect multipliers
		"hp":30
	},
	"cookingeffects":{},
	"flavourtext":"A small portion of Milk taken from a Buffamoo. High in calcium.",
	"pricemultiplier":"Sd" // Confirmed
})

registerItem({
	"name":"Wine",
	"category":"Ready-made",
	"sell":800,
	"buy":2000,
	"effects":{ // follows the minor effect multipliers
		"statusailments":["SLP"],
		"rp":20
	},
	"cookingeffects":{},
	"flavourtext":"A type of alcohol made from grapes. Popular for its taste and mellowness.",
	"pricemultiplier":"Ch" // Confirmed
})

registerItem({
	"name":"Chocolate",
	"category":"Ready-made",
	"sell":150,
	"buy":400,
	"effects":{ // follows the minor effect multipliers
		"rp":10
	},
	"cookingeffects":{},
	"flavourtext":"Smooth and sweet, it's an absolute standard. Found in endless varieties.",
	"pricemultiplier":"Ch" // Confirmed
})

registerItem({
	"name":"Rice",
	"category":"Ready-made",
	"sell":30,
	"buy":200,
	"effects":{ // follows the minor effect multipliers
		"hp":30
	},
	"cookingeffects":{},
	"flavourtext":"A staple of the dining table. Plays well with other dishes, so it's used in a wide variety of recipes.",
	"pricemultiplier":"Ch" // Confirmed
})

registerItem({
	"name":"Bread",
	"category":"Oven",
	"sell":145,
	"buy":440,
	"effects":{
		"hp":400,
		"rp":120,
		"str":4,
		"vit":4,
		"int":4
	},
	"cookingeffects":{
		// none
	},
	"flavourtext":"A staple food for many. You can toast it, stuff it, stick things between it or eat it any other way you'd like.",
	"pricemultiplier":"E",
	"cookinglevel":8,
	"materials":["Flour"]
})

registerItem({
	"name":"Toast",
	"category":"Oven",
	"sell":170,
	"buy":610,
	"effects":{
		"hp":2040,
		"rp":800,
		"vit":15
	},
	"cookingeffects":{},
	"flavourtext":"Browned bread. Neck-and-neck with rice in the struggle for worldwide breakfast dominance.",
	"pricemultiplier":"E",
	"cookinglevel":21,
	"materials":["Bread"]
})

registerItem({
	"name":"Disastrous Dish",
	"category":"Failed Dish",
	"sell":50,
	"buy":1e3,
	"effects":{
		"hpP":-80,
		"rpmaxP":-25,
		"strP":-25,
		"vitP":-25,
		"intP":-25,
		"lightresP":-25
	},
	"cookingeffects":{},
	"flavourtext":"How did such a blight upon foodkind come to be? You can try eating it, but I sure wouldn't recommend it...",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Failed Dish",
	"category":"Failed Dish",
	"sell":2,
	"buy":15,
	"effects":{
		"hpP":-20,
		"rpmaxP":-10,
		"strP":-10,
		"vitP":-10,
		"intP":-10
	},
	"cookingeffects":{},
	"flavourtext":"A failed dish that got burned. Edible, but tastes pretty bad. Maybe you'll like it, though!",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Mixed Herbs",
	"category":"Ingredient",
	"sell":280,
	"buy":750,
	"effects":{ // standard
		"windresP":-30
	},
	"cookingeffects":{},
	"flavourtext":"Seasoning made from various herbs. Has a savory scent.",
	"pricemultiplier":"Ch", // confirmed
	"chemistrylevel":8,
	"materials":["Green Grass","Toyherb"]
})

registerItem({
	"name":"Sour Drop",
	"category":"Ingredient",
	"sell":90,
	"buy":250,
	"effects":{ // standard
		"earthresP":-30
	},
	"cookingeffects":{},
	"flavourtext":"Seasoning made from sour leaves. Mouth-puckering, but leaves you feeling refreshed.",
	"pricemultiplier":"Ch", // confirmed
	"chemistrylevel":7,
	"materials":["Orange"]
})

registerItem({
	"name":"Sweet Powder",
	"category":"Ingredient",
	"sell":170,
	"buy":450,
	"effects":{ //standard
		"waterresP":-30
	},
	"cookingeffects":{
		"hp":500,
		"rp":100,
		"waterresP":-10
	},
	"flavourtext":"Seasoning made from sweet leaves. Reminds you of sweet honey.",
	"pricemultiplier":"Ch", // confirmed
	"chemistrylevel":5,
	"materials":["Apple"]
})

registerItem({
	"name":"Heavy Spice",
	"category":"Ingredient",
	"sell":180,
	"buy":480,
	"effects":{ // standard
		"fireresP":-30
	},
	"cookingeffects":{},
	"flavourtext":"Seasoning made from hot leaves. One bite and your mouth will be on fire!",
	"pricemultiplier":"Ch", // confirmed
	"chemistrylevel":10,
	"materials":["Purple Grass"]
})
