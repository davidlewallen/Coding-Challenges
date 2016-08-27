// http://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

function stockList(listOfArt, listOfCat) {
  // Holder for each item in the listOfCat array
  let storage = {};

  // Default case to return an empty string if listOfArt is an empty array
  if (!listOfArt.length) return '';

  // Add each element of listOfCat to storage object and give it a value of 0
  listOfCat.forEach(e => storage[e] = 0);

  // Iterate through each element of listOfArray and split the element at the whitespace
  // e.g. ['abcd 200', 'efg 300'] -> ['abcd', '200']
  // Check to see if the first letter in index 0 is in storage
  //   True : Cast index 1 to a number and add to storage
  //   False: Do nothing
  listOfArt.forEach(e => {
    let inputSplit = e.split(' ');

    storage[inputSplit[0][0]] >= 0 ? storage[inputSplit[0][0]] += Number(inputSplit[1]) : null
  })

  // Holder for the returned string
  let result = [];

  // Iterate through storage object
  // Push each property and value to result array
  // e.g. ["(A : 200), (B : 300)"]
  for(let key in storage) {
    result.push(`(${key} : ${storage[key]})`)
  }

  // Return result after joining each element with correct format
  // e.g. ["(A : 200), (B : 300)"] -> "(A : 200) - (B : 300)"
  return result.join(' - ')
}

const a  = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
const a1 = ['A', 'B'];

const b  = ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'];
const b1 = ['A', 'B', 'C', 'W'];

const c  = [ 'CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60' ];
const c1 = [ 'A', 'B', 'C', 'W' ]

const d  = [];
const d1 = ['A', 'B', 'C', 'D'] 

stockList(a,a1);
stockList(b,b1);
stockList(c,c1);
stockList(d,d1);