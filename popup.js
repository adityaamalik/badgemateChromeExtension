// const username = document.getElementById("username").nodeValue;
// const password = document.getElementById("password");
// const badgeName = document.getElementById("badgeName").nodeValue;
// const recipient = document.getElementById("recipient").nodeValue;

const sendBtn = document.getElementById("send");

const message = document.getElementById("msg");

sendBtn.onclick = function() {

    // try{
    //     fetch(`http://localhost:3000/extensionIssue`,{
    //         method: 'POST',
    //     }).then(r => r.text()).then(result => {
    //         // Result now contains the response text, do what you want...
    //         message.style.display = "block";
    //         message.innerText = result;
    //     })
    // }catch(err){
    //     console.log(err);
    // }

    message.style.display = "block";
    message.innerText = "Successfully sent !"
    
}