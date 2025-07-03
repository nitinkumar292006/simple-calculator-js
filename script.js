let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let mul = document.querySelector(".multiply");

let string = "";
let array = Array.from(buttons);
mul.innerHTML = "*"
array.forEach(buttons => {
    buttons.addEventListener("click", (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string
        }else if(e.target.innerHTML == "C"){
            string = "";
            input.value = string;
        }else if(e.target.innerHTML == "Del"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
