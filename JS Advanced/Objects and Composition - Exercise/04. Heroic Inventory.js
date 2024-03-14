function heroic(heroData) {

    const result = [];

    for (let currHeroData of heroData) {
        let [currHeroName, currHeroLevel, currHeroItems] = currHeroData.split(' / ');
        const hero = {
            name: currHeroName,
            level: Number(currHeroLevel),
            items: currHeroItems ? currHeroItems.split(', ') : []
        };

        result.push(hero);
    }


    return JSON.stringify(result);

}

console.log(heroic(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));


// heroic(['Jake / 1000 / Gauss, HolidayGrenade']);