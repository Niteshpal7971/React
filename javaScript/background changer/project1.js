let button = document.querySelectorAll(".button");
let body = document.querySelector("body");


button.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e)
        console.log(e.target)
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id
        }
        
    })
})