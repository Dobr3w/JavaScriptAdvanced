class OnlineShop {
    warehouseSpace;
    product = [];
    sales = [];

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error("Not enough space in the warehouse.");
        }
        this.product.push({
            product,
            quantity
        });

        this.warehouseSpace -= spaceRequired;

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        const data = this.product.find(p => p.product == product);

        if (!data) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        if (data.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`
        } else {
            const difference = minimalQuantity - data.quantity;
            data.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`
        }
    }

    sellProduct(product) {
        const data = this.product.find(p => p.product == product);

        if (!data) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        data.quantity--;
        this.sales.push({
            product,
            quantity: 1
        });

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        if(this.sales.length == 0) {
            throw new Error("There are no sales today!");
        } else {
            const result = [
                `You sold ${this.sales.length} products today!`,
                "Products in the warehouse:"
            ];

            for(let {product,quantity} of this.product) {
                result.push(`${product}-${quantity} more left`);
            }
        }
    }
}

const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));

console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));

console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));

console.log(myOnlineShop.sellProduct('laptop'));

console.log(myOnlineShop.revision());