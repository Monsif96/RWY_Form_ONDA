
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

// <!-- Textarea............................................................................. -->

    // <!-- First Section ............................................................................. -->
        msg= Id +" "+ Idpiste+lrc_1+" "+RWYCC1;


        if (Array.from(RWYCC2).length >= 1 ) {
            msg=msg+"/"+RWYCC2;
        }

        if (Array.from(RWYCC3).length >= 1 ) {
            msg=msg+"/"+RWYCC3+" ";
        }

        if (Array.from(pRWYCC1).length >= 1 ) {
            msg=msg+pRWYCC1;
        }

        if (Array.from(pRWYCC2).length >= 1 ) {
            msg=msg+"/"+pRWYCC2;
        }

        if (Array.from(pRWYCC3).length >= 1 ) {
            msg=msg+"/"+pRWYCC3+ " ";
        }

        if (Array.from(epaisseur1).length >= 1 ) {
            msg=msg+epaisseur1;
        }

        if (Array.from(epaisseur2).length >= 1 ) {
            msg=msg+"/"+epaisseur2;
        }

        if (Array.from(epaisseur3).length >= 1 ) {
            msg=msg+"/"+epaisseur3+ " ";
        }

        if (Array.from(Desc1).length >= 1 ) {
            msg=msg+" "+Desc1;
        }

        if (Array.from(Desc2).length >= 1 ) {
            msg=msg+"/"+Desc2;
        }

        if (Array.from(Desc3).length >= 1 ) {
            msg=msg+"/"+Desc3+" ";
        }

         if (Array.from(largeur1).length >= 1 ) {
            msg=msg+largeur1;
        }
    
    // <!-- Section Two ............................................................................. -->

        if (Array.from(longueur).length >= 1 ) {
            msg=msg+" \n RWY "+Idpiste+lrc_2+" LDA RÉDUITE À "+longueur+". ";
        }

        if (Array.from(neige).length >= 1 ) {
            msg=msg+neige+". ";
        }

        if (Array.from(sable).length >= 1 ) {
            msg=msg+"RWY "+sable+lrc_3+" SABLE NON ADHÉRENT. ";
        }

        if (Array.from(chimie).length >= 1 ) {
            msg=msg+"RWY "+chimie+lrc_4+" TRAITÉE CHIMIQUEMENT. ";
        }

        if (Array.from(Dis1).length >= 1 ) {
            msg=msg+"RWY "+RWYcongere+lrc_5+" CONGÈRE "+Dis1+lrc_6+" FM CL. ";
        }

        if (Array.from(Dis2).length >= 1 ) {
            msg=msg+"TWY "+TWYcongere+" CONGÈRE "+lrc_7+Dis2+" FM CL. ";
        }

        if (Array.from(RWYcongere2).length >= 1 ) {
            msg=msg+"RWY "+RWYcongere2+lrc_8+" CONGÈRES ADJACENTS. ";
        }

        if (Array.from(TWYstate).length >= 1 ) {
            msg=msg+"TWY "+TWY+" "+TWYstate+". ";
        }

        if (Array.from(AIREstate).length >= 1 ) {
            msg=msg+"AIRE DE TRAFIC "+AIREstate+" MÉDIOCRE. ";
        }

        if (Array.from(Extra).length >= 1 ) {
            msg=msg+Extra+".\n ";
        }

    document.getElementById("result").innerHTML = msg;


    // +pRWYCC1 +"/"+pRWYCC2+"/"+pRWYCC3+" "+epaisseur1+"/"+epaisseur2+"/"+epaisseur3+" "+Desc1+"/"+Desc2+"/"+Desc3+" "+largeur1+'\n'
    // // Section2
    // +"RWY "+Idpiste+lrc_2+" LDA RÉDUITE À "+longueur+". "
    // +neige+". "
    // +"RWY "+sable+lrc_3+" SABLE NON ADHÉRENT. "
    // +"RWY "+chimie+lrc_4+" TRAITÉE CHIMIQUEMENT. "
    // +"RWY "+RWYcongere+lrc_5+" CONGÈRE "+Dis1+lrc_6+" FM CL. "
    // +"TWY "+TWYcongere+" CONGÈRE "+lrc_7+Dis2+" FM CL. "
    // +"RWY "+RWYcongere2+lrc_8+" CONGÈRES ADJACENTS. "
    // +"TWY "+TWY+" "+TWYstate+". "
    // +"AIRE DE TRAFIC "+AIREstate+"MÉDIOCRE. "
        ;


}

function Result (x) {
    var span = document.getElementById("state");
    span.textContent = x;
    console.log(x);
}

