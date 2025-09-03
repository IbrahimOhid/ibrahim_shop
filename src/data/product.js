const products = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    cover: "gradient-graphic-tshirt.png",
    rating: 3,
    max_rating: 5,
    stock: 13,
    price: 145,
    size: "L",
    color: "Green",
    discounted_price: null,
    in_cart: true,
    quantity: 0
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    cover: "skinny-fit-jeans.png",
    rating: 4,
    max_rating: 5,
    stock: 20,
    price: 240,
    size: "M",
    color: "Soft Blue",
    discounted_price: 260,
    in_cart: false,
    quantity: 0
  },
  {
    id: 3,
    name: "Vertical Striped Shirt",
    cover: "vertical-striped-shirt.png",
    rating: 4,
    max_rating: 5,
    stock: 20,
    price: 212,
    size: "S",
    color: "Red",
    discounted_price: 232,
    in_cart: false,
    quantity: 0
  },
  {
    id: 4,
    name: "Polo with Tipping Details",
    cover: "polo-with-tipping-details.png",
    rating: 1,
    max_rating: 5,
    stock: 320,
    price: 180,
    size: "L",
    color: "Orange",
    discounted_price: null,
    in_cart: false,
    quantity: 0
  },
  {
    id: 5,
    name: "Checkered Shirt",
    cover: "checkered-shirt.png",
    rating: 4,
    max_rating: 5,
    stock: 20,
    price: 180,
    size: "M",
    color: "Orange",
    discounted_price: null,
    in_cart: false,
    quantity: 0
  },
  {
    id: 6,
    name: "Denim Half Pant",
    cover: "courage-graphic-tshirt.png",
    rating: 4,
    max_rating: 5,
    stock: 20,
    price: 145,
    size: "34",
    color: "Denim",
    discounted_price: null,
    in_cart: false,
    quantity: 0
  },
  {
    id: 7,
    name: "Black Long Pant",
    cover: "black-striped-tshirt.png",
    rating: 3,
    max_rating: 5,
    stock: 420,
    price: 120,
    size: "L",
    color: "Black",
    discounted_price: 160,
    in_cart: false,
    quantity: 0
  },
  {
    id: 8,
    name: "Sleeve Striped T-shirt",
    cover: "sleeve-striped-tshirt.png",
    rating: 4,
    max_rating: 5,
    stock: 20,
    price: 130,
    size: "M",
    color: "White",
    discounted_price: 160,
    in_cart: false,
    quantity: 0
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    cover: "loose-fit-bermuda-shorts.png",
    rating: 4,
    max_rating: 5,
    stock: 10,
    price: 80,
    size: "L",
    color: "Magenta",
    discounted_price: null,
    in_cart: false,
    quantity: 0
  },
];

export const getProduct = () => {
  return products;
};

const cartProduct = [
  {
    name: "",
    size: "",
    color: "",
    price: '',
    quantity: 0,
  },
];

export const getCartProduct = ()=>{
  return cartProduct;
}