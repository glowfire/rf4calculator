// Registration of items in the order as shown in the shipping records.
// This list contains the items listed in the first section.

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
		"intP":i3
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
