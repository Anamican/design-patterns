// Sort by Ascending
var ByNameAscending = /** @class */ (function () {
    function ByNameAscending() {
    }
    ByNameAscending.prototype.sort = function (products) {
        products.sort(function (a, b) {
            if (a > b)
                return 1;
            if (a < b)
                return -1;
            return 0;
        });
        return products;
    };
    return ByNameAscending;
}());
// Sort by Descending
var ByNameDescending = /** @class */ (function () {
    function ByNameDescending() {
    }
    ByNameDescending.prototype.sort = function (products) {
        products.sort(function (a, b) {
            if (a > b)
                return -1;
            if (a < b)
                return 1;
            return 0;
        });
        return products;
    };
    return ByNameDescending;
}());
// Sorter context
var Sorter = /** @class */ (function () {
    function Sorter(strategy) {
        this.strategy = strategy;
    }
    Sorter.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Sorter.prototype.sort = function (products) {
        return this.strategy.sort(products);
    };
    return Sorter;
}());
var products = ["Mobie", "Camera", "Flask", "Laptop", "Mug"];
var sorter = new Sorter(new ByNameAscending());
console.log(sorter.sort(products));
sorter.setStrategy(new ByNameDescending());
console.log(sorter.sort(products));
