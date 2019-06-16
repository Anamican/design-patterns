# Sorting Strategy
class Sort:
    def algorithm(self, sort_list): pass


# Sort by Name
class ByName(Sort):
    def algorithm(self, sort_list):
        return sorted(sort_list, key=lambda dct: dct['name'])


# Sort by Price
class ByPrice(Sort):
    def algorithm(self, sort_list):
        return sorted(sort_list, key=lambda dct: dct['price'])


# Sorter Context
class SorterContext:
    def __init__(self, strategy):
        self.strategy = strategy

    def sort(self, sort_list):
        return self.strategy.algorithm(sort_list)

    def change_algorithm(self, new_algorithm):
        self.strategy = new_algorithm


products = [
    {'name': 'Mobie', 'price': 12},
    {'name': 'Camera', 'price': 20},
    {'name': 'Flask', 'price': 5},
    {'name': 'Coffee mug', 'price': 10},
    {'name': 'Laptop', 'price': 40},
]

sorting = SorterContext(ByName())
sorted_by_name = sorting.sort(products)

print(sorted_by_name)

sorting.change_algorithm(ByPrice())
sorted_by_price = sorting.sort(products)

print(sorted_by_price)
