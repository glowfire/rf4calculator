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
	"craftinglevel":, // Probably none
	"materials":["",""], // Probably none
	"category":"Clippers",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Brush",
	"sell":640,
	"buy":2400,
	// No Ability
	"flavourtext":"An item used to brush monsters. Capable of grooming just about anything!",
	"craftinglevel":, // Probably none
	"materials":["",""], // Probably none
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
	"craftinglevel":80,
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
	"craftinglevel":45,
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
	"craftinglevel":30,
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
	"craftinglevel":15,
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
	"craftinglevel":5,
	"materials":[Sticks and Stems","Strings"],
	"category":"Pole",
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
	"craftinglevel":,
	"materials":["",""],
	"category":"",
	"pricemultiplier":"E"
})
