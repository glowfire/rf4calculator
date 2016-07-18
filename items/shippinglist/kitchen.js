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
	"pricemultiplier":"Ch"
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
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Oil",
	"category":"Ingredient",
	"sell":250,
	"buy":650,
	"effects":{
		"fireresP":-30
	},
	"cookingeffects":{},
	"flavourtext":"Often used in fried recipes to add flavor and prevent sticking. Careful, it's highly flammable.",
	"pricemultiplier":"Ch"
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
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Honey",
	"category":"Diary",
	"sell":680,
	"buy":1800,
	"effects":{
		"rp":15
	},
	"cookingeffects":{},
	"flavourtext":"Honey collected for a queen bee. Very nutritious and popular for its natural sweetness.",
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Yogurt",
	"category":"Diary",
	"sell":800,
	"buy":3000,
	"effects":{
		"rp":50
	},
	"cookingeffects":{},
	"flavourtext":"Made by processing milk. It eases upset stomachs.",
	"pricemultiplier":"Ch",
	"cookinglevel":19,
	"materials":["Sweet Powder","Milk (S)"]
})

registerItem({
	"name":"Cheese",
	"category":"Diary",
	"sell":400,
	"buy":2500,
	"effects":{
		"rp":30
	},
	"cookingeffects":{},
	"flavourtext":"Made by processing milk. Has a distinctive flavor. You can eat it as it is, or use it in various recipes.",
	"pricemultiplier":"Ch",
	"cookinglevel":22,
	"materials":["Sour Drop","Milk (S)"]
})

registerItem({
	"name":"Mayonnaise",
	"category":"Diary",
	"sell":720,
	"buy":2200,
	"effects":{
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
	"effects":{
		"hp":30,
		"rp":30
	},
	"cookingeffects":{},
	"flavourtext":"A large Cluckadoodle egg. Has a soft white shell.",
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Egg (M)",
	"category":"Diary",
	"sell":380,
	"buy":1500,
	"effects":{
		"hp":20,
		"rp":20
	},
	"cookingeffects":{},
	"flavourtext":"A Cluckadoodle egg. Has a soft white shell.",
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Egg (S)",
	"category":"Diary",
	"sell":280,
	"buy":1200,
	"effects":{
		"hp":10,
		"rp":10
	},
	"cookingeffects":{},
	"flavourtext":"A small Cluckadoodle egg. Has a soft white shell.",
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Milk (L)",
	"category":"Diary",
	"sell":500,
	"buy":2800,
	"effects":{
		"hp":90
	},
	"cookingeffects":{},
	"flavourtext":"A large amount of milk taken from a Buffamoo. High in calcium.",
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Milk (M)",
	"category":"Diary",
	"sell":380,
	"buy":2000,
	"effects":{
		"hp":60
	},
	"cookingeffects":{},
	"flavourtext":"A medium portion of Milk taken from a Buffamoo. High in calcium.",
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Milk (S)",
	"category":"Diary",
	"sell":260,
	"buy":1600,
	"effects":{
		"hp":30
	},
	"cookingeffects":{},
	"flavourtext":"A small portion of Milk taken from a Buffamoo. High in calcium.",
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Wine",
	"category":"Ready-made",
	"sell":800,
	"buy":2000,
	"effects":{
		"statusailments":["SLP"],
		"rp":20
	},
	"cookingeffects":{},
	"flavourtext":"A type of alcohol made from grapes. Popular for its taste and mellowness.",
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Chocolate",
	"category":"Ready-made",
	"sell":150,
	"buy":400,
	"effects":{
		"rp":10
	},
	"cookingeffects":{},
	"flavourtext":"Smooth and sweet, it's an absolute standard. Found in endless varieties.",
	"pricemultiplier":"Ch"
})

registerItem({
	"name":"Rice",
	"category":"Ready-made",
	"sell":30,
	"buy":200,
	"effects":{
		"hp":30
	},
	"cookingeffects":{},
	"flavourtext":"A staple of the dining table. Plays well with other dishes, so it's used in a wide variety of recipes.",
	"pricemultiplier":"Ch"
})
