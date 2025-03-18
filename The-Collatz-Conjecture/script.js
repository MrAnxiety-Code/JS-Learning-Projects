//The Collatz Conjecture
//Rules: 
// odd numbers multiply by 3 and add 1
// even numbers divide by 2

function collatz(){
    //Creates elements for the legend
    var oddText = document.createElement("p");
    oddText.innerHTML = "Odd Numbers, ";
    var evenText = document.createElement("p");
    evenText.innerHTML = " Even Numbers";
    oddText.className = "odd";
    oddText.id = "oddLegend";
    evenText.className = "even";
    evenText.id = "evenLegend";

    //Gets the number from the input and does the collatz algorithm on it. Stores the numbers in an array.
    var num = document.getElementById("number").value;
    var arr = [];
    arr.push(num);
    console.log(num);
    if(num > 0){
        while (num != 1){ //If you don't have the loop break when it reaches 1, it will infinitely loop through 1, 4, 2, 1.
            if(num % 2 == 0) {
                num = num / 2;
            }
            else {
                num = num * 3 + 1;
            }
            console.log(num); //For debugging
            arr.push(num);
        }

        //Output the numbers into a list from the array and the steps it took to get to 1
        var output = document.getElementById("output");
        var steps = document.getElementById("steps");
        steps.innerHTML = `Steps to One: ${arr.length}`;
        steps.appendChild(oddText);
        oddText.appendChild(evenText);
        output.innerHTML = ""; //clears the output for the next number, assuming the user is trying another number.
       arr.forEach(n => {
        if(n % 2 == 0) {
            var eP = document.createElement("p");
            eP.className = "even";
            eP.innerHTML = n;
            output.appendChild(eP);
        }
        else {
            var oP = document.createElement("p");
            oP.className = "odd";
            oP.innerHTML = n;
            output.appendChild(oP);
        }
       })
    }
    else {
        output.innerHTML = "Please enter a postive number or a number other than 0"; //Error message for negative numbers, 0, or no input
    }
}