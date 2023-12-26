/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(trans) {
    let len = trans.length;
    const totals = new Map();
    let result = [];

    for(let i = 0; i < len; i++) {
        let amtSpent = trans[i].price;
        if(totals.has(trans[i].category)) {
            amtSpent = amtSpent + totals.get(trans[i].category);
        }
        totals.set(trans[i].category, amtSpent);
    }

    //console.log(totals)

    totals.forEach((v, k) => {
        result.push(
            {
                category: k,
                totalSpent: v
            }
        )
    });

  return result;
}

module.exports = calculateTotalSpentByCategory;

