// Registration of items in the order as shown in the shipping records.
// This list contains the items listed in the third section.

// Unchecked price multipliers

// Need Water Dragon Ash x1, Earth Dragon Ash x1, Glitta Augite x1 to complete this shipping section
// Unshipped: Twin Justice, Earnest Edge, Dark Invitation, Orcus Sword,
// Magic Shot,
// Splash Star, Saint Axe, Fatal Crush, Mjolnir,
// Gungnir, Dragon's Fang, Bjor,
// Caliburn, Heaven Asunder, Braveheart,
// Rune Legend, Rune Blade

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
	"name":"Hand of God",
	"sell":4e4,
	"ability":{
		"atk":7500,
		"def":360,
		"matk":2e3,
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
	"name":"Dragon Claws",
	"sell":2350,
	"buy":126e3,
	"ability":{
		"atk":592,
		"def":40,
		"diz":3
	},
	"flavourtext":"A weapon made from dragon claws. Can even cut steel.",
	"forginglevel":42,
	"materials":["Platinum","Dragon Fang","Scales","Cloths and Skins"],
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
	"name":"Gloves",
	"sell":380,
	"buy":21500,
	"ability":{
		"atk":172,
		"vit":20,
		"diz":3,
		"critP":2
	},
	"flavourtext":"These are for protecting your fists. Pretty basic, really.",
	"forginglevel":20,
	"materials":["Quality Cloth","Fur (M)","Strings"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Fists of Dark",
	"sell":1580,
	"buy":429500,
	"ability":{
		"atr":["Dark"],
		"atk":748,
		"def":45,
		"matk":30,
		"mdef":15,
		"int":15,
		"diz":3
	},
	"flavourtext":"Evil iron gauntlets. This is the power gained by giving your heart to the dark side.",
	"forginglevel":46,
	"materials":["Malm Claw","Dark Crystal","Cursed Doll"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Fists of Light",
	"sell":9e3,
	"ability":{
		"atr":["Light"],
		"atk":1110,
		"def":100,
		"matk":100,
		"mdef":40,
		"int":15,
		"diz":3
	},
	"flavourtext":"Shiny iron gauntlets. So bright they make you want sunglasses.",
	"forginglevel":53,
	"materials":["Orichalcum","Light Crystal","Light Crystal","Big Crystal"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Fists of the Earth",
	"sell":1020,
	"buy":64e3,
	"ability":{
		"atr":["Earth"],
		"atk":318,
		"def":25,
		"matk":5,
		"mdef":10,
		"int":15,
		"diz":3
	},
	"flavourtext":"Heavy iron gauntlets. They make you feel powerful and grounded.",
	"forginglevel":30,
	"materials":["Gold","Rigid Horn","Earth Crystal","Cloths and Skins"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Fists of Wind",
	"sell":2e3,
	"buy":999999,
	"ability":{
		"atr":["Wind"],
		"atk":906,
		"def":50,
		"matk":30,
		"mdef":20,
		"int":15,
		"diz":3
	},
	"flavourtext":"Sharp iron gauntlets. It's important to draw your punches quickly for maximum effect.",
	"forginglevel":50,
	"materials":["Malm Claw","Wind Crystal","Chimera's Claw"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Fists of Water",
	"sell":2300,
	"buy":98e3,
	"ability":{
		"atr":["Water"],
		"atk":482,
		"def":35,
		"matk":15,
		"mdef":10,
		"int":15,
		"diz":3
	},
	"flavourtext":"Cold iron gauntlets. They can deliver merciless blows.",
	"forginglevel":38,
	"materials":["Platinum","Water Crystal","Aquamarine","Cloths and Skins"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Fists of Fire",
	"sell":1030,
	"buy":86e3,
	"ability":{
		"atr":["Fire"],
		"atk":396,
		"def":30,
		"matk":10,
		"mdef":10,
		"int":15,
		"diz":3
	},
	"flavourtext":"Burning iron gauntlets. We all are friends after a fight!",
	"forginglevel":33,
	"materials":["Diamond","Fire Crystal","Cloths and Skins"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Bear Claws",
	"sell":580,
	"buy":35700,
	"ability":{
		"atk":222,
		"def":20,
		"diz":3
	},
	"flavourtext":"A weapon that looks like the claws of a bear.",
	"forginglevel":28,
	"materials":["Gold","Cloths and Skins"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Kote",
	"sell":139,
	"buy":10150,
	"ability":{
		"atk":112,
		"def":15,
		"diz":3
	},
	"flavourtext":"A weapon that can be used as armor.",
	"forginglevel":16,
	"materials":["Iron","Palm Claw","Cloths and Skins"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Brass Knuckles",
	"sell":130,
	"buy":4660,
	"ability":{
		"atk":59,
		"def":3,
		"diz":3
	},
	"flavourtext":"A lethal weapon mainly used by Goblin gangs.",
	"forginglevel":10,
	"materials":["Bronze","Cloths and Skins"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Leather Gloves",
	"sell":13,
	"buy":290,
	"ability":{
		"atk":24,
		"def":1,
		"diz":3
	},
	"flavourtext":"They're for protecting your fists rather than attacking. Since there are holes for fingers, it's easy to grab monsters.",
	"forginglevel":2,
	"materials":["Cloths and Skins"],
	"category":"Fist",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Twin Justice",
	"sell":115e3,
	"ability":{
		"atk":11200,
		"matk":9500,
		"diz":3
	},
	"flavourtext":"Justice now comes in two. Twice the justice, twice the power. Mete it upon your foes for... Uh...great justice!",
	"forginglevel":99,
	"materials":["Rune Sphere Shard","Firewyrm Scale","Dragon Fin","Fire Dragon Ash","Water Dragon Ash"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Twin Leeks",
	"sell":3939,
	"buy":30939,
	"ability":{
		"atk":309,
		"def":39,
		"matk":39,
		"mdef":39,
		"str":39,
		"vit":39,
		"int":39,
		"diz":25,
		"critP":15
	},
	"flavourtext":"Leeks. Yes, leeks. Wielding them makes you feel like singing polka.",
	"forginglevel":39,
	"materials":["Leek","Leek"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Acutorimass",
	"sell":800,
	"ability":{
		"atk":132,
		"matk":35,
		"diz":3
	},
	"flavourtext":"Cooking ladles reinforced as weapons. For some reason there are two.",
	"forginglevel":23,
	"materials":["Silver","Silver","Iron","Iron"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Gorgeous Lx",
	"sell":6200,
	"buy":5e4,
	"ability":{
		"atk":232,
		"vit":5,
		"int":-5,
		"diz":3
	},
	"flavourtext":"Gorgeous dual blades. Not only one, but two of them. They're gorgeous, and you can be too, by wielding them.",
	"forginglevel":28,
	"materials":["Gorgeous Sword","Gorgeous Sword"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Earnest Edge",
	"sell":5e4,
	"ability":{
		"atk":9600,
		"diz":6,
		"critP":8
	},
	"flavourtext":"In the hands of an expert, these long blades can win a fight without taking a hit.",
	"forginglevel":90,
	"materials":["Dragonic Stone","Earthwyrm Scale","Earthwyrm Scale","Glitta Augite","Glitta Augite"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Priest Saber",
	"sell":9e3,
	"ability":{
		"atk":3580,
		"def":250,
		"matk":2500,
		"mdef":88,
		"diz":3
	},
	"flavourtext":"Dual blades used by priests for protection. They're quite powerful, and guaranteed to keep anyone safely preaching.",
	"forginglevel":72,
	"materials":["Dangerous Scissors","MTGU Plate","MTGU Plate","Light Crystal","Light Crystal"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Double Scratch",
	"sell":200,
	"ability":{
		"atk":69,
		"matk":20,
		"diz":3
	},
	"flavourtext":"Dual blades used to soothe itchy backs<br> With [sic] two at your disposal, your whole back is covered!",
	"forginglevel":12,
	"materials":["Back Scratcher","Back Scratcher"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Thief Knife",
	"sell":780,
	"buy":23900,
	"ability":{
		"atk":154,
		"diz":3
	},
	"flavourtext":"Dual blades often used by pirates and thieves. Holding them somehow makes you feel more inherently aggressive.",
	"forginglevel":23,
	"materials":["Silver","Silver"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Emerald Edge",
	"sell":18e3,
	"ability":{
		"atr":["Wind"],
		"atk":6100,
		"matk":1800,
		"diz":3
	},
	"flavourtext":"Dual blades reinforced countless times. The increase to their magic power gives them a green tint.",
	"forginglevel":79,
	"materials":["Dragonic Stone","Green Core","Green Core"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Iron Edge",
	"sell":440,
	"buy":16700,
	"ability":{
		"atk":132,
		"diz":3
	},
	"flavourtext":"Reinforced dual blades. Heavy but well-balanced, making them easy to wield.",
	"forginglevel":21,
	"materials":["Iron","Iron","Silver"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Rune Edge",
	"sell":44e3,
	"ability":{
		"atr":["Light"],
		"atk":7400,
		"matk":3e3,
		"diz":3
	},
	"flavourtext":"Dual blade imbued with runic power. Those lucky enough to see them in action may have their dreams come true.",
	"forginglevel":87,
	"materials":["Dragonic Stone","Rune Crystal","Rune Crystal"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Chaos Edge",
	"sell":5400,
	"buy":186550,
	"ability":{
		"atr":["Dark"],
		"atk":628,
		"matk":15,
		"diz":3,
		"paratkP":15
	},
	"flavourtext":"Dual blades imbued with magical power. Has a paralyzing effect.",
	"forginglevel":40,
	"materials":["Platinum","Platinum","Quality Propeller","Quality Propeller","Holy Spore"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Orcus Sword",
	"sell":7100,
	"ability":{
		"atk":1920,
		"diz":3
	},
	"flavourtext":"These long blades allow for a number of attacks to be made from a distance.",
	"forginglevel":57,
	"materials":["Turnip's Miracle","Earth Dragon Ash","Earth Dragon Ash","Glitta Augite","Glitta Augite"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Broken Wall",
	"sell":6400,
	"buy":999999,
	"ability":{
		"atr":["Earth"],
		"atk":888,
		"matk":50,
		"diz":3
	},
	"flavourtext":"Dual blade imbued with earth power. So hard that they can smash rocks to pieces.",
	"forginglevel":48,
	"materials":["Left Rock Shard","Right Rock Shard","Earth Crystal"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Desert Wind",
	"sell":4e3,
	"buy":419800,
	"ability":{
		"atr":["Earth","Wind"],
		"atk":710,
		"matk":45,
		"diz":3
	},
	"flavourtext":"Dual blade designs inspired by desert winds. Popular for their beauty and strength.",
	"forginglevel":44,
	"materials":["Malm Claw","Wind Crystal","Earth Crystal","MTGU Plate"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Heart Fire",
	"sell":5500,
	"ability":{
		"atr":["Fire"],
		"atk":1380,
		"matk":180,
		"diz":3
	},
	"flavourtext":"Dual blades as hot as the sun. Their fire is said to turn everything to ash.",
	"forginglevel":54,
	"materials":["Fire Dragon Ash","Fire Dragon Ash","Yellow Feather","Fire Crystal"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Dragoon Claw",
	"sell":22e3,
	"ability":{
		"atk":5220,
		"diz":3
	},
	"flavourtext":"Dual blades in the shape of three dragon heads. The three on the left blade stop the other three from fighting.",
	"forginglevel":76,
	"materials":["Dragon Fang","Blue Scale","Glitter Scale","Grimoire Scale","Small Crystal"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Force Divide",
	"sell":12200,
	"ability":{
		"atr":["Fire","Water"],
		"atk":1066,
		"matk":300,
		"diz":3
	},
	"flavourtext":"Dual blade imbued with both fire and water energies. The temperature difference increases the damage dealt.",
	"forginglevel":51,
	"materials":["Orichalcum","Fire Crystal","Water Crystal","Red Core","Blue Core"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Dark Invitation",
	"sell":11200,
	"ability":{
		"atr":["Dark"],
		"atk":3800,
		"matk":500,
		"diz":3,
		"drainP":5
	},
	"flavourtext":"Magical soul-eating swords. They can end the lives of their targets in a single instant.",
	"forginglevel":68,
	"materials":["Dangerous Scissors","Blue Lion Fur","Red Lion Fur","Legendary Scale","Dark Crystal"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Deep Blizzard",
	"sell":8e3,
	"ability":{
		"atr":["Water"],
		"atk":2380,
		"matk":400,
		"diz":3
	},
	"flavourtext":"Dual blades so cold that all water around them freezes on contact. As such, its blades tend to change shape a lot.",
	"forginglevel":63,
	"materials":["Icy Nose","Icy Nose","Water Crystal","Water Crystal"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Efreet",
	"sell":9800,
	"ability":{
		"atr":["Fire"],
		"atk":4400,
		"matk":1500,
		"diz":3
	},
	"flavourtext":"High-heat dual blades that generate heat waves. Legend says they once caused an entire sea to evaporate.",
	"forginglevel":74,
	"materials":["Red Core","Crimson Scale","Golem Spirit Stone","Fire Dragon Ash","Fire Dragon Ash"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Platinum Edge",
	"sell":4200,
	"buy":104400,
	"ability":{
		"atk":436,
		"diz":3
	},
	"flavourtext":"Dual blades made of pure platinum. Very sharp and durable.",
	"forginglevel":37,
	"materials":["Platinum","Platinum","Dragon Fang","Dragon Fang"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Rampage",
	"sell":1700,
	"buy":91400,
	"ability":{
		"atk":372,
		"diz":3,
		"critP":5
	},
	"flavourtext":'Called "Rampage" due to their fiery power and the violence they instill in their bearer.',
	"forginglevel":33,
	"materials":["Diamond","Diamond","Gold Wolf Fang"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Twin Blade",
	"sell":1650,
	"buy":88e3,
	"ability":{
		"atk":324,
		"diz":3,
		"psnatkP":15
	},
	"flavourtext":"Dual blades that can make you as strong as an ogre. The long blades help extend your reach. Also has a poisoning effect.",
	"forginglevel":32,
	"materials":["Gold","Gold","Rigid Horn","Rigid Horn","Paralysis Poison"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Salamander",
	"sell":2e3,
	"buy":96700,
	"ability":{
		"atr":["Fire"],
		"atk":400,
		"matk":20,
		"diz":3
	},
	"flavourtext":"Dual blades set ablaze. Be careful you don't get burned, 'cause these swords are hot, hot, hot!",
	"forginglevel":35,
	"materials":["Diamond","Diamond","Fire Crystal","Cheap Propeller"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Sonic Dagger",
	"sell":4800,
	"buy":145700,
	"ability":{
		"atr":["Wind"],
		"atk":505,
		"matk":30,
		"diz":3
	},
	"flavourtext":"Slim wind-elemental dual blades that move at sonic speed. You can hear the air itself being cut in two.",
	"forginglevel":39,
	"materials":["Platinum","Platinum","Emerald","Emerald","Thunderbird Feather"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Steel Katana",
	"sell":1300,
	"buy":71040,
	"ability":{
		"atk":276,
		"diz":3
	},
	"flavourtext":"Solid swords reinforced with high heat. So sharp that they can cut steel.",
	"forginglevel":30,
	"materials":["Gold","Gold","Black Bird Feather"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Frost Edge",
	"sell":438,
	"buy":9990,
	"ability":{
		"atr":["Water"],
		"atk":96,
		"matk":3,
		"diz":3
	},
	"flavourtext":"Two swords emanating cool air. Not for people who are overly sensitive to the cold.",
	"forginglevel":13,
	"materials":["Aquamarine","Aquamarine","Liquids"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Wind Edge",
	"sell":1e3,
	"buy":43800,
	"ability":{
		"atr":["Wind"],
		"atk":214,
		"matk":5,
		"diz":3
	},
	"flavourtext":"Two roaring swords that create winds capable of slicing through enemies.",
	"forginglevel":25,
	"materials":["Emerald","Emerald","Palm Claw"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Steel Edge",
	"sell":167,
	"buy":6500,
	"ability":{
		"atk":58,
		"diz":3
	},
	"flavourtext":"Weapon made with sharpened iron. Heavy, and requires considerable skill to wield.",
	"forginglevel":9,
	"materials":["Iron","Iron","Bronze"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Short Dagger",
	"sell":45,
	"buy":1310,
	"ability":{
		"atk":28,
		"diz":3
	},
	"flavourtext":"Hold one in each hand to overwhelm your foes. If you do this, though, you can't bear a shield.",
	"forginglevel":5,
	"materials":["Minerals","Minerals"],
	"category":"Dual Blade",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Syringe",
	"sell":444,
	"ability":{
		"atr":["Water"],
		"atk":40,
		"matk":1,
		"diz":30,
		"critP":30,
		"knockP":50,
		"stunP":150
	},
	"flavourtext":"A staff that is a fusion of treatment and injury made by a mad doctor. Not recommended for hospitals.",
	"forginglevel":29,
	"materials":["Silver","Furs","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Elvish Harp",
	"sell":45,
	"ability":{
		"atr":["Love"],
		"matk":32,
		"diz":30
	},
	"flavourtext":"A beautiful and well-made harp. Created by famous Elvish craftsmen. You can play, sing, and hit enemies with it.",
	"forginglevel":24,
	"materials":["Strings","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Sweet Potato Staff",
	"sell":300,
	"ability":{
		"atr":["Love"],
		"matk":10,
		"diz":15
	},
	"flavourtext":"One autumn day, someone poked a roasted sweet potato with a broom. That's how this staff was created.",
	"forginglevel":10,
	"materials":["Sweet Potato","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Golden Turnip Staff",
	"sell":24e3,
	"ability":{
		"atr":["Love"],
		"matk":120,
		"diz":15
	},
	"flavourtext":"A staff in the shape of a Golden Turnip. When you drop it in the fountain, just be honest and say you dropped a gold staff.",
	"forginglevel":80,
	"materials":["Golden Turnip","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Algernon",
	"sell":28e3,
	"ability":{
		"atr":["Earth"],
		"matk":10800,
		"diz":15
	},
	"flavourtext":"A staff of flowers given to someone. For some reason, handling it makes you feel extra sharp.",
	"forginglevel":91,
	"materials":["Moving Branch","Ambrosia's Thorns","Wind Dragon Tooth","Charm Blue","Lamp Grass"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Hell Curse",
	"sell":5e4,
	"ability":{
		"atr":["Dark"],
		"matk":8800,
		"diz":15
	},
	"flavourtext":"A staff that is believed to be created in a hellish pot. By the way, the udon cooked in that pot tastes amazing.",
	"forginglevel":87,
	"materials":["Moving Branch","Dragon Fin","Cursed Doll","Crystal Skull","Small Crystal"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Sorcerer's Wand",
	"sell":98e3,
	"ability":{
		"atr":["Light"],
		"matk":12960,
		"diz":15
	},
	"flavourtext":"An almighty staff. But a true sorcerer knows he actually knows nothing.",
	"forginglevel":99,
	"materials":["Rune Sphere Shard","Dragon Fin","Rune Crystal","Small Crystal","Moving Branch"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Love-Love Rod",
	"sell":1300,
	"buy":5200,
	"ability":{
		"atr":["Love"],
		"matk":35,
		"diz":15
	},
	"flavourtext":"A staff of love. Among wizard couples, it's secretly popular to equip it together.",
	"forginglevel":15,
	"materials":["Friendly Rod","Love Crystal","Love Crystal","Love Crystal"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Friendly Rod",
	"sell":300,
	"buy":4800,
	"ability":{
		"atr":["Love"],
		"matk":18,
		"diz":15
	},
	"flavourtext":"A staff of friendship. <q>We should be good friends</q> means she doesn't want to date you.",
	"forginglevel":13,
	"materials":["Love Crystal","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Diamond Rod",
	"sell":800,
	"buy":84800,
	"ability":{
		"atr":["Dark"],
		"matk":94,
		"diz":15
	},
	"flavourtext":"Although it's the king of jewels, the only thing people care about is its hardness. And it IS very hard.",
	"forginglevel":33,
	"materials":["Diamond","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Aquamarine Rod",
	"sell":190,
	"buy":2500,
	"ability":{
		"atr":["Water"],
		"matk":11,
		"diz":15
	},
	"flavourtext":"A staff decorated with an ocean blue stone.",
	"forginglevel":8,
	"materials":["Aquamarine","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Amethyst Rod",
	"sell":72,
	"buy":1880,
	"ability":{
		"atr":["Earth"],
		"matk":10,
		"diz":15
	},
	"flavourtext":"A staff decorated with purple amethysts. Many of the wizards who have this rod are attractive, mature people.",
	"forginglevel":6,
	"materials":["","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Sapphire Rod",
	"sell":650,
	"buy":35e3,
	"ability":{
		"atr":["Light"],
		"matk":60,
		"diz":15
	},
	"flavourtext":"A very cute rod. This is the best for those who care about the beauty of their hair.",
	"forginglevel":26,
	"materials":["Sapphire","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Emerald Rod",
	"sell":470,
	"buy":9e3,
	"ability":{
		"atr":["Wind"],
		"matk":42,
		"diz":15
	},
	"flavourtext":"Bright green is a symbol of calmness. This rod makes you look intelligent and cool.",
	"forginglevel":18,
	"materials":["Emerald","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Ruby Rod",
	"sell":550,
	"buy":22500,
	"ability":{
		"atr":["Fire"],
		"matk":56,
		"diz":15
	},
	"flavourtext":"A passionate staff that shines bright red. No one can stop the feelings gushing out from this weapon.",
	"forginglevel":23,
	"materials":["Ruby","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Storm Wand",
	"sell":12e3,
	"ability":{
		"atr":["Wind"],
		"matk":1920,
		"diz":15
	},
	"flavourtext":"A staff that is believed to be able to call storms. If it really does, it's gonna be a problem. Please don't try it.",
	"forginglevel":65,
	"materials":["Mealy Apple","Electro Crystal","Orichalcum","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Cyclone Rod",
	"sell":7800,
	"ability":{
		"atr":["Wind"],
		"matk":1460,
		"diz":15
	},
	"flavourtext":"A staff that has the power of wind. It produces high suction power which is used as a cleaning tool in another world.",
	"forginglevel":60,
	"materials":["Green Core","Grimoire Scale","Turnip's Miracle","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Shooting Star Staff",
	"sell":550,
	"buy":165e3,
	"ability":{
		"atr":["Light"],
		"matk":254,
		"diz":15
	},
	"flavourtext":"A staff inspired by speeding stars in the sky. Sadly, your speed will not become twice as fast.",
	"forginglevel":43,
	"materials":["Fairy Elixir","Golem Stone","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Gaia Rod",
	"sell":6200,
	"ability":{
		"atr":["Earth"],
		"matk":980,
		"diz":15
	},
	"flavourtext":"A staff that has the power of the earth. It gets power from the Forest of Beginnings secretly.",
	"forginglevel":56,
	"materials":["Yellow Core","Earth Dragon Ash","Yellow Feather","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Bubble Staff",
	"sell":10500,
	"ability":{
		"atr":["Water"],
		"matk":500,
		"diz":15
	},
	"flavourtext":"A staff that produces millions of bubbles. It must be popular among children. Don't be so mean. Lend it to them.",
	"forginglevel":53,
	"materials":["Blue Core","Water Dragon Ash","Orichalcum","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Crimson Staff",
	"sell":6500,
	"buy":999999,
	"ability":{
		"atr":["Fire"],
		"matk":380,
		"diz":15
	},
	"flavourtext":"A blood-colored staff. And no, it wasn't painted with real blood. It's just dye made from insects.",
	"forginglevel":50,
	"materials":["Red Core","Fire Dragon Ash","Devil Horn"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Hell Branch",
	"sell":1220,
	"buy":409100,
	"ability":{
		"atr":["Dark"],
		"matk":300,
		"diz":15
	},
	"flavourtext":"A staff made from a netherworld branch. There's rumors that the kid who invented this was scolded by his parents.",
	"forginglevel":49,
	"materials":["Skull","Warrior's Proof","Proof of Rank","Devil Horn"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Magic Shot",
	"sell":48e3,
	"ability":{
		"atr":["Love"],
		"atk":7980,
		"matk":7350,
		"mdef":50,
		"diz":30,
		"critP":50,
		"knockP":50,
		"stunP":150
	},
	"flavourtext":"A trumpet-shaped syringe. Makes mysterious sloshy sounds. Getting pierced with it would hurt a lot.",
	"forginglevel":85,
	"materials":["Earthwyrm Scale","Melody Bottle","Rune Crystal","Small Crystal","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Basket",
	"sell":80,
	"ability":{
		"atr":["Love"],
		"matk":5,
		"vit":20,
		"critP":25
	},
	"flavourtext":"A basket that fits more than you'd think. Be careful not to leave things inside when fighting or they might spill!",
	"forginglevel":4,
	"materials":["Strings","Strings","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Magic Broom",
	"sell":27e3,
	"ability":{
		"atr":["Wind"],
		"matk":5500,
		"diz":15
	},
	"flavourtext":"A staff that long ago belonged to a witch. You can use it to fly around in classic witchy style.",
	"forginglevel":82,
	"materials":["Ancient Orc Cloth","Moving Branch","Rune Crystal","Big Crystal","Strings"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Mage's Staff+",
	"sell":11500,
	"ability":{
		"atr":["Love"],
		"matk":4400,
		"vit":60,
		"diz":15
	},
	"flavourtext":"A mage's staff strengthened with magical power. Not only more powerful, but easier to use as well.",
	"forginglevel":76,
	"materials":["Dragonic Stone","Orichalcum","Love Scale","Love Crystal","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Rune Staff",
	"sell":24e3,
	"ability":{
		"atr":["Light"],
		"matk":3140,
		"diz":15
	},
	"flavourtext":"A staff used by great wizards. Its magical power can be boosted by writing runes in the air.",
	"forginglevel":70,
	"materials":["Rune Crystal","Rune Crystal","Crimson Scale","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Mage's Staff",
	"sell":1850,
	"buy":12e4,
	"ability":{
		"atr":["Earth"],
		"matk":162,
		"diz":15
	},
	"flavourtext":"A staff that can be used as a walking stick. Popular among older wizards.",
	"forginglevel":40,
	"materials":["Platinum","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Wizard's Staff",
	"sell":200,
	"buy":9e4,
	"ability":{
		"atr":["Light"],
		"matk":105,
		"diz":15
	},
	"flavourtext":"Proof that the bearer is a full-fledged wizard. You can feel your intelligence grow just by holding it.",
	"forginglevel":35,
	"materials":["Magic","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Earth Staff",
	"sell":310,
	"buy":4e4,
	"ability":{
		"atr":["Earth"],
		"matk":65,
		"diz":15
	},
	"flavourtext":"A staff imbued with the magic power of earth. Strong enough to shake the ground.",
	"forginglevel":28,
	"materials":["Earth Crystal","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Lightning Wand",
	"sell":330,
	"buy":65500,
	"ability":{
		"atr":["Wind"],
		"matk":72,
		"diz":15
	},
	"flavourtext":"A staff imbued with the magic power of wind. Said to bring thunder and lightning.",
	"forginglevel":30,
	"materials":["Wind Crystal","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Ice Staff",
	"sell":380,
	"buy":7e4,
	"ability":{
		"atr":["Water"],
		"matk":80,
		"diz":15
	},
	"flavourtext":"A staff imbued with the magic power of water. The head is very cold and seems to emanate a faint breeze.",
	"forginglevel":31,
	"materials":["Water Crystal","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Flare Staff",
	"sell":250,
	"buy":18e3,
	"ability":{
		"atr":["Fire"],
		"matk":50,
		"diz":15
	},
	"flavourtext":"A staff imbued with the magic power of fire. The head is very hot and tends to spark a lot. Hey, that rhymes!",
	"forginglevel":22,
	"materials":["Fire Crystal","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Silver Staff",
	"sell":390,
	"buy":13e3,
	"ability":{
		"atr":["Dark"],
		"matk":47,
		"diz":15
	},
	"flavourtext":"A staff made with sacred silver gems. Improves concentration, making it ideal for students.",
	"forginglevel":21,
	"materials":["Silver","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Staff",
	"sell":80,
	"buy":6280,
	"ability":{
		"atr":["Earth"],
		"matk":26,
		"diz":15
	},
	"flavourtext":"A simple, magical staff. Try it out and see what you can do with it!",
	"forginglevel":16,
	"materials":["Magic Crystal","Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Rod",
	"sell":12,
	"buy":1300,
	"ability":{
		"atr":["Fire"],
		"matk":8,
		"diz":15
	},
	"flavourtext":"A staff with magical power. Designed for sorcery, so it reduces RP spent when using magic.",
	"forginglevel":2,
	"materials":["Sticks and Stems"],
	"category":"Staff",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Devil Finger",
	"sell":13333,
	"ability":{
		"atk":6e3,
		"matk":2e3
		"diz":15,
		"critP":5,
		"stunP":10,
		"drainP":10
	},
	"flavourtext":"A weapon that leaves scars said to resemble scratches from the devil's nails. Has the power to absorb life.",
	"forginglevel":73,
	"materials":["Love Scale","Legendary Scale","Water Dragon Ash","Fire Dragon Ash","Earth Dragon Ash"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"",
	"sell":,
	"buy":,
	"ability":{
		"atk":,
		"diz":,
		"critP":
	},
	"flavourtext":".",
	"forginglevel":,
	"materials":["",""],
	"category":"Axe",
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
