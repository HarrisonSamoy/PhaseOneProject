function validateForm() {

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var emailAddress = document.getElementById("emailAddress").value;
  var message = document.getElementById("message").value;

  var nameRegex = /^[a-zA-Z\s]+$/
  var emailRegex = /^\S+@\S+\.\S+$/

  var fnError = lnError = emailError = messageError = true;

  // First Name Validation
  if (firstName == "") {
    writeError("firstNameError", "Please enter your first name.")
  }
  else {
    if (nameRegex.test(firstName)) {
      writeError("firstNameError", "Please enter a valid first name.")
    }
    else {
      writeError("firstNameError", "")
      fnError = false;
    }
  }

    // Last Name Validation
    if (lastName == "") {
      writeError("lastNameError", "Please enter your last name.")
    }
    else {
      if (nameRegex.test(lastName)) {
        writeError("lastNameError", "Please enter a valid last name.")
      }
      else {
        writeError("lastNameError", "")
        lnError = false;
      }
    }

    //Email Validation
    if (emailAddress == "") {
      writeError("emailAddressError", "Please enter your email.")
    }
    else {
      if (emailRegex.test(emailAddressName)) {
        writeError("emailAddressError", "Please enter a valid email.")
      }
      else {
        writeError("emailAddressError", "")
        emailError = false;
      }
    }

    //Message Validation
    if (message == "") {
      writeError("messageError", "Please enter you message.");
    }
    else {
      messageError = false;
    }

    if (!(fnError | lnError | emailError | messageError)) {
      alert("Thank you for your interest. Your submission has been sent.")
      return true;
    }
    else {
      return false;
    }
}

function writeError(element, msg) {
  document.getElementById(element).innerHTML = msg;
}