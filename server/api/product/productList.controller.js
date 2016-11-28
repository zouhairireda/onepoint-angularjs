module.exports = {
  listAction
};

let products = [
  {
    title: 'Surface Book',
    price: 1401,
    image: 'surface-book.jpg',
    rating: 5,
    review: 15
  },
  {
    title: 'Macbook pro',
    price: 1699,
    image: 'macbook-pro.jpg',
    rating: 5,
    review: 10
  },
  {
    title: 'Lenovo Yoga book',
    price: 579,
    image: 'lenovo-yoga-book.jpg',
    rating: 3,
    review: 3
  },
  {
    title: 'Surface pro 4',
    price: 934,
    image: 'surface-pro-4.jpg',
    rating: 4,
    review: 20
  },
  {
    title: 'iMac',
    price: 1249,
    image: 'imac.jpg',
    rating: 4,
    review: 25
  },
  {
    title: 'Surface Studio',
    price: 2999,
    image: 'surface-studio.jpg',
    rating: 5,
    review: 30
  },
  {
    title: 'iPad pro',
    price: 689,
    image: 'ipad-pro.png',
    rating: 3,
    review: 35
  }
];

function listAction(req, res, next) {
  res.json(products);
}