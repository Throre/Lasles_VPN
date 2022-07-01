let div = document.querySelector(".modal_window")
let login_input = document.getElementById("login_input")
let number_input = document.getElementById("number_input")
function openModal(){
    div.classList.add("active")
}
function closeModal(){
    div.classList.remove("active")
}
let register = [{
        name: "Denis",
        number: 87777260047
    },
    {   
        name: "Roman",
        number: 87772495525
    },
    {
        name: "Valeruy",
        number: 87771488228
    }
]
function register_check(){
    for(let user of register){
        if (user.name == login_input.value && user.number == number_input.value){
            alert("Вы зарегистрированы")
            break
        }
        else{
            alert("Спасибо за регистрацию")
            break
        }
    }
}