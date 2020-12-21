var button=document.getElementById("clickHere")
var inputText=document.querySelector("textArea")

function clickHandler(){
   console.log("welcome "+ inputText.value)


}
button.addEventListener("click",clickHandler)

url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
fetch