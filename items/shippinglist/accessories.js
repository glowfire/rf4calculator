// Registration of items in the order as shown in the shipping records.
// This list contains the items listed in the fifth section.

registerItem({
	"name":"Engagement Ring",
	"sell":1,
	"ability":{
		"loveresP":50
	},
	"flavourtext":"Use it to propose to your #1 love. Be sure you also prepare a double bed! Well...after they say yes, anyway.",
	"craftinglevel":20,
	"materials":["Minerals","Jewels"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Charm",
	"sell":45,
	"buy":350,
	"ability":{
		"critresP":100
	},
	"flavourtext":"A charm from the Far East. Protects you from misfortune by blocking critical hits.",
	"craftinglevel":3,
	"materials":["Cloths and Skins","Strings"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Work Gloves",
	"sell":13,
	"buy":1500,
	"ability":{
		"atk":5,
		"diz":1,
		"stunP":10
	},
	"flavourtext":"Protects your hands from blisters. A must-have for farming.",
	"craftinglevel":4,
	"materials":["Cloths and Skins"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Cheap Bracelet",
	"sell":24,
	"buy":100,
	"ability":{
		"mdef":5
	},
	"flavourtext":"An old, rusty bracelet. Slightly raises magic defense.",
	"craftinglevel":5,
	"materials":["Minerals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Bronze Bracelet",
	"sell":135,
	"buy":8500,
	"ability":{
		"mdef":35
	},
	"flavourtext":"A heavy, bronze bracelet. Raises magic defense for a little bit.",
	"craftinglevel":10,
	"materials":["Bronze","Cloths and Skins"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Silver Bracelet",
	"sell":390,
	"buy":27200,
	"ability":{
		"mdef":62
	},
	"flavourtext":"A silver bracelet. Raises magic defense.",
	"craftinglevel":25,
	"materials":["Silver","Cloths and Skins"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Gold Bracelet",
	"sell":600,
	"buy":72800,
	"ability":{
		"mdef":88
	},
	"flavourtext":"A golden bracelet. Raises magic defense quite considerably.",
	"craftinglevel":39,
	"materials":["Gold","Cloths and Skins"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Platinum Bracelet",
	"sell":1800,
	"buy":102e4,
	"ability":{
		"mdef":120
	},
	"flavourtext":"A platinum bracelet. Greatly raises magic defense.",
	"craftinglevel":50,
	"materials":["Platinum","Cloths and Skins"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Silver Ring",
	"sell":450,
	"buy":45e3,
	"ability":{
		"atr":["Light","Dark"],
		"lightresP":50,
		"darkresP":50
	},
	"flavourtext":"Beloved for its simple design, but otherwise unremarkable.",
	"craftinglevel":24,
	"materials":["Silver","Crystals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Gold Ring",
	"sell":5200,
	"ability":{
		"atr":["Fire","Water","Earth","Wind"],
		"fireresP":15,
		"waterresP":15,
		"earthresP":15,
		"windresP":15
	},
	"flavourtext":"Beloved for its simple design. More expensive than silver.",
	"craftinglevel":63,
	"materials":["Orichalcum","Gold","Turnip's Miracle"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Platinum Ring",
	"sell":7200,
	"ability":{
		"atr":["Fire","Water","Earth","Wind","Light","Dark"],
		"fireresP":10,
		"waterresP":10,
		"earthresP":10,
		"windresP":10,
		"lightresP":25,
		"darkresP":25
	},
	"flavourtext":"Beloved for its simple design. This platinum type is rare and hard to find.",
	"craftinglevel":75,
	"materials":["Dragonic Stone","Platinum"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Shield Ring",
	"sell":320,
	"buy":68e3,
	"ability":{
		"vit":25
	},
	"flavourtext":"A ring used as a shield. Though tough, it only covers a short range. Occasionally reduces damage received to 1.",
	"craftinglevel":44,
	"materials":["Blk. Tortoise Shell","Turtle Shell","Minerals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Critical Ring",
	"sell":750,
	"buy":65e3,
	"ability":{
		"diz":5,
		"critP":20
	},
	"flavourtext":"A ring that raises your chance of landing critical hits. Just by wearing it, you'll know right where to attack.",
	"craftinglevel":30,
	"materials":["Gold","Rigid Horn"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Silent Ring",
	"sell":2600,
	"buy":19800,
	"ability":{
		"sealresP":100
	},
	"flavourtext":"A ring that not only resists seals, but places them upon foes as well due to the medicines set into its trim.",
	"craftinglevel":29,
	"materials":["Silver","Lamp Squid"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Paralysis Ring",
	"sell":550,
	"buy":19800,
	"ability":{
		"parresP":100
	},
	"flavourtext":"A ring that not only resists paralysis, but inflicts it upon foes as well due to the medicines set into its trim.",
	"craftinglevel":28,
	"materials":["Silver","Scorpion Tail"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Poison Ring",
	"sell":480,
	"buy":19800,
	"ability":{
		"psnresP":100
	},
	"flavourtext":"A ring that not only resists poison, but inflicts it upon foes as well due to the medicines set into its trim.",
	"craftinglevel":27,
	"materials":["Silver","Poison Powder"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Magic Ring",
	"sell":1900,
	"buy":18e4,
	"ability":{
		"mdef":50
	},
	"flavourtext":"A ring imbued with magical power. Speeds up the time needed to charge.",
	"craftinglevel":51,
	"materials":["Platinum","Crystals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Throwing Ring",
	"sell":1200,
	"ability":{
	},
	"flavourtext":"You can throw an item far away with this ring.",
	"craftinglevel":33,
	"materials":["Puppetry Strings","Minerals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Stay-up Ring",
	"sell":1100,
	"ability":{
		"slpresP":-25,
		"ftgresP":30,
		"sickresP":30
	},
	"flavourtext":"You will no longer yawn with this ring. Hail to short sleepers!",
	"craftinglevel":46,
	"materials":["Holy Spore","Minerals"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Aquamarine Ring",
	"sell":580,
	"buy":19800,
	"ability":{
		"atr":["Water"],
		"waterresP":50
	},
	"flavourtext":"A roughly cut stone makes this ring quite attractive.",
	"craftinglevel":15,
	"materials":["Silver","Aquamarine"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Amethyst Ring",
	"sell":450,
	"buy":19800,
	"ability":{
		"atr":["Earth"],
		"earthresP":50
	},
	"flavourtext":"The elegance of the amethyst brings a calmness to the atmosphere.",
	"craftinglevel":15,
	"materials":["Silver","Amethyst"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":" Ring",
	"sell":0,
	"buy":19800,
	"ability":{
		"atr":[""],
		"resP":50
	},
	"flavourtext":".",
	"craftinglevel":15,
	"materials":["Silver",""],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Badge",
	"sell":14,
	"buy":500,
	"ability":{
		"vit":3
	},
	"flavourtext":"A vintage, collectible badge given out as a consolation prize.",
	"craftinglevel":6,
	"materials":["Shards"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"Earrings",
	"sell":50,
	"buy":1500,
	"ability":{
		"matk":5,
		"mdef":15,
		"sealresP":5
	},
	"flavourtext":"Dangly earrings. They're so cute when they bobble in the breeze.",
	"craftinglevel":8,
	"materials":["Iron","Powders and Spores"],
	"pricemultiplier":"E",
	"category":"Accessory"
})

registerItem({
	"name":"",
	"sell":,
	"buy":,
	"ability":{
		"":
	},
	"flavourtext":".",
	"craftinglevel":,
	"materials":[""],
	"pricemultiplier":"E",
	"category":"Accessory"
})
