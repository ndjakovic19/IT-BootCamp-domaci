// 1. Написати функцију која исписује све елементе низа који су дељиви са 5

{   
let newArr = []
function divisibleByFive(arr){
    for(let el of arr ){
        if( el % 5 == 0 )
        newArr.push(el)
    }
    console.log(newArr);
    }  

    divisibleByFive([2,5,8,35,7,10,15,3,33,125])
}
console.log('__________________________');



// 2. Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање\
// Уноси се колико пице поједете на месечном нивоу, и колико година имате
// (Рачуна се да је довољно достављати до стоте године)

{
    function lifeSupply(numPerMonth,age){
        return (100 - age)* 12 * numPerMonth
    }
    console.log(lifeSupply(10,26));
}