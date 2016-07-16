// Registration of items in the order as shown in the shipping records.
// This list contains the items listed in the first slot.

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
	"name":"Hot-Hot Seeds",
	"sell":120,
	"buy":1200,
	"value":900,
	"growth":31,
	"harvested":5,
	"flavourtext":"Grows well in winter, but not in summer. Takes some time to grow, but is easy to harvest and doesn't wither easily.",
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
	"name":"Gold Melon Seeds",
	"sell":212,
	"buy":2120,
	"value":850,
	"growth":7,
	"harvested":2,
	"flavourtext":"Grows well from spring to summer, but not in winter. Cultivated by a cute girl. May grow again after harvesting.",
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

registerItem({
	"name":"Gold Turnip Seeds",
	"sell":1e3,
	"buy":1e4,
	"value":2e4,
	"growth":120,
	"harvested":3,
	"flavourtext":"Grows well in winter, but not in summer. Grows into a gorgeous golden turnip.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"bad",
		"autumn":"normal",
		"winter":"good"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Gold Potato Seeds",
	"sell":400,
	"buy":4000,
	"value":6000,
	"growth":50,
	"harvested":3,
	"flavourtext":"Grows well in winter, but not in summer. Grows into a gorgeous golden potato.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"bad",
		"autumn":"normal",
		"winter":"good"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Gold Pumpkin Seeds",
	"sell":450,
	"buy":4500,
	"value":4000,
	"growth":70,
	"harvested":3,
	"flavourtext":"Grows well in winter, but not in summer. Grows into a gorgeous golden pumpkin. May grow again after harvesting.",
	"regrow":true,
	"seasons":{
		"spring":"normal",
		"summer":"bad",
		"autumn":"normal",
		"winter":"good"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Gold Cabbage Seeds",
	"sell":500,
	"buy":5000,
	"value":11500,
	"growth":90,
	"harvested":3,
	"flavourtext":"Grows well in winter, but not in summer. Grows into a gorgeous golden cabbage.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"bad",
		"autumn":"normal",
		"winter":"good"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Bok Choy Seeds",
	"sell":100,
	"buy":1000,
	"value":420,
	"growth":5,
	"harvested":4,
	"flavourtext":"Grows well in fall, but not in summer. Weak to heat.",
	"regrow":true,
	"seasons":{
		"spring":"normal",
		"summer":"bad",
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
	"name":"Leek Seeds",
	"sell":68,
	"buy":680,
	"value":1600,
	"growth":9,
	"harvested":1,
	"flavourtext":"Grows well in spring and fall, but not in summer. Withers fairly easily, but is easy on the soil.",
	"regrow":false,
	"seasons":{
		"spring":"good",
		"summer":"bad",
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
	"name":"Radish Seeds",
	"sell":12,
	"buy":120,
	"value":360,
	"growth":5,
	"harvested":1,
	"flavourtext":"Grows well in fall, but not in summer. Has a good balance of growth rate and resilience. Easy on the soil.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"bad",
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
	"name":"Pink Turnip Seeds",
	"sell":16,
	"buy":160,
	"value":200,
	"growth":11,
	"harvested":4,
	"flavourtext":"Grows well in spring, but not in winter. Grows a beautiful pink turnip. Easy to harvest. Popular with novice farmers.",
	"regrow":false,
	"seasons":{
		"spring":"good",
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
