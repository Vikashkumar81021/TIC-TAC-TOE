console.log('this is tic tac toe game')

let music=new Audio("music.mp3")
let  audioTurn=new Audio("ting.mp3")
let gameOver=new Audio("gameover.mp3")
let isgameover = false;
let turn="x"

//FUNCTION CHANGE THE TURN
const changturn=()=>{
  return turn ==="x"?"0": "x"  //TERNARY OPERATOR

}

//FUNCTION TO CHECK WIN
const checkwin=()=>{
  let boxtest=document.getElementsByClassName('boxtest')
 let wins=[
  [0, 1, 2, 5, 5, 0],
  [3, 4, 5, 5, 15, 0],
  [6, 7, 8, 5, 25, 0],
  [0, 3, 6, -5, 15, 90],
  [1, 4, 7, 5, 15, 90],
  [2, 5, 8, 15, 15, 90],
  [0, 4, 8, 5, 15, 45],
  [2, 4, 6, 5, 15, 135],
]
 
 wins.forEach(e =>{
  if((boxtest[e[0]].innerText === boxtest[e[1]].innerText) && (boxtest[e[2]].innerText === boxtest[e[1]].innerText) && (boxtest[e[0]].innerText !== "") ){
      document.querySelector('.info').innerText = boxtest[e[0]].innerText + " Won"
      isgameover = true
    
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
    document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      document.querySelector(".line").style.width = "20vw";
  }
})
}





//GAEM LOGIC

 music.play()//

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
 let boxtest=element.querySelector(".boxtest");
 element.addEventListener('click',()=>{
  if(boxtest.innerText === ''){
    boxtest.innerText=turn;
   turn= changturn();
   audioTurn.play();
   gameover = new Audio("gameover.mp3")
    checkwin();
    if (!isgameover){
      document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
  } 
     
   

  }
 })
})



btn.addEventListener('click',(element)=>{
  let boxtests=document.querySelectorAll(".boxtest");
  Array.from(boxtests).forEach(element =>{
    element.innerText= " "
    });
    turn = "X"; 
    isgameover = false
     document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
})