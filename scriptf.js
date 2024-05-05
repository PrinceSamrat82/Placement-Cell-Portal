function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

   // perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["name"].value;
    let textOnlyRegex = /^[A-Za-z]+$/;
   if (!textOnlyRegex.test(name)) {
        seterror("name", "*Name Should be only Text");
        returnval = false;
    }

    var gender = document.forms['myForm']["gender"].value;
    let textOnlyRegexg = /^[A-Za-z]+$/;
   if (!textOnlyRegexg.test(gender)) {
        seterror("gender", "*Gender Should be only Text");
        returnval = false;
    }

    var phone = document.forms['myForm']["phone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var email = document.forms['myForm']["email"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }


    var cname = document.forms['myForm']["cname"].value;
    let textOnlyRegexc = /^[A-Za-z]+$/;
   if (!textOnlyRegexc.test(cname)) {
        seterror("cname", "*College Name Should be only Text");
        returnval = false;
    }

   
    var branch = document.forms['myForm']["branch"].value;
    let textOnlyRegexb = /^[A-Za-z]+$/;
   if (!textOnlyRegexb.test(branch)) {
        seterror("branch", "*Branch Name Should be only Text");
        returnval = false;
    }

    var semester = document.forms['myForm']["semester"].value;
    let textOnlyRegexs = /^[A-Za-z]+$/;
   if (!textOnlyRegexs.test(semester)) {
        seterror("semester", "*Semester Name Should be only Text");
        returnval = false;
    }

   
   
     


    return returnval;
 }

