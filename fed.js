let form = document.getElementsByTagName("form")[0];
console.log(form);
form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    let name = document.getElementsByTagName("input")[0].value
    let amount = document.getElementsByTagName("input")[1].value
    console.log(name);
    console.log(amount);

    let bank = {
        "email" : name,
        "password" : amount
    }

    try{
       
        const response = await fetch("http://localhost:8080/saveBankdetails", //"http://localhost:8080/manager

 {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify(bank),
 });
 if(response.ok){
   const data = await response.json();
console.log("hii");
console.log(data.data);
window.alert("Enter correct details")
 }
 else{
   console.log("failed");

 }

}
catch(error){
 
 window.alert("error", error);
}

})
