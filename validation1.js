function validate() {
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var country = document.getElementById('country').value
    var gender = document.getElementById('gender').value
    var regex = /^[a-z0-9]+$/i;
    var cont = 0
    if(regex.test(fname)) {
        cont = 1
        document.getElementById('fnameImg').src="correct.png"
    } else {
        cont = 0
        document.getElementById('fnameImg').src="wrong.png"
    }
    cont1 = 0
    if(regex.test(lname)) {
        cont1 = 1
        document.getElementById('lnameImg').src="correct.png"
    } else {
        cont1 = 0
        document.getElementById('lnameImg').src="wrong.png"
    }
    localStorage.cont = cont
    document.getElementById('genderImg').src="correct.png"
    document.getElementById('stateImg').src="correct.png"
    if(cont == 1 && cont1 == 1) {
        localStorage.fname = fname
        localStorage.lname = lname
        localStorage.country = country
        localStorage.gender = gender
        window.location.href = 'validation2.html';
    }
}

