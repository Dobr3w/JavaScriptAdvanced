class WineSelection {
    constructor(space) {
        this.space = space;
        this.wine = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space != 0) {
            const wineOnj = { wineName, wineType, price, paid: false };
            this.wine.push(wineOnj);
            this.space--;
            return `You reserved a bottle of ${wineName} ${wineType} wine.`;
        } else {
            throw new Error("Not enough space in the cellar.");
        }
    }

    payWineBottle(wineName, price) {
        const wine = this.wine.find(w => w.wineName === wineName);
        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        } else if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        } else {
            wine.paid = true;
            this.bill += price;
            return `You bought a ${wineName} for $${price}.`;
        }
    }

    openBottle(wineName) {
        const wineIndex = this.wine.findIndex(wine => wine.wineName === wineName);
        if (wineIndex === -1) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (!this.wine[wineIndex].paid) {
            throw new Error(`${wineName} needs to be paid before you can open the bottle.`);
        }
        this.wine.splice(wineIndex, 1);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        let revisionSummary = `You have space for ${this.space} bottles more.\n`;
        revisionSummary += `You paid ${this.bill}$ for the wine.\n`;

        let filteredWines = wineType
            ? this.wine.filter(wine => wine.wineType === wineType)
            : this.wine;

        if (wineType && filteredWines.length === 0) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        filteredWines.sort((a, b) => a.name.localeCompare(b.name));

        const wineListInfo = filteredWines
            .map(wine => `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}`)
            .join('\n');

        revisionSummary += wineListInfo;

        return revisionSummary;
    }

}

//Input 1
// const selection = new WineSelection(2);
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough','White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley','Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose',144));

//Input 2 
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

//Input 3
// const selection = new WineSelection(2);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

//Input 4
const selection = new WineSelection(2);
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.cellarRevision('Rose'));