let header=document.querySelector("#hello");
// let div=document.querySelector(".testimonials");
hello.textContent+=" Clifford Mwenda";
function changeColor(){
    let div=document.querySelector(".three");
    randomiser();
    if(randomiser()===0){
    div.style.backgroundColor="blue";
    }
    else if(randomiser()===1)
    {
        div.style.backgroundColor="red"
    }
    else if(randomiser()===2)
    {
        div.style.backgroundColor="yellow"
    }
    else if(randomiser()===3)
    {
        div.style.backgroundColor="green"
    }
    else if(randomiser()===4)
    {
        div.style.backgroundColor="purple"
    }
    else if(randomiser()===5)
    {
        div.style.backgroundColor="aqua"
    }
    else if(randomiser()===6)
    {
        div.style.backgroundColor="white"
    }
    else{
        console.log("no more please sir")
    }
}
function changeText(){
    document.querySelector(".one").textContent="Clear"
    document.querySelector(".two").textContent="Present"
    document.querySelector(".three").textContent="random number is: " + randomiser();
}
function randomiser(){
    return Math.floor((Math.random()*6)+1);
}