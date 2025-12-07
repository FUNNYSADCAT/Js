import { world, ItemStack, ScoreboardIdentityType } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

const shopCategories = {
    building: {
        name: "Building Blocks",
        items: [
            { id: "minecraft:cobblestone", name: "Cobblestone", icon: "textures/blocks/cobblestone.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:dirt", name: "Dirt", icon: "textures/blocks/dirt.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:sand", name: "Sand", icon: "textures/blocks/sand.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:gravel", name: "Gravel", icon: "textures/blocks/gravel.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:glass", name: "Glass", icon: "textures/blocks/glass.png", buyCost: 2, sellPrice: 1 },
            { id: "minecraft:brick_block", name: "Bricks", icon: "textures/blocks/brick.png", buyCost: 4, sellPrice: 2 },
            
            
            { id: "minecraft:mossy_cobblestone", name: "Mossy Cobblestone", icon: "textures/blocks/cobblestone_mossy.png", buyCost: 2, sellPrice: 1 },
            { id: "minecraft:stone", name: "Stone", icon: "textures/blocks/stone.png", buyCost: 2, sellPrice: 1 },
            { id: "minecraft:smooth_stone", name: "Smooth Stone", icon: "textures/blocks/stone_slab_top.png", buyCost: 3, sellPrice: 2 },
            { id: "minecraft:granite", name: "Granite", icon: "textures/blocks/stone_granite.png", buyCost: 2, sellPrice: 1 },
            { id: "minecraft:polished_granite", name: "Polished Granite", icon: "textures/blocks/stone_granite_smooth.png", buyCost: 3, sellPrice: 2 },
            { id: "minecraft:andesite", name: "Andesite", icon: "textures/blocks/stone_andesite.png", buyCost: 2, sellPrice: 1 },
            { id: "minecraft:polished_andesite", name: "Polished Andesite", icon: "textures/blocks/stone_andesite_smooth.png", buyCost: 3, sellPrice: 2 },
            { id: "minecraft:diorite", name: "Diorite", icon: "textures/blocks/stone_diorite.png", buyCost: 2, sellPrice: 1 },
            { id: "minecraft:polished_diorite", name: "Polished Diorite", icon: "textures/blocks/stone_diorite_smooth.png", buyCost: 3, sellPrice: 2 },
            { id: "minecraft:stone_bricks", name: "Stone Bricks", icon: "textures/blocks/stonebrick.png", buyCost: 8, sellPrice: 4 },
            
            
            { id: "minecraft:deepslate", name: "Deepslate", icon: "textures/blocks/deepslate/deepslate.png", buyCost: 2, sellPrice: 1 },
            { id: "minecraft:cobbled_deepslate", name: "Cobbled Deepslate", icon: "textures/blocks/deepslate/cobbled_deepslate.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:polished_deepslate", name: "Polished Deepslate", icon: "textures/blocks/deepslate/polished_deepslate.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:deepslate_bricks", name: "Deepslate Bricks", icon: "textures/blocks/deepslate/deepslate_bricks.png", buyCost: 5, sellPrice: 3 },
            { id: "minecraft:deepslate_tiles", name: "Deepslate Tiles", icon: "textures/blocks/deepslate/deepslate_tiles.png", buyCost: 6, sellPrice: 3 },
            
            
            { id: "minecraft:nether_bricks", name: "Nether Bricks", icon: "textures/blocks/nether_brick.png", buyCost: 6, sellPrice: 3 },
            { id: "minecraft:blackstone", name: "Blackstone", icon: "textures/blocks/blackstone.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:polished_blackstone", name: "Polished Blackstone", icon: "textures/blocks/polished_blackstone.png", buyCost: 5, sellPrice: 3 },
            
            
            { id: "minecraft:white_concrete", name: "White Concrete", icon: "textures/blocks/concrete_white.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:black_concrete", name: "Black Concrete", icon: "textures/blocks/concrete_black.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:red_concrete", name: "Red Concrete", icon: "textures/blocks/concrete_red.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:blue_concrete", name: "Blue Concrete", icon: "textures/blocks/concrete_blue.png", buyCost: 8, sellPrice: 4 },
            
   
            { id: "minecraft:white_wool", name: "White Wool", icon: "textures/blocks/wool_colored_white.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:red_wool", name: "Red Wool", icon: "textures/blocks/wool_colored_red.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:blue_wool", name: "Blue Wool", icon: "textures/blocks/wool_colored_blue.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:green_wool", name: "Green Wool", icon: "textures/blocks/wool_colored_green.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:yellow_wool", name: "Yellow Wool", icon: "textures/blocks/wool_colored_yellow.png", buyCost: 8, sellPrice: 4 },
            
            
            { id: "minecraft:sandstone", name: "Sandstone", icon: "textures/blocks/sandstone_normal.png", buyCost: 3, sellPrice: 2 },
            { id: "minecraft:smooth_sandstone", name: "Smooth Sandstone", icon: "textures/blocks/sandstone_smooth.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:quartz_block", name: "Quartz Block", icon: "textures/blocks/quartz_block_top.png", buyCost: 8, sellPrice: 5 },
            { id: "minecraft:smooth_quartz", name: "Smooth Quartz", icon: "textures/blocks/quartz_block_top.png", buyCost: 9, sellPrice: 6 },
            { id: "minecraft:chiseled_quartz_block", name: "Chiseled Quartz Block", icon: "textures/blocks/quartz_block_chiseled.png", buyCost: 15, sellPrice: 10 }
        ]
    },

    nature: {
        name: "Nature & Plants",
        items: [
            
            { id: "minecraft:oak_log", name: "Oak Log", icon: "textures/blocks/log_oak.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:birch_log", name: "Birch Log", icon: "textures/blocks/log_birch.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:jungle_log", name: "Jungle Log", icon: "textures/blocks/log_jungle.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:spruce_log", name: "Spruce Log", icon: "textures/blocks/log_spruce.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:acacia_log", name: "Acacia Log", icon: "textures/blocks/log_acacia.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:dark_oak_log", name: "Dark Oak Log", icon: "textures/blocks/log_big_oak.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:mangrove_log", name: "Mangrove Log", icon: "textures/blocks/mangrove_log_side.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:cherry_log", name: "Cherry Log", icon: "textures/blocks/cherry_log_side.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:bamboo_block", name: "Bamboo Block", icon: "textures/blocks/bamboo_block.png", buyCost: 4, sellPrice: 2 },
            
            
            { id: "minecraft:oak_planks", name: "Oak Planks", icon: "textures/blocks/planks_oak.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:birch_planks", name: "Birch Planks", icon: "textures/blocks/planks_birch.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:jungle_planks", name: "Jungle Planks", icon: "textures/blocks/planks_jungle.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:spruce_planks", name: "Spruce Planks", icon: "textures/blocks/planks_spruce.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:acacia_planks", name: "Acacia Planks", icon: "textures/blocks/planks_acacia.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:dark_oak_planks", name: "Dark Oak Planks", icon: "textures/blocks/planks_big_oak.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:mangrove_planks", name: "Mangrove Planks", icon: "textures/blocks/mangrove_planks.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:cherry_planks", name: "Cherry Planks", icon: "textures/blocks/cherry_planks.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:bamboo_planks", name: "Bamboo Planks", icon: "textures/blocks/bamboo_planks.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:crimson_planks", name: "Crimson Planks", icon: "textures/blocks/huge_fungus/crimson_planks.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:warped_planks", name: "Warped Planks", icon: "textures/blocks/huge_fungus/warped_planks.png", buyCost: 1, sellPrice: 1 },
            
            
            { id: "minecraft:vine", name: "Vines", icon: "textures/blocks/vine.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:weeping_vines", name: "Weeping Vines", icon: "textures/blocks/weeping_vines.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:twisting_vines", name: "Twisting Vines", icon: "textures/blocks/twisting_vines_base.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:waterlily", name: "Lily Pad", icon: "textures/blocks/waterlily.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:deadbush", name: "Dead Bush", icon: "textures/blocks/deadbush.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:snow", name: "Snow Block", icon: "textures/blocks/snow.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:leaf_litter", name: "Leaf Litter", icon: "textures/blocks/leaf_litter.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:brown_mushroom", name: "Brown Mushroom", icon: "textures/blocks/mushroom_brown.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:red_mushroom", name: "Red Mushroom", icon: "textures/blocks/mushroom_red.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:moss_block", name: "Moss Block", icon: "textures/blocks/moss_block.png", buyCost: 3, sellPrice: 2 },
            { id: "minecraft:pale_moss_block", name: "Pale Moss Block", icon: "textures/blocks/pale_moss_block.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:bamboo", name: "Bamboo", icon: "textures/items/bamboo.png", buyCost: 40, sellPrice: 20 },
            { id: "minecraft:warped_stem", name: "Warped Stem", icon: "textures/blocks/huge_fungus/warped_stem_top.png", buyCost: 3, sellPrice: 2 },
            { id: "minecraft:crimson_stem", name: "Crimson Stem", icon: "textures/blocks/huge_fungus/crimson_log_top.png", buyCost: 3, sellPrice: 2 }
        ]
    },

    resources: {
        name: "Resources & Ores",
        items: [
        
            { id: "minecraft:obsidian", name: "Obsidian", icon: "textures/blocks/obsidian.png", buyCost: 10, sellPrice: 8 },
            { id: "minecraft:gold_block", name: "Gold Block", icon: "textures/blocks/gold_block.png", buyCost: 540, sellPrice: 400 },
            { id: "minecraft:iron_block", name: "Block of Iron", icon: "textures/blocks/iron_block.png", buyCost: 810, sellPrice: 600 },
            { id: "minecraft:emerald_block", name: "Block of Emerald", icon: "textures/blocks/emerald_block.png", buyCost: 900, sellPrice: 700 },
            { id: "minecraft:amethyst_block", name: "Amethyst Block", icon: "textures/blocks/amethyst_block.png", buyCost: 300, sellPrice: 200 },
            { id: "minecraft:copper_block", name: "Copper Block", icon: "textures/blocks/copper_block.png", buyCost: 540, sellPrice: 400 },
            { id: "minecraft:redstone_block", name: "Redstone Block", icon: "textures/blocks/redstone_block.png", buyCost: 120, sellPrice: 80 },
            
            
            { id: "minecraft:raw_copper", name: "Raw Copper", icon: "textures/items/raw_copper.png", buyCost: 15, sellPrice: 10 },
            { id: "minecraft:raw_copper_block", name: "Block of Raw Copper", icon: "textures/blocks/raw_copper_block.png", buyCost: 135, sellPrice: 90 },
            { id: "minecraft:raw_iron", name: "Raw Iron", icon: "textures/items/raw_iron.png", buyCost: 60, sellPrice: 40 },
            { id: "minecraft:raw_iron_block", name: "Block of Raw Iron", icon: "textures/blocks/raw_iron_block.png", buyCost: 600, sellPrice: 400 },
            { id: "minecraft:raw_gold", name: "Raw Gold", icon: "textures/items/raw_gold.png", buyCost: 40, sellPrice: 30 },
            { id: "minecraft:raw_gold_block", name: "Raw Gold Block", icon: "textures/blocks/raw_gold_block.png", buyCost: 360, sellPrice: 270 },
            { id: "minecraft:ancient_debris", name: "Ancient Debris", icon: "textures/blocks/ancient_debris_side.png", buyCost: 900, sellPrice: 450 },
            
            
            { id: "minecraft:iron_ingot", name: "Iron Ingot", icon: "textures/items/iron_ingot.png", buyCost: 90, sellPrice: 70 },
            { id: "minecraft:gold_ingot", name: "Gold Ingot", icon: "textures/items/gold_ingot.png", buyCost: 60, sellPrice: 45 },
            { id: "minecraft:copper_ingot", name: "Copper Ingot", icon: "textures/items/copper_ingot.png", buyCost: 60, sellPrice: 40 },
            { id: "minecraft:diamond", name: "Diamond", icon: "textures/items/diamond.png", buyCost: 270, sellPrice: 200 },
            { id: "minecraft:emerald", name: "Emerald", icon: "textures/items/emerald.png", buyCost: 100, sellPrice: 80 },
            { id: "minecraft:amethyst_shard", name: "Amethyst Shard", icon: "textures/items/amethyst_shard.png", buyCost: 10, sellPrice: 7 },
            { id: "minecraft:netherite_ingot", name: "Netherite Ingot", icon: "textures/items/netherite_ingot.png", buyCost: 5000, sellPrice: 3500 },
            { id: "minecraft:coal", name: "Coal", icon: "textures/items/coal.png", buyCost: 20, sellPrice: 15 },
            { id: "minecraft:redstone", name: "Redstone Dust", icon: "textures/items/redstone_dust.png", buyCost: 30, sellPrice: 20 },
            { id: "minecraft:lapis_lazuli", name: "Lapis Lazuli", icon: "textures/items/dye_powder_blue.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:flint", name: "Flint", icon: "textures/items/flint.png", buyCost: 8, sellPrice: 4 },
            
            
            { id: "minecraft:tuff", name: "Tuff", icon: "textures/blocks/tuff.png", buyCost: 2, sellPrice: 1 },
            { id: "minecraft:calcite", name: "Calcite", icon: "textures/blocks/calcite.png", buyCost: 3, sellPrice: 2 },
            { id: "minecraft:dripstone_block", name: "Dripstone Block", icon: "textures/blocks/dripstone_block.png", buyCost: 3, sellPrice: 2 },
            { id: "minecraft:basalt", name: "Basalt", icon: "textures/blocks/basalt_side.png", buyCost: 2, sellPrice: 1 },
            { id: "minecraft:smooth_basalt", name: "Smooth Basalt", icon: "textures/blocks/smooth_basalt.png", buyCost: 3, sellPrice: 2 },
            { id: "minecraft:red_sand", name: "Red Sand", icon: "textures/blocks/red_sand.png", buyCost: 3, sellPrice: 1 },
            { id: "minecraft:pointed_dripstone", name: "Pointed Dripstone", icon: "textures/blocks/pointed_dripstone_down_tip.png", buyCost: 2, sellPrice: 1 }
        ]
    },

    food: {
        name: "Food & Farming",
        items: [
     
            { id: "minecraft:bread", name: "Bread", icon: "textures/items/bread.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:apple", name: "Apple", icon: "textures/items/apple.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:potato", name: "Potato", icon: "textures/items/potato.png", buyCost: 3, sellPrice: 1 },
            { id: "minecraft:carrot", name: "Carrot", icon: "textures/items/carrot.png", buyCost: 5, sellPrice: 2 },
            { id: "minecraft:golden_carrot", name: "Golden Carrot", icon: "textures/items/carrot_golden.png", buyCost: 100, sellPrice: 50 },
            { id: "minecraft:golden_apple", name: "Golden apple", icon: "textures/items/apple_golden.png", buyCost: 350, sellPrice: 175 },
            { id: "minecraft:sweet_berries", name: "Sweet Berries", icon: "textures/items/sweet_berries.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:glow_berries", name: "Glow Berries", icon: "textures/items/glow_berries.png", buyCost: 5, sellPrice: 2 },
            { id: "minecraft:cake", name: "Cake", icon: "textures/items/cake.png", buyCost: 15, sellPrice: 5 },
            { id: "minecraft:pumpkin_pie", name: "Pumpkin Pie", icon: "textures/items/pumpkin_pie.png", buyCost: 7, sellPrice: 2 },
            { id: "minecraft:cookie", name: "Cookie", icon: "textures/items/cookie.png", buyCost: 5, sellPrice: 2 },
            { id: "minecraft:dried_kelp", name: "Dried Kelp", icon: "textures/items/dried_kelp.png", buyCost: 3, sellPrice: 1 },
            { id: "minecraft:beetroot_soup", name: "Beetroot Soup", icon: "textures/items/beetroot_soup.png", buyCost: 5, sellPrice: 2 },
            
            
            { id: "minecraft:cooked_chicken", name: "Cooked Chicken", icon: "textures/items/chicken_cooked.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:cooked_porkchop", name: "Cooked Porkchop", icon: "textures/items/porkchop_cooked.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:muttoncooked", name: "Mutton Cooked", icon: "textures/items/mutton_cooked.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:cooked_fish", name: "Cooked Fish", icon: "textures/items/fish_cooked.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:cooked_salmon", name: "Cooked Salmon", icon: "textures/items/fish_salmon_cooked.png", buyCost: 8, sellPrice: 4 },
            
            
            { id: "minecraft:wheat_seeds", name: "Wheat Seeds", icon: "textures/items/seeds_wheat.png", buyCost: 2, sellPrice: 1 },
            { id: "minecraft:wheat", name: "Wheat", icon: "textures/items/wheat.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:hay_block", name: "Hay Bale", icon: "textures/blocks/hay_block_side.png", buyCost: 36, sellPrice: 25 },
            { id: "minecraft:melon_seeds", name: "Melon Seeds", icon: "textures/items/seeds_melon.png", buyCost: 3, sellPrice: 1 },
            { id: "minecraft:pumpkin_seeds", name: "Pumpkin Seeds", icon: "textures/items/seeds_pumpkin.png", buyCost: 3, sellPrice: 1 },
            { id: "minecraft:nether_wart", name: "Nether Wart", icon: "textures/items/nether_wart.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:chorus_fruit", name: "Chorus Fruit", icon: "textures/items/chorus_fruit.png", buyCost: 6, sellPrice: 3 },
            { id: "minecraft:sugar_cane", name: "Sugar Cane", icon: "textures/items/reeds.png", buyCost: 20, sellPrice: 10 },
            { id: "minecraft:sugar", name: "Sugar", icon: "textures/items/sugar.png", buyCost: 2, sellPrice: 1 },
            { id: "minecraft:honey_bottle", name: "Honey Bottle", icon: "textures/items/honey_bottle.png", buyCost: 12, sellPrice: 10 },
            { id: "minecraft:honeycomb", name: "Honeycomb", icon: "textures/items/honeycomb.png", buyCost: 10, sellPrice: 8 },
            
            
            { id: "minecraft:bucket", name: "Bucket", icon: "textures/items/bucket_empty.png", buyCost: 12, sellPrice: 8 },
            { id: "minecraft:water_bucket", name: "Water Bucket", icon: "textures/items/bucket_water.png", buyCost: 15, sellPrice: 10 },
            { id: "minecraft:lava_bucket", name: "Lava Bucket", icon: "textures/items/bucket_lava.png", buyCost: 20, sellPrice: 12 },
            { id: "minecraft:milk_bucket", name: "Milk Bucket", icon: "textures/items/bucket_milk.png", buyCost: 15, sellPrice: 10 }
        ]
    },

    special: {
        name: "Special & Rare",
        items: [
            
            { id: "minecraft:rotten_flesh", name: "Rotten Flesh", icon: "textures/items/rotten_flesh.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:spider_eye", name: "Spider Eye", icon: "textures/items/spider_eye.png", buyCost: 1, sellPrice: 1 },
            { id: "minecraft:string", name: "String", icon: "textures/items/string.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:bone", name: "Bone", icon: "textures/items/bone.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:gunpowder", name: "Gunpowder", icon: "textures/items/gunpowder.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:feather", name: "Feather", icon: "textures/items/feather.png", buyCost: 8, sellPrice: 4 },
            { id: "minecraft:ender_pearl", name: "Ender Pearl", icon: "textures/items/ender_pearl.png", buyCost: 75, sellPrice: 35 },
            { id: "minecraft:blaze_rod", name: "Blaze Rod", icon: "textures/items/blaze_rod.png", buyCost: 100, sellPrice: 50 },
            { id: "minecraft:phantom_membrane", name: "Phantom Membrane", icon: "textures/items/phantom_membrane.png", buyCost: 60, sellPrice: 40 },
            { id: "minecraft:shulker_shell", name: "Shulker Shell", icon: "textures/items/shulker_shell.png", buyCost: 200, sellPrice: 150 },
            { id: "minecraft:slime_ball", name: "Slime Ball", icon: "textures/items/slimeball.png", buyCost: 3, sellPrice: 2 },
            
            
            { id: "minecraft:torch", name: "Torch", icon: "textures/blocks/torch_on.png", buyCost: 2, sellPrice: 1 },
            { id: "minecraft:lantern", name: "Lantern", icon: "textures/items/lantern.png", buyCost: 92, sellPrice: 60 },
            { id: "minecraft:glowstone", name: "Glowstone", icon: "textures/blocks/glowstone.png", buyCost: 16, sellPrice: 10 },
            { id: "minecraft:glowstone_dust", name: "Glowstone Dust", icon: "textures/items/glowstone_dust.png", buyCost: 4, sellPrice: 2 },
            { id: "minecraft:sea_lantern", name: "Sea Lantern", icon: "textures/blocks/beacon.png", buyCost: 20, sellPrice: 15 },
            { id: "minecraft:end_rod", name: "End Rod", icon: "textures/blocks/end_rod.png", buyCost: 8, sellPrice: 5 },
            
            
            { id: "minecraft:book", name: "Book", icon: "textures/items/book_normal.png", buyCost: 6, sellPrice: 3 },
            { id: "minecraft:paper", name: "Paper", icon: "textures/items/paper.png", buyCost: 2, sellPrice: 1 },
