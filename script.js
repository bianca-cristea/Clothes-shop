let products = {
  data: [
    {
      productName: 'Brown and White top',
      category: 'topwear',
      price: '35$',
      image: '../assets/blouse.jpg',
    },
    {
      productName: 'Orange top - 2 pieces',
      category: 'topwear',
      price: '40$',
      image: '../assets/blouse7.jpg',
    },
    {
      productName: 'Green coverall',
      category: 'all',
      price: '40$',
      image: '../assets/coverall.jpg',
    },
    {
      productName: 'Multicolor dress',
      category: 'all',
      price: '45$',
      image: '../assets/dress.jpg',
    },
    {
      productName: 'Green dress',
      category: 'all',
      price: '30$',
      image: '../assets/dress1.jpg',
    },
    {
      productName: 'Green dress',
      category: 'all',
      price: '35$',
      image: '../assets/dress4.jpg',
    },
    {
      productName: 'Elegant purple dress',
      category: 'all',
      price: '45$',
      image: '../assets/elegant-dress.jpg',
    },
    {
      productName: 'Elegant sparkling dress',
      category: 'all',
      price: '60$',
      image: '../assets/elegant-dress1.jpg',
    },
    {
      productName: 'Flared jeans',
      category: 'bottomwear',
      price: '40$',
      image: '../assets/jeans.jpg',
    },
    {
      productName: 'Loose jeans',
      category: 'bottomwear',
      price: '45$',
      image: '../assets/jeans1.jpg',
    },
    {
      productName: 'Loose bear jeans',
      category: 'bottomwear',
      price: '55$',
      image: '../assets/jeans6.jpg',
    },
    {
      productName: 'Light color jeans',
      category: 'bottomwear',
      price: '40$',
      image: '../assets/jeans7.jpg',
    },
    {
      productName: 'Jeans skirt',
      category: 'bottomwear',
      price: '39.99$',
      image: '../assets/skirt.jpg',
    },
    {
      productName: 'Brown top',
      category: 'topwear',
      price: '35.99$',
      image: '../assets/top.jpg',
    },
    {
      productName: 'Brown top',
      category: 'topwear',
      price: '32.99$',
      image: '../assets/top1.jpg',
    },
    {
      productName: '4 tops',
      category: 'topwear',
      price: '39.99$',
      image: '../assets/top3.jpg',
    },
  ],
};
for (let i of products.data) {
  let card = document.createElement('div');
  card.classList.add('card', 'i.category');
  let imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');
  let image = document.createElement('img');
  image.setAttribute('src', i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  let container = document.createElement('div');
  container.classList.add('container');

  let name = document.createElement('h5');
  name.classList.add('product-name');
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  let price = document.createElement('h6');
  price.innerText = i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById('products').appendChild(card);

  card.addEventListener('click', toggle);

  function toggle() {
    let blur = document.getElementById('blur');
    blur.classList.toggle('active');

    let popup = document.getElementById('popup');
    popup.classList.toggle('visible');

    document.getElementById('popup-image').setAttribute('src', i.image);

    let icon = document.querySelector('i');

    if (blur.classList.contains('active')) {
      icon.addEventListener('click', toggle);
    } else {
      icon.removeEventListener('click', toggle);
    }
  }
}
