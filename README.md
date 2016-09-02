# Item database for Rune Factory 4

Objectives:  
I. Show item stats as the game would. (TBD: Ability)

II. Show item hidden stats. (TBD: Cooking effects)

III. Calculate profitability of products based on its materials. (Algorithm is finished, but might be redone in a more efficient way.)

IV. Register all items. (All sections of shipping records (except the first section [Crops]) are complete in terms of quantity of item entries.)

IV.i. All sections of the shipping list (except Crops) may not be complete in terms of price multipliers and effect multipliers.

IV.ii. Crops (first section) are lacking data on Mushrooms.

V. Must investigate the effects multipliers. Some items follow the minor effect multipliers while the rest appear to follow the standard effect multipliers.

VI. Investigate and register categories like Squid and Jam, which are mentioned only in recipes. E.g. Apple Jam's entry may have an extra key like "subcategories":["Jam"]. The array allows for the item to have more than one subcategory. (Not started)

VII. Calculate minimum total sell price of materials for a given recipe and give indication if higher than the product's sell price. (Not started)

VIII. Calculate final equipment stats given inheritance and upgrade materials. (Not started)

IX. Predict effects of cooked dishes based on ingredients. (Not started)

X. 20% discounts, although rare and personally only seen in Arthur's shop and Blossom's store, exist in the game and must be accounted for. (Not started)

XI. Register not-for-sale "items" e.g. Venti's Charm, categories. (Not started. This may be optional.)

XII. Should fix the table of materials algorithm. Details in the algorithm comments. (Not optional!)

XIII. Consider giving giant crops a subcategory to enable listing in recipes. For example, Great Emery Flower, the giant version of Emery Flower, can have the key "subcategories":["Emery Flower"] which may allow Gold Juice (which lists Emery Flower in its materials list) to show up in GEF's recipes list section.
