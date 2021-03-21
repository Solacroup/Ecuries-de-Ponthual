/* ANIMATION DU HEADER AU SCROLLING */

window.onscroll = function(){scrollFunction()};

let header = document.getElementById("header");

function scrollFunction(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    document.getElementById("header-section-1").style.height = "6rem";
    document.getElementById("header-logo").style.height = "10rem";
    document.getElementById("header-logo").style.margin = "4.4rem 0";
    document.getElementById("navbarUl").style.margin = "-4.4rem 0";
  }else{
    document.getElementById("header-section-1").style.height = "13rem";
    document.getElementById("header-logo").style.height = "20rem";
    document.getElementById("header-logo").style.margin = "0";
    document.getElementById("navbarUl").style.margin = "0";
  }
}

/* COPIER NUMERO DE TELEPHONE */

function copytel() {
    var copyText = document.getElementById("copytel");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("copié dans le presse-papier: " + copyText.value);
}

function affichZero(nombre){
    return nombre < 10 ? '0' + nombre : nombre;
}
  
function date(){
    const infos = new Date;
    document.getElementById('copy').innerHTML = 'Copyright &copy; ' + affichZero(infos.getFullYear()) + ' Ecurie de Ponthual by Dylan BABONNEAU, Morgane HIGY & Sarah HOBL. All right reserved.';
}
  
setInterval('date()');