/*
setTimeout(() => {
    console.log("2 seconds up!");
}, 2000);

const names = ["james", "jen", "jack"];
const shortNames = names.filter((name) => {
    return name.length < 4;
})

const geoCode = (address, callback) => {
   setTimeout(() => {
       const data = {
           lat: 0,
           long: -1
       }
       callback(data);
   }, 2000);
}

geoCode('Delhi', (data) => {
    console.log(data);
})*/



const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b);
    }, 2000);
}
add(1, 4, (sum) => {
    console.log(sum); //should print 5
})