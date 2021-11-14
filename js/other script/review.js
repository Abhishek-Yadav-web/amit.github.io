let rLeft = document.querySelector('.rLeft');
let rRight = document.querySelector('.rRight');
let data =  [
    {hName : 'Hospital 1', review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae provident cumque expedita ipsam debitis perferendis quam magni, officiis atque esse! Numquam, perferendis ipsa consequatur voluptatibus laudantium rerum doloribus. Nulla laboriosam optio minus dolore. Provident, rerum? Enim, praesentium mollitia sed laborum laudantium, maiores voluptatem sequi vitae aperiam, blanditiis libero fugiat!', img : 'img/hospitals/hospital1.jpg'},
    {hName : 'Hospital 2', review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae provident cumque expedita ipsam debitis perferendis quam magni, officiis atque esse! Numquam, perferendis ipsa consequatur voluptatibus laudantium rerum doloribus. Nulla laboriosam optio minus dolore. Provident, rerum? Enim, praesentium mollitia sed laborum laudantium, maiores voluptatem sequi.', img : 'img/hospitals/hospital2.jpg'},
    {hName : 'Hospital 3', review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae provident cumque expedita ipsam debitis perferendis quam magni, officiis atque esse! Numquam, perferendis ipsa consequatur voluptatibus laudantium rerum doloribus. Nulla laboriosam optio minus dolore. Provident, rerum? Enim, praesentium mollitia sed laborum laudantium.', img : 'img/hospitals/hospital3.jpg'},
    {hName : 'Hospital 4', review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae provident cumque expedita ipsam debitis perferendis quam magni, officiis atque esse! Numquam, perferendis ipsa consequatur voluptatibus laudantium rerum doloribus. Nulla laboriosam optio minus dolore. Provident, rerum? Enim, vitae aperiam, blanditiis libero fugiat!', img : 'img/hospitals/hospital4.jpg'},
    {hName : 'Hospital 5', review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae provident cumque expedita ipsam debitis perferendis quam magni, officiis atque esse! Numquam, perferendis ipsa consequatur voluptatibus laudantium rerum doloribus. Nulla laboriosam optio minus dolore. Provident, rerum? Enim, praesentium mollitia sed laborum laudantiume aperiam, blanditiis libero fugiat!', img : 'img/hospitals/hospital5.jpg'},
    {hName : 'Hospital 6', review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae provident cumque expedita ipsam debitis perferendis quam magni, officiis atque esse! Numquam, perferendis ipsa consequatur voluptatibus laudantium rerum doloribus. Nulla laboriosam optio minus dolore.  blanditiis libero fugiat!', img : 'img/hospitals/hospital6.jpg'},
    {hName : 'Hospital 7', review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae provident cumque expedita ipsam debitis perferendis quam magni, officiis atque esse! Numquam, perferendis ipsa consequatur voluptatibus laudantium rerum doloribus. Nulla laboriosam optio minus dolore. Provident, rerum? Enim, praesentium mollitia sed laborum laudantium, maiores voluptatem sequi vitae aperiam, blanditiis libero fugiat!', img : 'img/hospitals/hospital7.jpg'},
    {hName : 'Hospital 8', review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae provident cumque expedita ipsam debitis perferendis quam magni, officiis atque esse! Numquam, perferendis ipsa consequatur voluptatibus laudantium rerum doloribus. Nulla laboriosam optio minus dolore. Provident, rerum? Enim, praesentium mollitia sed blanditiis libero fugiat!', img : 'img/hospitals/hospital8.jpg'},
];
let hName = document.querySelector('.review-container .textBx h1');
let quote = document.querySelector('.review-container .textBx #quote');
let img = document.querySelector('.review-container .imgBx img');

var count = 0;

// onclick left arrow
rLeft.onclick = function(){
    count = count - 1;
    if(count < 0){
        count = data.length - 1;
    }
    slider(count);
}
// on click right aroww
rRight.onclick = function(){
    count = count + 1;
    if( count > (data.length - 1)){
        count = 0;
    }
    slider(count);
}

// slider for rivew section
function slider(i){
    hName.innerText = data[i].hName;
    quote.innerText = data[i].review;
    img.setAttribute('src',data[i].img);   
}




