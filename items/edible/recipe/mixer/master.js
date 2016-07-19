

registerItem({
	"name":"Orange Juice",
	"cookinglevel":5,
	"materials":["Orange"],
	"category":"Mixer",
	"sell":92,
	"buy":290,
	"effects":{
		"hp":150,
		"rp":150,
		"int":2
	},
	"flavourtext":"Juice made from fresh oranges. A good mixture of sweet and sour.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Grape Juice",
	"cookinglevel":7,
	"materials":["Grapes"],
	"category":"Mixer",
	"sell":140,
	"buy":440,
	"effects":{
		"hp":220,
		"rp":200,
		"int":8
	},
	"flavourtext":"Juice made from fresh grapes. Rich, sweet and deep in flavor.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Apple Juice",
	"cookinglevel":11,
	"materials":["Apple"],
	"category":"Mixer",
	"sell":175,
	"buy":530,
	"effects":{
		"hp":500,
		"rp":230,
		"int":10
	},
	"flavourtext":"Juice made from fresh apples. Enjoy the natural taste, color and smell of nature's candy!",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Butter",
	"cookinglevel":15,
	"materials":["Milk (S)"],
	"category":"Mixer",
	"sell":300,
	"buy":1500,
	"effects":{
		// none
	},
	"flavourtext":"Made by churning milk. Usually eaten with other food for taste. Sometimes eaten alone, by the stick, in shame.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Fruit Juice",
	"cookinglevel":18,
	"materials":["Apple","Grapes","Orange"],
	"category":"Mixer",
	"sell":630,
	"buy":1980,
	"effects":{
		"hp":1620,
		"rp":500,
		"int":25
	},
	"flavourtext":"Fresh juice made from various fruits. Twice the flavor, twice the nutrition, twice the fun.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Ice Cream",
	"cookinglevel":25,
	"materials":["Sweet Powder","Milk (S)"],
	"category":"Mixer",
	"sell":645,
	"buy":2000,
	"effects":{
		"hp":3e3,
		"rp":450,
		"str":17,
		"vit":10,
		"int":15,
		"fireresP":30,
		"waterresP":-30
	},
	"flavourtext":"A dessert made by freezing milk. Melts in your mouth. If you eat it too fast, you'll regret it.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Strawberry Milk",
	"category":"Mixer",
	"sell":720,
	"buy":2980,
	"effects":{
		"hp":4e3,
		"rp":680,
		"int":30
	},
	"flavourtext":"Strawberries mixed with milk. Sweet and popular. Can be made with as much or as little milk as you'd like.",
	"cookinglevel":33,
	"materials":["Strawberry","Milk (S)"],
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Tomato Juice",
	"cookinglevel":35,
	"materials":["Tomato"],
	"category":"Mixer",
	"sell":1e3,
	"buy":3200,
	"effects":{
		"heal":["FTG"],
		"hp":4000,
		"rp":920,
		"int":45
	},
	"flavourtext":"Juice made from fresh tomatoes. Thick and highly nutritious.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Fruit Smoothie",
	"category":"Mixer",
	"sell":1400,
	"buy":4280,
	"effects":{
		"hp":4480,
		"rp":1000,
		"int":65
	},
	"flavourtext":"Juice made from mixed fruits and milk. Easy to drink, with a mellow flavor.",
	"cookinglevel":37,
	"materials":["Fruit Juice","Milk (S)"],
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Ketchup",
	"category":"Mixer",
	"sell":1300,
	"buy":4e3,
	"effects":{
		// none
	},
	"flavourtext":"Condiment made from tomatoes. Its tangy taste goes well with egg and potato recipes.",
	"cookinglevel":38,
	"materials":["Sour Drop","Tomato"],
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Vegetable Juice",
	"cookinglevel":59,
	"materials":["Pumpkin","Turnip","Carrot","Spinach"],
	"category":"Mixer",
	"sell":2350,
	"buy":8000,
	"effects":{
		"hp":5000,
		"hpP":59,
		"rp":1000,
		"int":80,
		"intP":5
	},
	"flavourtext":"A healthy juice made from various vegetables. Bitter but strangely addictive.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Prelude to Love",
	"cookinglevel":61,
	"category":"Mixer",
	"sell":2600,
	"buy":11200,
	"pricemultiplier":"C1",
	"effects":{
		"hp":5000,
		"hpP":68,
		"rp":1000,
		"hpmaxP":-50,
		"rpmaxP":-50,
		"vitP":-50,
		"fireresP":50,
		"waterresP":50,
		"earthresP":50,
		"windresP":50,
		"lightresP":50,
		"darkresP":50,
		"loveresP":100
        },
	"materials":["Pink Melon","Strawberry"],
	"flavourtext":"Strawberries and pink melons mixed together to form the sweet & sour taste of love. Might have a bitter aftertaste.",
	"cookingeffects":{}
})

registerItem({
	"name":"Veggie Smoothie",
	"category":"Mixer",
	"sell":5200,
	"buy":15800,
	"effects":{
		"hp":5e3,
		"hpP":80,
		"rp":1000,
		"int":100,
		"intP":8
	},
	"flavourtext":"Vegetables mixed with milk, softening the bitterness.",
	"cookinglevel":65,
	"materials":["Vegetable Juice","Milk (S)"],
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Hot Juice",
	"cookinglevel":76,
	"materials":["Heavy Spice","Hot-Hot Fruit"],
	"category":"Mixer",
	"sell":3600,
	"buy":13e3,
	"effects":{
		"hp":5e3,
		"hpP":100,
		"rp":1e3,
		"rpP":13,
		"int":100,
		"intP":10,
		"fireresP":20
	},
	"flavourtext":"Made from hot-hot fruit. Always stays hot, so it's good to carry in cold weather.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Pineapple Juice",
	"cookinglevel":81,
	"materials":["Pineapple"],
	"category":"Mixer",
	"sell":4400,
	"buy":14800,
	"effects":{
		"hp":5e3,
		"hpP":100,
		"rp":1e3,
		"rpP":28,
		"int":100,
		"intP":15
	},
	"flavourtext":"Juice made from fresh pineapples. Great fragrance and color combined with sweet taste.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Mixed Juice",
	"cookinglevel":83,
	"materials":["Apple","Grapes","Orange","Pineapple","Strawberry","Milk (S)"],
	"category":"Mixer",
	"sell":12e3,
	"buy":36e3,
	"effects":{
		"hp":5e3,
		"hpP":100,
		"rp":1e3,
		"rpP":34,
		"int":100,
		"intP":20
	},
	"flavourtext":"Juice made from mixed fruits and vegetables. Just like the name says!",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Mixed Smoothie",
	"cookinglevel":91,
	"materials":["Mixed Juice","Honey"],
	"category":"Mixer",
	"sell":25e3,
	"buy":75e3,
	"effects":{
		"hp":5e3,
		"hpP":100,
		"rp":1e3,
		"rpP":58,
		"int":100,
		"intP":21
	},
	"flavourtext":"Milk added to mixed fruits and vegetables. Cures fatigue.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Gold Juice",
	"cookinglevel":99,
	"category":"Mixer",
	"sell":8e5,
	"pricemultiplier":"C1",
	"effects":{
		"hp":5000,
		"hpP":100,
		"rp":1000,
		"rpP":100,
		"int":100,
		"intP":25,
		"fireresP":10,
		"waterresP":10,
		"earthresP":10,
		"windresP":10
        },
	"materials":["Golden Pumpkin","Emery Flower","Golden Potato","Golden Turnip","Golden Cabbage"],
	"flavourtext":"Juice made from a mixture of golden ingredients. Not, uh... Not very good, honestly.",
	"cookingeffects":{}
})
