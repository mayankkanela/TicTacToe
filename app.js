let cells = document.querySelectorAll('.cell');
let body =document.querySelector('body');
let gameOver=false;
let board= document.querySelector('#board');


cells.forEach(function(cell,index)
{
cell.addEventListener("click",cellClicked(index));
});
var i=0;
let winConditions=['123','456','789','159','357','147','258','369']
let zero="";
let cross="";
let value="";
function cellClicked(index)
{
return function(e){
    if(gameOver)
    {  
        return;
    }
    if(i%2==0){
        e.target.textContent="O";
         zero+=index+1;
         if(zero.length>2)
         checkwinner('O',zero);
    }
    else
    {
    e.target.textContent="X";
    cross+=index+1;
    if(cross.length>2)
    checkwinner('X',cross);    
    }
    i++;
    if(i>8)
    window.location.reload();

}
}
function checkwinner(player,value)
{
 if(player=='O')
 {  
     for(var j=0;j<winConditions.length;j++)
     if(value.includes(winConditions[j])||value.includes(winConditions[j].split('').reverse().join('')))
        {
            console.log(true);
            let h2 =document.querySelector('h2');
            h2.textContent="O wins..click anywhere to reset";
           gameOver=true;
         board.addEventListener("click",function(e){
             console.log(e.target);
            if(e.target==board)
            reload();
              
        }); 
           break;
        }
    }
    else
    if(player=='X')
    {  
        for(var j=0;j<winConditions.length;j++)
        if(value.includes(winConditions[j])||value.includes(winConditions[j].split('').reverse().join('')))
           {
               console.log(true);
               let h2 =document.querySelector('h2');
               h2.textContent="X wins..click anywhere outside box to reset";
               gameOver=true;  
           
              board.addEventListener("click",function(e){
                   if(e.target==board)
                    reload();
              
            }); 
              break;
           }
       }
       

}

function reload(){
    window.location.reload();
}
