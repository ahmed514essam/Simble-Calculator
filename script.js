let output = document.querySelector(".result")

function display(num){
    output.value += num
}
function Clear(){
    output.value = "";
}
function Delete(){
    output.value = output.value.slice(0 , -1);
}

function calc(){

    if (output.value == ""){
        alert("You Must enter calc operation");
    }
    else{

   output.value = eval(output.value)
    }
}
