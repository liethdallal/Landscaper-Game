let user = {
    name: '',
    totalMoney: 0
}

user.name = prompt('what is your name Landscaper?')

alert(`Welcome ${user.name} your goal in this game is to reach $10,000 by using tools to cut grass! Good luck :) `)


const useTeeth = document.querySelector('.teeth');
//the use teeth button 


const money = document.querySelector('.money');
//the dollar digit that is dispalyed on top 





const useScissors = document.querySelector('.scissors')
//The Use Scissors button 

const buyScissors = document.querySelector('.buy-scissor')
//The buy the siccors option with button nested in it 

const buyButtonS = document.querySelector('.buy')
//The button for the buy siccors





const useLawnmower = document.querySelector('.lawnmower')
//The use button for lawnmower 

const buyLawnmower = document.querySelector('.buy-lawnmower')
//The buy lawnmower option with button nested in it 

const buyButtonL = document.querySelector('.buyl')
//The buy lawnmower button




const usePlawnmower = document.querySelector('.plawnmower')
//The use button for powered lawnmower

const buyPlawnmower = document.querySelector('.buy-poweredmower')
//The buy Powered Lawnmower button nested in it 

const buyButtonP = document.querySelector('.buypl')
//The buy lawnmower button 




const useStudents = document.querySelector('.students')
//The use button for starving students 

const buyStudents = document.querySelector('.buy-students')
//The buy starving students button nested in it 

const buyButtonStud = document.querySelector('.buystud')





user.totalMoney = 0

function updateMoney () { 
    money.textContent = user.totalMoney;
}
//We can call this function to call money


function checkThreshhold(){
    if (user.totalMoney >= 5 && !alertStatusForS){
        alert('You can now buy Siccors! To make $5 per cut!')
        buyScissors.style.display = 'block'; 
        alertStatusForS = true;
    }
    if (user.totalMoney >= 25 && !alertStatusForL) {
        alert('You can now buy a push lawnmower!')
        buyLawnmower.style.display = "block"
        alertStatusForL = true;
    }
    if(user.totalMoney >= 250 && !alertStatusForPl){
        alert('You can now buy a powered lawnmower!')
        buyPlawnmower.style.display = 'block'
        alertStatusForPl = true;
    }

    if(user.totalMoney >=500 && !alertStatusForStudents){
        alert('You can now hire students!')
        buyStudents.style.display = 'block'
        alertStatusForStudents = true;
    }
    if(user.totalMoney >= 10000 && !gameOver) {
        alert(`Congradulations You beat the Game ${user.name} :)`)
        alert('You can contiue if you would like goodbye for now :)')
        gameOver = true;
    
    }
}
//instead of calling them over and over we made a function for them :)





let alertStatusForS = false;
//used for no repition of alerts after reaching 5
let alertStatusForL = false;
//used for no repition of alert after reachig 25
let alertStatusForPl = false;
//used for no repition of alert after reaching 250
let alertStatusForStudents= false;
//Used for no repition of alert after reaching 500

let gameOver = false;




//--------------------------------------------------------------Use Teeth Button
useTeeth.addEventListener('click', function () {
    user.totalMoney ++
    updateMoney()
    checkThreshhold()
})



//-------------------------------------------------------------Buying Scissors on the bottom
buyButtonS.addEventListener('click', function () {
        useScissors.style.display = 'block';
        user.totalMoney -= 5;
        updateMoney()
        buyScissors.style.display = 'none'
    })




//-----------------------------------------------------------------Use Scissors Button

useScissors.addEventListener('click', function () {
    user.totalMoney += 5
    updateMoney()

   checkThreshhold()
})

//---------------------------------------------------------Buying Lawnmower Button
buyButtonL.addEventListener('click', function () {
    useLawnmower.style.display = 'block'
    user.totalMoney -= 25;
    updateMoney()
    buyLawnmower.style.display = 'none'

})

//--------------------------------------------------------------Use Lawnmower Button
useLawnmower.addEventListener('click', function () {
    user.totalMoney += 50;
    updateMoney()

    checkThreshhold()
})

//---------------------------------------------------------------Buying Powered Lawnmower
buyButtonP.addEventListener('click', function () {
    usePlawnmower.style.display = 'block'
    user.totalMoney -= 250
    updateMoney()
    buyPlawnmower.style.display = 'none'
})

//------------------------------------------------------------------Use Powered Lawnmower
usePlawnmower.addEventListener('click', function () {
    user.totalMoney += 100
    updateMoney()

   checkThreshhold()
})

//-------------------------------------------------------------------------Buying Starving Students
buyStudents.addEventListener('click', function () {
    useStudents.style.display = 'block'
    user.totalMoney -= 500
    updateMoney()
    buyStudents.style.display = 'none'
    alert('All you need now is $10000 and You will Win!!')
})

//------------------------------------------------------------------------------Use Starving Student 
useStudents.addEventListener('click', function () {
    user.totalMoney += 250
    updateMoney()

   checkThreshhold()
})


