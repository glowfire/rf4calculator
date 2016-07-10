// The ready-made items have a different effect multiplier than the standard one.

registerItem({
	"name":"Chocolate",
	"category":"Ready-made",
	"sell":150,
	"buy":400,
	"flavourtext":"Smooth and sweet, it's an absolute standard. Found in endless varieties.",
	"pricemultiplier":"Ch",
	"effects":{ // Likely to have a different effect multiplier than the common Effect multiplier
		"rp":10
	},
	"cookingeffects":{
		"rp":10,
		"int":2
	}
});

registerItem({
	"name":"Rice",
	"category":"Ready-made",
	"sell":30,
	"buy":200,
	"flavourtext":"A staple of the dining table. Plays well with other dishes, so it's used in a wide variety of recipes.",
	"pricemultiplier":"Ch",
	"effects":{ // Likely to have a different effect multiplier than the common Effect multiplier
		"hp":30
	},
	"cookingeffects":{
		"hp":10,
		"hpmax":5
	}
});

registerItem({
	"name":"Wine",
	"category":"Ready-made",
	"sell":800,
	"buy":2000,
	"flavourtext":"A type of alcohol made from grapes. Popular for its taste and mellowness.",
	"pricemultiplier":"Ch",
	"effects":{ // Likely to have a different effect multiplier than the common Effect multiplier
		"statusailments":["SLP"],
		"rp":20
	},
	"cookingeffects":{
		"rp":20,
		"critP":5,
		"critresP":-1
	}
});
