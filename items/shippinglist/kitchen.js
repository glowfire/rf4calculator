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
	"cookingeffects":{
		"rp":5,
		"hpmax":1
	},
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
	"cookingeffects":{
		"rp":5,
		"hpmax":1,
		"waterresP":5
	},
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
	"cookingeffects":{
		"rp":5,
		"fireresP":-30
	},
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
	"cookingeffects":{
		"rp":5,
		"str":1
	},
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
	"cookingeffects":{
		"rp":100,
		"str":5
	},
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
	"cookingeffects":{
		"rp":100,
		"int":5
	},
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
	"cookingeffects":{
		"rp":100,
		"vit":10
	},
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
	"cookingeffects":{
		"rp":30,
		"critresP":10,
		"knockresP":10
	},
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
	"cookingeffects":{
		"rp":50,
		"strP":2
	},
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
	"cookingeffects":{
		"rp":20,
		"str":2
	},
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
	"cookingeffects":{
		"rp":10,
		"str":1
	},
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
	"cookingeffects":{
		"rp":50,
		"intP":2
	},
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
	"cookingeffects":{
		"rp":20,
		"int":2
	},
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
	"cookingeffects":{
		"rp":10,
		"int":1
	},
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
	"cookingeffects":{
		"rp":20,
		"critP":5,
		"critresP":-1
	},
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
	"cookingeffects":{
		"rp":10,
		"int":2
	},
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
	"cookingeffects":{
		"hp":10,
		"hpmax":5
	},
	"flavourtext":"A staple of the dining table. Plays well with other dishes, so it's used in a wide variety of recipes.",
	"pricemultiplier":"Ch" // Confirmed
})

registerItem({
	"name":"Turnip Heaven",
	"category":"No Tool",
	"sell":15e4,
	"buy":542e3,
	"effects":{
		"hp":5000,
		"hpP":90,
		"rp":1000,
		"rpP":90,
		"str":90,
		"strP":12,
		"vit":80,
		"vitP":15,
		"int":50,
		"intP":10,
		"fireresP":20,
		"lightresP":20,
		"darkresP":20
	},
	"cookingeffects":{},
	"flavourtext":"Turnips from three corners of the globe, gathered together into a turnip paradise. Try to eat all three at once!",
	"pricemultiplier":"E",
	"cookinglevel":96,
	"materials":["Turnip","Pink Turnip","Golden Turnip"]
})

registerItem({
	"name":"Pickle Mix",
	"category":"No Tool",
	"sell":520,
	"buy":2800,
	"effects":{
		"hp":5000,
		"hpP":11,
		"rp":1000,
		"str":60,
		"strP":3,
		"vit":20,
		"vitP":3,
		"int":35,
		"intP":1,
		"fireresP":10,
		"lightresP":10
	},
	"cookingeffects":{},
	"flavourtext":"Made with spring and winter turnips. The red and white colors symbolize good luck. Often served at festivals.",
	"pricemultiplier":"E",
	"cookinglevel":48,
	"materials":["Turnip","Pink Turnip"]
})

registerItem({
	"name":"Salmon Onigiri",
	"category":"No Tool",
	"sell":645,
	"buy":2e3,
	"effects":{
		"hp":2700,
		"rp":220,
		"str":10,
		"vit":6,
		"int":9
	},
	"cookingeffects":{},
	"flavourtext":"Onigiri with salmon inside. One of the most popular rice ball recipes.",
	"pricemultiplier":"E",
	"cookinglevel":20,
	"materials":["Salted Salmon","Rice"]
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
	"name":"Onigiri",
	"category":"No Tool",
	"sell":57,
	"buy":180,
	"effects":{
		"hp":220,
		"rp":30,
		"str":1,
		"vit":1,
		"int":1
	},
	"cookingeffects":{},
	"flavourtext":"Rice formed into a triangular shape. Often called a <q>rice ball.</q> Easy to eat on the go, making it a staple lunch item.",
	"pricemultiplier":"E",
	"cookinglevel":2,
	"materials":["Rice"]
})

registerItem({
	"name":"Relax Tea Leaves",
	"category":"No Tool",
	"sell":100,
	"buy":2800,
	"effects":{
		"rpmax":50
	},
	"cookingeffects":{},
	"flavourtext":"A medicinal herb made by mixing various plants. Make tea with it for greater effect.",
	"pricemultiplier":"E",
	"cookinglevel":50,
	"materials":["White Grass","Orange Grass","Green Grass","Yellow Grass","Blue Grass","Purple Grass"]
})

registerItem({
	"name":"Ice Cream",
	"cookinglevel":25,
	"materials":["Sweet Powder","Milk (S)"],
	"category":"Mixer",
	"sell":645,
	"buy":2000,
	"effects":{
		"hp":3e3,
		"rp":450,
		"str":17,
		"vit":10,
		"int":15,
		"fireresP":30,
		"waterresP":-30
	},
	"flavourtext":"A dessert made by freezing milk. Melts in your mouth. If you eat it too fast, you'll regret it.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Raisin Bread",
	"cookinglevel":27,
	"category":"Oven",
	"sell":380,
	"buy":1200,
	"pricemultiplier":"C1",
	"flavourtext":"Bread with raisins in it. Soft, sweet and sour, all at once.",
	"effects":{
		"hp":3000,
		"rp":400,
		"str":15,
		"vit":8,
		"int":10
	},
	"materials":["Flour","Grapes"],
	"cookingeffects":{}
})

registerItem({
	"name":"Bamboo Rice",
	"category":"No Tool",
	"sell":162,
	"buy":490,
	"effects":{
		"hp":300,
		"rp":80,
		"str":2,
		"vit":2,
		"int":2
	},
	"cookingeffects":{},
	"flavourtext":"Rice mixed with bamboo shoots. A popular dish in spring, with a savory flavor.",
	"pricemultiplier":"E",
	"cookinglevel":7,
	"materials":["Rice","Bamboo Sprout"]
})

registerItem({
	"name":"Pickles",
	"category":"No Tool",
	"sell":105,
	"buy":450,
	"effects":{
		"hp":400,
		"rp":100,
		"str":4,
		"vit":3,
		"int":2
	},
	"cookingeffects":{},
	"flavourtext":"Lightly pickled cucumber. Has a crunchy texture.",
	"pricemultiplier":"E",
	"cookinglevel":10,
	"materials":["Cucumber"]
})

registerItem({
	"name":"Pickled Turnip",
	"category":"No Tool",
	"sell":48,
	"buy":400,
	"effects":{
		"hp":250,
		"rp":100,
		"str":5,
		"vit":3,
		"int":5
	},
	"cookingeffects":{},
	"flavourtext":"Turnip that's been pickled. Has a fresh taste and is sometimes eaten after meals.",
	"pricemultiplier":"E",
	"cookinglevel":4,
	"materials":["Turnip"]
})

registerItem({
	"name":"Pickled Turnip",
	"category":"No Tool",
	"sell":48,
	"buy":400,
	"effects":{
		"hp":250,
		"rp":100,
		"str":5,
		"vit":3,
		"int":5
	},
	"cookingeffects":{},
	"flavourtext":"Turnip that's been pickled. Has a fresh taste and is sometimes eaten after meals.",
	"pricemultiplier":"E",
	"cookinglevel":12,
	"materials":["Pink Turnip"]
})

registerItem({
	"name":"Fruit Sandwich",
	"category":"No Tool",
	"sell":540,
	"buy":1920,
	"effects":{
		"hp":4080,
		"rp":1000,
		"str":30,
		"vit":15,
		"int":20
	},
	"cookingeffects":{},
	"flavourtext":"Fruit placed between two slices of bread. Beloved by children... or so parents hope!",
	"pricemultiplier":"E",
	"cookinglevel":35,
	"materials":["Bread","Strawberry"]
})

registerItem({
	"name":"Sandwich",
	"category":"No Tool",
	"sell":964,
	"buy":3900,
	"effects":{
		"hp":4000,
		"rp":840,
		"str":23,
		"vit":12,
		"int":17
	},
	"cookingeffects":{},
	"flavourtext":"Vegetables and other ingredients placed between two slices of bread. Easy to eat with one hand.",
	"pricemultiplier":"E",
	"cookinglevel":34,
	"materials":["Bread","Egg (S)","Cucumber"]
})

registerItem({
	"name":"Salad",
	"category":"No Tool",
	"sell":6900,
	"buy":21e3,
	"effects":{
		"hp":5000,
		"hpP":86,
		"rp":1000,
		"str":70,
		"strP":7,
		"vit":30,
		"vitP":8,
		"int":40,
		"intP":4
	},
	"cookingeffects":{},
	"flavourtext":"Assorted fresh vegetables. Both healthy and nutritious!",
	"pricemultiplier":"E",
	"cookinglevel":67,
	"materials":["Mayonnaise","Cucumber","Tomato","Cabbage"]
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
	"effects":{ // standard
		"hpP":-80,
		"rpmaxP":-25,
		"strP":-25,
		"vitP":-25,
		"intP":-25,
		"lightresP":-25
	},
	"cookingeffects":{},
	"flavourtext":"How did such a blight upon foodkind come to be? You can try eating it, but I sure wouldn't recommend it...",
	"pricemultiplier":"Ch" // confirmed
})

registerItem({
	"name":"Failed Dish",
	"category":"Failed Dish",
	"sell":2,
	"buy":15,
	"effects":{ // standard
		"hpP":-20,
		"rpmaxP":-10,
		"strP":-10,
		"vitP":-10,
		"intP":-10
	},
	"cookingeffects":{},
	"flavourtext":"A failed dish that got burned. Edible, but tastes pretty bad. Maybe you'll like it, though!",
	"pricemultiplier":"Ch" // confirmed
})

registerItem({
	"name":"Mixed Herbs",
	"category":"Ingredient",
	"sell":280,
	"buy":750,
	"effects":{ // standard
		"windresP":-30
	},
	"cookingeffects":{
		"hp":500,
		"rp":100,
		"windresP":-10
	},
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
	"cookingeffects":{
		"hp":500,
		"rp":100,
		"earthresP":-10
	},
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
	"cookingeffects":{
		"hp":500,
		"rp":100,
		"fireresP":-10
	},
	"flavourtext":"Seasoning made from hot leaves. One bite and your mouth will be on fire!",
	"pricemultiplier":"Ch", // confirmed
	"chemistrylevel":10,
	"materials":["Purple Grass"]
})
