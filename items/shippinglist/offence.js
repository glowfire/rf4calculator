// Registration of items in the order as shown in the shipping records.
// This list contains the items listed in the third section.

// Unchecked price multipliers

// Need Water Dragon Ash x1, Earth Dragon Ash x1, Glitta Augite x1 to complete this shipping section

registerItem({
	"name":"Clippers",
	"sell":520,
	"buy":1900,
	// No Ability
	"flavourtext":"An item used to trim and clip Wooly fur. Designed not to hurt its target.",
	// Cannot be forged
	"category":"Clippers",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Brush",
	"sell":640,
	"buy":2400,
	// No Ability
	"flavourtext":"An item used to brush monsters. Capable of grooming just about anything!",
	// Cannot be forged
	"category":"Brush",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Sacred Pole",
	"sell":2500,
	"ability":{
		"atk":128,
		"def":50,
		"matk":100,
		"mdef":80,
		"str":30,
		"int":30,
		"diz":30,
		"critP":50,
		"knockP":100,
		"stunP":50
	},
	"flavourtext":"A pole so strong that it'll never break. Can be charged to attract fish from far away.",
	"forginglevel":80,
	"materials":["Platinum","Sticks and Stems","Strings"],
	"category":"Pole",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Famous Pole",
	"sell":650,
	"ability":{
		"atk":60,
		"matk":40
	},
	"flavourtext":"A pole for master fishers. Can be charged to attract fish from far away.",
	"forginglevel":45,
	"materials":["Gold","Sticks and Stems","Strings"],
	"category":"Pole",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Skilled Pole",
	"sell":440,
	"buy":25e3,
	"ability":{
		"atk":25,
		"matk":25
	},
	"flavourtext":"A pole for novice fishers. Can be charged to attract fish from far away.",
	"forginglevel":30,
	"materials":["Silver","Sticks and Stems","Strings"],
	"category":"Pole",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Beginner's Pole",
	"sell":170,
	"buy":5e3,
	"ability":{
		"atk":10,
		"matk":12
	},
	"flavourtext":"A pole for beginners. Can be charged to attract fish from far away.",
	"forginglevel":15,
	"materials":["Bronze","Sticks and Stems","Strings"],
	"category":"Pole",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Cheap Pole",
	"sell":44,
	"buy":1500,
	"ability":{
		"atk":1,
		"matk":3
	},
	"flavourtext":"An old, rusty fishing pole. So old that it might break if the fish is too large.",
	"forginglevel":5,
	"materials":["Sticks and Stems","Strings"],
	"category":"Pole",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Miracle Axe",
	"sell":2500,
	"ability":{
		"atk":190,
		"def":30,
		"matk":15,
		"mdef":50,
		"str":20,
		"diz":5,
		"critP":10,
		"stunP":50
	},
	"flavourtext":"An axe so amazing, poems are written of its noble deeds. Shorter time needed to charge, making it highly efficient.",
	"forginglevel":80,
	"materials":["Platinum","Stones","Sticks and Stems"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Mountain Axe",
	"sell":600,
	"ability":{
		"atk":108,
		"matk":10,
		"critP":5
	},
	"flavourtext":"An axe like an ox. Made from gold and can be charged to cover wider areas.",
	"forginglevel":45,
	"materials":["Gold","Stones","Sticks and Stems"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Lumber Axe",
	"sell":400,
	"buy":3e4,
	"ability":{
		"atk":67,
		"matk":5,
		"critP":5
	},
	"flavourtext":"A nice, strong silver axe. Can be charged to cover wider areas.",
	"forginglevel":30,
	"materials":["Silver","Stones","Sticks and Stems"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Chopping Axe",
	"sell":130,
	"buy":5e3,
	"ability":{
		"atk":25,
		"critP":5
	},
	"flavourtext":"A sturdy bronze axe. Can be charged to cover wider areas.",
	"forginglevel":15,
	"materials":["Bronze","Stones","Sticks and Stems"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Cheap Axe",
	"sell":34,
	"buy":1500,
	"ability":{
		"atk":3,
		"critP":5
	},
	"flavourtext":"An old rusty axe. Too old to be charged.",
	"forginglevel":5,
	"materials":["Stones","Sticks and Stems"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Platinum Hammer",
	"sell":2500,
	"ability":{
		"atk":187,
		"def":50,
		"matk":15,
		"mdef":30,
		"str":20,
		"diz":18,
		"critP":-5,
		"stunP":75
	},
	"flavourtext":"A hammer made from platinum. Shorter time needed to charge, making it highly efficient. Used to flatten soil.",
	"forginglevel":80,
	"materials":["Platinum","Sticks and Stems"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Golden Hammer",
	"sell":600,
	"ability":{
		"atk":106,
		"matk":10,
		"diz":5,
		"critP":-5,
		"stunP":20
	},
	"flavourtext":"A hammer reinforced with gold. Can be charged to cover wider areas. Used to flatten soil.",
	"forginglevel":45,
	"materials":["Gold","Sticks and Stems"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Silver Hammer",
	"sell":400,
	"buy":3e4,
	"ability":{
		"atk":68,
		"matk":5,
		"diz":5,
		"critP":-5,
		"stunP":20
	},
	"flavourtext":"A hammer reinforced with silver. Can be charged to cover wider areas. Used to flatten soil.",
	"forginglevel":30,
	"materials":["Silver","Sticks and Stems"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Iron Hammer",
	"sell":138,
	"buy":5e3,
	"ability":{
		"atk":25,
		"diz":5,
		"critP":-5,
		"stunP":20
	},
	"flavourtext":"A hammer reinforced with bronze. Can be charged to cover wider areas. Used to flatten soil.",
	"forginglevel":15,
	"materials":["Bronze","Sticks and Stems"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Cheap Hammer",
	"sell":13,
	"buy":1500,
	"ability":{
		"atk":3,
		"diz":5,
		"critP":-5,
		"stunP":20
	},
	"flavourtext":"An old, rusty hammer. Too old to be charged. Used to flatten soil.",
	"forginglevel":5,
	"materials":["Minerals","Sticks and Stems"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Legendary Sickle",
	"sell":2500,
	"ability":{
		"atr":["Wind"],
		"atk":178,
		"matk":80,
		"str":50,
		"diz":5,
		"critP":20,
		"stunP":30
	},
	"flavourtext":"This sickle is sick...le! Use it to cut weeds and plants. You can also cut crops to collect seeds",
	"forginglevel":80,
	"materials":["Platinum","Shards"],
	"category":"Sickle",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Super Sickle",
	"sell":600,
	"ability":{
		"atr":["Wind"],
		"atk":100,
		"matk":20,
		"str":20
	},
	"flavourtext":"An outstanding sickle. Use it to cut weeds and plants. You can also cut crops to collect seeds",
	"forginglevel":45,
	"materials":["Gold","Shards"],
	"category":"Sickle",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Quality Sickle",
	"sell":400,
	"buy":25e3,
	"ability":{
		"atk":60
	},
	"flavourtext":"A high-quality sickle. Use it to cut weeds and plants. You can also cut crops to collect seeds",
	"forginglevel":30,
	"materials":["Silver","Shards"],
	"category":"Sickle",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Iron Sickle",
	"sell":140,
	"buy":3e3,
	"ability":{
		"atk":20
	},
	"flavourtext":"A fairly sharp sickle. Use it to cut weeds and plants. You can also cut crops to collect seeds",
	"forginglevel":15,
	"materials":["Bronze","Shards"],
	"category":"Sickle",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Cheap Sickle",
	"sell":38,
	"buy":300,
	"ability":{
		"atk":2
	},
	"flavourtext":"An old, rusty sickle. Use it to cut weeds and plants. You can also cut crops to collect seeds",
	"forginglevel":5,
	"materials":["Minerals","Shards"],
	"category":"Sickle",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Joy Waterpot",
	"sell":2500,
	"ability":{
		"atr":["Water"],
		"def":40,
		"matk":100,
		"mdef":80,
		"int":50,
		"diz":5,
		"critP":15,
		"stunP":80
	},
	"flavourtext":"A lovely waterpot. So lovely that its water strikes the field as if tears from an omnibenevolent deity above.",
	"forginglevel":80,
	"materials":["Platinum","Cloths and Skins"],
	"category":"Waterpot",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Rainbow Waterpot",
	"sell":600,
	"ability":{
		"atr":["Water"],
		"matk":60
	},
	"flavourtext":"A colorful waterpot. So colorful that it can cover wider areas than most. It wishes to be the prettiest waterpot at the dance.",
	"forginglevel":45,
	"materials":["Gold","Cloths and Skins"],
	"category":"Waterpot",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Lion Waterpot",
	"sell":400,
	"buy":25e3,
	"ability":{
		"atr":["Water"],
		"matk":35
	},
	"flavourtext":"A super-cool waterpot. So cool that it can cover wider areas than most.",
	"forginglevel":30,
	"materials":["Silver","Cloths and Skins"],
	"category":"Waterpot",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Tin Waterpot",
	"sell":135,
	"buy":3e3,
	"ability":{
		"atr":["Water"],
		"matk":18
	},
	"flavourtext":"A tin waterpot. Though heavy, it can be charged to water the field.",
	"forginglevel":15,
	"materials":["Bronze","Cloths and Skins"],
	"category":"Waterpot",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Cheap Waterpot",
	"sell":37,
	"buy":150,
	"ability":{
		"atr":["Water"],
		"matk":1
	},
	"flavourtext":"An old, rusted waterpot. You can water the fields with it. Press the B Button repeatedly to water as you walk.",
	"forginglevel":5,
	"materials":["Minerals","Cloths and Skins"],
	"category":"Waterpot",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Blessed Hoe",
	"sell":2500,
	"ability":{
		"atr":["Earth"],
		"atk":150,
		"def":60,
		"matk":30,
		"mdef":20,
		"str":20,
		"vit":20,
		"diz":5,
		"critP":10,
		"stunP":30
	},
	"flavourtext":"A hoe so strong that the soil is all like, thank you, may I have another? Really wide coverage when charged.",
	"forginglevel":80,
	"materials":["Platinum"],
	"category":"Hoe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Shiny Hoe",
	"sell":600,
	"ability":{
		"atr":["Earth"],
		"atk":64,
		"matk":15
	},
	"flavourtext":"A hoe that glimmers like the sweat on your brow. Covers a very wide area when charged.",
	"forginglevel":45,
	"materials":["Gold"],
	"category":"Hoe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Seasoned Hoe",
	"sell":400,
	"buy":25e3,
	"ability":{
		"atr":["Earth"],
		"atk":30,
		"matk":10
	},
	"flavourtext":"A stronger hoe. Covers an even wider area when charged than the Sturdy Hoe.",
	"forginglevel":30,
	"materials":["Silver"],
	"category":"Hoe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Sturdy Hoe",
	"sell":120,
	"buy":3e3,
	"ability":{
		"atr":["Earth"],
		"atk":18,
		"matk":5
	},
	"flavourtext":"A slightly stronger hoe. No longer chipped by rocks. Charge to cover a wider area.",
	"forginglevel":15,
	"materials":["Bronze"],
	"category":"Hoe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Cheap Hoe",
	"sell":24,
	"buy":150,
	"ability":{
		"atr":["Earth"],
		"atk":1
	},
	"flavourtext":"An old, rusty hoe. You can till the fields with it. Its blade is chipped.",
	"forginglevel":5,
	"materials":["Minerals"],
	"category":"Hoe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Fenrir",
	"sell":1e5,
	"ability":{
		"atk":12350,
		"def":720,
		"matk":1e4,
		"mdef":500,
		"diz":3
	},
	"flavourtext":"A weapon in the shape of a wolf-like monster that can swallow gods.",
	"forginglevel":99,
	"materials":["Rune Sphere Shard","Rune Crystal","Red Lion Fur","Blue Lion Fur","Broken Ice Wall"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Bazal Katar",
	"sell":6e4,
	"ability":{
		"atk":9800,
		"def":580,
		"mdef":300,
		"diz":3
	},
	"flavourtext":"A foreign weapon that looks like a sword. Actually, it's called a jamadhar.",
	"forginglevel":90,
	"materials":["Dragonic Stone","Earthwyrm Scale","Firewyrm Scale","Crystal Skull","Cloths and Skins"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Hand of God",
	"sell":4e4,
	"ability":{
		"atk":7500,
		"def":360,
		"matk":2e3
		"mdef":100,
		"diz":3
	},
	"flavourtext":"A.k.a. God hand.",
	"forginglevel":82,
	"materials":["Dragonic Stone","Chimera Tail","Ambrosia's Thorns","Small Crystal","Cloths and Skins"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Golem  Punch", // More than one space in name
	"sell":18e3,
	"ability":{
		"atk":4980,
		"def":300,
		"mdef":90,
		"diz":3
	},
	"flavourtext":"Learning the way of Golems' punch. It's sad that they don't fly off.",
	"forginglevel":75,
	"materials":["Orichalcum","Golem Spirit Stone","Golem Tablet","MTGU Plate","Shiny Screw"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Caestus",
	"sell":12500,
	"ability":{
		"atk":4e3,
		"def":220,
		"matk":1e3,
		"mdef":80,
		"diz":3
	},
	"flavourtext":"It's said that ancient boxers used them.",
	"forginglevel":69,
	"materials":["Orichalcum","Dangerous Scissors","Red Lion Fur","Blue Lion Fur"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Ironleaf Fists",
	"sell":11e3,
	"ability":{
		"atk":2550,
		"def":180,
		"matk":800,
		"mdef":60,
		"diz":3,
		"critP":3
	},
	"flavourtext":"Hurts, of course. Be careful not to stab yourself instead.",
	"forginglevel":64,
	"materials":["Orichalcum","Crimson Scale","MTGU Plate","Ironleaf","Ironleaf"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Animal Puppets",
	"sell":14e3,
	"ability":{
		"atk":1960,
		"def":150,
		"matk":500,
		"mdef":50,
		"diz":3
	},
	"flavourtext":"A useful tool to have when performing a skit alone, but as a weapon...",
	"forginglevel":60,
	"materials":["Turnip's Miracle","Rune Crystal","Puppetry Strings","Furs","Furs"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Cat Punch",
	"sell":7500,
	"ability":{
		"atk":1411,
		"def":125,
		"matk":200,
		"mdef":45,
		"diz":3,
		"critP":5
	},
	"flavourtext":"A weapon in the shape of a cat's paws. Although it looks soft, the claw part seriously hurts.",
	"forginglevel":57,
	"materials":["Orichalcum","Quality Worn Cloth","Yellow Feather","Big Bird's Comb","Chimera's Claw"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"",
	"sell":,
	"buy":,
	"ability":{
		"":
	},
	"flavourtext":".",
	"forginglevel":,
	"materials":["",""],
	"category":"",
	"pricemultiplier":"E"
})
