class Product {
    constructor(name, description, price) {
        this.name = name,
        this.description = description,
        this.price = price,
        this.inStock = 0
    }

    addToStock(qtd) {
        this.inStock += qtd
        console.log(this.inStock)
    }

    calculateDiscount(percentage) {
        const discount = this.price * (percentage / 100)
        return this.price = this.price - discount
    }
}

const bike = new Product('Bike', 'XXXXXX', 150)
bike.addToStock(30)
console.log(bike.calculateDiscount(30))
console.log(bike)