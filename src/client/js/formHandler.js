function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('newsurl').value
    
    if(isNaN(parseFloat(formText))){
        alert("Please enter URL of news article");
    }
    else if (Client.checkForURL(formText) != true){
        alert('Enter correct URL');
    }
    else{
    console.log("::: Form Submitted :::")
    fetch('http://localhost:3000/NewsURL',{
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ formText })
        })
        .then(res => res.json())
        .then(res => {
          document.getElementById("polarity").innerHTML = res.polarity;
          document.getElementById("subjectivity").innerHTML = res.subjectivity;
          document.getElementById("polarity_confidence").innerHTML =
            res.polarity_confidence;
          document.getElementById("subjectivity_confidence").innerHTML =
            res.subjectivity_confidence;
          document.getElementById("evaluated_text").innerHTML = res.text;
        })
    }
}

export { handleSubmit }
