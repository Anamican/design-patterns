
// Interface for Sort
interface SortStrategy {
    sort(products: string[]): string[];
}

// Sort by Ascending
class ByNameAscending implements SortStrategy{
    sort(products: string[]): string[]{
        products.sort((a, b) => {
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        });
        return products;
    }
}

// Sort by Descending
class ByNameDescending implements SortStrategy{
    sort(products: string[]): string[]{
        products.sort((a, b) => {
            if(a > b) return -1;
            if(a < b) return 1;
            return 0;
        });
        return products;
    }
}


// Sorter context
class Sorter{

    private strategy: SortStrategy;

    constructor(strategy: SortStrategy){
        this.strategy = strategy;
    }

    public setStrategy(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    public sort(products: string[]): string[]{
        return this.strategy.sort(products)
    }
}

const products = ["Mobie", "Camera", "Flask", "Laptop", "Mug"];

const sorter = new Sorter(new ByNameAscending());
console.log(sorter.sort(products));

sorter.setStrategy(new ByNameDescending());
console.log(sorter.sort(products));
