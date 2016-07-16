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

registerItem({
	"name":"White Crystal Seeds",
	"sell":1e3,
	"buy":3e4,
	"value":22500,
	"growth":90,
	"harvested":3,
	"flavourtext":"Grows well in winter, but not in other seasons. Takes a long time to grow. Its seed resembles white crystal.",
	"regrow":false,
	"seasons":{
		"spring":"bad",
		"summer":"bad",
		"autumn":"bad",
		"winter":"good"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Red Crystal Seeds",
	"sell":1e3,
	"buy":3e4,
	"value":2e4,
	"growth":80,
	"harvested":3,
	"flavourtext":"Grows well in fall, but not in other seasons. Takes a long time to grow. Its seed resembles red crystal.",
	"regrow":false,
	"seasons":{
		"spring":"bad",
		"summer":"bad",
		"autumn":"good",
		"winter":"bad"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Pom-Pom Grass Sds.",
	"sell":51,
	"buy":510,
	"value":440,
	"growth":14,
	"harvested":3,
	"flavourtext":"Grows well in fall, but not in winter. Takes a long time to grow. Its seed is white and soft.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"normal",
		"autumn":"good",
		"winter":"bad"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Autumn Grass Seeds",
	"sell":250,
	"buy":2500,
	"value":1800,
	"growth":29,
	"harvested":3,
	"flavourtext":"Grows well in fall, but not in winter. Takes a long time to grow. Its seed is red and round.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"normal",
		"autumn":"good",
		"winter":"bad"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Noel Grass Seeds",
	"sell":270,
	"buy":2700,
	"value":2e3,
	"growth":33,
	"harvested":4,
	"flavourtext":"Grows well in winter, but not in summer. Takes a long time to grow but rarely withers. Used in certain festivals.",
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
	"name":"Green Crystal Seeds",
	"sell":1e3,
	"buy":3e4,
	"value":17e3,
	"growth":70,
	"harvested":3,
	"flavourtext":"Grows well in summer, but not in other seasons. Takes a long time to grow. Its seed resembles green crystal.",
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
	"name":"Fireflower Seeds",
	"sell":500,
	"buy":5000,
	"value":2800,
	"growth":42,
	"harvested":4,
	"flavourtext":"Grows well in summer, but not in winter. Its seeds are as black as gunpowder.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
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
	"name":"Clover Seeds",
	"sell":96,
	"buy":960,
	"value":980,
	"growth":28,
	"harvested":3,
	"flavourtext":"Grows well in spring and fall, but not in summer. A lucky seed that brings good fortune, but withers very easily.",
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
	"name":"Ironleaf Seeds",
	"sell":60,
	"buy":600,
	"value":1111,
	"growth":21,
	"harvested":2,
	"flavourtext":"Grows well in winter, but not in summer. Takes a long time to grow. Has a special power to gather iron from the soil.",
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
	"name":"Emery Flower Seeds",
	"sell":2500,
	"buy":5e4,
	"value":55e3,
	"growth":120,
	"harvested":2,
	"flavourtext":"Takes a very long time to grow. Rarely withers, and can be cultivated by almost anyone.",
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
	"name":"Blue Crystal Seeds",
	"sell":1e3,
	"buy":3e4,
	"value":15e3,
	"growth":55,
	"harvested":3,
	"flavourtext":"Grows well in spring, but not in other seasons. Takes a long time to grow. Its seed resembles blue crystal.",
	"regrow":false,
	"seasons":{
		"spring":"good",
		"summer":"bad",
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
	"name":"Lamp Grass Seeds",
	"sell":74,
	"buy":740,
	"value":650,
	"growth":16,
	"harvested":3,
	"flavourtext":"Grows well in winter. Takes a long time to grow. Mainly used as an ingredient in medicines.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"normal",
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
	"name":"Cherry Grass Seeds",
	"sell":42,
	"buy":420,
	"value":230,
	"growth":10,
	"harvested":4,
	"flavourtext":"Grows well in spring, but not in winter. Grows a light pink flower.",
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
	"name":"Charm Blue Seeds",
	"sell":37,
	"buy":370,
	"value":220,
	"growth":8,
	"harvested":3,
	"flavourtext":"Grows well in fall, but not in winter. Easy to grow, with a good balance of growth rate and resilience.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
		"summer":"normal",
		"autumn":"good",
		"winter":"bad"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Green Pepper Seeds",
	"sell":80,
	"buy":800,
	"value":150,
	"growth":7,
	"harvested":5,
	"flavourtext":"Grows well in summer, but not in winter. Highly nutritious. Hearty ones may grow again after harvesting.",
	"regrow":true,
	"seasons":{
		"spring":"normal",
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
	"name":"Spinach Seeds",
	"sell":6,
	"buy":60,
	"value":65,
	"growth":2,
	"harvested":2,
	"flavourtext":"Grows well in fall. Grows fast, but withers quickly. Don't forget to water it every day!",
	"regrow":false,
	"seasons":{
		"spring":"normal",
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
	"name":"Yam Seeds",
	"sell":25,
	"buy":250,
	"value":140,
	"growth":8,
	"harvested":5,
	"flavourtext":"Grows well from summer to fall, but not in winter. Easy on the soil.",
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
	"name":"Carrot Seeds",
	"sell":40,
	"buy":400,
	"value":380,
	"growth":10,
	"harvested":3,
	"flavourtext":"Grows well in fall. A well-balanced crop that's easy on the soil.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
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
	"name":"Eggplant Seeds",
	"sell":72,
	"buy":720,
	"value":190,
	"growth":7,
	"harvested":4,
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

registerItem({
	"name":"Pink Cat Seeds",
	"sell":18,
	"buy":180,
	"value":110,
	"growth":6,
	"harvested":3,
	"flavourtext":"Grows well in summer, but not in winter. Grows fast, is easy to harvest, but withers fast.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
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
	"name":"Pumpkin Seeds",
	"sell":20,
	"buy":200,
	"value":110,
	"growth":7,
	"harvested":3,
	"flavourtext":"Grows well from spring to summer, but not in winter. Easy on the soil. May grow again after harvesting.",
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
	"name":"Onion Seeds",
	"sell":148,
	"buy":1480,
	"value":800,
	"growth":18,
	"harvested":5,
	"flavourtext":"Grows well in fall. Easy to harvest and easy on the soil.",
	"regrow":false,
	"seasons":{
		"spring":"normal",
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
	"name":"Corn Seeds",
	"sell":45,
	"buy":450,
	"value":1000,
	"growth":7,
	"harvested":1,
	"flavourtext":"Grows well from spring to summer, but not in winter. Improves the soil if you till it without harvesting.",
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
	"name":"Tomato Seeds",
	"sell":188,
	"buy":1880,
	"value":540,
	"growth":7,
	"harvested":3,
	"flavourtext":"Grows well from spring to summer, but not in winter. Grows nutritious tomatoes. May grow again after harvesting.",
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
	"name":"Toyherb Seeds",
	"sell":6,
	"buy":60,
	"value":65,
	"growth":4,
	"harvested":2,
	"flavourtext":"Grows well in spring but not in winter. A fast grower, but delicate and tough to harvest. Cures fatigue if fully grown.",
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

registerItem({
	"name":"Moondrop Seeds",
	"sell":25,
	"buy":250,
	"value":115,
	"growth":7,
	"harvested":4,
	"flavourtext":"Grows well in spring and fall, but not in winter. An easy flower to grow.",
	"regrow":false,
	"seasons":{
		"spring":"good",
		"summer":"normal",
		"autumn":"good",
		"winter":"bad"
	},
	"category":"Seed",
	"pricemultiplier":"Sd",
	"cookingeffects":{
		"hp":5
	}
})

registerItem({
	"name":"Cabbage Seeds",
	"sell":98,
	"buy":980,
	"value":680,
	"growth":8,
	"harvested":3,
	"flavourtext":"Grows well in spring and fall. Grows fast, and rarely withers.",
	"regrow":false,
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
