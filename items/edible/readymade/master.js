registerItem({
	"name":"Chocolate",
	"category":"Ready-made",
	"sell":150,
	"buy":400,
	"flavourtext":"Smooth and sweet, it's an absolute standard. Found in endless varieties.",
	"pricemultiplier":"Ch",
	"effects":{ // Likely to have a different multiplier than the common Effect multiplier
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
	"effects":{
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
	"effects":{
		"statusailments":["SLP"]
	  "rp":20
	},
	"cookingeffects":{
	  "rp":20,
	  "critP":5,
	  "crtresP":-1
	}
});
