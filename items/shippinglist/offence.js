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
		"matk":2e3,
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
	"name":"Basilisk Fang",
	"sell":770,
	"buy":71500,
	"ability":{
		"atk":360,
		"diz":2,
		"critP":15,
		"paratkP":30
	},
	"flavourtext":"A weapon that can cut through anything as if it were cloth. Has a paralyzing effect.",
	"forginglevel":30,
	"materials":["Gold","Paralysis Poison","Claws and Fangs","Claws and Fangs"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Battle Scythe",
	"sell":140,
	"buy":6590,
	"ability":{
		"atk":70,
		"diz":2,
		"critP":15
	},
	"flavourtext":"An axe with an extremely sharp blade. Much bigger and sharper than a farming sickle.",
	"forginglevel":13,
	"materials":["Bronze","Claws and Fangs"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Lollipop",
	"sell":550,
	"buy":5200,
	"ability":{
		"atk":128,
		"matk":30,
		"vit":50,
		"diz":40,
		"critP":15
	},
	"flavourtext":"A sweet candy on a stick that's so hard, it just might work as a weapon. Raises chance of knockouts and cavities.",
	"forginglevel":28,
	"materials":["Butter","Apple"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Axe",
	"sell":64,
	"buy":600,
	"ability":{
		"atk":42,
		"diz":2,
		"critP":15
	},
	"flavourtext":"Originally a farming axe, it's excited to join you in battle. Its name is Meryl. And it likes you... for now.",
	"forginglevel":9,
	"materials":["Cheap Axe","Minerals"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Crescent Axe+",
	"sell":4800,
	"buy":64e4,
	"ability":{
		"atk":1e3,
		"diz":2,
		"critP":15
	},
	"flavourtext":"A crescent axe strengthened with magical power. A true masterpiece designed to be easy to wield.",
	"forginglevel":47,
	"materials":["Crescent Axe","Warrior's Proof","Proof of Rank"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Pole Axe+",
	"sell":650,
	"buy":18900,
	"ability":{
		"atk":163,
		"diz":2,
		"critP":10
	},
	"flavourtext":"A pole axe strengthened with magical power. Easier to hold and has greater balance.",
	"forginglevel":20,
	"materials":["Pole Axe","Silver"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Saint Axe",
	"sell":99800,
	"ability":{
		"atr":["Light"],
		"atk":13500,
		"matk":8500,
		"diz":2,
		"critP":10
	},
	"flavourtext":"A holy axe with sacred powers. Originally forged for use in rituals, not battle, making it a bit unwieldly.",
	"forginglevel":98,
	"materials":["Rune Sphere Shard","Light Crystal","White Crystal","Small Crystal","Big Crystal"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Double Edge",
	"sell":7500,
	"ability":{
		"atk":2980,
		"diz":2,
		"critP":10
	},
	"flavourtext":"A well-balanced axe with double blades. Highly regarded for its strength and ease of use.",
	"forginglevel":65,
	"materials":["Big Giant's Nail","Queen's Jaw","Red Lion Fur","Blue Lion Fur"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Rock Axe",
	"sell":1450,
	"buy":80200,
	"ability":{
		"atr":["Earth"],
		"atk":412,
		"matk":20,
		"diz":2,
		"critP":10
	},
	"flavourtext":"Has one of the hardest blades of any axe. As a result, it's also one of the heaviest axes around.",
	"forginglevel":32,
	"materials":["Gold","Silver","Giant's Gloves","Earth Crystal"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Tomahawk",
	"sell":1020,
	"buy":49700,
	"ability":{
		"atr":["Wind"],
		"atk":292,
		"matk":8,
		"diz":2,
		"critP":10
	},
	"flavourtext":"An axe with a single blade. The tassel on its edge is always blowing in the wind.",
	"forginglevel":28,
	"materials":["Silver","Emerald","Silk Cloth","Claws and Fangs"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Frost Axe",
	"sell":4600,
	"buy":198200,
	"ability":{
		"atr":["Water"],
		"atk":736,
		"matk":50,
		"diz":2,
		"critP":10
	},
	"flavourtext":"An axe with an icy cold blade. Freezes while it cuts, ensuring less pain for more humane murdering.",
	"forginglevel":42,
	"materials":["Platinum","Dragon Fang","Big Crystal","Water Crystal","Aquamarine"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Heat Axe",
	"sell":7500,
	"ability":{
		"atr":["Fire"],
		"atk":1420,
		"matk":150,
		"diz":2,
		"critP":10
	},
	"flavourtext":"An axe with burning blades. Nicknamed 'Phoenix Feather,' it serves as a symbol of regeneration.",
	"forginglevel":53,
	"materials":["Orichalcum","Fire Crystal","Ruby","Fire Dragon Ash"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Executioner",
	"sell":38e3,
	"ability":{
		"atr":["Dark"],
		"atk":8800,
		"matk":1500,
		"diz":2,
		"critP":10
	},
	"flavourtext":"An axe with a sketchy past. Was imbued with dark power while trying to raise its attack.",
	"forginglevel":81,
	"materials":["Dragonic Stone","Golem Spirit Stone","Light Ore","Chimera Tail","Dark Crystal"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Crescent Axe",
	"sell":3400,
	"buy":449e3,
	"ability":{
		"atk":900,
		"diz":2,
		"critP":10
	},
	"flavourtext":"An axe with a sleek edge. Its center is unbalanced, however, so it's hard to hold it straight.",
	"forginglevel":46,
	"materials":["Platinum","Chimera's Claw","Devil Horn"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Demon Axe",
	"sell":1100,
	"buy":96666,
	"ability":{
		"atr":["Dark"],
		"atk":488,
		"matk":30,
		"diz":2,
		"critP":12
	},
	"flavourtext":"An axe possessed by an evil spirit ever since it cut down a cursed tree.",
	"forginglevel":35,
	"materials":["Diamond","Scorpion Pincer","Devil Blood"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Great Axe",
	"sell":610,
	"buy":30900,
	"ability":{
		"atk":232,
		"diz":2,
		"critP":10
	},
	"flavourtext":"An axe with improved balance. Often thought of as a go-to axe when you're just not sure what weapon to use.",
	"forginglevel":23,
	"materials":["Gold","Claws and Fangs"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Alldale",
	"sell":22e3,
	"ability":{
		"atk":4600,
		"diz":3,
		"critP":8
	},
	"flavourtext":"An axe with two golden blades. Called angel wings, they are both strong and beautiful.",
	"forginglevel":69,
	"materials":["Orichalcum","Orichalcum","Dangerous Scissors","White Stone","Yellow Core"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Pole Axe",
	"sell":220,
	"buy":11800,
	"ability":{
		"atk":116,
		"diz":2,
		"critP":7
	},
	"flavourtext":"An axe with a crescent moon-shaped blade. Has a pointy end as well. Choppy-choppy OR stabby-stabby. You decide!",
	"forginglevel":16,
	"materials":["Wolf Fang","Bronze","Sticks and Stems"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Battle Axe",
	"sell":42,
	"buy":1380,
	"ability":{
		"atk":38,
		"diz":2,
		"critP":5
	},
	"flavourtext":"An axe with a great deal of force behind it. Must be used carefully. Has a high chance of landing critical hits.",
	"forginglevel":6,
	"materials":["Minerals","Claws and Fangs"],
	"category":"Axe",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Splash Star",
	"sell":12e4,
	"ability":{
		"atr":["Light"],
		"atk":14e3,
		"matk":7200,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"Hammer made by using magical power. As its name implies, it looks like splashing stars.",
	"forginglevel":99,
	"materials":["Rune Sphere Shard","Wind Dragon Tooth","Dragon Fin","Earthwyrm Scale","Firewyrm Scale"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Iron Bat",
	"sell":530,
	"buy":17200,
	"ability":{
		"atk":140,
		"diz":35,
		"knockP":50,
		"stunP":20
	},
	"flavourtext":"An iron bat used in baseball. Not designed as weaponry, but beggars can't be choosers... Maybe you'll hit a home run!",
	"forginglevel":18,
	"materials":["Bat","Silver"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Bat",
	"sell":120,
	"buy":4620,
	"ability":{
		"atk":54,
		"diz":35,
		"knockP":50,
		"stunP":15
	},
	"flavourtext":"A wooden bat used in baseball. Only kids in striped shirts make a weapon like this their first choice.",
	"forginglevel":9,
	"materials":["Bronze"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Kongo",
	"sell":25800,
	"ability":{
		"atk":7122,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"Made by fusing together chunks of metal. Long-ranged, but hard to handle.",
	"forginglevel":77,
	"materials":["Strong Stone","Dragonic Stone","Small Crystal"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Strong Stone",
	"sell":990,
	"buy":92080,
	"ability":{
		"atk":430,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"Large chunks of metal are connected to its head. High in attack due to its heavy weight.",
	"forginglevel":33,
	"materials":["Diamond","Stones","Scales","Strings"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Fatal Crush",
	"sell":5e4,
	"ability":{
		"atk":11500,
		"diz":40,
		"critP":7,
		"stunP":10
	},
	"flavourtext":"A hammer way beyond standard size. Long-ranged, and has a high chance of landing critical hits.",
	"forginglevel":90,
	"materials":["Wind Dragon Tooth","Throne of the Empire","Dragonic Stone","Dragonic Stone","Dragonic Stone"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Toy Hammer",
	"sell":24,
	"buy":230,
	"ability":{
		"atr":["Light"],
		"atk":10,
		"matk":25,
		"diz":120,
		"stunP":10
	},
	"flavourtext":"Anyone hit by this hammer must pretend that it really hurts. It's the law! Raises chance of knockouts.",
	"forginglevel":8,
	"materials":["Sticks and Stems","Cloths and Skins"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Hammer",
	"sell":38,
	"buy":580,
	"ability":{
		"atk":40,
		"diz":34,
		"critP":8,
		"stunP":10
	},
	"flavourtext":"Farming hammer given a quickie reforge for battle-readiness. Tougher than it looks.",
	"forginglevel":7,
	"materials":["Cheap Hammer","Minerals"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Gigant Hammer+",
	"sell":22e3,
	"ability":{
		"atk":5555,
		"matk":10,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"Gigant Hammer imbued with magical power. Originally owned by high-ranking giants. Has engravings of their names.",
	"forginglevel":71,
	"materials":["Gigant Hammer","Golem Spirit Stone","Orichalcum","Small Crystal"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"War Hammer+",
	"sell":245,
	"buy":9020,
	"ability":{
		"atk":98,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"War Hammer imbued with magical power. Causes less strain on the back.",
	"forginglevel":15,
	"materials":["War Hammer","Liquids"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Crystal Hammer",
	"sell":11e3,
	"ability":{
		"atr":["Water"],
		"atk":1650,
		"matk":300,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"A hammer imbued with water power. Its hard head and spikes cause major damage.",
	"forginglevel":57,
	"materials":["Orichalcum","Crystal Skull","Big Crystal","Shards"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Bone Hammer",
	"sell":820,
	"buy":78800,
	"ability":{
		"atr":["Dark"],
		"atk":400,
		"matk":20,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"A light but strong hammer made from bones.",
	"forginglevel":31,
	"materials":["Gold","Giant's Gloves","Shells and Bones","Shells and Bones"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Graviton Hammer",
	"sell":3800,
	"buy":84e4,
	"ability":{
		"atr":["Earth"],
		"atk":1150,
		"matk":60,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"A hammer imbued with earth power. Designed not to hurt your hands during attack.",
	"forginglevel":49,
	"materials":["Grimoire Scale","Earth Crystal","Minerals"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Sky Hammer",
	"sell":2900,
	"buy":156100,
	"ability":{
		"atr":["Wind"],
		"atk":644,
		"matk":50,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"A hammer with wings. Very light and easy to use.",
	"forginglevel":40,
	"materials":["Platinum","Wind Crystal","Emerald","Thunderbird Feather"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Ice Hammer",
	"sell":780,
	"buy":36450,
	"ability":{
		"atr":["Water"],
		"atk":267,
		"matk":10,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"A hammer made of ice. Good for smashing things on a hot day. Refreshing!",
	"forginglevel":26,
	"materials":["Gold","Aquamarine","Shards"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Flame Hammer",
	"sell":1550,
	"buy":1e5,
	"ability":{
		"atr":["Fire"],
		"atk":472,
		"matk":35,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"A hammer with fire power on one side. The flame helps enhance its damage output.",
	"forginglevel":36,
	"materials":["Diamond","Fire Crystal","Ruby","Shards"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Spiked Hammer",
	"sell":6100,
	"buy":999999,
	"ability":{
		"atk":1250,
		"diz":34,
		"critP":8,
		"stunP":10
	},
	"flavourtext":"A hammer outfitted with spikes. Can easily score critical hits, hammer or no.",
	"forginglevel":50,
	"materials":["Left Rock Shard","Right Rock Shard","Claws and Fangs","Sticks and Stems"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Mjolnir",
	"sell":68e3,
	"ability":{
		"atr":["Earth"],
		"atk":1e4,
		"matk":3e3,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"A hammer imbued with earth power. It's said to cause earthquakes if three of them hit the ground at once.",
	"forginglevel":86,
	"materials":["Earthwyrm Scale","Dragonic Stone","Small Crystal","Rune Crystal"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Gigant Hammer",
	"sell":2800,
	"buy":134980,
	"ability":{
		"atk":580,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"A large hammer. Be careful not to hit yourself!",
	"forginglevel":38,
	"materials":["Platinum","Gold","Silver","Shards"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Schnabel",
	"sell":11800,
	"ability":{
		"atk":2200,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"A hammer designed to be small and light. Has good overall balance.",
	"forginglevel":60,
	"materials":["Orichalcum","Ammonite","Blue Core","Shards"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Great Hammer",
	"sell":400,
	"buy":22400,
	"ability":{
		"atk":198,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"A hammer designed to eliminate shock when used. Very nicely balanced.",
	"forginglevel":22,
	"materials":["Silver","Shards"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"War Hammer",
	"sell":135,
	"buy":6120,
	"ability":{
		"atk":61,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"A hammer much heavier than it looks. Be careful when swinging it -- it bites back!",
	"forginglevel":11,
	"materials":["Bronze","Shards"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Battle Hammer",
	"sell":42,
	"buy":340,
	"ability":{
		"atk":29,
		"diz":35,
		"stunP":10
	},
	"flavourtext":"A hammer well-suited to blowing foes away -- or at least knocking them out.",
	"forginglevel":3,
	"materials":["Minerals"],
	"category":"Hammer",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Fivestaff",
	"sell":1150,
	"buy":82800,
	"ability":{
		"atk":392,
		"def":20,
		"diz":8
	},
	"flavourtext":"A long-ranged lance that seems almost as if it were made of blades, from tip to handle. Can also be swung.",
	"forginglevel":34,
	"materials":["Diamond","Sticks and Stems","Scales","Scales"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Pine Club",
	"sell":2e3,
	"buy":29800,
	"ability":{
		"atr":["Earth"],
		"atk":320,
		"def":12,
		"matk":16,
		"diz":16
	},
	"flavourtext":"A lance that resembles a pineapple. Its surface stings. The creator of this lance must have been very...unique.",
	"forginglevel":40,
	"materials":["Pineapple","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Poison Queen",
	"sell":9980,
	"ability":{
		"atk":1420,
		"def":100,
		"matk":400,
		"diz":8,
		"psnatkP":20
	},
	"flavourtext":"A lance drenched in poisons from around the world. Handle with care, or you, too, may be poisoned.",
	"forginglevel":55,
	"materials":["Orichalcum","Orichalcum","Poison King","Holy Spore","Poison Powder"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Legion",
	"sell":105e3,
	"ability":{
		"atk":12850,
		"def":500,
		"matk":9e3,
		"mdef":180,
		"diz":8
	},
	"flavourtext":"A lance with blades orbiting it. Foes can try to dodge, but these phantom blades ensure they won't make it very far.",
	"forginglevel":99,
	"materials":["Rune Sphere Shard","Firewyrm Scale","Dragon Fin","Light Ore","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Safety Lance",
	"sell":80,
	"buy":600,
	"ability":{
		"atk":67,
		"def":9,
		"mdef":25,
		"diz":8
	},
	"flavourtext":"A lance with its tip covered in cotton and cloth. Still hurts, though. We can stab if we want to!",
	"forginglevel":13,
	"materials":["Ghost Hood","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Magical Lance",
	"sell":2500,
	"buy":428888,
	"ability":{
		"atk":715,
		"matk":185,
		"mdef":65,
		"diz":8
	},
	"flavourtext":"A lance with magical power so strong that its entire form changes color rapidly.",
	"forginglevel":47,
	"materials":["Devil Horn","Puppetry Strings","Round Stone","Crystals"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Gae Bolg",
	"sell":42e3,
	"ability":{
		"atk":7480,
		"def":300,
		"matk":2e3,
		"diz":8
	},
	"flavourtext":"A fierce spear with a trident-like shape. Every stab hurts.",
	"forginglevel":81,
	"materials":["Dragonic Stone","Orichalcum","Grimoire Scale","Black Scale","Moving Branch"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Dragon's Fang",
	"sell":4e4,
	"ability":{
		"atk":9200,
		"def":400,
		"matk":2500,
		"mdef":120,
		"diz":8,
		"critP":10
	},
	"flavourtext":"A spear as sharp as a dragon fang. The blade vibrates faster as danger approaches.",
	"forginglevel":86,
	"materials":["Earthwyrm Scale","Big Crystal","Rune Crystal","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Pitchfork",
	"sell":200,
	"buy":1500,
	"ability":{
		"atk":96,
		"def":10,
		"diz":8
	},
	"flavourtext":"Origin of kitchen forks. Bit big for cake, though. And spaghetti? Fahgeddabouddit!",
	"forginglevel":14,
	"materials":["Wolf Fang","Fodder","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Trident",
	"sell":400,
	"buy":18800,
	"ability":{
		"atk":162,
		"def":7,
		"diz":8
	},
	"flavourtext":"A three-pronged spear. Some lose their memory in shock when stabbed with it.",
	"forginglevel":18,
	"materials":["Silver","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Corsesca+",
	"sell":1050,
	"buy":60400,
	"ability":{
		"atk":333,
		"def":18,
		"diz":8
	},
	"flavourtext":"Corsesca strengthened by magical power. At half its original weight, it's very easy to wield.",
	"forginglevel":29,
	"materials":["Corsesca","Black Bird Feather"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Lance+",
	"sell":160,
	"buy":4580,
	"ability":{
		"atk":52,
		"def":5,
		"diz":8
	},
	"flavourtext":"Lance strengthened by magical power. From tip to handle, it sparkles gorgeously in gold.",
	"forginglevel":12,
	"materials":["Lance","Bronze"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Gungnir",
	"sell":72e3,
	"ability":{
		"atr":["Wind"],
		"atk":1e4,
		"def":450,
		"matk":3e3,
		"mdef":150,
		"diz":8
	},
	"flavourtext":"A legendary spear that can blow away storms. Its wind speed is so fast, though, that the bearer is equally at risk.",
	"forginglevel":91,
	"materials":["Dragon Fin","Green Core","Earth Dragon Ash","Fire Dragon Ash","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Bjor",
	"sell":24e3,
	"ability":{
		"atr":["Dark"],
		"atk":5e3,
		"def":250,
		"matk":950,
		"diz":8,
		"psnatkP":15,
		"paratkP":15,
		"sickatkP":15
	},
	"flavourtext":"A spear drenched in all available poisons. Has various effects.",
	"forginglevel":74,
	"materials":["Melody Bottle","Holy Spore","Orichalcum","Small Crystal","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Belvarose",
	"sell":15e3,
	"ability":{
		"atk":6150,
		"def":270,
		"matk":1800,
		"diz":16
	},
	"flavourtext":"Spear with spikes at the end. Requires skill to use, but as you grow accustomed to it, you can easily land knockouts.",
	"forginglevel":76,
	"materials":["Dragonic Stone","Ambrosia's Thorns","Tablet of Truth","MTGU Plate","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Feather Lance",
	"sell":2900,
	"buy":124710,
	"ability":{
		"atr":["Wind"],
		"atk":532,
		"def":35,
		"matk":30,
		"diz":8
	},
	"flavourtext":"A spear imbued with the magic power of wind. Lift it up to the sky and it will pierce the heavens.",
	"forginglevel":38,
	"materials":["Platinum","Silver","Thick Stick","Wind Crystal","Feathers"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Brionac",
	"sell":7300,
	"ability":{
		"atr":["Light"],
		"atk":1100,
		"def":80,
		"diz":8
	},
	"flavourtext":"A spear so strong that it can penetrate anything. According to legend, it made a hole in the mountains with one stab!",
	"forginglevel":51,
	"materials":["Orichalcum","Light Crystal","Sapphire","Lightning Mane","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Overbreak",
	"sell":1e4,
	"ability":{
		"atk":4420,
		"def":200,
		"matk":950,
		"diz":8
	},
	"flavourtext":"A spear with a huge blade. Every swing makes the enemy flinch. Maybe swinging will be enough!",
	"forginglevel":69,
	"materials":["Blue Scale","Left Rock Shard","Right Rock Shard","Grimoire Scale","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Monk Staff",
	"sell":6500,
	"ability":{
		"atr":["Earth"],
		"atk":1950,
		"def":120,
		"matk":150,
		"diz":8
	},
	"flavourtext":"A nicely decorated stick with adjustable length.",
	"forginglevel":57,
	"materials":["Orichalcum","Turnip's Miracle","Glitta Augite","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Metus",
	"sell":8888,
	"ability":{
		"atr":["Dark"],
		"atk":2420,
		"def":150,
		"matk":700,
		"diz":8,
		"drainP":25
	},
	"flavourtext":"A spear shaped to dig holes. Those who are struck by it have little hope of survival, thanks to its hidden might.",
	"forginglevel":60,
	"materials":["Orichalcum","Queen's Jaw","Cursed Doll","Legendary Scale","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Iceberg",
	"sell":4400,
	"buy":155480,
	"ability":{
		"atr":["Water"],
		"atk":570,
		"def":45,
		"matk":30,
		"diz":8
	},
	"flavourtext":"A spear imbued with water power. Designed to work even underwater. Stab the fish, and you won't need a rod!",
	"forginglevel":41,
	"materials":["Platinum","Platinum","Thick Stick","Water Crystal","Aquamarine"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Heavy Lance",
	"sell":2400,
	"buy":96800,
	"ability":{
		"atk":496,
		"def":30,
		"diz":8
	},
	"flavourtext":"A lance designed with a focus on attack power only, to the detriment of everything else. Heavy and hard to wield.",
	"forginglevel":37,
	"materials":["Platinum","Gold","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Flare Lance",
	"sell":4900,
	"buy":999999,
	"ability":{
		"atr":["Fire"],
		"atk":820,
		"def":75,
		"matk":50,
		"diz":8
	},
	"flavourtext":"A spear that lets out high heat. The closer to the tip, the hotter it gets. Perhaps it can cure back pain.",
	"forginglevel":49,
	"materials":["Platinum","Devil Horn","Proof of Rank","Fire Crystal","Dragon Bones"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Silent Grave",
	"sell":9800,
	"ability":{
		"atk":3880,
		"def":180,
		"diz":8,
		"sealatkP":25
	},
	"flavourtext":"A spear with a removable knife-like blade at its tip. Has a sealing effect on enemies.",
	"forginglevel":65,
	"materials":["Orichalcum","Dangerous Scissors","Crystal Skull","Shards","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Corsesca",
	"sell":750,
	"buy":58800,
	"ability":{
		"atk":306,
		"def":10,
		"diz":8
	},
	"flavourtext":"A spear with a wide blade. Its shape was decided after many experiments trying to forge a high-accuracy blade.",
	"forginglevel":27,
	"materials":["Gold","Rigid Horn","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Poison Spear",
	"sell":900,
	"buy":75200,
	"ability":{
		"atk":380,
		"def":18,
		"diz":8,
		"psnatkP":25
	},
	"flavourtext":"A poisoned spear. Has a wide blade, making it easy to spread poison.",
	"forginglevel":30,
	"materials":["Diamond","Poison Powder","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Wood Staff",
	"sell":12,
	"buy":1220,
	"ability":{
		"atr":["Earth"],
		"atk":38,
		"def":2,
		"diz":8
	},
	"flavourtext":"A hard, wooden club. It might hurt more to hit with it than to stab with it.",
	"forginglevel":6,
	"materials":["Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Blood Lance",
	"sell":3500,
	"buy":186700,
	"ability":{
		"atr":["Dark"],
		"atk":615,
		"def":50,
		"matk":10,
		"diz":8
	},
	"flavourtext":"A cursed spear. Its two blades remind you of a warlock.",
	"forginglevel":43,
	"materials":["Platinum","Cursed Doll","Thick Stick","Magic Claw","Devil Blood"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Water Spear",
	"sell":585,
	"buy":24250,
	"ability":{
		"atr":["Water"],
		"atk":170,
		"def":8,
		"matk":3,
		"diz":8
	},
	"flavourtext":"A spear imbued with the magic power of water. It's always wet. Be careful not to let it slip out of your hands!",
	"forginglevel":21,
	"materials":["Silver","Aquamarine","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Halberd",
	"sell":600,
	"buy":35e3,
	"ability":{
		"atk":246,
		"def":8,
		"diz":8
	},
	"flavourtext":"A spear used for various purposes -- though most involve stabbing and cutting, as you might imagine.",
	"forginglevel":25,
	"materials":["Gold","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Needle Spear",
	"sell":225,
	"buy":9600,
	"ability":{
		"atk":108,
		"def":6,
		"diz":8
	},
	"flavourtext":"A spear with a long blade. Has many uses and a high rate of owner satisfaction. A+++ would wield again!",
	"forginglevel":15,
	"materials":["Bronze","Wolf Fang","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Lance",
	"sell":34,
	"buy":1700,
	"ability":{
		"atk":43,
		"def":4,
		"diz":8
	},
	"flavourtext":"Has a unique triangular shape. Said to have been used in a war fought by an ancient empire.",
	"forginglevel":9,
	"materials":["Minerals","Sticks and Stems"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Spear",
	"sell":23,
	"buy":200,
	"ability":{
		"atk":14,
		"def":1,
		"diz":8
	},
	"flavourtext":"A very simple spear, good for beginners. So simple that it's often used as a skewer for food.",
	"forginglevel":3,
	"materials":["Minerals"],
	"category":"Spear",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Orochi",
	"sell":4500,
	"ability":{
		"atk":2710,
		"diz":12
	},
	"flavourtext":"A sword separated into several parts, making it easy to wrap around foes. Capable of hitting far away enemies.",
	"forginglevel":63,
	"materials":["Queen's Jaw","Grimoire Scale","Scales","Scales","Strings"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Caliburn",
	"sell":15e4,
	"ability":{
		"atr":["Earth"],
		"atk":13600,
		"matk":5800,
		"diz":23
	},
	"flavourtext":"A legendary calorie-burning sword. Few believe it actually exists. But here it is!",
	"forginglevel":99,
	"materials":["Rune Sphere Shard","Wind Dragon Tooth","Dragon Fin","Earthwyrm Scale","Firewyrm Scale"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Daicone",
	"sell":450,
	"buy":4800,
	"ability":{
		"atr":["Earth"],
		"atk":78,
		"matk":20,
		"diz":12,
		"knockP":30,
		"stunP":10
	},
	"flavourtext":"A daikon radish so large and strong that it became a viable weapon. It dreamed big.",
	"forginglevel":28,
	"materials":["Radish"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Belzebuth",
	"sell":4450,
	"ability":{
		"atr":["Dark"],
		"atk":2040,
		"matk":500,
		"diz":12,
		"critP":10,
		"drainP":20
	},
	"flavourtext":"Short-ranged, but has magical power strong enough to steal an enemy's life. High chance of landing critical hits.",
	"forginglevel":58,
	"materials":["Ammonite","Devil Blood","Dark Crystal"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Braveheart",
	"sell":36020,
	"ability":{
		"atr":["Light"],
		"atk":9600,
		"matk":2750,
		"diz":12
	},
	"flavourtext":"A rare long sword with a glittering blade. Its bearer's courage gives it strength.",
	"forginglevel":89,
	"materials":["Dragonic Stone","Earthwyrm Scale","Love Crystal","Light Crystal","Sapphire"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Dekash",
	"sell":7200,
	"buy":26e3,
	"ability":{
		"atr":["Water"],
		"atk":256,
		"matk":50,
		"diz":30
	},
	"flavourtext":"Smells like fish, so it tends to attract cats.",
	"forginglevel":42,
	"materials":["Tuna"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Psycho",
	"sell":2469,
	"buy":999999,
	"ability":{
		"atr":["Dark"],
		"atk":980,
		"matk":30,
		"diz":12,
		"paratkP":30,
		"ftgatkP":30,
		"sickatkP":30
	},
	"flavourtext":"A uniquely-shaped long sword. Its three blades have assorted curses on them, inflicting numerous status ailments.",
	"forginglevel":50,
	"materials":["Devil Horn","Malm Claw","Dark Crystal","Rafflesia Petal"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Balmung",
	"sell":21200,
	"ability":{
		"atk":8080,
		"diz":12
	},
	"flavourtext":"A long sword with sleek lines. Though it's big, it's designed to be aerodynamic and easy to handle.",
	"forginglevel":84,
	"materials":["Dragonic Stone","Tablet of Truth","Golem Tablet","Claws and Fangs"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Katana",
	"sell":980,
	"buy":87600,
	"ability":{
		"atk":424,
		"diz":12,
		"faintatkP":5
	},
	"flavourtext":"A weapon from the Far East. Beautiful, strong and sharp. In rare cases, you may knock down foes with a single blow.",
	"forginglevel":35,
	"materials":["Diamond","Magic","Claws and Fangs"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Big Knife",
	"sell":800,
	"buy":78600,
	"ability":{
		"atk":402,
		"diz":12
	},
	"flavourtext":"A knife with a large blade. So large, in fact, that one cannot easily cut apples with it. Unless they're REALLY BIG.",
	"forginglevel":32,
	"materials":["Diamond","Claws and Fangs","Sticks and Stems"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Katzbalger",
	"sell":1100,
	"buy":50080,
	"ability":{
		"atk":333,
		"diz":12
	},
	"flavourtext":"A smartly-designed sword with an aerodynamic shape that makes it easy to swing.",
	"forginglevel":29,
	"materials":["Gold","Silver","Rigid Horn"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Flamberge+",
	"sell":7300,
	"buy":439500,
	"ability":{
		"atk":750,
		"diz":12
	},
	"flavourtext":"Flamberge strengthened with magic power. Its thin blade makes it easy to use.",
	"forginglevel":46,
	"materials":["Flamberge","Malm Claw"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Zweihaender+",
	"sell":160,
	"buy":4450,
	"ability":{
		"atk":61,
		"diz":24,
		"stunP":15
	},
	"flavourtext":"Zweihaender strengthened with special power. Hurts worse than a wedgie.",
	"forginglevel":11,
	"materials":["Zweihaender","Bronze"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Force Element",
	"sell":47200,
	"ability":{
		"atr":["Light"],
		"atk":1e4,
		"matk":5e3,
		"mdef":100,
		"diz":12
	},
	"flavourtext":"A lighted long sword. Contains strong elemental power, making it hard to use.",
	"forginglevel":91,
	"materials":["Firewyrm Scale","Green Core","Red Core","Yellow Core","Blue Core"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Moon Shadow",
	"sell":9500,
	"ability":{
		"atk":5380,
		"matk":1500,
		"diz":12,
		"faintatkP":25
	},
	"flavourtext":"A weapon from the Far East. Appears as naught but a shadow under cover of night. Can take down foes in a single blow.",
	"forginglevel":76,
	"materials":["Glitter Scale","Light Crystal","Earth Crystal","Red Lion Fur","Blue Lion Fur"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Snow Crown",
	"sell":3e3,
	"buy":130500,
	"ability":{
		"atr":["Water"],
		"atk":548,
		"matk":25,
		"diz":12
	},
	"flavourtext":"A long sword imbued with water power. When plunged into snow, not a single flake will melt.",
	"forginglevel":42,
	"materials":["Platinum","Gold","Water Crystal","Aquamarine"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Volcanon", // Sounds like the name of the elderly butler
	"sell":2400,
	"buy":72e4,
	"ability":{
		"atr":["Fire"],
		"atk":868,
		"matk":30,
		"diz":12
	},
	"flavourtext":"A sword imbued with fire. Beams out a strong light. So hot, it raises the room temperature by 10 degrees.",
	"forginglevel":48,
	"materials":["Devil Horn","Fire Crystal","Ruby","Chimera's Claw"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Sea Cutter",
	"sell":550,
	"buy":14600,
	"ability":{
		"atr":["Water"],
		"atk":184,
		"matk":3,
		"diz":12
	},
	"flavourtext":"A sword that can supposedly divide the sea. Listen closely and you'll hear the sound of ocean waves.",
	"forginglevel":21,
	"materials":["Silver","Aquamarine"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Punisher",
	"sell":5400,
	"ability":{
		"atk":4444,
		"diz":24,
		"stunP":30
	},
	"flavourtext":"A long sword with a wide blade. Hurts worse than an atomic wedgie.",
	"forginglevel":68,
	"materials":["Dangerous Scissors","Tablet of Truth","Minerals"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Bio Smasher",
	"sell":2700,
	"buy":105e3,
	"ability":{
		"atk":470,
		"diz":12,
		"psnatkP":60
	},
	"flavourtext":"A poisoned long sword with jagged edges. Designed to spread poison thoroughly.",
	"forginglevel":40,
	"materials":["Platinum","Paralysis Poison","Poison Powder","Pom-Pom Grass"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Earth Shade",
	"sell":1400,
	"buy":62050,
	"ability":{
		"atr":["Earth"],
		"atk":378,
		"matk":5,
		"diz":12
	},
	"flavourtext":"A sword blessed by mother nature. Has an interesting design that looks kind of like a fault line.",
	"forginglevel":30,
	"materials":["Gold","Silver","Black Bird Feather","Earth Crystal"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Shine Blade",
	"sell":8e3,
	"ability":{
		"atr":["Light"],
		"atk":1200,
		"matk":100,
		"diz":12
	},
	"flavourtext":"A sword with a high-heat blade and an ice-cold tip. Even evil hearts are soothed by its shiny glow.",
	"forginglevel":52,
	"materials":["Orichalcum","Platinum","Light Crystal","Sapphire"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Flamberge",
	"sell":5800,
	"buy":187900,
	"ability":{
		"atk":678,
		"diz":12
	},
	"flavourtext":"A sword with a uniquely shaped blade. So beautiful, it's often used in ceremonies.",
	"forginglevel":45,
	"materials":["Platinum","Platinum","Magic Claw","Thunderbird Feather","Big Bird's Comb"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Steel Slicer",
	"sell":12e3,
	"ability":{
		"atk":4890,
		"diz":12,
		"critP":10
	},
	"flavourtext":"Supposedly can cut through anything -- thus the name.",
	"forginglevel":73,
	"materials":["Orichalcum","Orichalcum","Golem Spirit Stone","MTGU Plate"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Poison Blade",
	"sell":1050,
	"buy":32300,
	"ability":{
		"atk":292,
		"diz":12,
		"psnatkP":25
	},
	"flavourtext":"A longsword with a poison-covered blade. So dangerous that even a small scratch can kill you.",
	"forginglevel":27,
	"materials":["Gold","Silver","Poison Powder"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Blue-Eyed Blade",
	"sell":14800,
	"ability":{
		"atk":7e3,
		"matk":1850,
		"diz":12,
		"critP":20
	},
	"flavourtext":"Makes its bearer's eyes shine blue, and grants the power to see an opponent's skill. Increases critical hit chance.",
	"forginglevel":79,
	"materials":["Dragonic Stone","Orichalcum","Blue Core","Claws and Fangs"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Grand Smasher",
	"sell":3480,
	"ability":{
		"atr":["Earth"],
		"atk":1560,
		"matk":300,
		"diz":12
	},
	"flavourtext":"A long sword with spiky edges. Imbued with earth power, its spikes are designed to look like mountains.",
	"forginglevel":55,
	"materials":["Yellow Feather","Earth Crystal","Ambrosia's Thorns","Earth Dragon Ash"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Heaven Asunder",
	"sell":58e3,
	"ability":{
		"atr":["Wind"],
		"atk":12e3,
		"matk":9e3,
		"diz":12,
		"critP":10,
		"faintatkP":50
	},
	"flavourtext":"A legendary sword with a sharp blade that can pierce clouds. High chance of knocking down foes in a single blow.",
	"forginglevel":92,
	"materials":["Rune Sphere Shard","Dragonic Stone","Water Dragon Ash","Fire Dragon Ash","Earth Dragon Ash"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Great Sword",
	"sell":200,
	"buy":9700,
	"ability":{
		"atk":120,
		"diz":12
	},
	"flavourtext":"A long sword designed to never dull or need sharpening. Balanced and easy to hold.",
	"forginglevel":16,
	"materials":["Bronze","Liquids"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Dancing Dicer",
	"sell":4400,
	"buy":157200,
	"ability":{
		"atk":600,
		"diz":12,
		"faintatkP":15
	},
	"flavourtext":"A weapon brought from the Far East. With its sharp edges, you can sometimes cut down foes in a single blow.",
	"forginglevel":43,
	"materials":["Platinum","Dragon Fang","Dragon Bones"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Cyclone Blade",
	"sell":1e3,
	"buy":24e3,
	"ability":{
		"atr":["Wind"],
		"atk":248,
		"matk":5,
		"diz":12
	},
	"flavourtext":"A sword imbued with the magic power of wind. Its thin blade has small holes in it to allow for air to pass through.",
	"forginglevel":25,
	"materials":["Gold","Emerald"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Flame Saber",
	"sell":1200,
	"buy":89800,
	"ability":{
		"atr":["Fire"],
		"atk":425,
		"matk":20,
		"diz":12
	},
	"flavourtext":"A sword imbued with the magic power of fire. A single swing will make you drip with sweat. Kind of icky to use, really.",
	"forginglevel":39,
	"materials":["Diamond","Gold Wolf Fang","Fire Crystal"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Zweihaender",
	"sell":41,
	"buy":1675,
	"ability":{
		"atk":42,
		"diz":12
	},
	"flavourtext":"A large two-handed sword. Not much else to say -- it's very straight-forward and to the point, if you know what I mean.",
	"forginglevel":6,
	"materials":["Minerals","Claws and Fangs"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Claymore",
	"sell":23,
	"buy":160,
	"ability":{
		"atk":12,
		"diz":12
	},
	"flavourtext":"A long sword that's easy to swing. Has a fun ring on it that you can play with. (But don't try it at home!)",
	"forginglevel":2,
	"materials":["Minerals"],
	"category":"Long Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Plant Sword",
	"sell":1e3,
	"ability":{
		"atk":215,
		"matk":48,
		"int":35,
		"diz":6
	},
	"flavourtext":"A sword made from a plant. The more passionately you tend it, the bigger it grows and the stronger it becomes.",
	// Cannot be forged
	"category":"Short Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Veggieblade",
	"sell":500,
	"buy":6250,
	"ability":{
		"atr":["Earth"],
		"atk":80,
		"matk":32,
		"vit":20,
		"diz":6
	},
	"flavourtext":"A vegetable used as a sword. I wonder how much damage it can cause...",
	"forginglevel":32,
	"materials":["Carrot"],
	"category":"Short Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Spoon",
	"sell":750,
	"buy":7800,
	"ability":{
		"atk":92,
		"matk":16,
		"diz":6
	},
	"flavourtext":"A magic sword that somehow makes people want to eat pudding.",
	"forginglevel":25,
	"materials":["Silver","Silver"],
	"category":"Short Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Back Scratcher",
	"sell":90,
	"buy":800,
	"ability":{
		"atk":69,
		"matk":20,
		"diz":20,
		"critP":5
	},
	"flavourtext":"A sword (?) used to scratch itchy backs. Maybe your foes will freak out when they see it?",
	"forginglevel":20,
	"materials":["Glue","Sticks and Stems"],
	"category":"Short Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Rune Legend",
	"sell":12e4,
	"ability":{
		"atk":9999,
		"matk":9999,
		"diz":6
	},
	"flavourtext":"Swordsmen call this a legendary short sword. The runes imbued on its blade shine majestically.",
	"forginglevel":99,
	"materials":["Rune Sphere Shard","Dragonic Stone","Rune Crystal","Green Core","Wind Dragon Tooth"],
	"category":"Short Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Gladius",
	"sell":58e3,
	"ability":{
		"atk":9800,
		"matk":1e3,
		"diz":12,
		"critP":10
	},
	"flavourtext":"A short sword forged through years of disciplined smithing. Like, really sharp and stuff.",
	"forginglevel":90,
	"materials":["Dragonic Stone","Firewyrm Scale","Throne of the Empire","Small Crystal","Claws and Fangs"],
	"category":"Short Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Rune Blade",
	"sell":5e4,
	"ability":{
		"atr":["Light"],
		"atk":8700,
		"matk":5e3,
		"diz":6
	},
	"flavourtext":"A treasured sword with rune power. The light beaming from it casts no shadow.",
	"forginglevel":85,
	"materials":["Dragonic Stone","Earthwyrm Scale","Rune Crystal","Claws and Fangs","Sticks and Stems"],
	"category":"Short Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Dragon Slayer",
	"sell":23e3,
	"ability":{
		"atk":7e3,
		"diz":6
	},
	"flavourtext":"A sword in the shape of three dragon heads. The three often fight over who's the best.",
	"forginglevel":82,
	"materials":["Dragonic Stone","Dragonic Stone","Black Scale","Blue Scale","Glitter Scale"],
	"category":"Short Sword",
	"pricemultiplier":"E"
})

registerItem({
	"name":"Invisiblade",
	"sell":800,
	"buy":18320,
	"ability":{
		"atk":150,
		"matk":5,
		"diz":6
	},
	"flavourtext":"Can you see the true blade?",
	"forginglevel":16,
	"materials":["Invisible Stone","Claws and Fangs","Crystals"],
	"category":"Short Sword",
	"pricemultiplier":"E"
})

// Register short swords according to reverse category order in recipe list

registerItem({
	"name":"",
	"sell":,
	"buy":,
	"ability":{
		"atk":,
		"diz":6
	},
	"flavourtext":".",
	"forginglevel":,
	"materials":["",""],
	"category":"Short Sword",
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
