const formHTML = async () => {
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

    form.addEventListener("submit", function(event){
        event.preventDefault()
        console.log(event.target);
    })


    const apiKey = "Ny0bOdOANPLt2GoKu3PaP5K58yzz1Ve2dN54m52b"
    const requestedDate = "2022-02-22"
    const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${requestedDate}`)

    const apodJson = await apod.json()
    console.log(apodJson.explanation);

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${requestedDate}`).then(
        function (apodResponse) {
            console.log(apodResponse);
            apodResponse.json().then(
                function(apodResponseJson) {
                    console.log(apodResponseJson);
                }
            )
        }
    )

}

window.addEventListener("load", loadEvent)