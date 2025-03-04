export const defaultUpgradeValues = [
    {name: 'clicker', image: './Assets/pointer.png', cost: 10, increase: 1, type: 'upgrade', description: 'bitcoins per click', plusornot: '+'},
    {name: 'pickaxe', image: './Assets/Pickaxe.png', cost: 60, increase: 4, type: 'upgrade', description: 'bitcoins per second', plusornot: '+'},
    {name: 'miner', image: './Assets/Miner.png', cost: 480, increase: 32, type: 'upgrade', description: 'bitcoins per second', plusornot: '+'},
    {name: 'factory', image: './Assets/Factory.png', cost: 4240, increase: 410, type: 'upgrade', description: 'bitcoins per second', plusornot:'+'},
    {name: 'potion', image: './Assets/potion.png', cost: 52800, increase: 5500, type: 'upgrade', description: 'bitcoins per second', plusornot: '+'},
];

export const defaultSkillValues = [
    {
        name: "stronger clicks",
        description: "Double your clicking power for 30 seconds",
        plusornot: '',
        increase:' ',
        image: "./Assets/Stronger-Clicks.png",
        parsedCost: 12000,
        cost: 12000,
        type: 'skill',
    },
    {
        name: "lucky-day",
        description: "Gain 600 times your Bitcoins Per Second instantly",
        plusornot: '',
        increase:' ',
        image: "./Assets/lucky-day.png",
        parsedCost: 480000,
        cost: 12000,
        type: 'skill',
    },
];

export const defaultArtifactValues = [
    {
        name: "double-bitcoins",
        description: "Increase all bitcoins you have in your bank by 100%",
        increase: "",
        plusornot: '',
        image: "./Assets/Double.png",
        cooldown: 1200,
        costRelic: 12,
        type: 'artifact',
    },
];