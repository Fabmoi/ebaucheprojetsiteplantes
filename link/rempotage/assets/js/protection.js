function rien()
{
    return false;
}
function prot()
{
    var imgs = document.getElementsByTagName("img");
    for(var i=0; i<imgs.length; i++)
        imgs[i].oncontextmenu = rien;
}                                                                                  /* Bloque le clic-droit sur les images */ 


