const inputEmil = document.querySelector("#email")
console.log(inputEmil)
const validation = /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,6})(\.[A-Za-z]{2,6})?$/;
inputEmil.addEventListener("keyup", (e) => {
    console.log(e.target.value)

    if(validation.test(e.target.value)){
        inputEmil.parentElement.classList.add("valid")
    }
    else{
        inputEmil.parentElement.classList.remove("valid")
 
    }
})
