import eel
from socket import *
from time import gmtime, strftime
import webbrowser

eel.init("HTMLS")

@eel.expose
def Processing(Id, Idpiste, time, lrc_1, RWYCC1, RWYCC2, RWYCC3, pRWYCC1, pRWYCC2, pRWYCC3,Desc1 ,Desc2, Desc3, epaisseur1, epaisseur2, epaisseur3, largeur1, longueur, lrc_2, neige, sable, lrc_3, chimie, lrc_4, RWYcongere, Dis1, lrc_5, lrc_6, TWYcongere, Dis2, lrc_7, RWYcongere2, lrc_8, TWY, TWYstate, AIREstate, Extra):
    
    file = open("Section_1.txt","a")

    file.write(Id)

    file.write(" [")
    file.write(strftime("%Y-%m-%d %H:%M:%S", gmtime()))
    file.write("] ")

    file.write(Idpiste)
    file.write(lrc_1)
    file.write(" ")
    file.write(RWYCC1)
    file.write("/")
    file.write(RWYCC2)
    file.write("/")
    file.write(RWYCC3)
    file.write(" ")
    file.write(pRWYCC1)
    file.write("/")
    file.write(pRWYCC2)
    file.write("/")
    file.write(pRWYCC3)
    file.write(" ")
    file.write(Desc1)
    file.write("/")
    file.write(Desc2)
    file.write("/")
    file.write(Desc3)
    file.write(" ")

    file.write(epaisseur1)
    file.write(epaisseur2)
    file.write(epaisseur3)

    file.write(largeur1)

    file.write('\n') 
    
    file.write("RWY ") 
    file.write(longueur)
    file.write(lrc_2)
    file.write(". ")

    file.write(neige)
    # file.write(". ")
    
    file.write("RWY ")
    file.write(sable)
    file.write(lrc_3)
    file.write(". ")
    
    file.write("RWY ")
    file.write(chimie)
    file.write(lrc_4)
    file.write(". ")

    file.write(RWYcongere)
    file.write(Dis1)
    file.write(lrc_5)
    file.write(lrc_6)

    file.write(TWYcongere)
    file.write(Dis2)
    file.write(lrc_7)

    file.write(RWYcongere2)
    file.write(lrc_8)

    file.write(TWY)
    file.write(TWYstate)

    file.write(AIREstate)

    file.write(Extra)

    file.write('\n') 
    file.close()    
    
    
    x = "Rapport validé"
    return x 

eel.start("index.html") 

