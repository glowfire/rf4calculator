// Registration of items in the order as shown in the shipping records.
// This list contains the items listed in the third section.

// Unchecked price multipliers

// Need Water Dragon Ash x1, Earth Dragon Ash x1, Glitta Augite x1 to complete this shipping section

registerItem({
	"name":"Clippers",
	"sell":520,
	"buy":1900,
	// No Ability
	"flavourtext":"An item used to trim and clip Wooly fur. Designed not to hurt its target.",
	// Cannot be forged
	"category":"Clippers",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Brush",
	"sell":640,
	"buy":2400,
	// No Ability
	"flavourtext":"An item used to brush monsters. Capable of grooming just about anything!",
	// Cannot be forged
	"category":"Brush",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Sacred Pole",
	"sell":2500,
	"ability":{
		"atk":128,
		"def":50,
		"matk":100,
		"mdef":80,
		"str":30,
		"int":30,
		"diz":30,
		"critP":50,
		"knockP":100,
		"stunP":50
	},
	"flavourtext":"A pole so strong that it'll never break. Can be charged to attract fish from far away.",
	"forginglevel":80,
	"materials":["Platinum","Sticks and Stems","Strings"],
	"category":"Pole",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Famous Pole",
	"sell":650,
	"ability":{
		"atk":60,
		"matk":40
	},
	"flavourtext":"A pole for master fishers. Can be charged to attract fish from far away.",
	"forginglevel":45,
	"materials":["Gold","Sticks and Stems","Strings"],
	"category":"Pole",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Skilled Pole",
	"sell":440,
	"buy":25e3,
	"ability":{
		"atk":25,
		"matk":25
	},
	"flavourtext":"A pole for novice fishers. Can be charged to attract fish from far away.",
	"forginglevel":30,
	"materials":["Silver","Sticks and Stems","Strings"],
	"category":"Pole",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Beginner's Pole",
	"sell":170,
	"buy":5e3,
	"ability":{
		"atk":10,
		"matk":12
	},
	"flavourtext":"A pole for beginners. Can be charged to attract fish from far away.",
	"forginglevel":15,
	"materials":["Bronze","Sticks and Stems","Strings"],
	"category":"Pole",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Cheap Pole",
	"sell":44,
	"buy":1500,
	"ability":{
		"atk":1,
		"matk":3
	},
	"flavourtext":"An old, rusty fishing pole. So old that it might break if the fish is too large.",
	"forginglevel":5,
	"materials":["Sticks and Stems","Strings"],
	"category":"Pole",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Miracle Axe",
	"sell":2500,
	"ability":{
		"atk":190,
		"def":30,
		"matk":15,
		"mdef":50,
		"str":20,
		"diz":5,
		"critP":10,
		"stunP":50
	},
	"flavourtext":"An axe so amazing, poems are written of its noble deeds. Shorter time needed to charge, making it highly efficient.",
	"forginglevel":80,
	"materials":["Platinum","Stones","Sticks and Stems"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Mountain Axe",
	"sell":600,
	"ability":{
		"atk":108,
		"matk":10,
		"critP":5
	},
	"flavourtext":"An axe like an ox. Made from gold and can be charged to cover wider areas.",
	"forginglevel":45,
	"materials":["Gold","Stones","Sticks and Stems"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Lumber Axe",
	"sell":400,
	"buy":3e4,
	"ability":{
		"atk":67,
		"matk":5,
		"critP":5
	},
	"flavourtext":"A nice, strong silver axe. Can be charged to cover wider areas.",
	"forginglevel":30,
	"materials":["Silver","Stones","Sticks and Stems"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Chopping Axe",
	"sell":130,
	"buy":5e3,
	"ability":{
		"atk":25,
		"critP":5
	},
	"flavourtext":"A sturdy bronze axe. Can be charged to cover wider areas.",
	"forginglevel":15,
	"materials":["Bronze","Stones","Sticks and Stems"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Cheap Axe",
	"sell":34,
	"buy":1500,
	"ability":{
		"atk":3,
		"critP":5
	},
	"flavourtext":"An old rusty axe. Too old to be charged.",
	"forginglevel":5,
	"materials":["Stones","Sticks and Stems"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Platinum Hammer",
	"sell":2500,
	"ability":{
		"atk":187,
		"def":50,
		"matk":15,
		"mdef":30,
		"str":20,
		"diz":18,
		"critP":-5,
		"stunP":75
	},
	"flavourtext":"A hammer made from platinum. Shorter time needed to charge, making it highly efficient. Used to flatten soil.",
	"forginglevel":80,
	"materials":["Platinum","Sticks and Stems"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Golden Hammer",
	"sell":600,
	"ability":{
		"atk":106,
		"matk":10,
		"diz":5,
		"critP":-5,
		"stunP":20
	},
	"flavourtext":"A hammer reinforced with gold. Can be charged to cover wider areas. Used to flatten soil.",
	"forginglevel":45,
	"materials":["Gold","Sticks and Stems"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Silver Hammer",
	"sell":400,
	"buy":3e4,
	"ability":{
		"atk":68,
		"matk":5,
		"diz":5,
		"critP":-5,
		"stunP":20
	},
	"flavourtext":"A hammer reinforced with silver. Can be charged to cover wider areas. Used to flatten soil.",
	"forginglevel":30,
	"materials":["Silver","Sticks and Stems"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Iron Hammer",
	"sell":138,
	"buy":5e3,
	"ability":{
		"atk":25,
		"diz":5,
		"critP":-5,
		"stunP":20
	},
	"flavourtext":"A hammer reinforced with bronze. Can be charged to cover wider areas. Used to flatten soil.",
	"forginglevel":15,
	"materials":["Bronze","Sticks and Stems"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Cheap Hammer",
	"sell":13,
	"buy":1500,
	"ability":{
		"atk":3,
		"diz":5,
		"critP":-5,
		"stunP":20
	},
	"flavourtext":"An old, rusty hammer. Too old to be charged. Used to flatten soil.",
	"forginglevel":5,
	"materials":["Minerals","Sticks and Stems"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Cheap Sickle",
	"sell":38,
	"buy":300,
	"ability":{
		"atk":2
	},
	"flavourtext":"An old, rusty sickle. Use it to cut weeds and plants. You can also cut crops to collect seeds",
	"forginglevel":5,
	"materials":["Minerals","Shards"],
	"category":"Sickle",
	"pricemultiplier":"E"
})

registerItem({
	"name":" Sickle",
	"sell":,
	"buy":,
	"ability":{
		"atk":
	},
	"flavourtext":"A sickle. Use it to cut weeds and plants. You can also cut crops to collect seeds",
	"forginglevel":,
	"materials":["","Shards"],
	"category":"Sickle",
	"pricemultiplier":"E"
})

registerItem({
	"name":"",
	"sell":,
	"buy":,
	"ability":{
		"":
	},
	"flavourtext":".",
	"forginglevel":,
	"materials":["",""],
	"category":"",
	"pricemultiplier":"E"
})
