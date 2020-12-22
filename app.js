var button=document.querySelector("#clickHere")
var inputText=document.querySelector("#textArea")
var outputDiv = document.querySelector("#output")

function constructURL(text){
   return "https://api.funtranslations.com/translate/minion.json" + "?" + "text="+ text
}

outputDiv.innerText = "hellllooo"
function clickHandler(){

//    var userInput= inputText.value
   
//       fetch(constructURL(userInput))
//       .then(response=> response.json())
//       .then(json=> console.log(json.contents.translated))

   

}
button.addEventListener("click",clickHandler)


