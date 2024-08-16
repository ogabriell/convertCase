var upper = document.getElementById("upper")
var lower = document.getElementById("lower")
var camel = document.getElementById("camel")

upper.addEventListener("click", () => {
    let text = document.getElementById("textarea").value
    document.getElementById("textarea").value = text.toUpperCase()
})
lower.addEventListener("click", () => {
    let text = document.getElementById("textarea").value
    document.getElementById("textarea").value = text.toLowerCase()
})
camel.addEventListener("click", () => {
    let text = document.getElementById("textarea").value.split("")
    var newText = []
    let upp = false
    text.forEach((e,i) => {
        if(e == " "){
            text.splice(i,0)
            upp = true
        }else{
            if(upp){
                newText.push(e.toUpperCase())
                upp = false
            }else{
                newText.push(e.toLowerCase())
            }
        }
    });
    text = ""
    newText.forEach((e)=>{
        text+=e
    })
    document.getElementById("textarea").value = text
})