//The Collatz Conjecture
//Rules: 
// odd numbers multiply by 3 and add 1
// even numbers divide by 2

function collatz(){
    var num = document.getElementById("number").value;
    var output = document.getElementById("output");
    var arr = [];
    arr.push(num);
    console.log(num);
    if(num > 0){
        while (num != 1){
            if(num % 2 == 0) {
                num = num / 2;
            }
            else {
                num = num * 3 + 1;
            }
            console.log(num);
            arr.push(num);
        }
        output.innerHTML = arr;
    }
    else {
        output.innerHTML = "Please enter a postive number or a number other than 0";
    }
}