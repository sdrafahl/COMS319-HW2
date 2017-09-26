function validate() {
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var country = document.getElementById('country').value
    var gender = document.getElementById('gender').value
    var regex = /^[a-z]+$/i;
    if(regex.test(fname)) {
        document.getElementById('fnameImg').src="correct.png"
    } else {
        document.getElementById('fnameImg').src="wrong.png"
    }
    
    if(regex.test(lname)) {
        document.getElementById('lnameImg').src="correct.png"
    } else {
        document.getElementById('lnameImg').src="wrong.png"
    }

    document.getElementById('genderImg').src="correct.png"
    document.getElementById('stateImg').src="correct.png"

}
