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

registerItem({
	"name":"Cherry Grass",
	"category":"Plant",
	"sell":230,
	"buy":700,
	"pricemultiplier":"E",
	"flavourtext":"A plant that works hard to be prettier than all the other flowers. Other flowers sometimes sneer, but they're just jealous. Can be found in spring.",
	"effects":{
		"rp":30
	},
	"upgradeinfo":{
		"rarity":3,
		"difficulty":22,
		"slpatkP":1
	},
	"cookingeffects":{
		"rp":30,
		"intP":1
	}
})

registerItem({
	"name":"Pom-Pom Grass",
	"category":"Plant",
	"sell":440,
	"buy":1500,
	"pricemultiplier":"E",
	"flavourtext":"Has white cotton-like flowers in its center. Looks cute like a dandelion, but is poisonous, so say no to the blow!",
	"effects":{
		"statusailments":["PSN"],
		"rp":45
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":28,
		"psnatkP":3,
		"psnresP":5
	},
	"cookingeffects":{
		"statusailments":["PSN"],
		"rp":45,
		"psnatkP":15
	}
})

registerItem({
	"name":"Lamp Grass",
	"category":"Plant",
	"sell":650,
	"buy":2e3,
	"pricemultiplier":"E",
	"flavourtext":"A grass with luminous powder all throughout its blossomed stem. Has a strong calming effect.",
	"effects":{
		"rp":40
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":28,
		"int":3
	},
	"cookingeffects":{
		"rp":40,
		"strP":1
	}
})

registerItem({
	"name":"Ironleaf",
	"category":"Plant",
	"sell":1111,
	"buy":4444,
	"pricemultiplier":"E",
	"flavourtext":"A plant with many spikes. Its unique shape is the result of iron content collected from the ground.",
	"effects":{
		"hp":-100
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":29,
		"atk":4
	},
	"cookingeffects":{
		"hp":-100,
		"str":10
	}
})

registerItem({
	"name":"4-Leaf Clover",
	"category":"Plant",
	"sell":980,
	"buy":4000,
	"pricemultiplier":"E",
	"flavourtext":"A plant which brings you good luck. Carry it around or make it a gift, and happiness will follow you!",
	"effects":{
		"rp":50
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":29
	},
	"cookingeffects":{
		"rp":50,
		"critP":5
	}
})
	
registerItem({
	"name":"Autumn Grass",
	"category":"Plant",
	"sell":1800,
	"buy":6000,
	"pricemultiplier":"E",
	"flavourtext":"A plant which grows colorful flowers. Named as it is due to its autumnal color scheme.",
	"effects":{
		"rp":60
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":35,
		"slpresP":6
	},
	"ingredienteffects":{
		"rp":60,
		"rpmaxP":1
	}
})

registerItem({
	"name":"Noel Grass",
	"category":"Plant",
	"sell":2e3,
	"buy":6660,
	"pricemultiplier":"E",
	"flavourtext":"Weirdly tree-shaped plant. Can be fun to decorate in winter.",
	"effects":{
		"rp":75
	},
	"upgradeinfo":{
		"rarity":6,
		"difficulty":41,
		"int":7
	},
	"cookingeffects":{
		"rp":75,
		"vitP":1
	}
})

registerItem({
	"name":"Fireflower",
	"category":"Plant",
	"sell":2800,
	"buy":1e4,
	"pricemultiplier":"E",
	"flavourtext":"A flower with a unique shape. Also called the 'Mountain Fireworks,' as you can almost hear the sounds of exploding powder when you pluck it.",
	"effects":{
		"rp":70
	},
	"upgradeinfo":{
		"rarity":6,
		"difficulty":41,
		"str":2,
		"int":6
	},
	"cookingeffects":{
		"rp":70,
		"hpmaxP":1
	}
})

registerItem({
	"name":"Emery Flower",
	"category":"Plant",
	"sell":55e3,
	"buy":5e5,
	"pricemultiplier":"E",
	"flavourtext":"A unique golden flower that's extremely tough and resilient. Don't step on it or it'll really hurt!",
	"effects":{
		"rp":300
	},
	"upgradeinfo":{
		"rarity":10,
		"difficulty":66,
		"int":30
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
	"name":"Blue Crystal",
	"category":"Plant",
	"sell":15e3,
	"buy":4e4,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears blue during spring.",
	"effects":{
		"rp":120
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":53,
		"matk":10,
		"mdef":10,
		"waterresP":5
	},
	"cookingeffects":{
		"rp":120,
		"int":10
		"waterresP":5
	}
})

registerItem({
	"name":"Green Crystal",
	"category":"Plant",
	"sell":17e3,
	"buy":48e3,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears green during summer.",
	"effects":{
		"rp":120
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":53,
		"mdef":20,
		"windresP":5
	},
	"cookingeffects":{
		"rp":120,
		"int":10
		"windresP":5
	}
})

registerItem({
	"name":"Red Crystal",
	"category":"Plant",
	"sell":2e4,
	"buy":56e3,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears red during autumn.",
	"effects":{
		"rp":120
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":53,
		"matk":20,
		"fireresP":5
	},
	"cookingeffects":{
		"rp":120,
		"int":10
		"fireresP":5
	}
})

registerItem({
	"name":"White Crystal",
	"category":"Plant",
	"sell":22500,
	"buy":8e4,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears white during winter.",
	"effects":{
		"rp":120
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":53,
		"int":20,
		"earthresP":5
	},
	"cookingeffects":{
		"rp":120,
		"int":10
		"earthresP":5
	}
})
