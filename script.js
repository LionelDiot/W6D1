{
  function footerClick() {
    let i = 0
    document.querySelector('footer').addEventListener("click", function () {
      i++
      console.log(`Clic numéro : ${i}`)
    })

  }

  function hamburgerMenu() {
    document.getElementsByClassName('navbar-toggler')[0].addEventListener("click", function () {
      document.getElementById('navbarHeader').classList.toggle("collapse")
    })

  }

  function editRed() {
    let htmlCard = document.querySelector('.col-md-4:nth-child(1) .card-text')
    document.querySelector(' .col-md-4:nth-child(1) .btn-outline-secondary').addEventListener("click", function () {
      htmlCard.style.color = "red";
    })
  }

  function toggleGreen() {
    let cssCard = document.querySelector('.col-md-4:nth-child(2) .card-text')
    document.querySelector('.col-md-4:nth-child(2) .btn-outline-secondary').addEventListener("click", function () {
      if (cssCard.style.color === 'green') {

        cssCard.style.color = '';

      } else {
        cssCard.style.color = "green";
      }
    })
  }
  function disableBootstrap() {
    let link = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');

    document.querySelector('.navbar').addEventListener("dblclick", function () {
      if (link.disabled) {

        link.disabled = false;

      } else {

        link.disabled = true;
      }
    })
  }

  function changeViews() {
    let cards = document.querySelectorAll('.col-md-4')
    
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i] ;
      let btn = card.getElementsByClassName('btn-success')[0];
      let img = card.getElementsByClassName('card-img-top')[0];
      let txt = card.getElementsByClassName('card-text')[0];
      
      btn.addEventListener("mouseover", function () {
        txt.classList.toggle("collapse")
        console.log(txt.classList)

        if (img.style.width == "100%" || img.style.width === "") {
          
          img.style.width = "25%";
          
        } else {
  
          img.style.width = "100%";
        }
      }) ;

    }
  }
  function changeOrder() {
    let cards = document.querySelectorAll('.col-md-4');
    let btn = document.querySelector('.btn-secondary');
    let parent = cards[0].parentNode ;
    btn.addEventListener("click", function () {
      cards = document.querySelectorAll('.col-md-4');
      parent.insertBefore(cards[5], cards[0])
      
    })
  }
  function changeOrder2(){
    let btn = document.querySelector('.btn-primary');
    let loop = document.querySelectorAll('.col-md-4').length - 1;
    let cards = document.querySelectorAll('.col-md-4');
    let parent = cards[0].parentNode ;
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      for (i=0; i < loop ; i++) {
        cards = document.querySelectorAll('.col-md-4');
        parent.insertBefore(cards[5], cards[0]);
        
        
      }
    })
  }
  
  changeOrder();
  changeOrder2();
  changeViews();
  disableBootstrap();
  toggleGreen();
  editRed();
  footerClick();
  hamburgerMenu();
}
// console.log(