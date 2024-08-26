
src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
/*Method to check that the user’s email matches the confirmation
email.*/
let form = document.getElementById("enquiry");
form.email.onchange = checkEmail;
form.confirmemail.onchange = checkEmail;
function checkEmail() {
  console.log("tst");
  
  if (form.email.value === form.confirmemail.value)
    form.confirmemail.setCustomValidity("");
  else form.confirmemail.setCustomValidity("The two emails do not match.");
  form.reportValidity();
}

/*Method to check that the date is at least 1 day in the future*/
function checkDate() {
  let date = document.getElementById("date").value;

  console.log(date);

  var now = new Date();

  var target = new Date(date);

  console.log(now);

  console.log(target);
  if (target.getFullYear() > now.getFullYear()) {
    console.log("valid");

    return true;
  } else if (target.getFullYear() == now.getFullYear()) {
    if (target.getMonth() > now.getMonth()) {
      return true;
    } else if (target.getMonth() == now.getMonth()) {
      if (target.getDate() >= now.getDate()) {
        return true;
      } else {
        alert("Date must be in the future");
      }
    }
  } else {
    alert("Date must be in the future");
  }
}

/* Produce a pop-up which summarises the form data and
includes your Aston Email address in a To Section and asks
the user to confirm. Your website should not actually send
an email.*/


function EnquiryConfirmation() {
  
    var newLine = "\r\n"
    var msg = "Please confirm your details."
    msg += newLine;
    msg += "Name: " + form.name.value;
    msg += newLine;
    msg += "Email: " + form.email.value;
    msg+= newLine;
    msg += "Phone: " + form.phonenumber.value;
    msg+= newLine;
    msg += "Enquiry date: "+ form.date.value;
    msg+= newLine;
    msg += "Enquiry duration: " + form.dropBox.value;  
    msg += newLine;
    msg += "Contact method: " + form.rdo.value
  	msg+= newLine;
    msg += "Enquiry details:  " + form.details.value;

	
    alert(msg);
}