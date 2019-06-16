# Sort by name
def sort_by_name(sort_list):
    return sorted(sort_list, key=lambda dct: dct['name'])


# Sort by price
def sort_by_price(sort_list):
    return sorted(sort_list, key=lambda dct: dct['price'])


products = [
    {'name': 'Mobie', 'price': 12},
    {'name': 'Camera', 'price': 20},
    {'name': 'Flask', 'price': 5},
    {'name': 'Coffee mug', 'price': 10},
    {'name': 'Laptop', 'price': 40},
]

# Choose the strategy
sort = sort_by_name

# Execute strategy
print(sort(products))


# Choose the strategy
sort = sort_by_price

# Execute strategy
print(sort(products))

