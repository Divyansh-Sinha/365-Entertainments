data = [
    {
      head: 'Dream 2',
      para: 'Thriller,Mystery & Comedy',
      img: './Images/Image1.jfif'
      
    },
    {
      head: 'Batman',
      para: 'A Marvel Comics superhero team.',
      img: './Images/Image1.jfif'
    },
    {
      head: 'The Misfits',
      para: ' Action, Adventure, Thriller',
      img: './Images/The Misfits.jpg'
    }
  ]


  let container = document.getElementById('container');
  let card = document.querySelector('.card');
  
  for(let i = 0 ; i < 3 ; i++)
  {
    var cln = card.cloneNode(card)
    cln.className = "clone";
    document.getElementById("container").appendChild(cln)
    let h1 = document.querySelectorAll('.clone .text h2');
    let p = document.querySelectorAll('.clone .text p');
    let img = document.querySelectorAll('.clone img');
    h1[i].innerHTML = data[i].head;
    p[i].innerHTML = data[i].para;
    img[i].src = data[i].img;
    console.log(cln)
    
  }
    