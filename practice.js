let now = {
    state : "start"
};

function greeting(){
            console.log("LETS START. I am your DOCTOR APPOINTMENT BOT. Just tell me whether you are ill")
}
function bot(message){
    message = message.toLowerCase()
    if (now.state === "start"){
        if (message.includes("ill")){
            now.state = "symptoms"
            return("What sympotms do you have?")
        } else {
            return "Sorry please tell me wheather you are ill"
        }
    }
    if (now.state === "symptoms"){
        if (true){
            now.state = "choose"
            return("Ohhh, sorry to hear that. Do you want a GP or S?")
        }
    }
    if(now.state === "choose"){
        if (message.includes("gp")){
            now.state = "confirm"
            return("Confirm appointment with GP?")
        } else if (message.includes("s")){
            now.state = "confirm"
            return("Confirm appointment with S?")
        }else {
            return("Sorry choose S or GP")
        }
    }
    if(now.state === "confirm"){
        if (message.includes("confirm") || message.includes("Yes")){
            now.state = "start"
            return "Appointment booked!"

        } else if (message.includes("no") || message.includes("Not")){
            now.state = "start"

            return("Okay, booking canceled")
        } else{
            return("Please tell me to confirm or not")
        }
    }
}

function send(){
    let Input = document.getElementById("input");
    let chat = document.getElementById("chat");

    let userInput = Input.value
    let reply = bot(userInput)
    
    let divInput = document.createElement("div");
    let divresponse = document.createElement("div");
    
    divInput.innerText = userInput;
    divresponse.innerText = reply;

    divInput.className = "user";
    divresponse.className = "bot";

    chat.appendChild(divInput)
    chat.appendChild(divresponse)

    Input.value = ""
    chat.scrollTop = chat.scrollHeight;

}
input.addEventListener("keydown", enterFun);

function enterFun(event){
    if (event.key === "Enter"){
        send();
    }
}

greeting()