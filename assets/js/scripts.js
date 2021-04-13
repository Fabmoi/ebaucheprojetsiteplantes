let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'assets/img/profil/joye.jpg') {
      myImage.setAttribute('src', 'assets/img/profil/moi.jpg');
    } else {
      myImage.setAttribute('src', 'assets/img/profil/joye.jpg');
    }
});                                                                                            /* changer d'image au clic */


                                                                          