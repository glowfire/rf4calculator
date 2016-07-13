// Flour, Oil, Curry Powder, Rice Flour

registerItem({
	"name":"Flour",
	"category":"Ingredient",
	"sell":125,
	"buy":320,
	"effects":{
	},
	"cookingeffects":{
		"rp":5,
		"str":1
	},
	"flavourtext":"Made by grinding wheat. A necessity in making dough, used in many recipes. Pretty amazing if you think about it.",
	"pricemultiplier":"Sd"
})

registerItem({
	"name":"Oil",
	"category":"Ingredient",
	"sell":250,
	"buy":650,
	"effects":{////////////////////////// different effect multiplier than standard. May be related to the [readymade] items.
		"fireresP":-30
	},
	"cookingeffects":{
		"rp":5,
		"fireresP":-30
	},
	"flavourtext":"Often used in fried recipes to add flavor and prevent sticking. Careful, it's highly flammable.",
	"pricemultiplier":"Sd"
})

registerItem({
	"name":"Curry Powder",
	"category":"Ingredient",
	"sell":70,
	"buy":300,
	"effects":{
	},
	"cookingeffects":{///////////// unknown
		"rp":5,
		"str":1
	},
	"flavourtext":"Powder used to cook curry. Made by mixing various spices. Goes well with lots of stuff.",
	"pricemultiplier":"Sd"
})

registerItem({
	"name":"Rice Flour",
	"category":"Ingredient",
	"sell":40,
	"buy":100,
	"effects":{
	},
	"cookingeffects":{///////////// unknown
		"rp":5,
		"str":1
	},
	"flavourtext":"Powder used to make rice dumplings. Adds stickiness to the resulting dish.",
	"pricemultiplier":"Sd"
})
