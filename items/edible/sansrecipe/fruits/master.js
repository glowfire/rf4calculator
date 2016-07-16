// There are 8 [Fruit] items in the game: Mealy Apple, (Sultan) Strawberry, (King) Pineapple, Orange, Grapes and Apple. This section is complete.

var fruitCategory = ["Mealy Apple","Strawberry","Sultan Strawberry","Pineapple","King Pineapple","Orange","Grapes","Apple"];

registerItem({
	"name":"Mealy Apple",
	"category":"Fruit",
	"sell":3000,
	"flavourtext":"Eew, gross! Makes you very,very weak.",
	"pricemultiplier":"E",
	"effects":{
		"strP":-50,
		"vitP":-50,
		"intP":-50,
		"fireresP":-10,
		"waterresP":-10,
		"earthresP":-10,
		"windresP":-10,
		"lightresP":-10,
		"darkresP":-10
	},
	"upgradeinfo":{
		"rarity":15, //confirmed
		"difficulty":90,
		"str":-100,
		"vit":-150,
		"int":-100,
		"fireresP":-10,
		"waterresP":-10,
		"earthresP":-10,
		"windresP":-10,
		"lightresP":-10,
		"darkresP":-10
	},
	"cookingeffects":{
		"strP":-5,
		"vitP":-5,
		"intP":-5,
		"fireresP":-10,
		"waterresP":-10,
		"earthresP":-10,
		"windresP":-10,
		"lightresP":-10,
		"darkresP":-10
	}
});

registerItem({
	"name":"Strawberry",
	"giantname":"Sultan Strawberry",
	"category":"Fruit",
	"sell":135,
	"buy":800,
	"flavourtext":"The red fairy of the dining table. Its sweet and sour kiss never fails to attract people.",
	"pricemultiplier":"E",
	"effects":{
		"hp":35,
		"rp":15
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":24,
		"str":3,
		"vit":3
	},
	"cookingeffects":{ // confirmed
		"hp":35,
		"rp":15, // wikia is wrong
		"psnresP":5,
		"sealresP":5,
		"parresP":5
	}
});

registerItem({
	"name":"Sultan Strawberry",
	"mininame":"Strawberry",
	"category":"Fruit",
	"sell":700,
	"flavourtext":"The red fairy of the dining table. Its sweet and sour kiss never fails to attract people.",
	"pricemultiplier":"E",
	"effects":{
		"hp":100,
		"rp":35
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":49,
		"str":8,
		"vit":8
	},
	"cookingeffects":{ // confirmed
		"hp":100,
		"rp":35, // wikia is wrong
		"psnresP":30,
		"sealresP":30,
		"parresP":30
	}
});

registerItem({
	"name":"Pineapple",
	"giantname":"King Pineapple",
	"category":"Fruit",
	"sell":1600,
	"buy":8500,
	"flavourtext":"Tropical fruit with a hint of sourness hidden amidst its sweet flavor. Feel the tropical sun!",
	"pricemultiplier":"E",
	"effects":{
		"hp":120,
		"rp":40
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":50,
		"str":15
	},
	"cookingeffects":{ // confirmed
		"hp":120,
		"rp":40,
		"faintresP":25
	}
});

registerItem({
	"name":"King Pineapple",
	"mininame":"Pineapple",
	"category":"Fruit",
	"sell":8000,
	"flavourtext":"Tropical fruit with a hint of sourness hidden amidst its sweet flavor. Feel the tropical sun!",
	"pricemultiplier":"E",
	"effects":{
		"hp":400,
		"rp":200
	},
	"upgradeinfo":{
		"rarity":12,
		"difficulty":72,
		"atk":35
	},
	"cookingeffects":{ // confirmed
		"hp":400,
		"rp":200,
		"faintresP":100
	}
});

registerItem({
	"name":"Orange",
	"category":"Fruit",
	"sell":80,
	"buy":500,
	"flavourtext":"A fruit with a good balance between sweet and sour. Your fingers can turn yellow if you eat too much of it.",
	"pricemultiplier":"Ch",
	"effects":{
		"hp":100,
		"rp":10
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":30,
		"vit":4,
		"int":4
	},
	"cookingeffects":{ // confirmed
		"hp":10,
		"rp":5,
		"parresP":5
	}
});

registerItem({
	"name":"Grapes",
	"category":"Fruit",
	"sell":120,
	"buy":650,
	"flavourtext":"Small purple fruits growing in clusters. They say that royalty would hire servants to pluck these piece-by-piece for them out of laziness. Sweet and juicy.",
	"pricemultiplier":"Ch",
	"effects":{
		"hp":100,
		"rp":10
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":30,
		"str":4,
		"vit":4
	},
	"cookingeffects":{ // confirmed
		"hp":10,
		"rp":5,
		"psnresP":5
	}
});

registerItem({
	"name":"Apple",
	"category":"Fruit",
	"sell":150,
	"buy":850,
	"flavourtext":"A pretty red fruit with high nutrition. Known for the old saying, <q>an apple a day keeps the doctor away.</q>",
	"pricemultiplier":"Ch",
	"effects":{
		"hp":100,
		"rp":10
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":30,
		"str":4,
		"int":4
	},
	"cookingeffects":{ // confirmed
		"hp":10,
		"rp":5,
		"sealresP":5
	}
});
