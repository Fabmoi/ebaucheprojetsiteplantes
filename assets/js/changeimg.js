let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'assets/img/welcome/profile/joye.jpg') {
      myImage.setAttribute('src', 'assets/img/welcome/profile/moi.jpg');
    } else {
      myImage.setAttribute('src', 'assets/img/welcome/profile/joye.jpg');
    }
});                                                                                            /* changer d'image au clic */


                                                                          