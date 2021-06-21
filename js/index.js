data = [
  {
    head: 'Dream 2',
    para: 'Thriller,Mystery & Comedy',
    img: './Images/Image1.jfif',
    type : 'Mystery'

  },
  {
    head: 'Batman',
    para: 'A Marvel Comics superhero team.',
    img: './Images/Image1.jfif',
    type: 'Action'
  },
  {
    head: 'The Misfits',
    para: ' Action, Adventure, Thriller',
    img: './Images/The Misfits.jpg',
    type : 'Mystery'
  }
]




let container = document.getElementById('container');
let card = document.querySelector('.card');

for (let i = 0; i < data.length; i++) {
  var cln = card.cloneNode(card)
  cln.className = "clone";
  cln.classList.add(data[i].type);
  document.getElementById("container").appendChild(cln)
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