var risks = document.getElementsByClassName("risk__option");
console.log(risks[0]);

var buttons = document.getElementsByClassName("risk__optionimg");
console.log(buttons);

for(i = 0; i < buttons.length; i++) {
   buttons[i].onclick = function() {
       removeLabel();
   }
}

function removeLabel() {
    
    risks[].classList.add("remove"); 
}



/*buttons[0].onclick = function() {
    risks[0].classList.add("remove");  
    }

buttons[1].onclick = function() {
    risks[1].classList.add("remove");  
    }

buttons[2].onclick = function() {
    risks[2].classList.add("remove");  
    }*/