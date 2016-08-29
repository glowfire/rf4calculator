# Item database for Rune Factory 4

Objectives:  
1. Show item stats as the game would. (TBD: Ability)  
2. Show item hidden stats. (TBD: Cooking effects)  
3. Calculate profitability of products based on its materials. (Algorithm is finished, but might be redone in a more efficient way.)
4. Register all items. (All sections of shipping records (except the first section [Crops]) are complete in terms of quantity of item entries.)
4.1. All sections of the shipping list (except Crops) may not be complete in terms of price multipliers and effect multipliers.
4.2. Crops (first section) are lacking data on Mushrooms.
5. Must investigate the effects multipliers. Some items follow the minor effect multipliers while the rest appear to follow the standard effect multipliers.
6. Investigate and register categories like Squid and Jam, which are mentioned only in recipes. E.g. Apple Jam's entry may have an extra key like "subcategories":["Jam"]. The array allows for the item to have more than one subcategory. (Not started)
7. Calculate minimum total sell price of materials for a given recipe and give indication if higher than the product's sell price. (Not started)
8. Calculate final equipment stats given inheritance and upgrade materials. (Not started)
9. Predict effects of cooked dishes based on ingredients. (Not started)
10. 20% discounts, although rare and personally only seen in Arthur's shop and Blossom's store, exist in the game and must be accounted for. (Not started)
11. Register not-for-sale "items" e.g. Venti's Charm, categories. (Not started. This may be optional.)
