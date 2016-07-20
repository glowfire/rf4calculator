// Registration of items in the order as shown in the shipping records.
// This list contains the items listed in the sixth section.

registerItem({
	"name":"Rice Flour",
	"category":"Ingredient",
	"sell":40,
	"buy":100,
	"effects":{
		// None
	},
	"cookingeffects":{
		"rp":5,
		"hpmax":1
	},
	"flavourtext":"Powder used to make rice dumplings. Adds stickiness to the resulting dish.",
	"pricemultiplier":"Sd" // Confirmed
})

registerItem({
	"name":"Curry Powder",
	"category":"Ingredient",
	"sell":70,
	"buy":300,
	"effects":{
		// None
	},
	"cookingeffects":{
		"rp":5,
		"hpmax":1,
		"waterresP":5
	},
	"flavourtext":"Powder used to cook curry. Made by mixing various spices. Goes well with lots of stuff.",
	"pricemultiplier":"Sd" // Confirmed
})

registerItem({
	"name":"Oil",
	"category":"Ingredient",
	"sell":250,
	"buy":650,
	"effects":{ // uses the minor effects multipliers
		"fireresP":-30
	},
	"cookingeffects":{
		"rp":5,
		"fireresP":-30
	},
	"flavourtext":"Often used in fried recipes to add flavor and prevent sticking. Careful, it's highly flammable.",
	"pricemultiplier":"Sd" // Confirmed
})

registerItem({
	"name":"Flour",
	"category":"Ingredient",
	"sell":125,
	"buy":320,
	"effects":{
		// None
	},
	"cookingeffects":{
		"rp":5,
		"str":1
	},
	"flavourtext":"Made by grinding wheat. A necessity in making dough, used in many recipes. Pretty amazing if you think about it.",
	"pricemultiplier":"Sd" // Confirmed
})

registerItem({
	"name":"Honey",
	"category":"Diary",
	"sell":680,
	"buy":1800,
	"effects":{ // follows the minor effects multiplier
		"rp":15
	},
	"cookingeffects":{
		"rp":100,
		"str":5
	},
	"flavourtext":"Honey collected for a queen bee. Very nutritious and popular for its natural sweetness.",
	"pricemultiplier":"Ch" // Confirmed
})

registerItem({
	"name":"Yogurt",
	"category":"Diary",
	"sell":800,
	"buy":3000,
	"effects":{ // unclear if standard or minor
		"rp":50
	},
	"cookingeffects":{
		"rp":100,
		"int":5
	},
	"flavourtext":"Made by processing milk. It eases upset stomachs.",
	"pricemultiplier":"C1", // Confirmed
	"cookinglevel":19,
	"materials":["Sweet Powder","Milk (S)"]
})

registerItem({
	"name":"Cheese",
	"category":"Diary",
	"sell":400,
	"buy":2500,
	"effects":{ // unclear if standard or minor
		"rp":30
	},
	"cookingeffects":{
		"rp":100,
		"vit":10
	},
	"flavourtext":"Made by processing milk. Has a distinctive flavor. You can eat it as it is, or use it in various recipes.",
	"pricemultiplier":"Ch", // Confirmed
	"cookinglevel":22,
	"materials":["Sour Drop","Milk (S)"]
})

registerItem({
	"name":"Mayonnaise",
	"category":"Diary",
	"sell":720,
	"buy":2200,
	"effects":{ // unclear if standard, minor or some undiscovered effects multiplier
		"hp":5
	},
	"cookingeffects":{
		"rp":30,
		"critresP":10,
		"knockresP":10
	},
	"flavourtext":"A condiment made by processing eggs. Used in various recipes with vegetables and fish.",
	"pricemultiplier":"Ch",
	"cookinglevel":28,
	"materials":["Oil","Egg (S)"]
})

registerItem({
	"name":"Egg (L)",
	"category":"Diary",
	"sell":480,
	"buy":1800,
	"effects":{ // standard
		"hp":30,
		"rp":30
	},
	"cookingeffects":{
		"rp":50,
		"strP":2
	},
	"flavourtext":"A large Cluckadoodle egg. Has a soft white shell.",
	"pricemultiplier":"E" // Confirmed
})

registerItem({
	"name":"Egg (M)",
	"category":"Diary",
	"sell":380,
	"buy":1500,
	"effects":{ // possibly follows an effect multiplier that is neither standard or minor.
		"hp":20,
		"rp":20
	},
	"cookingeffects":{
		"rp":20,
		"str":2
	},
	"flavourtext":"A Cluckadoodle egg. Has a soft white shell.",
	"pricemultiplier":"Ch" // Confirmed
})

registerItem({
	"name":"Egg (S)",
	"category":"Diary",
	"sell":280,
	"buy":1200,
	"effects":{ // appears to follow the minor effect multipliers
		"hp":10,
		"rp":10
	},
	"cookingeffects":{
		"rp":10,
		"str":1
	},
	"flavourtext":"A small Cluckadoodle egg. Has a soft white shell.",
	"pricemultiplier":"Sd" // Confirmed
})

registerItem({
	"name":"Milk (L)",
	"category":"Diary",
	"sell":500,
	"buy":2800,
	"effects":{ // standard
		"hp":90
	},
	"cookingeffects":{
		"rp":50,
		"intP":2
	},
	"flavourtext":"A large amount of milk taken from a Buffamoo. High in calcium.",
	"pricemultiplier":"E" // Confirmed
})

registerItem({
	"name":"Milk (M)",
	"category":"Diary",
	"sell":380,
	"buy":2000,
	"effects":{ // Does not follow standard or minor effects multipliers.
		"hp":60
	},
	"cookingeffects":{
		"rp":20,
		"int":2
	},
	"flavourtext":"A medium portion of Milk taken from a Buffamoo. High in calcium.",
	"pricemultiplier":"Ch" // Confirmed
})

registerItem({
	"name":"Milk (S)",
	"category":"Diary",
	"sell":260,
	"buy":1600,
	"effects":{ // follows the minor effect multipliers
		"hp":30
	},
	"cookingeffects":{
		"rp":10,
		"int":1
	},
	"flavourtext":"A small portion of Milk taken from a Buffamoo. High in calcium.",
	"pricemultiplier":"Sd" // Confirmed
})

registerItem({
	"name":"Wine",
	"category":"Ready-made",
	"sell":800,
	"buy":2000,
	"effects":{ // follows the minor effect multipliers
		"statusailments":["SLP"],
		"rp":20
	},
	"cookingeffects":{
		"rp":20,
		"critP":5,
		"critresP":-1
	},
	"flavourtext":"A type of alcohol made from grapes. Popular for its taste and mellowness.",
	"pricemultiplier":"Ch" // Confirmed
})

registerItem({
	"name":"Chocolate",
	"category":"Ready-made",
	"sell":150,
	"buy":400,
	"effects":{ // follows the minor effect multipliers
		"rp":10
	},
	"cookingeffects":{
		"rp":10,
		"int":2
	},
	"flavourtext":"Smooth and sweet, it's an absolute standard. Found in endless varieties.",
	"pricemultiplier":"Ch" // Confirmed
})

registerItem({
	"name":"Rice",
	"category":"Ready-made",
	"sell":30,
	"buy":200,
	"effects":{ // follows the minor effect multipliers
		"hp":30
	},
	"cookingeffects":{
		"hp":10,
		"hpmax":5
	},
	"flavourtext":"A staple of the dining table. Plays well with other dishes, so it's used in a wide variety of recipes.",
	"pricemultiplier":"Ch" // Confirmed
})

registerItem({
	"name":"Turnip Heaven",
	"category":"No Tool",
	"sell":15e4,
	"buy":542e3,
	"effects":{
		"hp":5000,
		"hpP":90,
		"rp":1000,
		"rpP":90,
		"str":90,
		"strP":12,
		"vit":80,
		"vitP":15,
		"int":50,
		"intP":10,
		"fireresP":20,
		"lightresP":20,
		"darkresP":20
	},
	"cookingeffects":{},
	"flavourtext":"Turnips from three corners of the globe, gathered together into a turnip paradise. Try to eat all three at once!",
	"pricemultiplier":"E",
	"cookinglevel":96,
	"materials":["Turnip","Pink Turnip","Golden Turnip"]
})

registerItem({
	"name":"Pickle Mix",
	"category":"No Tool",
	"sell":520,
	"buy":2800,
	"effects":{
		"hp":5000,
		"hpP":11,
		"rp":1000,
		"str":60,
		"strP":3,
		"vit":20,
		"vitP":3,
		"int":35,
		"intP":1,
		"fireresP":10,
		"lightresP":10
	},
	"cookingeffects":{},
	"flavourtext":"Made with spring and winter turnips. The red and white colors symbolize good luck. Often served at festivals.",
	"pricemultiplier":"E",
	"cookinglevel":48,
	"materials":["Turnip","Pink Turnip"]
})

registerItem({
	"name":"Salmon Onigiri",
	"category":"No Tool",
	"sell":645,
	"buy":2e3,
	"effects":{
		"hp":2700,
		"rp":220,
		"str":10,
		"vit":6,
		"int":9
	},
	"cookingeffects":{},
	"flavourtext":"Onigiri with salmon inside. One of the most popular rice ball recipes.",
	"pricemultiplier":"E",
	"cookinglevel":20,
	"materials":["Salted Salmon","Rice"]
})

registerItem({
	"name":"Bread",
	"category":"Oven",
	"sell":145,
	"buy":440,
	"effects":{
		"hp":400,
		"rp":120,
		"str":4,
		"vit":4,
		"int":4
	},
	"cookingeffects":{
		// none
	},
	"flavourtext":"A staple food for many. You can toast it, stuff it, stick things between it or eat it any other way you'd like.",
	"pricemultiplier":"E",
	"cookinglevel":8,
	"materials":["Flour"]
})

registerItem({
	"name":"Onigiri",
	"category":"No Tool",
	"sell":57,
	"buy":180,
	"effects":{
		"hp":220,
		"rp":30,
		"str":1,
		"vit":1,
		"int":1
	},
	"cookingeffects":{},
	"flavourtext":"Rice formed into a triangular shape. Often called a <q>rice ball.</q> Easy to eat on the go, making it a staple lunch item.",
	"pricemultiplier":"E",
	"cookinglevel":2,
	"materials":["Rice"]
})

registerItem({
	"name":"Relax Tea Leaves",
	"category":"No Tool",
	"sell":100,
	"buy":2800,
	"effects":{
		"rpmax":50
	},
	"cookingeffects":{},
	"flavourtext":"A medicinal herb made by mixing various plants. Make tea with it for greater effect.",
	"pricemultiplier":"E",
	"cookinglevel":50,
	"materials":["White Grass","Orange Grass","Green Grass","Yellow Grass","Blue Grass","Purple Grass"]
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
	"name":"Bamboo Rice",
	"category":"No Tool",
	"sell":162,
	"buy":490,
	"effects":{
		"hp":300,
		"rp":80,
		"str":2,
		"vit":2,
		"int":2
	},
	"cookingeffects":{},
	"flavourtext":"Rice mixed with bamboo shoots. A popular dish in spring, with a savory flavor.",
	"pricemultiplier":"E",
	"cookinglevel":7,
	"materials":["Rice","Bamboo Sprout"]
})

registerItem({
	"name":"Pickles",
	"category":"No Tool",
	"sell":105,
	"buy":450,
	"effects":{
		"hp":400,
		"rp":100,
		"str":4,
		"vit":3,
		"int":2
	},
	"cookingeffects":{},
	"flavourtext":"Lightly pickled cucumber. Has a crunchy texture.",
	"pricemultiplier":"E",
	"cookinglevel":10,
	"materials":["Cucumber"]
})

registerItem({
	"name":"Pickled Turnip",
	"category":"No Tool",
	"sell":48,
	"buy":400,
	"effects":{
		"hp":250,
		"rp":100,
		"str":5,
		"vit":3,
		"int":5
	},
	"cookingeffects":{},
	"flavourtext":"Turnip that's been pickled. Has a fresh taste and is sometimes eaten after meals.",
	"pricemultiplier":"E",
	"cookinglevel":4,
	"materials":["Turnip"]
})

registerItem({
	"name":"Pickled Turnip",
	"category":"No Tool",
	"sell":48,
	"buy":400,
	"effects":{
		"hp":250,
		"rp":100,
		"str":5,
		"vit":3,
		"int":5
	},
	"cookingeffects":{},
	"flavourtext":"Turnip that's been pickled. Has a fresh taste and is sometimes eaten after meals.",
	"pricemultiplier":"E",
	"cookinglevel":12,
	"materials":["Pink Turnip"]
})

registerItem({
	"name":"Fruit Sandwich",
	"category":"No Tool",
	"sell":540,
	"buy":1920,
	"effects":{
		"hp":4080,
		"rp":1000,
		"str":30,
		"vit":15,
		"int":20
	},
	"cookingeffects":{},
	"flavourtext":"Fruit placed between two slices of bread. Beloved by children... or so parents hope!",
	"pricemultiplier":"E",
	"cookinglevel":35,
	"materials":["Bread","Strawberry"]
})

registerItem({
	"name":"Sandwich",
	"category":"No Tool",
	"sell":964,
	"buy":3900,
	"effects":{
		"hp":4000,
		"rp":840,
		"str":23,
		"vit":12,
		"int":17
	},
	"cookingeffects":{},
	"flavourtext":"Vegetables and other ingredients placed between two slices of bread. Easy to eat with one hand.",
	"pricemultiplier":"E",
	"cookinglevel":34,
	"materials":["Bread","Egg (S)","Cucumber"]
})

registerItem({
	"name":"Salad",
	"category":"No Tool",
	"sell":6900,
	"buy":21e3,
	"effects":{
		"hp":5000,
		"hpP":86,
		"rp":1000,
		"str":70,
		"strP":7,
		"vit":30,
		"vitP":8,
		"int":40,
		"intP":4
	},
	"cookingeffects":{},
	"flavourtext":"Assorted fresh vegetables. Both healthy and nutritious!",
	"pricemultiplier":"E",
	"cookinglevel":67,
	"materials":["Mayonnaise","Cucumber","Tomato","Cabbage"]
})

registerItem({
	"name":"Dumplings",
	"cookinglevel":2,
	"category":"Steamed",
	"sell":45,
	"buy":150,
	"effects":{
		"hp":200,
		"rp":50,
		"slpresP":70
	},
	"flavourtext":"Small rice cakes on skewers. Traditional dessert eaten during festivals.",
	"materials":["Rice Flour"],
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Pumpkin Flan",
	"cookinglevel":48,
	"sell":1350,
	"buy":5250,
	"effects":{
		"hp":5e3,
		"rp":1200,
		"ftgresP":100,
		"sickresP":100
	},
	"flavourtext":"A flan with the sweet and savory flavor of pumpkin.",
	"materials":["Egg (S)","Milk (S)","Pumpkin"],
	"pricemultiplier":"C1",
	"cookingeffects":{},
	"category":"Steamed"
})

registerItem({
	"name":"Flan",
	"cookinglevel":29,
	"sell":832,
	"buy":2500,
	"effects":{
		"hp":3360,
		"rp":600,
		"ftgresP":75,
		"sickresP":75
	},
	"flavourtext":"A jiggly dessert with a smooth texture. Shake it a little and watch it dance!",
	"materials":["Egg (S)","Milk (S)"],
	"pricemultiplier":"C1",
	"cookingeffects":{},
	"category":"Steamed"
})

registerItem({
	"name":"Chocolate Sponge",
	"cookinglevel":35,
	"sell":1800,
	"buy":5600,
	"effects":{
		"hp":4200,
		"rp":800,
		"slpresP":100
	},
	"flavourtext":"Chocolate cake that's as light and soft as a cloud.",
	"materials":["Flour","Chocolate","Egg (S)","Milk (S)"],
	"pricemultiplier":"C1",
	"cookingeffects":{},
	"category":"Steamed"
})

registerItem({
	"name":"Pound Cake",
	"cookinglevel":23,
	"sell":608,
	"buy":1880,
	"effects":{
		"hp":2580,
		"rp":500,
		"parresP":70
	},
	"flavourtext":"Square-shaped sponge cake. Steaming it brings out the sweet deliciousness.",
	"materials":["Flour","Egg (S)"],
	"pricemultiplier":"C1",
	"cookingeffects":{},
	"category":"Steamed"
})

registerItem({
	"name":"Steamed Gyoza",
	"cookinglevel":90,
	"sell":9e3,
	"buy":32e3,
	"effects":{
		"hp":5000,
		"hpP":100,
		"rp":1000,
		"rpP":55,
		"darkresP":50,
		"psnresP":100,
		"sealresP":100,
		"parresP":100,
		"slpresP":100,
		"ftgresP":100,
		"sickresP":100,
		"faintresP":100
	},
	"flavourtext":"One of the common ways to cook potstickers. Juicy and savory.",
	"materials":["Flour","Onion","Cabbage"],
	"pricemultiplier":"C1",
	"cookingeffects":{},
	"category":"Steamed"
})

registerItem({
	"name":"Curry Manju",
	"cookinglevel":57,
	"category":"Steamed",
	"sell":4800,
	"buy":36800,
	"effects":{
		"hp":5e3,
		"hpP":47,
		"rp":1e3,
		"fireresP":10,
		"darkresP":10,
		"faintresP":100
	},
	"flavourtext":"A soft dumpling filled with spices.",
	"materials":["Flour","Curry"],
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Chinese Manju",
	"cookinglevel":15,
	"category":"Steamed",
	"sell":272,
	"buy":820,
	"effects":{
		"hp":1260,
		"rp":300,
		"darkresP":5,
		"psnresP":70
	},
	"flavourtext":"Soft bun filled with various ingredients and steamed.",
	"materials":["Flour","Bamboo Sprout"],
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Meat Dumpling",
	"cookinglevel":82,
	"sell":5200,
	"buy":16e3,
	"effects":{
		"hp":5000,
		"hpP":100,
		"rp":1000,
		"rpP":31,
		"psnresP":100,
		"sealresP":100,
		"parresP":100
	},
	"flavourtext":"A type of dim sum. Has a lovely sweet flavor and soft texture.",
	"materials":["Flour","Shrimp","Onion"],
	"pricemultiplier":"C1",
	"cookingeffects":{},
	"category":"Steamed"
})

registerItem({
	"name":"Cheese Bread",
	"cookinglevel":44,
	"sell":2420,
	"buy":7300,
	"effects":{
		"hp":5000,
		"rp":1120,
		"psnresP":50,
		"sealresP":50,
		"parresP":50,
		"slpresP":50,
		"faintresP":25
	},
	"flavourtext":"Steamed cheese bread. Moist and chewy, with a subtle scent of feet.",
	"materials":["Flour","Cheese","Egg (S)","Milk (S)"],
	"pricemultiplier":"C1",
	"cookingeffects":{},
	"category":"Steamed"
})

registerItem({
	"name":"Steamed Bread",
	"cookinglevel":32,
	"sell":1240,
	"buy":3820,
	"effects":{
		"hp":3720,
		"rp":800,
		"sealresP":75
	},
	"flavourtext":"Bread that's been steamed. Makes a good snack for kids.",
	"materials":["Flour","Egg (S)","Milk (S)"],
	"pricemultiplier":"C1",
	"cookingeffects":{},
	"category":"Steamed"
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
	"name":"Cheesecake",
	"sell":2540,
	"buy":7820,
	"effects":{
		"heal":["PSN","SEAL","PAR","FTG"],
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
	"name":"Chocolate Cake",
	"sell":3860,
	"buy":12e3,
	"effects":{
		"heal":["PSN","SEAL","PAR","FTG"],
		"hp":5760,
		"rp":1000,
		"vit":160
	},
	"flavourtext":"Bittersweet cake covered with chocolate.",
	"cookinglevel":48,
	"materials":["Flour","Chocolate","Butter","Sweet Powder","Milk (S)","Egg (S)"],
	"category":"Oven",
	"pricemultiplier":"C1",
	"cookingeffects":{}
})

registerItem({
	"name":"Cake",
	"sell":4200,
	"buy":15e3,
	"effects":{
		"heal":["PSN","SEAL","PAR","FTG"],
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

registerItem({
	"name":"Utlimate Curry",
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
	"name":"Disastrous Dish",
	"category":"Failed Dish",
	"sell":50,
	"buy":1e3,
	"effects":{ // standard
		"hpP":-80,
		"rpmaxP":-25,
		"strP":-25,
		"vitP":-25,
		"intP":-25,
		"lightresP":-25
	},
	"cookingeffects":{},
	"flavourtext":"How did such a blight upon foodkind come to be? You can try eating it, but I sure wouldn't recommend it...",
	"pricemultiplier":"Ch" // confirmed
})

registerItem({
	"name":"Failed Dish",
	"category":"Failed Dish",
	"sell":2,
	"buy":15,
	"effects":{ // standard
		"hpP":-20,
		"rpmaxP":-10,
		"strP":-10,
		"vitP":-10,
		"intP":-10
	},
	"cookingeffects":{},
	"flavourtext":"A failed dish that got burned. Edible, but tastes pretty bad. Maybe you'll like it, though!",
	"pricemultiplier":"Ch" // confirmed
})

registerItem({
	"name":"Mixed Herbs",
	"category":"Ingredient",
	"sell":280,
	"buy":750,
	"effects":{ // standard
		"windresP":-30
	},
	"cookingeffects":{
		"hp":500,
		"rp":100,
		"windresP":-10
	},
	"flavourtext":"Seasoning made from various herbs. Has a savory scent.",
	"pricemultiplier":"Ch", // confirmed
	"chemistrylevel":8,
	"materials":["Green Grass","Toyherb"]
})

registerItem({
	"name":"Sour Drop",
	"category":"Ingredient",
	"sell":90,
	"buy":250,
	"effects":{ // standard
		"earthresP":-30
	},
	"cookingeffects":{
		"hp":500,
		"rp":100,
		"earthresP":-10
	},
	"flavourtext":"Seasoning made from sour leaves. Mouth-puckering, but leaves you feeling refreshed.",
	"pricemultiplier":"Ch", // confirmed
	"chemistrylevel":7,
	"materials":["Orange"]
})

registerItem({
	"name":"Sweet Powder",
	"category":"Ingredient",
	"sell":170,
	"buy":450,
	"effects":{ //standard
		"waterresP":-30
	},
	"cookingeffects":{
		"hp":500,
		"rp":100,
		"waterresP":-10
	},
	"flavourtext":"Seasoning made from sweet leaves. Reminds you of sweet honey.",
	"pricemultiplier":"Ch", // confirmed
	"chemistrylevel":5,
	"materials":["Apple"]
})

registerItem({
	"name":"Heavy Spice",
	"category":"Ingredient",
	"sell":180,
	"buy":480,
	"effects":{ // standard
		"fireresP":-30
	},
	"cookingeffects":{
		"hp":500,
		"rp":100,
		"fireresP":-10
	},
	"flavourtext":"Seasoning made from hot leaves. One bite and your mouth will be on fire!",
	"pricemultiplier":"Ch", // confirmed
	"chemistrylevel":10,
	"materials":["Purple Grass"]
})
