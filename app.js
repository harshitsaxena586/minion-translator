var button=document.querySelector("#clickHere")
var inputText=document.querySelector("#textArea")
var outputDiv = document.querySelector("#output")

function constructURL(text){
   return "https://api.funtranslations.com/translate/minion.json" + "?" + "text="+ text
}

function errorHandler(error){
   console.log("error occured"+ error)
   alert("something wrong with our server, pleas try again later")
}

function clickHandler(){

   var userInput= inputText.value
   
      fetch(constructURL(userInput))
      .then(response=> response.json())
      .then(json=> finalOutput=json.contents.translated
      .catch(errorHandler)
      )
      outputDiv.innerText = finalOutput
      

}
button.addEventListener("click",clickHandler)


