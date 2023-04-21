<?php
// hp
// Enter your code here, enjoy!
$array = [
    ['id' => 1, 'price' => 4500],
    ['id' => 2, 'price' => 400],
    ['id' => 3, 'price' => 8000],
    ['id' => 4, 'price' => 500],
    ['id' =>5, 'price' => 100],
];

$price = 100;

$priceAboveList = getPriceAboveInput($price,$array);

$sum = getTotalPrice($priceAboveList);

print_r($priceAboveList);

print_r("Total price = " . $sum );



function getPriceAboveInput($int,$array) {
 return array_filter($array, function($value) use ($int) {
		return $value['price'] > $int;
	});
}

function getTotalPrice($priceAboveList) {
	return array_sum(array_column($priceAboveList,'price'));
}
