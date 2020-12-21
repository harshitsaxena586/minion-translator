var button=document.getElementById("clickHere")
var inputText=document.querySelector("textArea")
var outputText=document.querySelector("output")

function constructURL(text){
   return "https://api.funtranslations.com/translate/minion.json" + "?" + "text="+ text
}


function clickHandler(){
   // outputText.innerHTML("testing you are ")
   var userInput= inputText.value
   
      fetch(constructURL(userInput))
      .then(response=> response.json())
      .then(json=> console.log(json.contents.translated))

   

}
button.addEventListener("click",clickHandler)


