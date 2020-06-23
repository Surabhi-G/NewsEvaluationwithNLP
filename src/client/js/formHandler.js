function handleSubmit(event) 
{  event.preventDefault()  
  let formText = document.getElementById('newsurl').value  
  if (Client.checkForURL(formText) != true){      
    alert('Enter correct URL');  
  }  
  else{  
  console.log("::: Form Submitted :::")  
  fetch('http://localhost:3000/NewsURL',{      
    method: "POST",      
    mode: "cors",      
    headers: {        
      "Content-Type": "application/json"      
    },      
    body: JSON.stringify({ text : formText })      
  }).then((res) => res.text())        
  .then(function(res) {                  
    console.log(res);                 
    document.getElementById("polarity").innerHTML = res.polarity;                  
    document.getElementById("polarity_confidence").innerHTML =res.polarity_confidence;                   
    document.getElementById("subjectivity").innerHTML = res.subjectivity;                   
    document.getElementById("subjectivity_confidence").innerHTML =res.subjectivity_confidence;       
  })          
}}
export { handleSubmit }