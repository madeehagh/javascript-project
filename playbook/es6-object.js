const name = "test"
const age = 20

const user = {
    name, //short-hand notation
    userAge: age,
    place: "Boston"
}

//console.log(user);

//object destructuring

const prod = {
    label: 'The Notebook',
    price: 100,
    stock: 100,
    salePrice: undefined,
    rating: 5
}

//const label = prod.label;

const {label: productLable, price, rating = 4.2} = prod;

//console.log(productLable + " price " + price + " with rating " + rating);

const transaction = (type, {label, price}) => {
    console.log(type + " " + label + " for price " + price);
}

transaction("order", prod);