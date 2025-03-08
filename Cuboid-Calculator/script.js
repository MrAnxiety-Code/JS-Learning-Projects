let length = document.getElementById('length');
let width = document.getElementById('width');
let height = document.getElementById('height');

function volume() {
    let result = length.value * width.value * height.value;
    document.getElementById('volume').textContent = result;
    console.log(length.value);
    console.log(width.value);  
    console.log(height.value);
    console.log(result);
}