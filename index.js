const result=document.querySelector("input");
function show(obj){
    if(obj.innerText=='X')
        result.value+='*';
    else
        result.value+=obj.innerText;
}

const acBtn=document.querySelector(".ac");

acBtn.addEventListener('click',()=>{
    result.value="";
})


function compute(){
    let answer=eval(result.value);
    result.value=answer;
}
