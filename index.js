function play() 
{
  let uNum = parseInt(document.getElementById("txtNum").value);
  let rNum = parseInt((Math.random() * 10) + 1); // 0.0 to 0.9 
  

  if( uNum == rNum )
  {
        document.getElementById("spnResult").innerHTML = "You got it G";
  }
  else
  {
         document.getElementById("spnResult").innerHTML = "Nah son, try again! the number is " + rNum;
  }
} 
function reset()
{
    document.getElementById("txtNum").value = "0";
    document.getElementById("spnResult").innerHTML="";
}

 
fetch('./CV.json')
  .then(response => response.json())
  .then(data =>{
    let educationlist = document.getElementById("education")
    let myEducation = data.MyEducation
    myEducation.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      educationlist.appendChild(li);
    })
    
    let expertiselist = document.getElementById("EXPERTISE")
    let eXPERTISE = data.EXPERTISE
    eXPERTISE.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      expertiselist.appendChild(li);
    })

    let toolslist = document.getElementById("Tools")
    let tools = data.TOOLS
    tools.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      toolslist.appendChild(li);
    })

    let languageslist = document.getElementById("languages")
    let languages = data.LANGUAGES
    languages.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      languageslist.appendChild(li);
    })
    let uXdesignerList = document.getElementById("UXdesigner")
    let uXdesigner = data.UXdesigner
    uXdesigner.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      uXdesignerList.appendChild(li);
    })
    let FictiverealityList = document.getElementById("Fictivereality")
    let Fictivereality = data.Fictivereality
    Fictivereality.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      FictiverealityList.appendChild(li);
    })
    let graphicDesignList = document.getElementById("graphicDesign")
    let graphicDesign = data.GraphicDesigner
    graphicDesign.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      graphicDesignList.appendChild(li);
    })
    let neoludosList = document.getElementById("neoludos")
    let neoludos = data.Neoludos
    neoludos.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      neoludosList.appendChild(li);
    }) 
    let uxGraphicDesignerList = document.getElementById("UX/UI&graphicDesigner")
    let uxGraphicDesigner = data.UXUIgraphicDesigner
    uxGraphicDesigner.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      uxGraphicDesignerList.appendChild(li);
    })
    let areachicaList = document.getElementById("areachica")
    let areachica = data.areachica
    areachica.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      areachicaList.appendChild(li);
    })






  })
  .catch(error => console.log(error));


 


function showGame(){
  let targetDiv = document.getElementById("guessTheNumber");

  console.log("i am here")
  if (targetDiv.style.display === 'none') {
    targetDiv.style.display = 'block';
  } else{
    targetDiv.style.display = 'none';
  }
}
