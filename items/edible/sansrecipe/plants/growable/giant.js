// Complete
// Toyherb, Pink Cat, Moondrop, Charm Blue, Cherry Grass, Pom-Pom Grass, Lamp Grass, Ironleaf, Clover, Autumn Grass, Noel Grass,
// Fireflower, Emery Flower, Blue, Green, Red, White Crystal

registerItem({
	"name":"Ultra Toyherb",
	"category":"Plant",
	"sell":350,
	"pricemultiplier":"E",
	"flavourtext":"An herb that promotes good health. Hard to grow, but cures fatigue.",
	"effects":{
		"heal":["FTG"],
		"rp":37
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":26,
		"ftgresP":30
	},
	"cookingeffects":{
		"heal":["FTG"],
		"rp":37,
		"ftgresP":100
	}
})

registerItem({
	"name":"King Pink Cat",
	"category":"Plant",
	"sell":600,
	"pricemultiplier":"E",
	"flavourtext":"Flower with vibrant pink blossoms. Named 'cat' for its cuteness.",
	"effects":{
		"rp":65
	},
	"upgradeinfo":{
		"rarity":6,
		"difficulty":38,
		"int":5
	},
	"cookingeffects":{
		"rp":65,
		"psnresP":25,
		"sealresP":25,
		"parresP":25,
		"slpresP":25,
		"ftgresP":25,
		"sickresP":25
	}
})

registerItem({
	"name":"Ultra Moondrop Flower",
	"category":"Plant",
	"sell":650,
	"pricemultiplier":"E",
	"flavourtext":"A unique and beautiful yellow flower that grows in the moonlight.",
	"effects":{
		"rp":58
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":35,
		"int":4
	},
	"cookingeffects":{
		"rp":58,
		"hpmax":50,
		"str":3,
		"vit":3,
		"int":3
	}
})

registerItem({
	"name":"Great Charm Blue",
	"category":"Plant",
	"sell":1200,
	"pricemultiplier":"E",
	"flavourtext":"A deep blue flower. Practically swallows you into its beautiful blossoms.",
	"effects":{
		"statusailments":["PSN"],
		"rp":80
	},
	"upgradeinfo":{
		"rarity":7,
		"difficulty":46,
		"int":8,
		"psnatkP":17
	},
	"cookingeffects":{
		"statusailments":["PSN"],
		"rp":80,
		"hpmax":100,
		"str":5,
		"vit":5,
		"int":5,
		"slpresP":75,
		"ftgresP":75,
		"sickresP":75
	}
})
