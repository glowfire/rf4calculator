// Complete

registerItem({
	"name":"Turnip Seeds",
	"sell":2,
	"buy":10,
	"value":30,
	"growth":3,
	"harvested":2,
	"flavourtext":"Grows well from summer to fall. Recommended for beginners. Most common crop in the game, for some reason.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"good",
		"autumn":"good",
		"winter":"normal"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Potato Seeds",
	"sell":8,
	"buy":80,
	"value":90,
	"growth":7,
	"harvested":3,
	"flavourtext":"Grows well from spring to summer, but not in winter. Grows beautiful flowers.",
	"regrow":false,
	"seasons":{
		"spring":"good",
		"summer":"good",
		"autumn":"normal",
		"winter":"bad"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Cucumber Seeds",
	"sell":32,
	"buy":320,
	"value":68,
	"growth":5,
	"harvested":5,
	"flavourtext":"Grows well from spring to summer, but not in winter. Hearty ones may grow again after harvesting.",
	"regrow":true,
	"seasons":{
		"spring":"good",
		"summer":"good",
		"autumn":"normal",
		"winter":"bad"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})
