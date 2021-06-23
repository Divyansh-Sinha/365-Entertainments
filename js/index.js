data = [
  {
    head: 'Haider',
    para: 'Action, Crime, Drama',
    img: '../Images/Drama/Haider.jpg',
    type : 'Drama'

  },
  {
    head: 'Batman',
    para: 'A Marvel Comics superhero team.',
    img: '../Images/Action/batman.jpg',
    type: 'Action'
  },
  {
    head: 'The Misfits',
    para: 'Action, Adventure, Thriller',
    img: './Images/The Misfits.jpg',
    type : 'Drama'
  },
  {
    head: 'Gravity',
    para: 'Mystery & Thriller, Sci-Fi, Drama',
    img: './Images/Sci-Fi/Gravity.jpg',
    type : 'Sci-Fi'
  },
  {
    head: 'Black Panther',
    para: 'Adventure, Fantasy, Action',
    img: './Images/Action/black-panther.jpg',
    type : 'Action'
  },
  {
    head: 'Iron Man',
    para: 'Sci-Fi, Adventure, Fantasy, Action',
    img: './Images/Sci-Fi/Iron Man.jpg',
    type : 'Sci-Fi'
  },
  {
    head: 'Knives Out',
    para: 'Crime, Comedy, Mystery & Thriller, Drama',
    img: './Images/Drama/Knives-out.jpg',
    type : 'Drama'
  },
  {
    head: 'Mad Max',
    para: 'Adventure, Fantasy, Action',
    img: './Images/Action/mad-max.jpg',
    type : 'Action'
  },
  {
    head: 'Mission Impossible',
    para: 'Adventure, Mystery & Thriller, Action',
    img: './Images/Action/mission-impossible.jpg',
    type : 'Action'
  },
  {
    head: 'The Martian',
    para: 'Drama, Sci-Fi, Adventure',
    img: './Images/Sci-Fi/The Martian.jpg',
    type : 'Sci-Fi'
  },
  {
    head: 'X-Men Dark Phoenix',
    para: 'Adventure, Fantasy, Sci-Fi, Action',
    img: './Images/Sci-Fi/X-men Dark Phoenix.jpg',
    type : 'Sci-Fi'
  },
  {
    head: 'La La Land',
    para: 'Romance, Comedy, Musical, Drama',
    img: './Images/Drama/la-la-land.jpg',
    type : 'Drama'
  },
  {
    head: 'Creed(2015)',
    para: 'Drama, Action',
    img: './Images/Drama/Creed.jpg',
    type : 'Drama'
  },
  {
    head: 'Sholay (1975)',
    para: 'Action, Crime, Drama',
    img: './Images/Drama/Sholay.jpg',
    type : 'Drama'
  },
  {
    head: 'Spider Man',
    para: 'Adventure, Fantasy, Action',
    img: './Images/Action/spider-man.jpg',
    type : 'Action'
  },
  {
    head: 'Thor',
    para: 'Action, Fantasy, Comedy, Sci-Fi, Adventure',
    img: './Images/Action/thor.jpg',
    type : 'Action'
  },
  {
    head: 'Wonder Woman',
    para: 'Adventure, Fantasy, Action',
    img: './Images/Action/wonder-woman.jpg',
    type : 'Action'
  },
  {
    head: 'Baahubali 2: The Conclusion',
    para: 'Action, Drama',
    img: './Images/Drama/Bahubali.jpg',
    type : 'Drama'
  },
  {
    head: 'Looper',
    para: 'Sci-Fi, Mystery & Thriller, Action',
    img: './Images/Sci-Fi/looper.jpg',
    type : 'Sci-Fi'
  },
  {
    head: 'Captain Marvel',
    para: 'Sci-Fi, Adventure, Fantasy, Action',
    img: './Images/Sci-Fi/captain_marvel.jpg',
    type : 'Sci-Fi'
  },
  {
    head: 'Hulk',
    para: 'Adventure, Fantasy, Action',
    img: './Images/Action/Hulk.jpg',
    type : 'Action'
  },
  {
    head: '007',
    para: 'Crime, Drama, Action',
    img: './Images/Drama/007.jpg',
    type : 'Drama'
  },
  {
    head: 'Big Hero 6',
    para: 'Sci-Fi, Adventure, Action, Fantasy',
    img: './Images/Sci-Fi/big-hero.jpg',
    type : 'Sci-Fi'
  },
  {
    head: 'Captain America',
    para: 'Sci-Fi, Adventure, Action, Fantasy',
    img: './Images/Sci-Fi/captain-america.jpg',
    type : 'Sci-Fi'
  },
]








let container = document.getElementById('container');
let card = document.querySelector('.card');

for (let i = 0; i < data.length; i++) {
  var cln = card.cloneNode(card)
  cln.className = "clone";
  cln.classList.add(data[i].type);
  document.getElementById("gallContainer").appendChild(cln)
  let h1 = document.querySelectorAll('.clone .text h2');
  let p = document.querySelectorAll('.clone .text p');
  let img = document.querySelectorAll('.clone img');
  h1[i].innerHTML = data[i].head;
  p[i].innerHTML = data[i].para;
  img[i].src = data[i].img;
  console.log(cln)

}


function myFunction() {
  

  var input, filter, container, card, img, a, textValue;

  input = document.getElementById('myInput');

  //console.log(input);
  filter = input.value.toUpperCase();

  card = document.querySelectorAll('.clone');
  

  for (i = 0; i < card.length; i++) {
    a = card[i].getElementsByTagName('h2')[0];
   // console.log(a);
    textValue =  a.innerHTML;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }

}

function myFunction1() {
  var input, filter, table, tr, td, i;

  input = document.getElementById("mylist");

  

  filter = input.value;
  //console.log(filter);

  table = document.querySelectorAll('.clone');
 // console.log(table);

  for(i=0;i<table.length;i++){

    if(filter == 'All'){
      table[i].style.display = "";
    }
    else if(table[i].classList.contains(filter)){
      table[i].style.display = "";
    }else{
      table[i].style.display = "none"; 
    }
  }


}