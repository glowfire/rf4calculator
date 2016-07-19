

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
	"pricemultiplier":"C1"
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
	"pricemultiplier":"C1"
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
	"flavourtext":"Strawberries and pink melons mixed together to form the sweet & sour taste of love. Might have a bitter aftertaste."
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
	"flavourtext":"Juice made from a mixture of golden ingredients. Not, uh... Not very good, honestly."
})
