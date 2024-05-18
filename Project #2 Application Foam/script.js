function submit1() {
    //first name
    let fname = document.getElementById("fname").value;
    let fnameError = document.getElementById("fnameError");
    fnameError.innerHTML = " ";

    //last name
    let lname = document.getElementById("lname").value;
    let lnameError = document.getElementById("lnameError");
    fnameError.innerHTML = " ";
 
    //email
    let youremail = document.getElementById("youremail").value;
    let youremailError = document.getElementById("youremailError");
    youremailError.innerHTML = " ";

    //job role
    let jobrole = document.getElementById("jobrole").value;
    let jobroleError = document.getElementById("jobroleError");
    jobroleError.innerHTML = " ";

    //address
    let address = document.getElementById("address").value;
    let addressError = document.getElementById("addressError");
    addressError.innerHTML = " ";

    //city
    let city = document.getElementById("city").value;
    let cityError = document.getElementById("cityError");
    cityError.innerHTML = " ";

    //pincode
    let pincode = document.getElementById("pincode").value;
    let pincodeError = document.getElementById("pincodeError");
    pincodeError.innerHTML = " ";

    //date
    let date = document.getElementById("date").value;
    let dateError = document.getElementById("dateError");
    dateError.innerHTML = " ";

    //file
    let file = document.getElementById("file").value;
    let fileError = document.getElementById("fileError");
    fileError.innerHTML = " ";


    if (fname == "") {
        fnameError.innerHTML = "*First Name is Required!"
        return false;
    }

    if (lname == "") {
        lnameError.innerHTML = "*Last Name is Required!"
        return false;
    }

    if (youremail == "") {
        youremailError.innerHTML = "*Email is Required!"
        return false;
    }

    if (jobrole == "") {
        jobroleError.innerHTML = "*Job-role is Required!"
        return false;
    }

    if (address == "") {
        addressError.innerHTML = "*Address is Required!"
        return false;
    }

    if (city == "") {
        cityError.innerHTML = "*City is Required!"
        return false;
    }

    if (pincode == "") {
        pincodeError.innerHTML = "*Pincode is Required!"
        return false;
    }

    if (date == "") {
        dateError.innerHTML = "*Date is Required!"
        return false;
    }

    if (file == "") {
        fileError.innerHTML = "*file is Required!"
        return false;
    }

    return true;
}

