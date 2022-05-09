alert("YourMart would like to send you notifications.");

function checkStore(){

    var cityName = prompt("Enter your city name");
    var city =cityName.toUpperCase();
    var audioNo = new Audio("no.mp3");
    var flag =0;
    if(city ==""){
        checkStore();
        
    }
    if(city == "NEW DELHI" || city== "NOIDA" || city == "GURUGRAM" || city == "MEERUT" || city == "GHAZIABAD" || city == "FARIDABAD" || city == "DELHI"){
        var audioYes = new Audio("yes.mp3");
        audioYes.play();
        alert("Congratualtions! We have a store here 🥳");
        flag++;

    }
    if(flag ==0){
        audioNo.play();
        alert("No stores here right now. We will be coming to your area soon 🐶");
    }
}