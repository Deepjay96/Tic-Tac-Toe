
console.log("Welcome to Tic Tac Toe")

let turn = "X"

let resetbtn = document.getElementById("reset")

let  gameover = false

const changeTurn = () =>{
    return turn === "X"? "0" : "X"
} 

const checkWin = () =>{

    let boxtext = document.getElementsByClassName("boxtext")
     
    let win = [
        [0,1,2] ,
        [3,4,5] , 
        [6,7,8] ,
        [0,3,6] ,
        [1,4,7] ,
        [2,5,8] ,
        [0,4,8] ,
        [2,4,6] 
    ]

    win.forEach((t)=>{
        if((boxtext[t[0]].innerText === boxtext[t[1]].innerText) && (boxtext[t[2]].innerText === boxtext[t[1]].innerText) && (boxtext[t[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[t[0]].innerText + " won "
            gameover = true
        }

      

     

    })

   
} 

checkWin()

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((e)=>{  

  
    
    let bt = e.querySelector('.boxtext');

    e.addEventListener('click' , ()=>{
        
    
      if(bt.innerText == ''){  
            bt.innerText = turn;
            turn =  changeTurn();
            checkWin()
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = " Turn for " +  turn;
            } 
            
      } 
 

    }) 
    
})

resetbtn.addEventListener('click' , ()=>{

 
    let bt = document.querySelectorAll('.boxtext');
   
    Array.from(bt).forEach((v)=>{
           v.innerText = " "
    })
    




})







