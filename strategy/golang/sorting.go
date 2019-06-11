package main

import (
	"encoding/json"
	"fmt"
	"sort"
)

// Product struct
type Product struct {
	Name string
	Price int64
}

// Sorter interface
type Sorter interface {
	Sort(products []*Product)[]*Product
}

// ByNameSorter struct
type ByNameSorter struct {}

// ByPriceSorter struct
type ByPriceSorter struct {}


// Sort sorts the product by By Name
func(b ByNameSorter) Sort(products []*Product)[]*Product{
	sort.Slice(products, func(i,j int)bool{
		// Sort By Name
		return products[i].Name < products[j].Name
	})
	return products
}

// Sort sorts the product by By Price
func(b ByPriceSorter) Sort(products []*Product)[]*Product{
	sort.Slice(products, func(i,j int)bool{
		// Sort By Price
		return products[i].Price < products[j].Price
	})
	return products
}

// SortContext struct
type SortContext struct {}

// SortBy context
func(sc *SortContext) SortBy(products []*Product, s Sorter)[]*Product{
	return s.Sort(products)
}

// getProducts returns products array
func getProducts()[]*Product{
	var products []*Product

	products = append(products, &Product{
		Name: "Mobile",
		Price: 12,
	})

	products = append(products, &Product{
		Name: "Camera",
		Price: 20,
	})

	products = append(products, &Product{
		Name: "Flask",
		Price: 5,
	})

	products = append(products, &Product{
		Name: "Coffee Mug",
		Price: 10,
	})

	products = append(products, &Product{
		Name: "Laptop",
		Price: 40,
	})

	return products
}


func prettyFormat(i interface{}) string {
	s, _ := json.MarshalIndent(i, "", "\t")
	return string(s)
}

func main(){

	products := getProducts()
	sCtx := &SortContext{}

	sortedByName := sCtx.SortBy(products, ByNameSorter{})
	sortedByPrice := sCtx.SortBy(products, ByPriceSorter{})

	fmt.Println(prettyFormat(sortedByName))
	fmt.Println(prettyFormat(sortedByPrice))

}