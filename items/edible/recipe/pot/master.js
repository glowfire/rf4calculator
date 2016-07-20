

registerItem({
	"name":"Rice Porridge",
	"sell":57,
	"buy":190,
	"effects":{
		"heal":["SICK"],
		"hp":100,
		"rp":150,
		"rpmax":10,
		"sickresP":20
	},
	"flavourtext":"Made by boiling rice. It's good for you, so stop complaining and just eat it already.",
	"cookinglevel":2,
	"materials":["Rice"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Marmalade",
	"sell":90,
	"buy":280,
	"effects":{
		"hp":30,
		"rp":10
	},
	"flavourtext":"Jam made by boiling oranges. You can eat the orange skin too!",
	"cookinglevel":5,
	"materials":["Orange"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Udon",
	"sell":145,
	"buy":450,
	"effects":{
		"hp":300,
		"rp":100,
		"hpmax":150,
		"earthresP":5
	},
	"flavourtext":"Thick and firm noodles. Very smooth and easy to eat.",
	"cookinglevel":7,
	"materials":["Flour"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Grape Jam",
	"sell":135,
	"buy":420,
	"effects":{
		"hp":30,
		"rp":10
	},
	"flavourtext":"Jam made by boiling grapes. Generally eaten with bread.",
	"cookinglevel":9,
	"materials":["Grapes"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Apple Jam",
	"sell":170,
	"buy":520,
	"effects":{
		"hp":30,
		"rp":10
	},
	"flavourtext":"Jam made by boiling apples. Generally eaten with bread.",
	"cookinglevel":10,
	"materials":["Grapes"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Hot Chocolate",
	"sell":175,
	"buy":530,
	"effects":{
		"hp":150,
		"rp":500,
		"rpmax":50
	},
	"flavourtext":"A sweet drink of melted chocolate. Be careful not to get cavities!",
	"cookinglevel":11,
	"materials":["Chocolate"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Boiled Spinach",
	"cookinglevel":13,
	"category":"Pot",
	"sell":95,
	"buy":340,
	"pricemultiplier":"C1",
	"flavourtext":"Boiled and flavored spinach. You must be careful not to over-boil it.",
	"effects":{
		"hp":800,
		"rp":360,
		"hpmax":300
	},
	"materials":["Spinach"],
	"cookingeffects":{}
})

registerItem({
	"name":"Hot Milk",
	"sell":308,
	"buy":930,
	"effects":{
		"hp":880,
		"rp":1e3,
		"rpmax":80,
		"rpmaxP":5
	},
	"flavourtext":"Easily made by heating milk. Its relaxing effect helps you sleep at night.",
	"cookinglevel":17,
	"materials":["Milk (S)"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Boiled Egg",
	"sell":330,
	"buy":1e3,
	"effects":{
		"hp":1500,
		"rp":540,
		"hpmax":500
	},
	"flavourtext":"A standard egg recipe. The softness of the yolk will change over time.",
	"cookinglevel":18,
	"materials":["Egg (S)"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Milk Porridge",
	"sell":464,
	"buy":1400,
	"effects":{
		"heal":["SICK"],
		"hp":1440,
		"rp":1e3,
		"rpmax":100,
		"sickresP":80
	},
	"flavourtext":"Milk mixed with rice porridge. Very mild and sweet.",
	"cookinglevel":20,
	"materials":["Rice","Milk (S)"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Egg Bowl",
	"sell":492,
	"buy":1500,
	"effects":{
		"hp":2e3,
		"rp":760,
		"hpmax":800
	},
	"flavourtext":"A bowl of rice with flavored egg on top. You can adjust the flavor as you like.",
	"cookinglevel":21,
	"materials":["Rice","Egg (S)"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Boiled Pumpkin",
	"cookinglevel":25,
	"materials":["Pumpkin"],
	"category":"Pot",
	"sell":180,
	"buy":580,
	"effects":{
		"hp":2500,
		"rp":820,
		"hpmax":1000
	},
	"flavourtext":"Flavored and boiled pumpkin. Soft in texture. Boiling brings out the natural sweetness of the pumpkin.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Strawberry Jam",
	"cookinglevel":27,
	"materials":["Strawberry"],
	"category":"Pot",
	"sell":215,
	"buy":680,
	"effects":{
		"hp":30,
		"rp":10
	},
	"flavourtext":"Jam made by boiling strawberries. Generally eaten with bread.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Glazed Yam",
	"sell":560,
	"buy":1850,
	"effects":{
		"hp":3e3,
		"rp":720,
		"hpmax":1200
	},
	"flavourtext":"Fried yam glazed with sweet sauce. Easy to eat, and a popular snack.",
	"cookinglevel":28,
	"materials":["Sweet Powder","Yam"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Grilled Miso",
	"cookinglevel":29,
	"materials":["Radish"],
	"category":"Pot",
	"sell":660,
	"buy":2000,
	"effects":{
		"hp":3000,
		"rp":880,
		"hpmax":1500
	},
	"flavourtext":"Boiled and flavored with radish. Very mild and good for digestion.",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Cheese Fondue",
	"sell":1025,
	"buy":3100,
	"effects":{
		"hp":3640,
		"rp":800,
		"hpmax":1800
	},
	"flavourtext":"Cheese melted in a pot. Often scooped up with bread, like a dip.",
	"cookinglevel":32,
	"materials":["Bread","Cheese"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Grape Liqueur",
	"sell":1470,
	"buy":4420,
	"effects":{
		"statusailments":["SLP"],
		"hp":3640,
		"rp":2e3,
		"rpmax":120,
		"rpmaxP":10,
		"critP":15,
		"critresP":-25
	},
	"flavourtext":"Made from wine and grapes in a pot. It can also be drunk by children.",
	"cookinglevel":39,
	"materials":["Grapes","Wine"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Rockfish Stew",
	"sell":1360,
	"buy":5800,
	"effects":{
		"hp":5480,
		"rp":800,
		"hpmax":1000,
		"rpmax":50,
		"int":28
	},
	"flavourtext":"Rockfish stewed until it melts. Eat it and you'll feel like a rockfish, too. In a good way. No, seriously.",
	"cookinglevel":45,
	"materials":["Rockfish"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Tempura Udon",
	"sell":3500,
	"buy":11e3,
	"effects":{
		"hp":5e3,
		"hpP":35,
		"rp":1e3,
		"hpmax":2000,
		"earthresP":10
	},
	"flavourtext":"Udon with tempura on top. Some prefer crispy tempura, while others like it soft.",
	"cookinglevel":54,
	"materials":["Tempura","Udon"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Curry Rice",
	"sell":2400,
	"buy":8800,
	"effects":{
		"hp":5e3,
		"hpP":38,
		"rp":1e3,
		"hpmax":2000,
		"fireresP":10
	},
	"flavourtext":"A staple dish commonly served in households that enjoy curry.",
	"cookinglevel":55,
	"materials":["Rice","Curry Powder","Carrot","Potato"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Curry Udon",
	"sell":5e3,
	"buy":29e3,
	"effects":{
		"hp":5e3,
		"hpP":41,
		"rp":1e3,
		"hpmax":2500,
		"earthresP":15
	},
	"flavourtext":"Udon with curry flavor. Though it may seem strange, the two go very well together.",
	"cookinglevel":56,
	"materials":["Flour","Curry"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Tempura Bowl",
	"sell":3500,
	"buy":11500,
	"effects":{
		"hp":5e3,
		"hpP":95,
		"rp":1e3,
		"hpmax":2500,
		"hpmaxP":5
	},
	"flavourtext":"A bowl of rice with tempura and sauce on top. A great combination you can't beat.",
	"cookinglevel":70,
	"materials":["Rice","Tempura"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Relax Tea",
	"sell":1e4,
	"buy":3e4,
	"effects":{
		"heal":["PSN","SEAL","PAR","FTG"],
		"hp":5e3,
		"hpP":100,
		"rp":1e3,
		"rpP":4,
		"rpmax":250,
		"rpmaxP":25
	},
	"flavourtext":"Tea with a calming flavor and aroma. Cures all status effects besides colds.",
	"cookinglevel":73,
	"materials":["Relax Tea Leaves","Honey","Pink Melon","Leek"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Stew",
	"sell":12e3,
	"buy":42800,
	"effects":{
		"hp":5e3,
		"hpP":100,
		"rp":1e3,
		"rpP":46,
		"hpmax":2500,
		"hpmaxP":8
	},
	"flavourtext":"Boiled milk and vegetables. Popular for its thickness and sweetness.",
	"cookinglevel":87,
	"materials":["Flour","Milk (M)","Potato","Carrot","Onion"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Boiled Gyoza",
	"sell":9e3,
	"buy":32e3,
	"effects":{
		"hp":5e3,
		"hpP":100,
		"rp":1e3,
		"rpP":52,
		"hpmax":3e3,
		"hpmaxP":10,
		"darkresP":15
	},
	"flavourtext":"Meat and vegetables wrapped in thick dough and boiled. Very moist.",
	"cookinglevel":89,
	"materials":["Flour","Onion","Cabbage"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Union Stew",
	"sell":15e3,
	"buy":7e4,
	"effects":{
		"hp":5e3,
		"hpP":100,
		"rp":1e3,
		"rpP":67,
		"hpmax":3500,
		"hpmaxP":15,
		"earthresP":20
	},
	"flavourtext":"Various ingredients boiled in one large pot. People surround the pot and eat it together. Teamwork, ho!",
	"cookinglevel":94,
	"materials":["Radish","Leek","Bok Choy","Mushroom","Hot-Hot Fruit"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Ultimate Curry",
	"sell":25e4,
	"effects":{
		"heal":["PSN","SEAL","PAR"],
		"hp":5e3,
		"hpP":90,
		"rp":1e3,
		"rpP":100,
		"hpmax":4e3,
		"hpmaxP":20,
		"fireresP":20
	},
	"flavourtext":"The fruit of intense efforts to create the greatest curry. Perfect in many ways.",
	"cookinglevel":97,
	"materials":["Curry Powder","Wine","Devil Blood","Heavy Spice","Onion","Golden Turnip"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})

registerItem({
	"name":"Royal Curry",
	"sell":5e5,
	"effects":{
		"heal":["PSN","SEAL","PAR"],
		"hp":5e3,
		"hpP":100,
		"rp":1e3,
		"rpP":90,
		"hpmax":4e3,
		"hpmaxP":25,
		"fireresP":50
	},
	"flavourtext":"Curry loved by nobles. Requires high cooking skills to make.",
	"cookinglevel":98,
	"materials":["Curry Powder","Apple","Honey","Mixed Herbs","Onion","Emery Flower"],
	"cookingeffects":{},
	"pricemultiplier":"C1",
	"category":"Pot"
})
