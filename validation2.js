function submit() {
    console.log("sup")
    var email =  document.getElementById('email').value
    var phone =  document.getElementById('phone').value
    var address = document.getElementById('address').value
    
    
    var cont1 = false
    var cont2 = false
    var cont3 = false
    if(checkEmail(email)) {
        cont1 = true
        document.getElementById('emailImg').src="correct.png"
    } else {
        document.getElementById('emailImg').src="wrong.png"
    }
    
    if(checkPhone(phone)) {
        cont2 = true
        document.getElementById('phoneImg').src="correct.png"
    } else {
        document.getElementById('phoneImg').src="wrong.png"
    }
    
    if(checkAddress(address)) {
        cont3 = true
        document.getElementById('addressImg').src="correct.png"
    } else {
        document.getElementById('addressImg').src="wrong.png"
    }

    if(cont1 && cont2 && cont3) {
        localStorage.email = email
        localStorage.phone = phone
        localStorage.address = address
        window.location.href = 'geomap.html';
    }
}

function checkEmail(email) {
    if(email.charAt(0) == "@" || email.charAt == ".") {
        return false
    }
    check1 = false
    check2 = false
    for(x = 0;x<email.length;x++) {
        if(email.charAt(x) == "@") {
            check1 = !check1
        }
        if(email.charAt(x) == ".") {
            if(x != email.length - 1) {
                check2 = !check2
            }
        }
    }
    return check1 && check2
}

function checkPhone(phone) {
    var regex = /^[0-9]+$/
    if(phone.length == 12) {
        for(x = 0;x<phone.length;x++) {
            if(!(regex.test(phone.charAt(x)) || phone.charAt == "-" )) {
                return false
            }
            return true     
        }
    } else {
        if(phone.length == 10) {
            return regex.test(phone)
        }
    }
}

function checkAddress(address) {
    return address.includes(',')
}