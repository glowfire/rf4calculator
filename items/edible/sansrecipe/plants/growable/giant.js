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
		"rp":15,
		"ftgresP":15
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
		"rp":20
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
		"int":8
		"psnatkP":17
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

registerItem({
	"name":"King Cherry Grass",
	"category":"Plant",
	"sell":1200,
	"pricemultiplier":"E",
	"flavourtext":"A plant that works hard to be prettier than all the other flowers. Other flowers sometimes sneer, but they're just jealous. Can be found in spring.",
	"effects":{
		"rp":85
	},
	"upgradeinfo":{
		"rarity":7,
		"difficulty":47,
		"slpatkP":9
	},
	"cookingeffects":{
		"rp":30,
		"intP":1
	}
})

registerItem({
	"name":"King Pom-Pom Grass",
	"category":"Plant",
	"sell":2300,
	"pricemultiplier":"E",
	"flavourtext":"Has white cotton-like flowers in its center. Looks cute like a dandelion, but is poisonous, so say no to the blow!",
	"effects":{
		"statusailments":["PSN"],
		"rp":100
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":52,
		"psnatkP":15,
		"psnresP":19
	},
	"cookingeffects":{
		"statusailments":["PSN"],
		"rp":45,
		"psnatkP":15
	}
})

registerItem({
	"name":"Kaiser Lamp Grass",
	"category":"Plant",
	"sell":3250,
	"pricemultiplier":"E",
	"flavourtext":"A grass with luminous powder all throughout its blossomed stem. Has a strong calming effect.",
	"effects":{
		"rp":90
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":52,
		"int":10
	},
	"cookingeffects":{
		"rp":40,
		"strP":1
	}
})

registerItem({
	"name":"Super Ironleaf",
	"category":"Plant",
	"sell":5555,
	"pricemultiplier":"E",
	"flavourtext":"A plant with 1000 spikes. Its unique shape is the result of iron content collected from the ground.",
	"effects":{
		"hp":-1000
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":52,
		"atk":18
	},
	"cookingeffects":{
		"hp":-100,
		"str":10
	}
})

registerItem({
	"name":"Great 4-Leaf Clover",
	"category":"Plant",
	"sell":5e3,
	"pricemultiplier":"E",
	"flavourtext":"A plant which brings you good luck. Carry it around or make it a gift, and happiness will follow you!",
	"effects":{
		"rp":100
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":52
	},
	"cookingeffects":{
		"rp":50,
		"critP":5
	}
})
	
registerItem({
	"name":"Big Autumn Grass",
	"category":"Plant",
	"sell":9000,
	"pricemultiplier":"E",
	"flavourtext":"A plant which grows colorful flowers. Named as it is due to its autumnal color scheme.",
	"effects":{
		"hp"450,
		"rp":150
	},
	"upgradeinfo":{
		"rarity":9,
		"difficulty":57,
		"slpresP":25
	},
	"ingredienteffects":{
		"rp":60,
		"rpmaxP":1
	}
})

registerItem({
	"name":"Large Noel Grass",
	"category":"Plant",
	"sell":1e4,
	"pricemultiplier":"E",
	"flavourtext":"Weirdly tree-shaped plant. Can be fun to decorate in winter.",
	"effects":{
		"rp":180
	},
	"upgradeinfo":{
		"rarity":10,
		"difficulty":63,
		"int":22
	},
	"cookingeffects":{
		"rp":75,
		"vitP":1
	}
})

registerItem({
	"name":"Big Fireflower",
	"category":"Plant",
	"sell":14e3,
	"pricemultiplier":"E",
	"flavourtext":"A flower with a unique shape. Also called the 'Mountain Fireworks,' as you can almost hear the sounds of exploding powder when you pluck it.",
	"effects":{
		"rp":200
	},
	"upgradeinfo":{
		"rarity":10,
		"difficulty":64,
		"str":10,
		"int":18
	},
	"cookingeffects":{
		"rp":70,
		"hpmaxP":1
	}
})

registerItem({
	"name":"Great Emery Flower",
	"category":"Plant",
	"sell":25e4,
	"pricemultiplier":"E",
	"flavourtext":"A unique golden flower that's extremely tough and resilient. Don't step on it or it'll really hurt!",
	"effects":{
		"rp":500
	},
	"upgradeinfo":{
		"rarity":15,
		"difficulty":95,
		"int":80
	},
	"cookingeffects":{
		"rp":300,
		"hpmaxP":1,
		"rpmaxP":1,
		"strP":1,
		"vitP":1,
		"intP":1
	}
})

registerItem({
	"name":"Big Blue Crystal",
	"category":"Plant",
	"sell":67500,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears blue during spring.",
	"effects":{
		"rp":400
	},
	"upgradeinfo":{
		"rarity":12,
		"difficulty":73,
		"matk":30,
		"mdef":30,
		"waterresP":20
	},
	"cookingeffects":{
		"rp":120,
		"int":10,
		"waterresP":5
	}
})

registerItem({
	"name":"Big Green Crystal",
	"category":"Plant",
	"sell":76500,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears green during summer.",
	"effects":{
		"rp":400
	},
	"upgradeinfo":{
		"rarity":12,
		"difficulty":74,
		"mdef":60,
		"windresP":20
	},
	"cookingeffects":{
		"rp":120,
		"int":10,
		"windresP":5
	}
})

registerItem({
	"name":"Big Red Crystal",
	"category":"Plant",
	"sell":9e4,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears red during autumn.",
	"effects":{
		"rp":400
	},
	"upgradeinfo":{
		"rarity":12,
		"difficulty":75,
		"matk":60,
		"fireresP":20
	},
	"cookingeffects":{
		"rp":400,
		"intP":3,
		"fireresP":20
	}
})

registerItem({
	"name":"Big White Crystal",
	"category":"Plant",
	"sell":101500,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears white during winter.",
	"effects":{
		"rp":400
	},
	"upgradeinfo":{
		"rarity":12,
		"difficulty":76,
		"int":60,
		"earthresP":20
	},
	"cookingeffects":{
		"rp":400,
		"intP":3,
		"earthresP":20
	}
})
