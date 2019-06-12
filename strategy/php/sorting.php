<?php

// This can reduce lot of type errors
declare(strict_types=1);

/**
 * Strategy - Defines an interface common to all algorithms
 * @param array $products
 *
 * @return array
 */
interface SorterInterface
{
  public function sort(array $products): array;
}


/**
 * AscendingSort - Concrete Strategy - implements the algorithm using the Interface
 */
class AscendingSort implements SorterInterface
{
  public function sort(array $products): array{
    asort($products);
    return $products;
  }
}

/**
 * DescendingSort - Concrete Strategy - implements the algorithm using the Interface
 */
class DescendingSort implements SorterInterface
{
  public function sort(array $products): array{
    arsort($products);
    return $products;
  }
}

/**
 * DefaultSort - Concrete Strategy - implements the algorithm using the Interface
 */
class DefaultSort implements SorterInterface
{
  public function sort(array $products): array{
    return $products; // return unsorted
  }
}

/**
 * ProductsSorter - sorts products - Context
 */
class ProductsSorter
{
  /**
  * @var SorterInterface
  */
  private $sorter;

  public function setSorter(SorterInterface $sorter)
  {
      $this->sorter = $sorter;
  }

  public function selectSortingStrategy(string $sortBy){
    switch ($sortBy) {
      case 'ascending':
        $this->setSorter(new AscendingSort());
        break;

      case 'descending':
        $this->setSorter(new DescendingSort());
        break;

      default:
        $this->setSorter(new DefaultSort());
        break;
    }
  }

  public function sortProducts(array $products): array{
      return $this->sorter->sort($products);
  }
}

// Create Products array
$products = array(
  0 => 'Mobile',
  1 => 'Camera',
  2 => 'Flask',
  3 => 'Coffee Mug',
  4 => 'Laptop'
);

// This sort method will come from FrontEnd through API call
$sortBy = 'ascending';
$sorter = new ProductsSorter();


$sorter->selectSortingStrategy($sortBy);
$sortedValues = $sorter->sortProducts($products);

print_r($sortedValues);

$sortBy = 'descending';
$sorter->selectSortingStrategy($sortBy);
$sortedValues = $sorter->sortProducts($products);

print_r($sortedValues);
