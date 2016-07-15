registerItem({
	"name":"Fake Item",
	"cookinglevel":66,
	"materials":["Titan Tomato","Tomato"],
	"category":"Mixer",
	sell:3e4,
	"efffects":{
		
	},
	"flavourtext":"???",
	"pricemultiplier":"C1"
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
