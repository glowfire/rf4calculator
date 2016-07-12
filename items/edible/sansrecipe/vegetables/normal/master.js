// Turnip, Potato, Spinach, Radish, Yam, Pumpkin, Cucumber, Carrot, Corn, Strawberry, Leek, Pink Turnip, Green Pepper, Eggplant, Hot-hot,
// Bok Choy, Cabbage, Onion, Tomato, Pink Melon, Pineapple, G Potato, G Pumpkin, G Cabbage, G Turnip, in that order.

registerItem({
	"name":"Turnip",
	"category":"Vegetable",
	"sell":30,
	"buy":200,
	"pricemultiplier":"E",
	"flavourtext":"The king of all crops. It has been through many hardships to stay in this position. Bow down to the turnip.",
	"effects":{
		"hp":30,
		"rp":5
	},
	"upgradeinfo":{
		"rarity":0,
		"difficulty":1,
		"str":1
	},
	"cookingeffects":{
		"hp":30,
		"rp":5,
		"str":1
	}
})

registerItem({
	"name":"Cucumber",
	"category":"Vegetable",
	"sell":68,
	"buy":250,
	"pricemultiplier":"E",
	"flavourtext":"A green and watery vegetable with a crunchy texture. Have a bite and feel refreshed!",
	"effects":{
		"hp":55
	},
	"upgradeinfo":{
		"rarity":3,
		"difficulty":17,
		"str":2
	},
	"cookingeffects":{
		"hp":55,
		"vit":2
	}
})

registerItem({
	"name":"Pink Turnip",
	"category":"Vegetable",
	"sell":200,
	"buy":700,
	"pricemultiplier":"E",
	"flavourtext":"A pretty pink-colored turnip. Raised through the efforts of a turnip-obsessed girl. Famous for how easy it grows.",
	"effects":{
		"hp":70
	},
	"upgradeinfo":{
		"rarity":3,
		"difficulty":21,
		"str":4
	},
	"cookingeffects":{
		"hp":70,
		"str":2
	}
})

registerItem({
	"name":"Golden Turnip",
	"category":"Vegetable",
	"sell":2e4,
	"buy":1e5,
	"pricemultiplier":"E",
	"flavourtext":"",
	"effects":{
		"hp":800
	},
	"upgradeinfo":{
		"rarity":10,
		"difficulty":67,
		"str":30,
		"faintatkP":1
	},
	"cookingeffects":{
		"hp":800,
		"strP":3
	}
})
