// Array Filtering

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredArray = numbers.filter((element) => element > 4);

// const filteredArray = numbers.filter((element) => console.log(element > 4));

/*function checkFour(target){
    return target > 4;
}*/

console.log(filteredArray);
console.log({ filteredArray });
console.log({ filteredArray: filteredArray });

//

const names = ["Anni", "Mari", "Mati", "Juku"];

const objectifiedNames = names.map(element => {
    return {
        name: element,
        age: Math.floor(Math.random() * 35 + 18),
        email: `${element}@company.com`,
        address: `${element} Street ${Math.floor(Math.random() * 100 + 1)}`,
        username: element.split("").reverse().join("")
    }
})

console.log(objectifiedNames);

//

let me = {
    name: "Henri",
    school: "TLÜ",
}

me = {...me, height:174}

console.log({ me });

//

console.log(1 == "1");
console.log(1 === "1");

//

const myPromise = () => {
    return new Promise
};

setTimeout(() => console.log("timeout"), 2000);