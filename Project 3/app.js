const data = [
    {
        name: 'John Doe',
        job: 'web developer',
        image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam mollitia ea enim rem pariatur amet magni tempora? Molestias, et.'
    },
    {
        name: 'Anna Smith',
        job: 'ux designer',
        image: 'https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet exercitationem, quaerat vitae distinctio sapiente voluptatum unde explicabo reprehenderit quae, sint sit perferendis ab accusamus.'
    },
    {
        name: 'Mike Adams',
        job: 'project manager',
        image: 'https://images.unsplash.com/photo-1525357816819-392d2380d821?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio totam eius quis voluptatibus debitis eum nam earum nesciunt suscipit magni.'
    },
    {
        name: 'Greg Gordon',
        job: 'Product Specialist',
        image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet exercitationem, quaerat vitae distinctio sapiente voluptatum unde explicabo reprehenderit quae, sint sit perferendis ab accusamus.'
    },
    {
        name: 'Jenna Stevens',
        job: 'Associate',
        image: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam mollitia ea enim rem pariatur amet magni tempora? Molestias, et.'
    },
]

const person = document.querySelector('#user-name');
const image = document.querySelector('#user-image');
const job = document.querySelector('#user-job');
const review = document.querySelector('#user-review');

const prevBtn = document.querySelector('#btn-prev');
const nextBtn = document.querySelector('#btn-next');

const showReview = (item) => {
    person.textContent = item.name
    image.setAttribute('src', item.image);
    job.textContent = item.job.toUpperCase();
    review.textContent = '"' + item.review + '"';
}

const prevReview = () => {
    itemNumber--;
    if(itemNumber < 0) {
        itemNumber = data.length - 1;
    }
    currentItem = data[itemNumber]
    showReview(currentItem);
}

const nextReview = () => {
    itemNumber++;
    if(itemNumber >= data.length) {
        itemNumber = 0;
    }
    currentItem = data[itemNumber];
    showReview(currentItem);
}

prevBtn.addEventListener('click', prevReview)
nextBtn.addEventListener('click', nextReview)

let itemNumber = 0;
let currentItem = data[itemNumber];

window.addEventListener('DOMContentLoaded', (e) => {
    showReview(currentItem);
});

