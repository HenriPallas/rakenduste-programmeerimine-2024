// Better Viewing

// console.log({ threeParameters: threeParameters });

// Filter out all numbers above value value_x in an array.

const value_x = 4;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filteredArray = numbers.filter((element) => element > value_x);

const filteredArray = numbers.filter((element) => {
    console.log(element > 4);

    return element > 4;
});

console.log(filteredArray);
console.log({ filteredArray });
console.log({ filteredArray: filteredArray });

// Construction an array of objects out of an array.

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

// Adding a new object into an array of objects without affecting the previous objects. Spread syntax.

let me = {
    name: "Henri",
    school: "TLÜ",
}

me = {...me, height:174}

console.log({ me });

// Difference between == and ===.

console.log(1 == "1"); // True; Converts the value type and compares them.
console.log(1 === "1"); // False; Compares the value without converting it.

//

const myPromise = () => {
    return new Promise((resolve) => setTimeout(() => resolve("done"), 1000))
};

const runPromise = async () => {
    console.log(await myPromise());
};

runPromise();

setTimeout(() => console.log("timeout"), 2000);

// Practicing Promise

/*let myPromise 2 = new Promise((myResolve) => setTimeout(() => myResolve("I love you !!"), 3000));

myPromise2.then((value) => console.log(value));

const tester = (test) => test;
console.log(tester("Tester"));*/


// async practice

/*async function myFunction(){
    return "Hello";
}

const testfunc = async () => "Hello";

function myFunction() {
    return Promise.resolve("Hello");
} */