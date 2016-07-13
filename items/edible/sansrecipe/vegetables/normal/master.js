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
	"name":"Spinach",
	"category":"Vegetable",
	"sell":65,
	"buy":300,
	"pricemultiplier":"E",
	"flavourtext":"A dark green vegetable rich in nutrients. Said to give you strength and energy.",
	"effects":{
		"hp":50
	},
	"upgradeinfo":{
		"rarity":1,
		"difficulty":9,
		"matk":2
	},
	"cookingeffects":{
		"hp":50,
		"int":1
	}
})

registerItem({
	"name":"Pumpkin",
	"category":"Vegetable",
	"sell":110,
	"buy":420,
	"pricemultiplier":"E",
	"flavourtext":"A nutritious seasonal vegetable. Can be worn during the autumn festial by scooping out the inside.",
	"effects":{
		"hp":65
	},
	"upgradeinfo":{
		"rarity":3,
		"difficulty":19,
		"str":3
	},
	"cookingeffects":{
		"hp":65,
		"vit":4
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
	"name":"Corn",
	"category":"Vegetable",
	"sell":1e3,
	"buy":3e3,
	"pricemultiplier":"E",
	"flavourtext":"A vegetable studded with yellow kernels. Hard to decide which side to eat from. Best lathered with butter.",
	"effects":{
		"hp":75
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":27,
		"vit":6
	},
	"cookingeffects":{
		"hp":75,
		"rpmax":10
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
	"name":"Eggplant",
	"category":"Vegetable",
	"sell":190,
	"buy":950,
	"pricemultiplier":"E",
	"flavourtext":"A purple vegetable with a cute stem. Has a soft texture.",
	"effects":{
		"hp":100
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":33,
		"str":7
	},
	"cookingeffects":{
		"hp":100,
		"critP":1
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
