function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value
    
    if(isNaN(parseFloat(formText))){
        alert("Please enter URL of news article");
    }
    else if (Client.checkForURL(formText) != true){
        alert('Enter correct URL');
    }
    else{
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/NewsURL',{
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ formText })
        })
        .then(res => res.json())
        .then(data => {
          document.getElementById("polarity").innerHTML = data.polarity;
          document.getElementById("subjectivity").innerHTML = data.subjectivity;
          document.getElementById("polarity_confidence").innerHTML =
            data.polarity_confidence;
          document.getElementById("subjectivity_confidence").innerHTML =
            data.subjectivity_confidence;
          document.getElementById("evaluated_text").innerHTML = data.text;
        })
    }
}

export { handleSubmit }
