/* function init(mathFunction) {
    var a = 5;
    var b = 6;



    if (a < b){
    let c = mathFunction(b,a)
        
        
        (function(){
            var c = b - a;    
            console.log(c); 
        }) ();         
    } else {
        let c = mathFunction(a,b)
        (function(){
            var c = a - b;
            console.log(c); 
        })();
        
        console.log(c);
    };
 */

  /*   console.log(c); */


/* const initC = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
}

const initD = (firstNumber, secondNumber => {
    return firstNumber * secondNumber;
})

init(initD); */

//form kesztiese, 3 input mezovel , kis css mehet bele (1 gomb legyen benne,) az input mezokre mindegyikre input esemenyt tegyunk ra
//loggolja ki az értékét az input mezőnek
//50-kor tali

const formHTML = () => {
    return `
    <form >
            <input id="input1" name="input1" type="text">
            <input id="input2" name="input2" type="text">
            <input id="input3" name="input3" type="text">
            <select name="animals" id="animals">
                <option value="cats">cats</option>
                <option value="dogs">dogs</option>
                <option value="both">both</option>
            </select>
            <button>Send</button>
    </form>
    `
}

function loadEvent() {
    console.log("load");
    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend", formHTML())

    const form = rootElement.querySelector("form")

    const inputList = document.querySelectorAll('input')
    console.log(inputList);
    /* for (const input of inputList) {
        input.addEventListener("input", function(event){
            console.log(event.target);
        })
    } */
    Array.from(inputList).map(function(input){
        input.addEventListener("input", function(event){
            console.log(event.target);
        })
    })

    form.querySelector("select").addEventListener("input", function(){
        console.log(event.target.value);
    })

    form.addEventListener("sumbit", function(event){
        event.preventDefault()
        console.log(event.target);
    })


}

window.addEventListener("load", loadEvent)