function handleSubmit(event) {
  event.preventDefault()
  let text = document.getElementById('newsurl').value
    
  if(true){
    fetch('http://localhost:3000/NewsURL',{
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    })
      .then(res => {
        return res.json()
      })
      updateUI('/test');
  }
}
const updateUI = async (url='') => {
  const req = await fetch(url);
  try{
    const Response = await req.json();
    document.getElementById("polarity").innerHTML = Response.polarity;
    document.getElementById("subjectivity").innerHTML = Response.subjectivity;
    document.getElementById("polarity_confidence").innerHTML =Response.polarity_confidence;
    document.getElementById("subjectivity_confidence").innerHTML =Response.subjectivity_confidence;
    document.getElementById("excerpt").innerHTML = Response.text;
  }
  catch(error){
    console.log("error", error);
  }
};
export { handleSubmit }
