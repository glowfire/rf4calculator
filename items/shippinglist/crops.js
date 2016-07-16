// Registration of items in the order as shown in the shipping records.
// This list contains the items listed in the first section.
// Only mushrooms are incomplete.

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
	"name":"Elli Leaves",
	"category":"Plant",
	"sell":250,
	"buy":3500,
	"pricemultiplier":"E",
	"effects":{
		"hp":400,
		"rp":5
	},
	"upgradeinfo":{
		"rarity":10,
		"difficulty":60
	},
	"flavourtext":"An exotic plant with a dark, blue flower. Beautiful!",
	"cookingeffects":{
		"hp":400,
		"rp":5
	}
})

registerItem({
	"name":"Ayngondaia Lawn",
	"category":"Plant",
	"sell":33,
	"pricemultiplier":"E", ///////////////////////////////////// unknown
	"effects":{
	},
	"upgradeinfo":{
		"rarity":10, ///////////////////////////////////// unknown
		"difficulty":30
	},
	"flavourtext":"A rare plant. Imbued with incredible vitality, rumor has it that this bright bounty has rejuvenating qualities.",
	"cookingeffects":{
		"hpmaxP":5
	}
})

registerItem({
	"name":"Big White Crystal",
	"category":"Plant",
	"sell":101500,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears white during winter.",
	"effects":{
		"rp":400
	},
	"upgradeinfo":{
		"rarity":12,
		"difficulty":76,
		"int":60,
		"earthresP":20
	},
	"cookingeffects":{
		"rp":400,
		"intP":3,
		"earthresP":20
	}
})

registerItem({
	"name":"White Crystal",
	"category":"Plant",
	"sell":22500,
	"buy":8e4,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears white during winter.",
	"effects":{
		"rp":120
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":53,
		"int":20,
		"earthresP":5
	},
	"cookingeffects":{
		"rp":120,
		"int":10,
		"earthresP":5
	}
})

registerItem({
	"name":"Big Red Crystal",
	"category":"Plant",
	"sell":9e4,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears red during autumn.",
	"effects":{
		"rp":400
	},
	"upgradeinfo":{
		"rarity":12,
		"difficulty":75,
		"matk":60,
		"fireresP":20
	},
	"cookingeffects":{
		"rp":400,
		"intP":3,
		"fireresP":20
	}
})

registerItem({
	"name":"Red Crystal",
	"category":"Plant",
	"sell":2e4,
	"buy":56e3,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears red during autumn.",
	"effects":{
		"rp":120
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":53,
		"matk":20,
		"fireresP":5
	},
	"cookingeffects":{
		"rp":120,
		"int":10,
		"fireresP":5
	}
})

registerItem({
	"name":"King Pom-Pom Grass",
	"category":"Plant",
	"sell":2300,
	"pricemultiplier":"E",
	"flavourtext":"Has white cotton-like flowers in its center. Looks cute like a dandelion, but is poisonous, so say no to the blow!",
	"effects":{
		"statusailments":["PSN"],
		"rp":100
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":52,
		"psnatkP":15,
		"psnresP":19
	},
	"cookingeffects":{
		"statusailments":["PSN"],
		"rp":100,
		"str":10,
		"psnatkP":80
	}
})

registerItem({
	"name":"Pom-Pom Grass",
	"category":"Plant",
	"sell":440,
	"buy":1500,
	"pricemultiplier":"E",
	"flavourtext":"Has white cotton-like flowers in its center. Looks cute like a dandelion, but is poisonous, so say no to the blow!",
	"effects":{
		"statusailments":["PSN"],
		"rp":45
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":28,
		"psnatkP":3,
		"psnresP":5
	},
	"cookingeffects":{
		"statusailments":["PSN"],
		"rp":45,
		"psnatkP":15
	}
})
	
registerItem({
	"name":"Big Autumn Grass",
	"category":"Plant",
	"sell":9000,
	"pricemultiplier":"E",
	"flavourtext":"A plant which grows colorful flowers. Named as it is due to its autumnal color scheme.",
	"effects":{
		"hp":450,
		"rp":150
	},
	"upgradeinfo":{
		"rarity":9,
		"difficulty":57,
		"slpresP":25
	},
	"cookingeffects":{
		"hp":450,
		"rp":150,
		"rpmaxP":3
	}
})
	
registerItem({
	"name":"Autumn Grass",
	"category":"Plant",
	"sell":1800,
	"buy":6000,
	"pricemultiplier":"E",
	"flavourtext":"A plant which grows colorful flowers. Named as it is due to its autumnal color scheme.",
	"effects":{
		"rp":60
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":35,
		"slpresP":6
	},
	"cookingeffects":{
		"rp":60,
		"rpmaxP":1
	}
})

registerItem({
	"name":"Large Noel Grass",
	"category":"Plant",
	"sell":1e4,
	"pricemultiplier":"E",
	"flavourtext":"Weirdly tree-shaped plant. Can be fun to decorate in winter.",
	"effects":{
		"rp":180
	},
	"upgradeinfo":{
		"rarity":10,
		"difficulty":63,
		"int":22
	},
	"cookingeffects":{
		"rp":180,
		"vitP":3
	}
})

registerItem({
	"name":"Noel Grass",
	"category":"Plant",
	"sell":2e3,
	"buy":6660,
	"pricemultiplier":"E",
	"flavourtext":"Weirdly tree-shaped plant. Can be fun to decorate in winter.",
	"effects":{
		"rp":75
	},
	"upgradeinfo":{
		"rarity":6,
		"difficulty":41,
		"int":7
	},
	"cookingeffects":{
		"rp":75,
		"vitP":1
	}
})

registerItem({
	"name":"Big Green Crystal",
	"category":"Plant",
	"sell":76500,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears green during summer.",
	"effects":{
		"rp":400
	},
	"upgradeinfo":{
		"rarity":12,
		"difficulty":74,
		"mdef":60,
		"windresP":20
	},
	"cookingeffects":{
		"rp":400,
		"intP":3,
		"windresP":20
	}
})

registerItem({
	"name":"Green Crystal",
	"category":"Plant",
	"sell":17e3,
	"buy":48e3,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears green during summer.",
	"effects":{
		"rp":120
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":53,
		"mdef":20,
		"windresP":5
	},
	"cookingeffects":{
		"rp":120,
		"int":10,
		"windresP":5
	}
})

registerItem({
	"name":"Big Fireflower",
	"category":"Plant",
	"sell":14e3,
	"pricemultiplier":"E",
	"flavourtext":"A flower with a unique shape. Also called the 'Mountain Fireworks,' as you can almost hear the sounds of exploding powder when you pluck it.",
	"effects":{
		"rp":200
	},
	"upgradeinfo":{
		"rarity":10,
		"difficulty":64,
		"str":10,
		"int":18
	},
	"cookingeffects":{
		"rp":200,
		"hpmaxP":3
	}
})

registerItem({
	"name":"Fireflower",
	"category":"Plant",
	"sell":2800,
	"buy":1e4,
	"pricemultiplier":"E",
	"flavourtext":"A flower with a unique shape. Also called the 'Mountain Fireworks,' as you can almost hear the sounds of exploding powder when you pluck it.",
	"effects":{
		"rp":70
	},
	"upgradeinfo":{
		"rarity":6,
		"difficulty":41,
		"str":2,
		"int":6
	},
	"cookingeffects":{
		"rp":70,
		"hpmaxP":1
	}
})

registerItem({
	"name":"Great 4-Leaf Clover",
	"category":"Plant",
	"sell":5e3,
	"pricemultiplier":"E",
	"flavourtext":"A plant which brings you good luck. Carry it around or make it a gift, and happiness will follow you!",
	"effects":{
		"rp":100
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":52
	},
	"cookingeffects":{
		"rp":100,
		"critP":15
	}
})

registerItem({
	"name":"4-Leaf Clover",
	"category":"Plant",
	"sell":980,
	"buy":4000,
	"pricemultiplier":"E",
	"flavourtext":"A plant which brings you good luck. Carry it around or make it a gift, and happiness will follow you!",
	"effects":{
		"rp":50
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":29
	},
	"cookingeffects":{
		"rp":50,
		"critP":5
	}
})

registerItem({
	"name":"Super Ironleaf",
	"category":"Plant",
	"sell":5555,
	"pricemultiplier":"E",
	"flavourtext":"A plant with 1000 spikes. Its unique shape is the result of iron content collected from the ground.",
	"effects":{
		"hp":-1000
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":52,
		"atk":18
	},
	"cookingeffects":{
		"hp":-1000,
		"str":30
	}
})

registerItem({
	"name":"Ironleaf",
	"category":"Plant",
	"sell":1111,
	"buy":4444,
	"pricemultiplier":"E",
	"flavourtext":"A plant with many spikes. Its unique shape is the result of iron content collected from the ground.",
	"effects":{
		"hp":-100
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":29,
		"atk":4
	},
	"cookingeffects":{
		"hp":-100,
		"str":10
	}
})

registerItem({
	"name":"Great Emery Flower",
	"category":"Plant",
	"sell":25e4,
	"pricemultiplier":"E",
	"flavourtext":"A unique golden flower that's extremely tough and resilient. Don't step on it or it'll really hurt!",
	"effects":{
		"rp":500
	},
	"upgradeinfo":{
		"rarity":15,
		"difficulty":95,
		"int":80
	},
	"cookingeffects":{
		"rp":500,
		"hpmaxP":3,
		"rpmaxP":3,
		"strP":3,
		"vitP":3,
		"intP":3
	}
})

registerItem({
	"name":"Emery Flower",
	"category":"Plant",
	"sell":55e3,
	"buy":5e5,
	"pricemultiplier":"E",
	"flavourtext":"A unique golden flower that's extremely tough and resilient. Don't step on it or it'll really hurt!",
	"effects":{
		"rp":300
	},
	"upgradeinfo":{
		"rarity":10,
		"difficulty":66,
		"int":30
	},
	"cookingeffects":{
		"rp":300,
		"hpmaxP":1,
		"rpmaxP":1,
		"strP":1,
		"vitP":1,
		"intP":1
	}
})

registerItem({
	"name":"Big Blue Crystal",
	"category":"Plant",
	"sell":67500,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears blue during spring.",
	"effects":{
		"rp":400
	},
	"upgradeinfo":{
		"rarity":12,
		"difficulty":73,
		"matk":30,
		"mdef":30,
		"waterresP":20
	},
	"cookingeffects":{
		"rp":400,
		"intP":3,
		"waterresP":20
	}
})

registerItem({
	"name":"Blue Crystal",
	"category":"Plant",
	"sell":15e3,
	"buy":4e4,
	"pricemultiplier":"E",
	"flavourtext":"A flower made of rune crystals that mixed together in the ground. Appears blue during spring.",
	"effects":{
		"rp":120
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":53,
		"matk":10,
		"mdef":10,
		"waterresP":5
	},
	"cookingeffects":{
		"rp":120,
		"int":10,
		"waterresP":5
	}
})

registerItem({
	"name":"Kaiser Lamp Grass",
	"category":"Plant",
	"sell":3250,
	"pricemultiplier":"E",
	"flavourtext":"A grass with luminous powder all throughout its blossomed stem. Has a strong calming effect.",
	"effects":{
		"rp":90
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":52,
		"int":10
	},
	"cookingeffects":{
		"rp":90,
		"strP":3
	}
})

registerItem({
	"name":"Lamp Grass",
	"category":"Plant",
	"sell":650,
	"buy":2e3,
	"pricemultiplier":"E",
	"flavourtext":"A grass with luminous powder all throughout its blossomed stem. Has a strong calming effect.",
	"effects":{
		"rp":40
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":28,
		"int":3
	},
	"cookingeffects":{
		"rp":40,
		"strP":1
	}
})

registerItem({
	"name":"King Cherry Grass",
	"category":"Plant",
	"sell":1200,
	"pricemultiplier":"E",
	"flavourtext":"A plant that works hard to be prettier than all the other flowers. Other flowers sometimes sneer, but they're just jealous. Can be found in spring.",
	"effects":{
		"rp":85
	},
	"upgradeinfo":{
		"rarity":7,
		"difficulty":47,
		"slpatkP":9
	},
	"cookingeffects":{
		"rp":85,
		"intP":3
	}
})

registerItem({
	"name":"Cherry Grass",
	"category":"Plant",
	"sell":230,
	"buy":700,
	"pricemultiplier":"E",
	"flavourtext":"A plant that works hard to be prettier than all the other flowers. Other flowers sometimes sneer, but they're just jealous. Can be found in spring.",
	"effects":{
		"rp":30
	},
	"upgradeinfo":{
		"rarity":3,
		"difficulty":22,
		"slpatkP":1
	},
	"cookingeffects":{
		"rp":30,
		"intP":1
	}
})

registerItem({
	"name":"Withered Grass",
	"category":"Plant",
	"sell":1,
	"buy":100,
	"pricemultiplier":"E",
	"effects":{
		"statusailments":["PSN"],
		"rpP":-20
	},
	"upgradeinfo":{
		"rarity":0,
		"difficulty":1,
		"vit":-1
	},
	"flavourtext":"You'd get sick if you ate this grass, but it can be used to improve the quality of soil.",
	"cookingeffects":{
		"statusailments":["PSN"],
		"rpP":-20
	}
})

registerItem({
	"name":"Weeds",
	"category":"Plant",
	"sell":1,
	"buy":30,
	"pricemultiplier":"E",
	"effects":{
		"hp":-5
	},
	"upgradeinfo":{
		"rarity":0,
		"difficulty":1
	},
	"flavourtext":"Grows anywhere, anytime. It doesn't obey any rules. It does its own thing. And that's why it's cool.",
	"cookingeffects":{
		"hp":-5
	}
})

registerItem({
	"name":"White Grass",
	"category":"Plant",
	"sell":5,
	"buy":120,
	"pricemultiplier":"E",
	"effects":{
		"hp":200,
		"rp":3
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":65
	},
	"flavourtext":"Beautiful grass of purest white. Hard to find in winter since it blends in with the snow. Fragile, but noble.",
	"cookingeffects":{
		"hp":200,
		"rp":3
	}
})

registerItem({
	"name":"Indigo Grass",
	"category":"Plant",
	"sell":5,
	"buy":120,
	"pricemultiplier":"E",
	"effects":{
		"hp":80,
		"rp":3
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":29
	},
	"flavourtext":"Soothing grass that supposedly resolves arguments just by being there.",
	"cookingeffects":{
		"hp":80,
		"rp":3
	}
})

registerItem({
	"name":"Purple Grass",
	"category":"Plant",
	"sell":5,
	"buy":120,
	"pricemultiplier":"E",
	"effects":{
		"hp":20,
		"rp":3
	},
	"upgradeinfo":{
		"rarity":1,
		"difficulty":5
	},
	"flavourtext":"A sophisticated purple grass. Has trouble getting along with the other grasses due to its massive ego.",
	"cookingeffects":{
		"hp":20,
		"rp":3
	}
})

registerItem({
	"name":"Green Grass",
	"category":"Plant",
	"sell":5,
	"buy":120,
	"pricemultiplier":"E",
	"effects":{
		"rp":3
	},
	"upgradeinfo":{
		"rarity":0,
		"difficulty":1
	},
	"flavourtext":"Plain green grass. Trying hard to change so people will stop calling it boring.",
	"cookingeffects":{
		"rp":3
	}
})

registerItem({
	"name":"Blue Grass",
	"category":"Plant",
	"sell":5,
	"buy":120,
	"pricemultiplier":"E",
	"effects":{
		"hp":30,
		"rp":3
	},
	"upgradeinfo":{
		"rarity":0,
		"difficulty":11
	},
	"flavourtext":"A nifty blue grass that's cold to the touch. Used in medicine due to its soothing effect.",
	"cookingeffects":{
		"hp":30,
		"rp":3
	}
})

registerItem({
	"name":"Yellow Grass",
	"category":"Plant",
	"sell":5,
	"buy":120,
	"pricemultiplier":"E",
	"effects":{
		"hp":100,
		"rp":3
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":39
	},
	"flavourtext":"Grass which brings you luck. People carry it in hopes that it will make them rich.",
	"cookingeffects":{
		"hp":100,
		"rp":3
	}
})

registerItem({
	"name":"Red Grass",
	"category":"Plant",
	"sell":5,
	"buy":120,
	"pricemultiplier":"E",
	"effects":{
		"hp":120,
		"rp":3
	},
	"upgradeinfo":{
		"rarity":6,
		"difficulty":40
	},
	"flavourtext":"Grass of passion. Its red color helps it grow faster than other grasses.",
	"cookingeffects":{
		"hp":120,
		"rp":3
	}
})

registerItem({
	"name":"Orange Grass",
	"category":"Plant",
	"sell":5,
	"buy":120,
	"pricemultiplier":"E",
	"effects":{
		"hp":150,
		"rp":3
	},
	"upgradeinfo":{
		"rarity":7,
		"difficulty":48
	},
	"flavourtext":"Grass as orange as the sun. Its bright color gives you energy just by looking at it.",
	"cookingeffects":{
		"hp":150,
		"rp":3
	}
})

registerItem({
	"name":"Black Grass",
	"category":"Plant",
	"sell":5,
	"buy":120,
	"pricemultiplier":"E",
	"effects":{
		"hp":50,
		"rp":3
	},
	"upgradeinfo":{
		"rarity":3,
		"difficulty":23
	},
	"flavourtext":"Grass with a dull, mysterious glow like a muffled black light. Hard to see at night, so it's often stepped on.",
	"cookingeffects":{
		"hp":50,
		"rp":3
	}
})

registerItem({
	"name":"Antidote Grass",
	"category":"Plant",
	"sell":6,
	"buy":150,
	"pricemultiplier":"E",
	"effects":{
		"heal":["PSN"],
		"hp":5
	},
	"upgradeinfo":{
		"rarity":0,
		"difficulty":8,
		"psnresP":3
	},
	"flavourtext":"A grass that purifies poisons in the body. Very bitter, but effective.",
	"cookingeffects":{
		"heal":["PSN"],
		"hp":5
	}
})

registerItem({
	"name":"Medicinal Herb",
	"category":"Plant",
	"sell":8,
	"buy":80,
	"pricemultiplier":"E",
	"effects":{
		"hp":20
	},
	"upgradeinfo":{
		"rarity":0,
		"difficulty":2,
		"ftgresP":1
	},
	"flavourtext":"A wild herb with a bitter taste. Helps regain energy.",
	"cookingeffects":{
		"hp":20
	}
})

registerItem({
	"name":"Great Charm Blue",
	"category":"Plant",
	"sell":1200,
	"pricemultiplier":"E",
	"flavourtext":"A deep blue flower. Practically swallows you into its beautiful blossoms.",
	"effects":{
		"statusailments":["PSN"],
		"rp":80
	},
	"upgradeinfo":{
		"rarity":7,
		"difficulty":46,
		"int":8,
		"psnatkP":17
	},
	"cookingeffects":{
		"statusailments":["PSN"],
		"rp":80,
		"hpmax":100,
		"str":5,
		"vit":5,
		"int":5,
		"slpresP":75,
		"ftgresP":75,
		"sickresP":75
	}
})

registerItem({
	"name":"Charm Blue",
	"category":"Plant",
	"sell":220,
	"buy":800,
	"pricemultiplier":"E",
	"flavourtext":"A deep blue flower. Practically swallows you into its beautiful blossoms.",
	"effects":{
		"statusailments":["PSN"],
		"rp":28
	},
	"upgradeinfo":{
		"rarity":3,
		"difficulty":20,
		"psnatkP":5
	},
	"cookingeffects":{
		"statusailments":["PSN"],
		"rp":28,
		"hpmax":10,
		"slpresP":10,
		"ftgresP":10,
		"sickresP":10
	}
})

registerItem({
	"name":"King Pink Cat",
	"category":"Plant",
	"sell":600,
	"pricemultiplier":"E",
	"flavourtext":"Flower with vibrant pink blossoms. Named 'cat' for its cuteness.",
	"effects":{
		"rp":65
	},
	"upgradeinfo":{
		"rarity":6,
		"difficulty":38,
		"int":5
	},
	"cookingeffects":{
		"rp":65,
		"psnresP":25,
		"sealresP":25,
		"parresP":25,
		"slpresP":25,
		"ftgresP":25,
		"sickresP":25
	}
})

registerItem({
	"name":"Pink Cat",
	"category":"Plant",
	"sell":110,
	"buy":450,
	"pricemultiplier":"E",
	"flavourtext":"Flower with vibrant pink blossoms. Named 'cat' for its cuteness.",
	"effects":{
		"rp":25
	},
	"upgradeinfo":{
		"rarity":2,
		"difficulty":15,
		"int":2
	},
	"cookingeffects":{
		"rp":25,
		"psnresP":5,
		"sealresP":5,
		"parresP":5,
		"slpresP":5,
		"ftgresP":5,
		"sickresP":5
	}
})

registerItem({
	"name":"Ultra Moondrop Flower",
	"category":"Plant",
	"sell":650,
	"pricemultiplier":"E",
	"flavourtext":"A unique and beautiful yellow flower that grows in the moonlight.",
	"effects":{
		"rp":58
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":35,
		"int":4
	},
	"cookingeffects":{
		"rp":58,
		"hpmax":50,
		"str":3,
		"vit":3,
		"int":3
	}
})

registerItem({
	"name":"Moondrop Flower",
	"category":"Plant",
	"sell":115,
	"buy":400,
	"pricemultiplier":"E",
	"flavourtext":"A unique and beautiful yellow flower that grows in the moonlight.",
	"effects":{
		"rp":20
	},
	"upgradeinfo":{
		"rarity":1,
		"difficulty":10,
		"int":1
	},
	"cookingeffects":{
		"rp":20
	}
})

registerItem({
	"name":"Ultra Toyherb",
	"category":"Plant",
	"sell":350,
	"pricemultiplier":"E",
	"flavourtext":"An herb that promotes good health. Hard to grow, but cures fatigue.",
	"effects":{
		"heal":["FTG"],
		"rp":37
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":26,
		"ftgresP":30
	},
	"cookingeffects":{
		"heal":["FTG"],
		"rp":37,
		"ftgresP":100
	}
})

registerItem({
	"name":"Toyherb",
	"category":"Plant",
	"sell":65,
	"buy":250,
	"pricemultiplier":"E",
	"flavourtext":"An herb that promotes good health. Hard to grow, but cures fatigue.",
	"effects":{
		"heal":["FTG"],
		"rp":15
	},
	"upgradeinfo":{
		"rarity":0,
		"difficulty":1,
		"vit":1,
		"ftgresP":5
	},
	"cookingeffects":{
		"heal":["FTG"],
		"rp":15,
		"ftgresP":15
	}
})

registerItem({
	"name":"Mealy Apple",
	"category":"Fruit",
	"sell":3000,
	"flavourtext":"Eew, gross! Makes you very, very weak.",
	"pricemultiplier":"E",
	"effects":{
		"strP":-50,
		"vitP":-50,
		"intP":-50,
		"fireresP":-10,
		"waterresP":-10,
		"earthresP":-10,
		"windresP":-10,
		"lightresP":-10,
		"darkresP":-10
	},
	"upgradeinfo":{
		"rarity":15, //confirmed
		"difficulty":90,
		"str":-100,
		"vit":-150,
		"int":-100,
		"fireresP":-10,
		"waterresP":-10,
		"earthresP":-10,
		"windresP":-10,
		"lightresP":-10,
		"darkresP":-10
	},
	"cookingeffects":{
		"strP":-5,
		"vitP":-5,
		"intP":-5,
		"fireresP":-10,
		"waterresP":-10,
		"earthresP":-10,
		"windresP":-10,
		"lightresP":-10,
		"darkresP":-10
	}
});

registerItem({
	"name":"Orange",
	"category":"Fruit",
	"sell":80,
	"buy":500,
	"flavourtext":"A fruit with a good balance between sweet and sour. Your fingers can turn yellow if you eat too much of it.",
	"pricemultiplier":"Ch",
	"effects":{
		"hp":100,
		"rp":10
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":30,
		"vit":4,
		"int":4
	},
	"cookingeffects":{ // confirmed
		"hp":10,
		"rp":5,
		"parresP":5
	}
});

registerItem({
	"name":"Apple",
	"category":"Fruit",
	"sell":150,
	"buy":850,
	"flavourtext":"A pretty red fruit with high nutrition. Known for the old saying, <q>an apple a day keeps the doctor away.</q>",
	"pricemultiplier":"Ch",
	"effects":{
		"hp":100,
		"rp":10
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":30,
		"str":4,
		"int":4
	},
	"cookingeffects":{ // confirmed
		"hp":10,
		"rp":5,
		"sealresP":5
	}
});

registerItem({
	"name":"Grapes",
	"category":"Fruit",
	"sell":120,
	"buy":650,
	"flavourtext":"Small purple fruits growing in clusters. They say that royalty would hire servants to pluck these piece-by-piece for them out of laziness. Sweet and juicy.",
	"pricemultiplier":"Ch",
	"effects":{
		"hp":100,
		"rp":10
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":30,
		"str":4,
		"vit":4
	},
	"cookingeffects":{ // confirmed
		"hp":10,
		"rp":5,
		"psnresP":5
	}
});

registerItem({
	"name":"King Pineapple",
	"mininame":"Pineapple",
	"category":"Fruit",
	"sell":8000,
	"flavourtext":"Tropical fruit with a hint of sourness hidden amidst its sweet flavor. Feel the tropical sun!",
	"pricemultiplier":"E",
	"effects":{
		"hp":400,
		"rp":200
	},
	"upgradeinfo":{
		"rarity":12,
		"difficulty":72,
		"atk":35
	},
	"cookingeffects":{ // confirmed
		"hp":400,
		"rp":200,
		"faintresP":100
	}
});

registerItem({
	"name":"Pineapple",
	"giantname":"King Pineapple",
	"category":"Fruit",
	"sell":1600,
	"buy":8500,
	"flavourtext":"Tropical fruit with a hint of sourness hidden amidst its sweet flavor. Feel the tropical sun!",
	"pricemultiplier":"E",
	"effects":{
		"hp":120,
		"rp":40
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":50,
		"str":15
	},
	"cookingeffects":{ // confirmed
		"hp":120,
		"rp":40,
		"faintresP":25
	}
});

registerItem({
	"name":"Sultan Strawberry",
	"mininame":"Strawberry",
	"category":"Fruit",
	"sell":700,
	"flavourtext":"The red fairy of the dining table. Its sweet and sour kiss never fails to attract people.",
	"pricemultiplier":"E",
	"effects":{
		"hp":100,
		"rp":35
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":49,
		"str":8,
		"vit":8
	},
	"cookingeffects":{ // confirmed
		"hp":100,
		"rp":35, // wikia is wrong
		"psnresP":30,
		"sealresP":30,
		"parresP":30
	}
});

registerItem({
	"name":"Strawberry",
	"giantname":"Sultan Strawberry",
	"category":"Fruit",
	"sell":135,
	"buy":800,
	"flavourtext":"The red fairy of the dining table. Its sweet and sour kiss never fails to attract people.",
	"pricemultiplier":"E",
	"effects":{
		"hp":35,
		"rp":15
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":24,
		"str":3,
		"vit":3
	},
	"cookingeffects":{ // confirmed
		"hp":35,
		"rp":15, // wikia is wrong
		"psnresP":5,
		"sealresP":5,
		"parresP":5
	}
});

registerItem({
	"name":"Monarch Mushroom",
	"category":"Mushroom",
	"sell":1e4,
	"pricemultiplier":"E", // tentative
	"flavourtext":"The king of mushrooms. Has such a profound flavor that even royalty must bow down.",
	"effects":{ // unconfirmed
		"hpP":100,
		"rpP":100,
		"heal":["PSN","SEAL","PAR","FTG","SICK"]
	},
	"upgradeinfo":{ // unconfirmed
		"rarity":0, // unknown
		"difficulty":1, //unknown
		"str":5, // according to http://gwiki.jp/rf4/?%BA%EE%CA%AA
		"vit":5, // according to http://gwiki.jp/rf4/?%BA%EE%CA%AA
		"int":5 // according to http://gwiki.jp/rf4/?%BA%EE%CA%AA
	},
	"cookingeffects":{ // unknown
		"hp":3000,
		"rp":500,
		"heal":["PSN","SEAL","PAR","FTG","SICK"]
	}
})

registerItem({
	"name":"Mushroom",
	"category":"Mushroom",
	"sell":10,
	"buy":2000,
	"pricemultiplier":"E",
	"flavourtext":"Wild mushroom. You would have to test and see if it's safe to eat. Go on. I dare you.",
	"effects":{ // confirmed
		"hp":100,
		"rp":50,
		"heal":["PSN","SEAL","PAR"]
	},
	"cookingeffects":{ // confirmed
		"hp":100,
		"rp":50,
		"heal":["PSN","SEAL","PAR"]
	}
})

registerItem({
	"name":"Mushroom",
	"category":"Mushroom",
	"sell":10,
	"buy":2000,
	"pricemultiplier":"E",
	"flavourtext":"Wild mushroom. You would have to test and see if it's safe to eat. Go on. I dare you.",
	"effects":{ // tentative
		"hpP":50, // unknown
		"rpP":14.5, // unknown
		"heal":["FTG","SICK"] // confirmed
	},
	"cookingeffects":{ // confirmed
		"hp":500,
		"rp":100,
		"heal":["FTG","SICK"]
	}
})

registerItem({
	"name":"Golden Tyrant Turnip",
	"category":"Vegetable",
	"sell":9e4,
	"pricemultiplier":"E",
	"flavourtext":"A rare golden vegetable. Invented in an effort to create turnips that looked like blonde hair. Truly the work of a madman.",
	"effects":{
		"hp":1000
	},
	"upgradeinfo":{
		"rarity":14,
		"difficulty":91,
		"str":90,
		"faintatkP":2
	},
	"cookingeffects":{
		"hp":1000,
		"strP":5
	}
})

registerItem({
	"name":"Golden Turnip",
	"category":"Vegetable",
	"sell":2e4,
	"buy":1e5,
	"pricemultiplier":"E",
	"flavourtext":"A rare golden vegetable. Invented in an effort to create turnips that looked like blonde hair. Truly the work of a madman.",
	"effects":{
		"hp":800
	},
	"upgradeinfo":{
		"rarity":10,
		"difficulty":67,
		"str":30,
		"faintatkP":1
	},
	"cookingeffects":{
		"hp":800,
		"strP":3
	}
})

registerItem({
	"name":"Gold Prince Potato",
	"category":"Vegetable",
	"sell":27e3,
	"pricemultiplier":"E",
	"flavourtext":"A rare golden vegetable. Easy to spot, as its light shines brightly through the ground.",
	"effects":{
		"hp":950
	},
	"upgradeinfo":{
		"rarity":13,
		"difficulty":78,
		"vit":80,
		"faintatkP":2
	},
	"cookingeffects":{
		"hp":950,
		"hpmaxP":5
	}
})

registerItem({
	"name":"Golden Potato",
	"category":"Vegetable",
	"sell":6e3,
	"buy":3e4,
	"pricemultiplier":"E",
	"flavourtext":"A rare golden vegetable. Easy to spot, as its light shines brightly through the ground.",
	"effects":{
		"hp":350
	},
	"upgradeinfo":{
		"rarity":9,
		"difficulty":55,
		"vit":30,
		"faintatkP":1
	},
	"cookingeffects":{
		"hp":350,
		"hpmaxP":3
	}
})

registerItem({
	"name":"Gldn. Doom Pumpkin",
	"category":"Vegetable",
	"sell":18000,
	"pricemultiplier":"E",
	"flavourtext":"A rare golden vegetable. It has a ghostly aura even when uncarved and unpainted.",
	"effects":{
		"hp":950
	},
	"upgradeinfo":{
		"rarity":13,
		"difficulty":79,
		"str":50,
		"faintatkP":2
	},
	"cookingeffects":{
		"hp":950,
		"vitP":5
	}
})

registerItem({
	"name":"Golden Pumpkin",
	"category":"Vegetable",
	"sell":4000,
	"buy":2e4,
	"pricemultiplier":"E",
	"flavourtext":"A rare golden vegetable. It has a ghostly aura even when uncarved and unpainted.",
	"effects":{
		"hp":400
	},
	"upgradeinfo":{
		"rarity":9,
		"difficulty":56,
		"str":25,
		"faintatkP":1
	},
	"cookingeffects":{
		"hp":400,
		"vitP":3
	}
})

registerItem({
	"name":"Golden King Cabbage",
	"category":"Vegetable",
	"sell":52000,
	"pricemultiplier":"E",
	"flavourtext":"A rare golden vegetable. Suddenly changed its color through a mysterious power.",
	"effects":{
		"hp":950
	},
	"upgradeinfo":{
		"rarity":13,
		"difficulty":82,
		"int":50,
		"faintatkP":2
	},
	"cookingeffects":{
		"hp":950,
		"intP":5
	}
})

registerItem({
	"name":"Golden Cabbage",
	"category":"Vegetable",
	"sell":11500,
	"buy":5e4,
	"pricemultiplier":"E",
	"flavourtext":"A rare golden vegetable. Suddenly changed its color through a mysterious power.",
	"effects":{
		"hp":500
	},
	"upgradeinfo":{
		"rarity":9,
		"difficulty":59,
		"int":20,
		"faintatkP":1
	},
	"cookingeffects":{
		"hp":500,
		"intP":3
	}
})

registerItem({
	"name":"Bamboo Sprout",
	"category":"Vegetable",
	"sell":40,
	"buy":200,
	"pricemultiplier":"E",
	"effects":{
		"rp":8
	},
	"upgradeinfo":{
		"rarity":0,
		"difficulty":1,
		"atk":1
	},
	"flavourtext":"Known for its crunchy texture and fragrant allure. Grows quickly during spring.",
	"cookingeffects":{}
})

registerItem({
	"name":"Giant Hot-Hot Fruit",
	"category":"Vegetable",
	"sell":4500,
	"pricemultiplier":"E",
	"flavourtext":"Covered in fuzz. Some use it to boil water.",
	"effects":{
		"hp":300,
		"rp":140
	},
	"upgradeinfo":{
		"rarity":9,
		"difficulty":55,
		"mdef":11,
		"fireresP":15
	},
	"cookingeffects":{
		"hp":300,
		"rp":140,
		"fireresP":15,
		"slpresP":50
	}
})

registerItem({
	"name":"Hot-Hot Fruit",
	"category":"Vegetable",
	"sell":900,
	"buy":7000,
	"pricemultiplier":"E",
	"flavourtext":"Covered in fuzz. Some use it to boil water.",
	"effects":{
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":35,
		"mdef":7,
		"fireresP":5
	},
	"cookingeffects":{
		"fireresP":5,
		"slpresP":10
	}
})

registerItem({
	"name":"Boss Bok Choy",
	"category":"Vegetable",
	"sell":2250,
	"pricemultiplier":"E",
	"flavourtext":"A popular winter crop. The colder it is, the sweeter it gets.",
	"effects":{
		"hp":550
	},
	"upgradeinfo":{
		"rarity":10,
		"difficulty":60,
		"matk":21
	},
	"cookingeffects":{
		"hp":550,
		"sealresP":50
	}
})

registerItem({
	"name":"Bok Choy",
	"category":"Vegetable",
	"sell":420,
	"buy":1900,
	"pricemultiplier":"E",
	"flavourtext":"A popular winter crop. The colder it is, the sweeter it gets.",
	"effects":{
		"hp":130
	},
	"upgradeinfo":{
		"rarity":6,
		"difficulty":36,
		"matk":8
	},
	"cookingeffects":{
		"hp":130,
		"sealresP":10
	}
})

registerItem({
	"name":"Legendary Leek",
	"category":"Vegetable",
	"sell":8000,
	"pricemultiplier":"E",
	"flavourtext":"A must-have vegetable for winter dishes such as hot pot.",
	"effects":{
		"hp":280
	},
	"upgradeinfo":{
		"rarity":9,
		"difficulty":54,
		"matk":11
	},
	"cookingeffects":{
		"hp":280,
		"sickresP":50
	}
})

registerItem({
	"name":"Leek",
	"category":"Vegetable",
	"sell":1600,
	"buy":4800,
	"pricemultiplier":"E",
	"flavourtext":"A must-have vegetable for winter dishes such as hot pot.",
	"effects":{
		"hp":120
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":35,
		"matk":6
	},
	"cookingeffects":{
		"hp":120,
		"sickresP":10
	}
})

registerItem({
	"name":"Noble Radish",
	"category":"Vegetable",
	"sell":2000,
	"pricemultiplier":"E",
	"flavourtext":"A white, thick <q>daikon</q> radish. Used in many home-cooking recipes.",
	"effects":{
		"hp":168
	},
	"upgradeinfo":{
		"rarity":6,
		"difficulty":38,
		"vit":12
	},
	"cookingeffects":{
		"hp":168,
		"critresP":20
	}
})

registerItem({
	"name":"Radish",
	"category":"Vegetable",
	"sell":360,
	"buy":1580,
	"pricemultiplier":"E",
	"flavourtext":"A white, thick <q>daikon</q> radish. Used in many home-cooking recipes.",
	"effects":{
		"hp":5
	},
	"upgradeinfo":{
		"rarity":2,
		"difficulty":12,
		"vit":3
	},
	"cookingeffects":{
		"hp":5,
		"critresP":5
	}
})

registerItem({
	"name":"Tyrant Turnip",
	"category":"Vegetable",
	"sell":200,
	"pricemultiplier":"E",
	"flavourtext":"The king of all crops. It has been through many hardships to stay in this position. Bow down to the turnip.",
	"effects":{
		"hp":72
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":25,
		"str":5,
		"loveresP":15
	},
	"cookingeffects":{
		"hp":72,
		"str":5,
		"loveresP":15
	}
})

registerItem({
	"name":"Turnip",
	"category":"Vegetable",
	"sell":30,
	"buy":200,
	"pricemultiplier":"E",
	"flavourtext":"The king of all crops. It has been through many hardships to stay in this position. Bow down to the turnip.",
	"effects":{
		"hp":30,
		"rp":5
	},
	"upgradeinfo":{
		"rarity":0,
		"difficulty":1,
		"str":1
	},
	"cookingeffects":{
		"hp":30,
		"rp":5,
		"str":1
	}
})

registerItem({
	"name":"Sovereign Spinach",
	"category":"Vegetable",
	"sell":350,
	"pricemultiplier":"E",
	"flavourtext":"A dark green vegetable rich in nutrients. Said to give you strength and energy.",
	"effects":{
		"hp":115
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":35,
		"matk":7
	},
	"cookingeffects":{
		"hp":115,
		"int":5
	}
})

registerItem({
	"name":"Spinach",
	"category":"Vegetable",
	"sell":65,
	"buy":300,
	"pricemultiplier":"E",
	"flavourtext":"A dark green vegetable rich in nutrients. Said to give you strength and energy.",
	"effects":{
		"hp":50
	},
	"upgradeinfo":{
		"rarity":1,
		"difficulty":9,
		"matk":2
	},
	"cookingeffects":{
		"hp":50,
		"int":1
	}
})

registerItem({
	"name":"Green Pepper Rex",
	"category":"Vegetable",
	"sell":800,
	"pricemultiplier":"E",
	"flavourtext":"Although nutritious and tasty when prepared right, green peppers are sometimes disliked for their bitterness.",
	"effects":{
		"hp":250
	},
	"upgradeinfo":{
		"rarity":9,
		"difficulty":53,
		"str":16
	},
	"cookingeffects":{
		"hp":250,
		"vit":30
	}
})

registerItem({
	"name":"Green Pepper",
	"category":"Vegetable",
	"sell":150,
	"buy":700,
	"pricemultiplier":"E",
	"flavourtext":"Although nutritious and tasty when prepared right, green peppers are sometimes disliked for their bitterness.",
	"effects":{
		"hp":90
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":31,
		"str":6
	},
	"cookingeffects":{
		"hp":90,
		"vit":8
	}
})

registerItem({
	"name":"Royal Carrot",
	"category":"Vegetable",
	"sell":2000,
	"pricemultiplier":"E",
	"flavourtext":"A long and thin vegetable with an orange color. Horses love to eat them, snowmen love to wear them, and children love to hate them.",
	"effects":{
		"hp":240
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":51,
		"vit":21
	},
	"cookingeffects":{
		"hp":240,
		"critresP":50
	}
})

registerItem({
	"name":"Carrot",
	"category":"Vegetable",
	"sell":380,
	"buy":2600,
	"pricemultiplier":"E",
	"flavourtext":"A long and thin vegetable with an orange color. Horses love to eat them, snowmen love to wear them, and children love to hate them.",
	"effects":{
		"hp":80
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":27,
		"vit":7
	},
	"cookingeffects":{
		"hp":80,
		"critresP":8
	}
})

registerItem({
	"name":"Princely Potato",
	"category":"Vegetable",
	"sell":500,
	"pricemultiplier":"E",
	"flavourtext":"Loved by people from around the world. Used in various recipes from appetizers to main dishes.",
	"effects":{
		"hp":110
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":34,
		"vit":9
	},
	"cookingeffects":{
		"hp":110,
		"hpmax":100
	}
})

registerItem({
	"name":"Potato",
	"category":"Vegetable",
	"sell":90,
	"buy":600,
	"pricemultiplier":"E",
	"flavourtext":"Loved by people from around the world. Used in various recipes from appetizers to main dishes.",
	"effects":{
		"hp":40
	},
	"upgradeinfo":{
		"rarity":1,
		"difficulty":7,
		"vit":2
	},
	"cookingeffects":{
		"hp":40,
		"hpmax":15
	}
})

registerItem({
	"name":"Lordly Yam",
	"category":"Vegetable",
	"sell":800,
	"pricemultiplier":"E",
	"flavourtext":"A vegetable high in fiber that will scour your gut and pipes.",
	"effects":{
		"hp":200
	},
	"upgradeinfo":{
		"rarity":7,
		"difficulty":44,
		"vit":15
	},
	"cookingeffects":{
		"hp":200,
		"hpmax":200
	}
})

registerItem({
	"name":"Yam",
	"category":"Vegetable",
	"sell":140,
	"buy":450,
	"pricemultiplier":"E",
	"flavourtext":"A vegetable high in fiber that will scour your gut and pipes.",
	"effects":{
		"hp":60
	},
	"upgradeinfo":{
		"rarity":3,
		"difficulty":18,
		"vit":5
	},
	"cookingeffects":{
		"hp":60,
		"hpmax":50
	}
})

registerItem({
	"name":"Emperor Eggplant",
	"category":"Vegetable",
	"sell":1000,
	"pricemultiplier":"E",
	"flavourtext":"A purple vegetable with a cute stem. Has a soft texture.",
	"effects":{
		"hp":270
	},
	"upgradeinfo":{
		"rarity":9,
		"difficulty":54,
		"str":17
	},
	"cookingeffects":{
		"hp":270,
		"critP":10
	}
})

registerItem({
	"name":"Eggplant",
	"category":"Vegetable",
	"sell":190,
	"buy":950,
	"pricemultiplier":"E",
	"flavourtext":"A purple vegetable with a cute stem. Has a soft texture.",
	"effects":{
		"hp":100
	},
	"upgradeinfo":{
		"rarity":5,
		"difficulty":33,
		"str":7
	},
	"cookingeffects":{
		"hp":100,
		"critP":1
	}
})

registerItem({
	"name":"Titan Tomato",
	"category":"Vegetable",
	"sell":3000,
	"pricemultiplier":"E",
	"flavourtext":"A brilliant tomato, ruddy red like the summer sun. Popular for its high nutrition and health benefits.",
	"effects":{
		"hp":700
	},
	"upgradeinfo":{
		"rarity":11,
		"difficulty":66,
		"str":28
	},
	"cookingeffects":{
		"hp":700,
		"psnresP":50
	}
})

registerItem({
	"name":"Tomato",
	"category":"Vegetable",
	"sell":540,
	"buy":1800,
	"pricemultiplier":"E",
	"flavourtext":"A brilliant tomato, ruddy red like the summer sun. Popular for its high nutrition and health benefits.",
	"effects":{
		"hp":180
	},
	"upgradeinfo":{
		"rarity":7,
		"difficulty":43,
		"str":9
	},
	"cookingeffects":{
		"hp":180,
		"psnresP":10
	}
})

registerItem({
	"name":"Gigant Corn",
	"category":"Vegetable",
	"sell":7500,
	"pricemultiplier":"E",
	"flavourtext":"A vegetable studded with yellow kernels. Hard to decide which side to eat from. Best lathered with butter.",
	"effects":{
		"hp":230
	},
	"upgradeinfo":{
		"rarity":8,
		"difficulty":49,
		"vit":17
	},
	"cookingeffects":{
		"hp":230,
		"rpmax":50
	}
})

registerItem({
	"name":"Corn",
	"category":"Vegetable",
	"sell":1e3,
	"buy":3e3,
	"pricemultiplier":"E",
	"flavourtext":"A vegetable studded with yellow kernels. Hard to decide which side to eat from. Best lathered with butter.",
	"effects":{
		"hp":75
	},
	"upgradeinfo":{
		"rarity":4,
		"difficulty":27,
		"vit":6
	},
	"cookingeffects":{
		"hp":75,
		"rpmax":10
	}
})

registerItem({
	"name":"Kaiser Cucumber",
	"category":"Vegetable",
	"sell":350,
	"pricemultiplier":"E",
	"flavourtext":"A green and watery vegetable with a crunchy texture. Have a bite and feel refreshed!",
	"effects":{
		"hp":175
	},
	"upgradeinfo":{
		"rarity":7,
		"difficulty":42,
		"str":8
	},
	"cookingeffects":{
		"hp":175,
		"vit":15
	}
})

registerItem({
	"name":"Cucumber",
	"category":"Vegetable",
	"sell":68,
	"buy":250,
	"pricemultiplier":"E",
	"flavourtext":"A green and watery vegetable with a crunchy texture. Have a bite and feel refreshed!",
	"effects":{
		"hp":55
	},
	"upgradeinfo":{
		"rarity":3,
		"difficulty":17,
		"str":2
	},
	"cookingeffects":{
		"hp":55,
		"vit":2
	}
})

registerItem({
	"name":"Doom Pumpkin",
	"category":"Vegetable",
	"sell":550,
	"pricemultiplier":"E",
	"flavourtext":"A nutritious seasonal vegetable. Can be worn during the autumn festival by scooping out the inside.",
	"effects":{
		"hp":210
	},
	"upgradeinfo":{
		"rarity":7,
		"difficulty":45,
		"str":10
	},
	"cookingeffects":{
		"hp":210,
		"vit":20
	}
})

registerItem({
	"name":"Pumpkin",
	"category":"Vegetable",
	"sell":110,
	"buy":420,
	"pricemultiplier":"E",
	"flavourtext":"A nutritious seasonal vegetable. Can be worn during the autumn festival by scooping out the inside.",
	"effects":{
		"hp":65
	},
	"upgradeinfo":{
		"rarity":3,
		"difficulty":19,
		"str":3
	},
	"cookingeffects":{
		"hp":65,
		"vit":4
	}
})

registerItem({
	"name":"Ultra Onion",
	"category":"Vegetable",
	"sell":4000,
	"pricemultiplier":"E",
	"flavourtext":"When raw it has a sharp taste, but turns mild when cooked. Many cry chopping onions, but those tears aren't for you!",
	"effects":{
		"hp":650
	},
	"upgradeinfo":{
		"rarity":10,
		"difficulty":62,
		"vit":35
	},
	"cookingeffects":{
		"hp":650,
		"parresP":50
	}
})

registerItem({
	"name":"Onion",
	"category":"Vegetable",
	"sell":800,
	"buy":6700,
	"pricemultiplier":"E",
	"flavourtext":"When raw it has a sharp taste, but turns mild when cooked. Many cry chopping onions, but those tears aren't for you!",
	"effects":{
		"hp":150
	},
	"upgradeinfo":{
		"rarity":6,
		"difficulty":37,
		"vit":10
	},
	"cookingeffects":{
		"hp":150,
		"parresP":10
	}
})

registerItem({
	"name":"Conqueror Melon",
	"category":"Vegetable",
	"sell":4250,
	"pricemultiplier":"E",
	"flavourtext":"A pink melon overflowing with cuteness. Attracts young girls with its adorable shape and taste. Truly heinous.",
	"effects":{
		"hp":300,
		"rp":150
	},
	"upgradeinfo":{
		"rarity":11,
		"difficulty":69,
		"int":31
	},
	"cookingeffects":{
		"hp":300,
		"rp":150,
		"str":10,
		"int":10
	}
})

registerItem({
	"name":"Pink Melon",
	"category":"Vegetable",
	"sell":850,
	"buy":5000,
	"pricemultiplier":"E",
	"flavourtext":"A pink melon overflowing with cuteness. Attracts young girls with its adorable shape and taste. Truly heinous.",
	"effects":{
		"hp":90,
		"rp":30
	},
	"upgradeinfo":{
		"rarity":7,
		"difficulty":45,
		"int":7
	},
	"cookingeffects":{
		"hp":90,
		"rp":30,
		"str":5,
		"int":5
	}
})

registerItem({
	"name":"Colossal Pink",
	"category":"Vegetable",
	"sell":1000,
	"pricemultiplier":"E",
	"flavourtext":"A pretty pink-colored turnip. Raised through the efforts of a turnip-obsessed girl. Famous for how easy it grows.",
	"effects":{
		"hp":220
	},
	"upgradeinfo":{
		"rarity":7,
		"difficulty":47,
		"str":12
	},
	"cookingeffects":{
		"hp":220,
		"str":15
	}
})

registerItem({
	"name":"Pink Turnip",
	"category":"Vegetable",
	"sell":200,
	"buy":700,
	"pricemultiplier":"E",
	"flavourtext":"A pretty pink-colored turnip. Raised through the efforts of a turnip-obsessed girl. Famous for how easy it grows.",
	"effects":{
		"hp":70
	},
	"upgradeinfo":{
		"rarity":3,
		"difficulty":21,
		"str":4
	},
	"cookingeffects":{
		"hp":70,
		"str":2
	}
})

registerItem({
	"name":"King Cabbage",
	"category":"Vegetable",
	"sell":3400,
	"pricemultiplier":"E",
	"flavourtext":"A well-balanced vegetable that can be eaten raw, fried or boiled. Helps with digestion after a big meal.",
	"effects":{
		"hp":600
	},
	"upgradeinfo":{
		"rarity":10,
		"difficulty":61,
		"int":22
	},
	"cookingeffects":{
		"hp":600,
		"int":15
	}
})

registerItem({
	"name":"Cabbage",
	"category":"Vegetable",
	"sell":680,
	"buy":2800,
	"pricemultiplier":"E",
	"flavourtext":"A well-balanced vegetable that can be eaten raw, fried or boiled. Helps with digestion after a big meal.",
	"effects":{
		"hp":140
	},
	"upgradeinfo":{
		"rarity":6,
		"difficulty":37,
		"int":6
	},
	"cookingeffects":{
		"hp":140,
		"int":2
	}
})
