function rien() {
    alert("Je n'autorise pas la copie de mes images")
                return false;
               }
function prot() {
               var imgs = document.getElementsByTagName("img");
               for(var i=0; i<imgs.length; i++)
               imgs[i].oncontextmenu = rien;
               }     
                                                                                /* Bloque le clic-droit sur les images */
    function stopselect() {
    function ffalse() {
            return false;
        }
            document.onmousedown = ffalse;
        }                                                                      /* Bloque la sélection du texte */
           