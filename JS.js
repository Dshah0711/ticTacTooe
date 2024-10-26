let btns =document.querySelectorAll(".box");
let winner =document.querySelectorAll(".winner");
let flag =true;
let para =document.querySelector(".text");
let newbtn =document.querySelector("#new-btn");
let resetbtn =document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".somi");
let msg =document.querySelector("#msg");
const showWinner=(win)=>{
          msg.innerText=`Kudos to ${win}`;
           msgContainer.classList.remove("hide");
           disable();
}
let enable=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
    }
newbtn.addEventListener("click",()=>{
    flag=true;
    enable();
    msgContainer.classList.add("hide");
})
resetbtn.addEventListener("click",()=>{
    flag=true;
    enable();
})

let winArray =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let disable=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }}
let checkWinner=()=>{
    for(let pattern of winArray){
        if(btns[pattern[0]].innerText!="" && btns[pattern[1]].innerText!="" && btns[pattern[2]].innerText!=""){
           if( btns[pattern[0]].innerText=== btns[pattern[1]].innerText &&  btns[pattern[1]].innerText===btns[pattern[2]].innerText){
                   
                   showWinner(btns[pattern[0]].innerText);
           }
        }
    }
}
for(let btn of btns){
    btn.addEventListener("click",()=>{
        console.log("btn was clicked");
        
        if(flag){
            btn.innerText="O";
            flag=false;
        }
        else{
            btn.innerText="X";
           flag=true;
        }
        btn.disabled=true;
        checkWinner();
    })
   
}

