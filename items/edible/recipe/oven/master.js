

registerItem({
	"name":"Bread",
	"cookinglevel":8,
	"category":"Oven",
	"materials":["Flour"],
	"sell":145,
	"buy":440,
	"pricemultiplier":"C1",
	"flavourtext":"A staple food for many. You can toast it, stuff it, stick things between it or eat it any other way you'd like.",
	"effects":{
		"hp":400,
		"rp":120,
		"str":4,
		"vit":4,
		"int":4
	},
	"cookingeffects":{}
})

registerItem({
	"name":"Baked Onigiri",
	"cookinglevel":10,
	"category":"Oven",
	"sell":65,
	"buy":220,
	"pricemultiplier":"C1",
	"flavourtext":"A <q>rice ball</q> baked on both sides. Has an addictively crunchy texture.",
	"effects":{
		"hp":500,
		"rp":200,
		"vit":5
	},
	"materials":["Onigiri"],
	"cookingeffects":{}
})

registerItem({
	"name":"Sweet Potato",
	"cookinglevel":20,
	"category":"Oven",
	"materials":["Yam"],
	"sell":240,
	"buy":870,
	"pricemultiplier":"C1",
	"flavourtext":"A slow-roasted sweet potato. Often cooked over bonfires in the fall.",
	"effects":{
		"hp":2020,
		"rp":500,
		"vit":10
	},
	"cookingeffects":{}
})

registerItem({
	"name":"Toast",
	"cookinglevel":21,
	"category":"Oven",
	"materials":["Bread"],
	"sell":170,
	"buy":610,
	"pricemultiplier":"C1",
	"flavourtext":"Browned bread. Neck-and-neck with rice in the struggle for worldwide breakfast dominance.",
	"effects":{
		"hp":2040,
		"rp":800,
		"vit":15
	},
	"cookingeffects":{}
})

registerItem({
	"name":"Raisin Bread",
	"cookinglevel":27,
	"category":"Oven",
	"sell":380,
	"buy":1200,
	"pricemultiplier":"C1",
	"flavourtext":"Bread with raisins in it. Soft, sweet and sour, all at once.",
	"effects":{
		"hp":3000,
		"rp":400,
		"str":15,
		"vit":8,
		"int":10
	},
	"materials":["Flour","Grapes"],
	"cookingeffects":{}
})

registerItem({
	"name":"Jam Roll",
	"cookinglevel":34,
	"category":"Oven",
	"sell":1940,
	"buy":5000,
	"pricemultiplier":"C1",
	"flavourtext":"Bread baked with jam. Can be eaten as a snack.",
	"effects":{
		"hp":3760,
		"rp":1000,
		"vit":25
	},
	"materials":["Flour","Jam","Egg (S)","Milk (S)"],
	"cookingeffects":{}
})

registerItem({
	"name":"Apple Pie",
	"cookinglevel":36,
	"category":"Oven",
	"sell":1910,
	"buy":5820,
	"pricemultiplier":"C1",
	"flavourtext":"Apples baked in a pie crust. Popular as a dessert and snack alike.",
	"effects":{
		"hp":4240,
		"rp":1000,
		"vit":30
	},
	"materials":["Flour","Apple","Butter","Egg (S)"],
	"cookingeffects":{}
})

registerItem({
	"name":"Cookie",
	"cookinglevel":38,
	"category":"Oven",
	"sell":1960,
	"buy":5980,
	"pricemultiplier":"C1",
	"flavourtext":"Confection made from flour and dough. Crisp and heartwarming. Makes a great gift!",// could be comma after heartwarming
	"effects":{
		"hp":4560,
		"rp":1000,
		"vit":35
	},
	"materials":["Flour","Sweet Powder","Egg (S)","Butter"],
	"cookingeffects":{}
})

registerItem({
	"name":"Seafood Doria",
	"sell":2450,
	"buy":7400,
	"effects":{
		"hp":4720,
		"rp":1000,
		"vit":40,
		"waterresP":5,
		"windresP":5
	},
	"flavourtext":"Doria with various seafood in it. So filling that you won't need much rice before you feel full.",
	"cookinglevel":39,
	"materials":["Rice","Shrimp","Cheese",
		"Squid", ////////////////////////////////// Not the item Squid, but the category.
		"Milk (S)"],
	"category":"Oven",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Seafood Gratin",
	"sell":2700,
	"buy":8200,
	"effects":{
		"hp":4960,
		"rp":1000,
		"vit":60,
		"waterresP":5,
		"windresP":5
	},
	"flavourtext":"Gratin with seafood. It's recommended to heat the milk before ingesting.",
	"cookinglevel":42,
	"materials":["Flour","Shrimp","Cheese",
		"Squid", ////////////////////////////////// Not the item Squid, but the category.
		"Milk (S)"],
	"category":"Oven",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Butter Roll",
	"sell":2200,
	"buy":6800,
	"effects":{
		"hp":5040,
		"rp":1000,
		"vit":80
	},
	"flavourtext":'Sweet bread with butter. Also known as "table rolls" or "dinner rolls." Small and easy to eat.',
	"cookinglevel":43,
	"materials":["Flour","Butter","Egg (S)","Milk (S)"],
	"category":"Oven",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Choco Cookie",
	"sell":2700,
	"buy":8200,
	"effects":{
		"hp":5360,
		"rp":1000,
		"vit":100
	},
	"flavourtext":"Confection made from flour and dough. Chocolate color and a bittersweet taste make it a very mature indulgence.",
	"cookinglevel":45,
	"materials":["Flour","Butter","Sweet Powder","Chocolate","Egg (S)"],
	"category":"Oven",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Cheesecake",
	"sell":2540,
	"buy":7820,
	"effects":{
		"heal":["PSN","SEAL","PAR","FTG"]
		"hp":5520,
		"rp":1000,
		"vit":120
	},
	"flavourtext":"Baked dessert made from cheese and egg.",
	"cookinglevel":46,
	"materials":["Cheese","Egg (S)","Milk (S)","Sweet Powder"],
	"category":"Oven",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Yam of the Ages",
	"cookinglevel":47,
	"category":"Oven",
	"sell":2200,
	"buy":7520,
	"pricemultiplier":"C1",
	"flavourtext":"Pureed yam mixed with butter and milk, shaped and baked. Sweet and savory.",
	"effects":{
		"hp":5600,
		"rp":1000,
		"vit":140
	},
	"materials":["Sweet Powder","Butter","Milk (S)","Yam"],
	"cookingeffects":{}
})

registerItem({
	"name":"Corn on the Cob",
	"cookinglevel":52,
	"category":"Oven",
	"materials":["Corn"],
	"sell":1860,
	"buy":6200,
	"pricemultiplier":"C1",
	"flavourtext":"Fragrantly roasted corn. Very sweet.",
	"effects":{
		"hp":5000,
		"hpP":20,
		"rp":1000,
		"vit":180
	},
	"cookingeffects":{}
})

registerItem({
	"name":"Cake",
	"sell":4200,
	"buy":15e3,
	"effects":{
		"heal":["PSN","SEAL","PAR","FTG"]
		"hp":5000,
		"hpP":23,
		"rp":1000,
		"vit":200,
		"vitP":5
	},
	"flavourtext":"A simple cake with cream and strawberries.",
	"cookinglevel":54,
	"materials":["Flour","Butter","Sweet Powder","Strawberry","Milk (S)","Egg (S)"],
	"category":"Oven",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Seafood Pizza",
	"sell":6450,
	"buy":19800,
	"effects":{
		"hp":5e3,
		"hpP":44,
		"rp":1000,
		"vitP":10,
		"waterresP":5,
		"windresP":10
	},
	"flavourtext":"Pizza with seafood toppings. Stimulates taste buds with its dazzling appearance and fishy aroma.",
	"cookinglevel":56,
	"materials":["Flour","Cheese","Ketchup","Shrimp",
		"Squid"],////////////////////////////////// Not the item Squid, but the category.
	"category":"Oven",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Pizza",
	"sell":8e3,
	"buy":25800,
	"effects":{
		"hp":5e3,
		"hpP":65,
		"rp":1000,
		"vitP":15,
		"windresP":20
	},
	"flavourtext":"Toppings placed on round dough and baked in the oven. Possibly the greatest invention of all time.",
	"cookinglevel":60,
	"materials":["Flour","Cheese","Ketchup","Green Pepper","Eggplant"],
	"category":"Oven",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Doria",
	"sell":6e3,
	"buy":18300,
	"effects":{
		"hp":5e3,
		"hpP":100,
		"rp":1000,
		"rpP":37,
		"vitP":20,
		"windresP":30
	},
	"flavourtext":"Rice covered with homemade sauce, baked to perfection. Crispy on the outside, mellow on the inside.",
	"cookinglevel":84,
	"materials":["Rice","Cheese","Milk (S)","Onion"],
	"category":"Oven",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Gratin",
	"sell":8200,
	"buy":26200,
	"effects":{
		"hp":5e3,
		"hpP":100,
		"rp":1000,
		"rpP":40,
		"vitP":25,
		"windresP":50
	},
	"flavourtext":"Sauce and cheese mixed and baked. Cooked in the same bowl you eat it from, so watch your fingers!",
	"cookinglevel":85,
	"materials":["Flour","Cheese","Milk (S)","Onion"],
	"category":"Oven",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})
