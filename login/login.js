let name = document.querySelector("#name");
let email = document.querySelector("#email");
let myform = document.querySelector("#myform");

const isFullName = (str) => /^[a-zA-Z]+ [a-zA-Z]+$/.test(str);
const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

myform.addEventListener("submit", (e) => {
    if(name.value.trim() === "")
    {
        alert("Please enter your name");
        name.focus();
        e.preventDefault();
        return;
    }
    if(!(isFullName(name.value.trim())))
    {
        alert("Please enter your FULL name");
        name.focus();
        e.preventDefault();
        return;
    }

    if(email.value.trim() === "")
    {
        alert("Please enter your email address");
        email.focus();
        e.preventDefault();
        return;
    }
    if(!(isEmail(email.value.trim())))
    {
        alert("Invalid email format");
        email.focus();
        e.preventDefault();
        return;
    }

});