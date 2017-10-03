<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"></script>
* groupBy - _.groupBy(list, iteratee, [context]) 
Splits a collection into sets, grouped by the result of running each value through iteratee. If iteratee is a string instead of a function, groups by the property named by iteratee on each of the values.

let purchases = [
  {buyer:'Bob', price:500},
  {buyer:'Jane', price:50},
  {buyer:'Bob', price:5300},
  {buyer:'Jane', price:520},
  {buyer:'Jane', price:100},
  {buyer:'Bob', price:500},
  {buyer:'Bob', price:570},
  {buyer:'Jane', price:400},
  {buyer:'Jane', price:600},
  {buyer:'Bob', price:5860},
  {buyer:'Jane', price:540},
  {buyer:'Bob', price:520}
]
let groupedPurchases = _.groupBy(purchases, 'buyer');
console.log(groupedPurchases)



* union - _.union(*arrays) 
Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.

let bracksFriends = ['Bob','Bobbers','Bobbett','Bobby','Bob 2nd'];
let jeremysFriends = ['Bob', 'Jane','John Doe','Bobby', 'Bobbers'];

let allFriends = _.union(bracksFriends, jeremysFriends);
console.log(allFriends);



* intersection - _.intersection(*arrays) 
Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.

let sharedFriends = _.intersection(bracksFriends, jeremysFriends);
console.log(sharedFriends);



* difference - _.difference(array, *others) 
Similar to without, but returns the values from array that are not present in the other arrays.

let diffFriends = _.difference(bracksFriends, jeremysFriends);
console.log(diffFriends);


* stopwatch
console.time("stopwatch");

for (var i =0;i<1000;i++){
  let j = 5*5*5*5*5*5*5*5*5*5*5*5*5*5;
}

console.timeEnd("stopwatch")


console.time("stopwatch");

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ... 
function fibbonci(n){
  if (n<=2){
    return 1
  }
  return fibbonci(n-1) + fibbonci(n-2)
}

fibbonci(10);

console.timeEnd("stopwatch")

* memoize_.memoize(function, [hashFunction]) 
Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations. If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based on the arguments to the original function. The default hashFunction just uses the first argument to the memoized function as the key. The cache of memoized values is available as the cache property on the returned function.

let fastFib = _.memoize(function(n){
  if (n<=2){
    return 1
  }
  return fastFib(n-1) + fastFib(n-2)
})

fastFib(45)


* shuffle_.shuffle(list) 
Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.

let ary = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let shuffled = _.shuffle(ary);
console.log(shuffled, ary);



* pluck_.pluck(list, propertyName) 
A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.

let employees = [{"_id":"59aed68ff4069362fe2c88c0","index":0,"guid":"4ae6bac0-ae5f-4d86-931b-a2c7cb3d23ed","isActive":true,"balance":"$2,777.10","picture":"http://placehold.it/32x32","age":28,"eyeColor":"blue","name":"King Jensen","gender":"male","company":"INEAR","email":"kingjensen@inear.com","phone":"+1 (952) 539-2925","address":"733 Ira Court, Goochland, Northern Mariana Islands, 1176","about":"In occaecat dolore do consequat sint cupidatat qui dolor aliquip ad officia deserunt velit. Culpa consectetur aliquip elit pariatur. Amet mollit mollit in consequat ullamco do cillum Lorem dolore. Sit minim laborum reprehenderit pariatur.\r\n","registered":"2014-10-04T07:16:48 +06:00","latitude":-17.059687,"longitude":-131.929715,"tags":["duis","culpa","nulla","dolore","irure","non","magna"],"friends":[{"id":0,"name":"Frye Sykes"},{"id":1,"name":"Hubbard Reilly"},{"id":2,"name":"Socorro Hinton"}],"greeting":"Hello, King Jensen! You have 6 unread messages.","favoriteFruit":"strawberry"},{"_id":"59aed68fb736b5f03ac896d5","index":1,"guid":"0b63736b-2931-40e0-ad0a-f9c9c485e674","isActive":false,"balance":"$2,228.03","picture":"http://placehold.it/32x32","age":38,"eyeColor":"brown","name":"Mary Flynn","gender":"female","company":"EARWAX","email":"maryflynn@earwax.com","phone":"+1 (974) 488-2392","address":"325 Buffalo Avenue, Grantville, Oklahoma, 973","about":"Nulla laborum excepteur anim sit. Deserunt culpa qui deserunt non esse. Dolore ex ex enim est id consectetur laboris.\r\n","registered":"2017-06-14T11:58:46 +06:00","latitude":78.756858,"longitude":-10.392014,"tags":["consectetur","fugiat","magna","laborum","Lorem","et","consequat"],"friends":[{"id":0,"name":"Gay Kerr"},{"id":1,"name":"Knight Lara"},{"id":2,"name":"Kimberley Powell"}],"greeting":"Hello, Mary Flynn! You have 6 unread messages.","favoriteFruit":"apple"},{"_id":"59aed68f368a117de26f678c","index":2,"guid":"ca975a6d-8b01-4126-b932-7a3edf5d7de0","isActive":false,"balance":"$3,585.31","picture":"http://placehold.it/32x32","age":25,"eyeColor":"green","name":"Spence Blanchard","gender":"male","company":"JAMNATION","email":"spenceblanchard@jamnation.com","phone":"+1 (881) 478-2587","address":"391 Ingraham Street, Wauhillau, American Samoa, 9858","about":"Aliqua tempor irure aute veniam enim esse eiusmod esse magna esse consectetur. Laboris do nisi exercitation mollit. Ad voluptate velit voluptate adipisicing deserunt non fugiat.\r\n","registered":"2014-11-24T09:58:43 +07:00","latitude":55.962187,"longitude":-86.799862,"tags":["nulla","laboris","ex","minim","ullamco","sunt","ad"],"friends":[{"id":0,"name":"Loraine Duran"},{"id":1,"name":"Strong Wiley"},{"id":2,"name":"Mariana Sharp"}],"greeting":"Hello, Spence Blanchard! You have 2 unread messages.","favoriteFruit":"apple"},{"_id":"59aed68f8fdbf86a9abf6aa8","index":3,"guid":"2fb8fc74-5338-4f75-9d31-a80b2ecb2cc7","isActive":true,"balance":"$2,518.25","picture":"http://placehold.it/32x32","age":20,"eyeColor":"brown","name":"Acevedo Ratliff","gender":"male","company":"CEDWARD","email":"acevedoratliff@cedward.com","phone":"+1 (885) 420-2396","address":"381 Bassett Avenue, Wadsworth, Tennessee, 4108","about":"Ad ipsum excepteur nostrud nostrud aliquip ex. Consequat aliqua id excepteur do duis velit quis sunt quis. Esse veniam magna eiusmod sunt in qui. Esse aliquip quis irure sint sit qui elit ad tempor. Enim duis cillum aliquip irure non pariatur reprehenderit ullamco sit magna fugiat laborum.\r\n","registered":"2017-07-01T06:47:10 +06:00","latitude":89.679491,"longitude":-154.585407,"tags":["mollit","laborum","magna","enim","aute","laboris","aliquip"],"friends":[{"id":0,"name":"Cain Clay"},{"id":1,"name":"Joyce Mills"},{"id":2,"name":"Dora Hensley"}],"greeting":"Hello, Acevedo Ratliff! You have 8 unread messages.","favoriteFruit":"banana"},{"_id":"59aed68fe8946ef3bbdd6e7b","index":4,"guid":"5d4b4fdd-5e62-4750-b111-454fca1635d3","isActive":true,"balance":"$2,173.97","picture":"http://placehold.it/32x32","age":20,"eyeColor":"brown","name":"Tricia Owens","gender":"female","company":"SIGNIDYNE","email":"triciaowens@signidyne.com","phone":"+1 (897) 580-2954","address":"512 Bedell Lane, Nash, Alaska, 791","about":"Esse eiusmod labore Lorem elit aute laboris eu exercitation amet consectetur commodo. Ad officia cupidatat laborum sunt do eiusmod incididunt commodo incididunt. Nostrud cupidatat proident ipsum consequat consectetur et cillum exercitation est aliqua exercitation ea.\r\n","registered":"2015-07-12T06:26:53 +06:00","latitude":-16.629283,"longitude":-38.372138,"tags":["consectetur","consectetur","voluptate","ea","ex","veniam","proident"],"friends":[{"id":0,"name":"Kennedy Cobb"},{"id":1,"name":"Christensen Hardy"},{"id":2,"name":"Fischer Lyons"}],"greeting":"Hello, Tricia Owens! You have 1 unread messages.","favoriteFruit":"strawberry"}];

let names = _.pluck(employees, 'name');
console.log(names);

let names2 = employees.map(e=>e.name);
