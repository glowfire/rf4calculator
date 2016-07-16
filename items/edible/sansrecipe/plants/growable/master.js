// Copmlete
// Toyherb, Pink Cat, Moondrop, Charm Blue, Cherry Grass, Pom-Pom Grass, Lamp Grass, Ironleaf, Clover, Autumn Grass, Noel Grass,
// Fireflower, Emery Flower, Blue, Green, Red, White Crystal

registerItem({
	"name":"Toyherb",
	"category":"Plant",
	"sell":65,
	"buy":250,
	"pricemultiplier":"E",
	"flavourtext":"An herb that promotes good health. Hard to grow, but cures fatigue.",
	"effects":{
		"heal":["FTG"],
		"rp":15
	},
	"upgradeinfo":{
		"rarity":0,
		"difficulty":1,
		"vit":1,
		"ftgresP":5
	},
	"cookingeffects":{
		"heal":["FTG"],
		"rp":15,
		"ftgresP":15
	}
})

registerItem({
	"name":"Pink Cat",
	"category":"Plant",
	"sell":110,
	"buy":450,
	"pricemultiplier":"E",
	"flavourtext":"Flower with vibrant pink blossoms. Named 'cat' for its cuteness.",
	"effects":{
		"rp":25
	},
	"upgradeinfo":{
		"rarity":2,
		"difficulty":15,
		"int":2
	},
	"cookingeffects":{
		"rp":25,
		"psnresP":5,
		"sealresP":5,
		"parresP":5,
		"slpresP":5,
		"ftgresP":5,
		"sickresP":5
	}
})

registerItem({
	"name":"Moondrop Flower",
	"category":"Plant",
	"sell":115,
	"buy":400,
	"pricemultiplier":"E",
	"flavourtext":"A unique and beautiful yellow flower that grows in the moonlight.",
	"effects":{
		"rp":20
	},
	"upgradeinfo":{
		"rarity":1,
		"difficulty":10,
		"int":1
	},
	"cookingeffects":{
		"rp":20
	}
})

registerItem({
	"name":"Charm Blue",
	"category":"Plant",
	"sell":220,
	"buy":800,
	"pricemultiplier":"E",
	"flavourtext":"A deep blue flower. Practically swallows you into its beautiful blossoms.",
	"effects":{
		"statusailments":["PSN"],
		"rp":28
	},
	"upgradeinfo":{
		"rarity":3,
		"difficulty":20,
		"psnatkP":5
	},
	"cookingeffects":{
		"statusailments":["PSN"],
		"rp":28,
		"hpmax":10,
		"slpresP":10,
		"ftgresP":10,
		"sickresP":10
	}
})
