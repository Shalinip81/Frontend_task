const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        age = document.getElementById('age').value,
        address = document.getElementById('address').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.fname.toLowerCase() == fname.toLowerCase() &&
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if (!exist) {
        formData.push({ fname, lname, age, address, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else {
        alert("Duplicate...... found!!!\nYou have already signed up");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    
//    let name=document.getElementById('fname').value
    
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if (!exist) {
        alert("Incorrect login credentials");
    }
    else {
        // location.href = "/";
        alert("Login successfully!!")
        window.location.href = "logout.html";
        // GETTING DATA IN SESSION STORAGE
        var data = sessionStorage.setItem('maindata', JSON.stringify(email));
        // var data =sessionStorage.setItem('maindata',JSON.stringify(name));

    }
    e.preventDefault();

}