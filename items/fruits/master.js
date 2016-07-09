registerItem({
	"name":"Mealy Apple",
	"category":"Fruit",
	"sell":3000,
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
})

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
	"ingredienteffects":{ // confirmed
	"hp":35,
	"rp":15, // wikia is wrong
	"psnresP":5,
	"sealresP":5,
	"parresP":5
	}
})

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
	"ingredienteffects":{ // confirmed
		"hp":100,
		"rp":35, // wikia is wrong
		"psnresP":30,
		"sealresP":30,
		"parresP":30
	}
})
