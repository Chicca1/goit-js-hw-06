const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
    caption: 'A beautiful white and black long fur cat.',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    caption: 'Orange and white koi fish swimming near a yellow koi fish.',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    caption: 'A group of horses running through a field.',
  },
];


const gallery = document.querySelector('.gallery');

const galleryItems = images
  .map(
    (image) => `
    <li>
      <img src="${image.url}" alt="${image.alt}">
      <div class="caption">${image.caption}</div>
    </li>
  `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryItems);