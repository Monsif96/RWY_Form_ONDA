
function Pickup() { 

// <!--  Form 1............................................................................. -->
    var Id = document.getElementById("idplace").value;
    var Idpiste = document.getElementById("idpiste").value;
    var lrc_1 = document.getElementById("1LRC").value;
    var time = document.getElementById("time").value;
    
// <!-- Form 2............................................................................. -->
    var RWYCC1 = document.getElementById("RWYCC1").value;
    var RWYCC2 = document.getElementById("RWYCC2").value;
    var RWYCC3 = document.getElementById("RWYCC3").value;

// <!-- Form 3............................................................................. -->
    var pRWYCC1 = document.getElementById("pRWYCC1").value;
    var pRWYCC2 = document.getElementById("pRWYCC2").value;
    var pRWYCC3 = document.getElementById("pRWYCC3").value;

// <!-- Form 4............................................................................. -->
    var Desc1 = document.getElementById("Desc1").value;
    var Desc2 = document.getElementById("Desc2").value;
    var Desc3 = document.getElementById("Desc3").value;

// <!-- Form 5............................................................................. -->
    var epaisseur1 = document.getElementById("epaisseur1").value;
    var epaisseur2 = document.getElementById("epaisseur2").value;
    var epaisseur3 = document.getElementById("epaisseur3").value;

// <!-- Form 6............................................................................. -->
    var largeur1 = document.getElementById("largeur1").value;

// <!-- .....................................-__-........................................ -->

// <!-- Form 1............................................................................. -->
    var longueur = document.getElementById("longueur").value;
    var lrc_2 = document.getElementById("2LRC").value;

// <!-- Form 2............................................................................. -->
    var neige = document.getElementById("neige").value;

// <!-- Form 3............................................................................. -->
    var sable = document.getElementById("sable").value;
    var lrc_3 = document.getElementById("3LRC").value;

// <!-- Form 4............................................................................. -->
    var chimie = document.getElementById("chimie").value;
    var lrc_4 = document.getElementById("4LRC").value;

// <!-- Form 5............................................................................. -->
    var RWYcongere = document.getElementById("RWYcongere").value;
    var Dis1 = document.getElementById("Dis1").value;
    var lrc_5 = document.getElementById("5LRC").value;
    var lrc_6 = document.getElementById("6LRC").value;

// <!-- Form 6............................................................................. -->
    var TWYcongere = document.getElementById("TWYcongere").value;
    var Dis2 = document.getElementById("Dis2").value;
    var lrc_7 = document.getElementById("7LRC").value;
    
// <!-- Form 7............................................................................. -->
    var RWYcongere2 = document.getElementById("RWYcongere2").value;
    var lrc_8 = document.getElementById("8LRC").value;

// <!-- Form 8............................................................................. -->
    var TWY = document.getElementById("TWY").value;
    var TWYstate = document.getElementById("TWYstate").value;

// <!-- Form 9............................................................................. -->
    var AIREstate = document.getElementById("AIREstate").value;

// <!-- Form 10............................................................................. -->
    var Extra = document.getElementById("Extra").value;


    console.log(Id, Idpiste, lrc_1, time, RWYCC1, pRWYCC1, Desc3)
    eel.Processing(Id, Idpiste, time, lrc_1, RWYCC1, RWYCC2, RWYCC3, pRWYCC1, pRWYCC2, pRWYCC3,Desc1 ,Desc2, Desc3, epaisseur1, epaisseur2, epaisseur3, largeur1, longueur, lrc_2, neige, sable, lrc_3, chimie, lrc_4, RWYcongere, Dis1, lrc_5, lrc_6, TWYcongere, Dis2, lrc_7, RWYcongere2, lrc_8, TWY, TWYstate, AIREstate, Extra )(Result)
}

function Result (x) {
    var span = document.getElementById("state");
    span.textContent = x;
    console.log(x);
}