// Strawberry, Fodder, Shining, Orange, Pineapple,Grape, Apple, Dungeon, Sword, Shield

registerItem({
	"name":"Strawberry Seeds",
	"sell":40,
	"buy":400,
	"value":135,
	"growth":16,
	"harvested":6,
	"flavourtext":"Grows well in spring and fall. Bears sweet fruits. Hearty ones may grow again after harvesting.",
	"regrow":true,
	"seasons":{
		"spring":"good",
		"summer":"normal",
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
	"name":"Pineapple Seeds",
	"sell":280,
	"buy":2800,
	"value":1600,
	"growth":28,
	"harvested":3,
	"flavourtext":"Grows well in summer, but not in other seasons. Takes time to grow. May grow again after harvesting, but tough on soil.",
	"regrow":false,
	"seasons":{
		"spring":"bad",
		"summer":"good",
		"autumn":"bad",
		"winter":"bad"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

