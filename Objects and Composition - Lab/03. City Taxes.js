function cityTaxes(name, population, treasury) {

    const cityObj = {
        name,
        population,
        treasury,
        taxeRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxeRate;
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.ceil(this.treasury * percentage / 100);
        }
    };

    return cityObj;

}


const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(10);
console.log(city.treasury);