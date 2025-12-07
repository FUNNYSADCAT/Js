// เพิ่ม enchantments ในส่วน shopCategories
enchantments: {
    name: "Enchantments",
    items: [
        { name: "Mending", command: "mending", buyCost: 5000 },
        { name: "Unbreaking III", command: "unbreaking 3", buyCost: 2500 },
        { name: "Sharpness V", command: "sharpness 5", buyCost: 3800 },
        { name: "Protection IV", command: "protection 4", buyCost: 3700 },
        { name: "Fortune III", command: "fortune 3", buyCost: 4900 },
        { name: "Efficiency V", command: "efficiency 5", buyCost: 4600 },
        { name: "Silk Touch", command: "silk_touch", buyCost: 4700 },
        { name: "Looting III", command: "looting 3", buyCost: 1150 },
        { name: "Flame", command: "flame", buyCost: 2000 },
        { name: "Infinity", command: "infinity", buyCost: 4500 },
        { name: "Power V", command: "power 5", buyCost: 4650 },
        { name: "Punch II", command: "punch 2", buyCost: 4450 },
        { name: "Feather Falling IV", command: "feather_falling 4", buyCost: 4550 },
        { name: "Depth Strider III", command: "depth_strider 3", buyCost: 4600 },
        { name: "Respiration III", command: "respiration 3", buyCost: 2500 },
        { name: "Aqua Affinity", command: "aqua_affinity", buyCost: 2400 },
        { name: "Thorns III", command: "thorns 3", buyCost: 3700 },
        { name: "Fire Aspect II", command: "fire_aspect 2", buyCost: 4550 },
        { name: "Knockback II", command: "knockback 2", buyCost: 1350 },
        { name: "Smite V", command: "smite 5", buyCost: 1700 },
        { name: "Bane of Arthropods V", command: "bane_of_arthropods 5", buyCost: 650 },
        { name: "Sweeping Edge III", command: "sweeping 3", buyCost: 600 },
        { name: "Channeling", command: "channeling", buyCost: 2800 },
        { name: "Impaling V", command: "impaling 5", buyCost: 2700 },
        { name: "Loyalty III", command: "loyalty 3", buyCost: 2650 },
        { name: "Riptide III", command: "riptide 3", buyCost: 4750 },
        { name: "Multishot", command: "multishot", buyCost: 900 },
        { name: "Piercing IV", command: "piercing 4", buyCost: 800 },
        { name: "Quick Charge III", command: "quick_charge 3", buyCost: 700 },
        { name: "Frost Walker II", command: "frost_walker 2", buyCost: 850 },
        { name: "Soul Speed III", command: "soul_speed 3", buyCost: 1000 },
        { name: "Swift Sneak III", command: "swift_sneak 3", buyCost: 1100 }
    ]
}

// ฟังก์ชันสำหรับ apply enchantment
async function applyEnchantment(player, enchant) {
    let success = false;

    if (enchant.command) {
        try {
            const result = await player.runCommandAsync(`enchant @s ${enchant.command}`);
            success = result.successCount > 0;
        } catch (error) {
            success = false;
        }
    }
    
    if (success) {
        subtractMoney(player, enchant.buyCost);
        player.sendMessage(`§aEnchantment '${enchant.name}' applied successfully! §e(-${enchant.buyCost} Money)`);
    } else {
        player.sendMessage("§cFailed! Hold a valid item for this enchantment or item already has max enchantment!");
    }
}

// แก้ไขฟังก์ชัน showBuySellMenu เพื่อเพิ่มตัวเลือก enchantment
function showBuySellMenu(player) {
    const menu = new ActionFormData()
        .title("Shop")
        .body(`Your Money: ${getPlayerScore(player, "money")}`)
        .button("Buy Items")
        .button("Sell Items")
        .button("Enchantments", "textures/items/book_enchanted.png");

    menu.show(player).then(response => {
        if (response.canceled) return;
        if (response.selection === 0) {
            showCategoryMenu(player, "buy");
        } else if (response.selection === 1) {
            showCategoryMenu(player, "sell");
        } else if (response.selection === 2) {
            showEnchantmentMenu(player);
        }
    });
}

// ฟังก์ชันแสดง menu enchantment
function showEnchantmentMenu(player) {
    const enchants = shopCategories.enchantments.items;
    const menu = new ActionFormData()
        .title("Enchantments")
        .body(`Your Money: ${getPlayerScore(player, "money")}\n§eHold the item you want to enchant!`);

    enchants.forEach(enchant => {
        menu.button(`${enchant.name}\n§eCost: ${enchant.buyCost} Money`, "textures/items/book_enchanted.png");
    });

    menu.show(player).then(response => {
        if (response.canceled) return;
        
        const selectedEnchant = enchants[response.selection];
        if (selectedEnchant) {
            showEnchantmentConfirm(player, selectedEnchant);
        }
    });
}

// ฟังก์ชันยืนยันการซื้อ enchantment
function showEnchantmentConfirm(player, enchant) {
    const playerMoney = getPlayerScore(player, "money");
    
    const menu = new ActionFormData()
        .title(`Buy ${enchant.name}?`)
        .body(`Cost: ${enchant.buyCost} Money\nYour Money: ${playerMoney}\n\n§eHold the item you want to enchant before confirming!`)
        .button("§aConfirm")
        .button("§cCancel");

    menu.show(player).then(response => {
        if (response.canceled || response.selection === 1) {
            showEnchantmentMenu(player);
            return;
        }
        
        if (response.selection === 0) {
            if (playerMoney >= enchant.buyCost) {
                applyEnchantment(player, enchant);
            } else {
                player.sendMessage("§cYou don't have enough money!");
            }
        }
    });
         }
