const slider = document.getElementById("myRange");
const output = document.getElementById("myRange-output");
output.innerHTML =`Value: ${slider.value}`;


slider.addEventListener("input", ()=>{
    output.innerHTML = `Value: ${slider.value}`;
    console.log(slider.value)
})