// Get the button and container from HTML:
const button = document.getElementById("theButton")
const data = document.getElementById("info")


// Create an array of command data to send to the rhino web server:
///future: get lsit of files in repo to run , parse json for data inuts to build from forms


const rhino = [
	{ "name": "Circle", "command":"Circle", "radius":"12", "centerpoint": "0,0,0" },
	{ "name": "WhiteRabbit","command":"RunPythonScript", "filepath":"C:\rhino-py\white-rabbit.py" },
	{ "name": "Epicycloid","command":"RunPythonScript","filepath":"C:\rhino-py\epicycloid.py"}
];

// Create an event listener on the button element:
button.onclick= function(){
    
    // Get the receiver endpoint from Python using fetch:
    fetch("http://127.0.0.1:5000/receiver", 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        // Strigify the payload into JSON:
        body:JSON.stringify(rhino)}).then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    alert("something is wrong")
                }
            }).then(jsonResponse=>{
                
                // Iterate through the data with Map and write your rendering logic:
                jsonResponse.map(Main=>            
       Main.name==="WhiteRabbit"? data.innerHTML +="<p>"+ Main.name+" "+" Runs the Matrix Web Communication Test":
       Main.name==="Circle"? data.innerHTML +="<p>"+ Main.name+" "+" Draws A Test Circle":
       data.innerHTML +="<p>"+ Main.name+" "+" Builds an epicycloid over the test circle");
 }
       
).catch((err) => console.error(err)); } 