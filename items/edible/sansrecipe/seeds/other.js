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
	"name":"Fodder Seeds",
	"sell":3,
	"buy":30,
	"value":60,
	"growth":4,
	"harvested":1,
	"flavourtext":"Grow feed for the monsters. Hearty ones may grow again after harvesting.",
	"regrow":true,
	"seasons":{
		"spring":"normal",
		"summer":"normal",
		"autumn":"normal",
		"winter":"normal"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Shining Seed",
	"sell":300,
	"buy":3000,
	"growth":38,
	"flavourtext":"Doesn't grow well in winter. Produces a lot of lumber. May produce ore.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"normal",
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
	"name":"Orange Tree Seed",
	"sell":500,
	"buy":5000,
	"value":80,
	"growth":22,
	"flavourtext":"Doesn't grow well in winter. Once it grows into a tree, it will produce oranges every day.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"normal",
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

registerItem({
	"name":"Grape Tree Seed",
	"sell":600,
	"buy":6000,
	"value":120,
	"growth":50,
	"flavourtext":"Doesn't grow well in winter. Once it grows into a tree, it will produce grapes every day.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"normal",
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
	"name":"Apple Tree Seed",
	"sell":700,
	"buy":7000,
	"value":150,
	"growth":62,
	"flavourtext":"Doesn't grow well in winter. Once it grows into a tree, it will produce apples every day.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"normal",
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
	"name":"Dungeon Seed",
	"sell":500,
	"buy":5000,
	"growth":18,
	"flavourtext":"Grows to a dungeon. Depending on the level of the seed, it may bloom into a particularly difficult one.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"normal",
		"autumn":"normal",
		"winter":"normal"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Sword Seed",
	"sell":150,
	"buy":1500,
	"value":1e3,
	"growth":12,
	"harvested":1,
	"flavourtext":"Grows into a sword. Neat, huh?",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"normal",
		"autumn":"normal",
		"winter":"normal"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Shield Seed",
	"sell":150,
	"buy":1500,
	"value":1e3,
	"growth":12,
	"harvested":1,
	"flavourtext":"Grows into a shield. Cool, right?",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"normal",
		"autumn":"normal",
		"winter":"normal"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

