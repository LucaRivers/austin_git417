//sets JS to strict
"use strict";

//---------------------------------------DARK MODE func--------------------------------------------------------------------

let counter = 0;
let htmlOuter = document.querySelector("html");
let wrapper = document.querySelector("#wrapper");
let nav = document.querySelector("nav");
let aboutH2 = document.querySelector("#about h2");
let snowboardH2 = document.querySelector("#snowboards h2");

document.querySelector("footer h3").addEventListener("click", function(){

    counter += 1;
    //adds / removes classes to change color based on dark or light mode
    if(counter % 2){
        wrapper.classList.remove("lightMode");
        wrapper.classList.add("darkModeMed");

        htmlOuter.classList.remove("lightMode");
        htmlOuter.classList.add("darkModeDark");

        nav.classList.remove("lightMode");
        nav.classList.add("darkModeLight");

        aboutH2.classList.remove("lightModeWhite");
        aboutH2.classList.add("darkModeLight");

        snowboardH2.classList.remove("lightModeWhite");
        snowboardH2.classList.add("darkModeLight");

        document.querySelector("footer").classList.add("darkModeLight");

        document.querySelector("#p1").classList.remove("lightModeWhite");
        document.querySelector("#p1").classList.add("darkModeLight");

        document.querySelector("#p2").classList.remove("lightModeWhite");
        document.querySelector("#p2").classList.add("darkModeLight");

        document.querySelector("#p3").classList.remove("lightModeWhite");
        document.querySelector("#p3").classList.add("darkModeLight");

        document.querySelector("#p4").classList.remove("lightModeWhite");
        document.querySelector("#p4").classList.add("darkModeLight");

    }else{
        wrapper.classList.remove("darkModeMed");
        wrapper.classList.add("lightMode");

        htmlOuter.classList.remove("darkModeDark");
        htmlOuter.classList.add("lightMode");

        nav.classList.remove("darkModeLight");
        nav.classList.add("lightMode");

        aboutH2.classList.remove("darkModeLight");
        aboutH2.classList.add("lightModeWhite");

        snowboardH2.classList.remove("darkModeLight");
        snowboardH2.classList.add("lightModeWhite");

        document.querySelector("footer").classList.remove("darkModeLight");

        document.querySelector("#p1").classList.remove("darkModeLight");
        document.querySelector("#p1").classList.add("lightModeWhite");

        document.querySelector("#p2").classList.remove("darkModeLight");
        document.querySelector("#p2").classList.add("lightModeWhite");

        document.querySelector("#p3").classList.remove("darkModeLight");
        document.querySelector("#p3").classList.add("lightModeWhite");

        document.querySelector("#p4").classList.remove("darkModeLight");
        document.querySelector("#p4").classList.add("lightModeWhite");

    }
});

//---------------------------------------PRODUCT SHOWCASE func--------------------------------------------------------------------

//sets the prodcut showcase to clicked item
//p1
document.querySelector("#p1").addEventListener("click", function(){
    document.querySelector("#productShowcase p").innerHTML = "From its humble beginnings, innovation has defined the Burton Custom Snowboard series and set it apart as the most popular, versatile, and mimicked board in snowboarding. Since 1996, this icon has reigned supreme and constantly evolved with a proven formula that combines time-honored design with envelope-pushing ingredients to create a lightweight, poppy, and highly versatile board. Offered in two versions, the precision and stability of the Custom camber is the top choice for many pro riders, while the Custom Flying V™ combines camber's power with the relaxed float of rocker for the best of both worlds.";
    document.querySelector("#productShowcase h3").innerHTML = "Burton Custom 2023";
    document.querySelector("#productShowcase img").src = document.querySelector("#p1 img").src;
});

//p2
document.querySelector("#p2").addEventListener("click", function(){
    document.querySelector("#productShowcase p").innerHTML = "Constantly evolved to drop ounces and amplify pop, the men's Burton Process Snowboard is Mark McMorris' pick for its twin freestyle playfulness and all-terrain prowess. Featuring PurePop camber for a forgiving yet snappy feel, the Process is suited to the freestyle rider, but still capable of ripping the entire mountain as proven by the pros who push it. The Super Fly II core creates a lighter, lift-off-ready deck, while Squeezebox core profiling transfers energy towards the tip and tail for snappier ollies and effortless stability. Available in two versions, choose the relaxed and floaty Flying V or precise control of PurePop camber.";
    document.querySelector("#productShowcase h3").innerHTML = "Burton Process 2023";
    document.querySelector("#productShowcase img").src = document.querySelector("#p2 img").src;
});

//p3
document.querySelector("#p3").addEventListener("click", function(){
    document.querySelector("#productShowcase p").innerHTML = "We spend a lot of time poking around Vermont's tight trees and icy lines, so we built the Burton Family Tree Hometown Hero Snowboard to blast through it all. It's a daily driver with a build and materials worthy of the Family Tree name. The directional shape has enough taper to float the nose on deeper days, while the board's directional camber and flex maintain the pop to keep it lively in all conditions and terrain. Strategically placed glass stiffens up the nose and tail for bump-busting power and response.";
    document.querySelector("#productShowcase h3").innerHTML = "Burton Family Tree Hometown Hero 2023";
    document.querySelector("#productShowcase img").src = document.querySelector("#p3 img").src;
});

//p4
document.querySelector("#p4").addEventListener("click", function(){
    document.querySelector("#productShowcase p").innerHTML = "Backed by Kelly Clark, the women's Burton Feelgood Snowboard has been the defining force in women's snowboarding for two decades. The Feelgood boasts a unique shape, matched with positively powerful pop for Ferrari-like handing. Directional shaping navigates easily through variable conditions, making this our number one board for conquering all terrain. Available with the stable suspension of camber or the rocker-infused freedom of Flying V, the Feelgood is a perfect match for aspiring pros or just riders who demand every advantage.";
    document.querySelector("#productShowcase h3").innerHTML = "Burton Feelgood 2023";
    document.querySelector("#productShowcase img").src = document.querySelector("#p4 img").src;
});


//---------------------------------------0-10 GAME func--------------------------------------------------------------------

function game(){
    //stops default submission
    event.preventDefault();

    //assigns vars to form entry locations and other values
    let numberEntry = document.getElementById('numberEntry');
    let numberValue = numberEntry.value;
    let pResult = document.getElementById('probabilityGameResult');
    let isnumberEntryValid = false;

    //clear error message
    pResult.innerHTML = "";
    pResult.classList.remove("error");

    //random number between 1 and 10
    let randNum = Math.floor(Math.random() * 10 + 1);

    if(parseInt(numberValue) && (numberValue.length == 1 || parseInt(numberValue) == 10)){
            isnumberEntryValid = true;
    }else{
        pResult.innerHTML = "Please enter a digit between 1 and 10";
        pResult.classList.add("error");
        console.log(numberEntry.nextSibling);
    }
    //output results
    if(isnumberEntryValid == true){
        if(parseInt(numberValue) == randNum){
            pResult.innerHTML = "You won!";
        }else{
            pResult.innerHTML = "Better luck nextime.";
        }
    }
    //reset enteries
    numberEntry.value = "";
    //output
    numberEntry.nextSibling.innerHTML = "<br>Your guess is: " + numberValue + "<br>The correct number was: " + randNum;
}


//---------------------------------------CONTACT FORM submission func----------------------------------------------------
function validateContactForm(event){
    //stops default submission
    event.preventDefault();

    //regexs
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    let phoneRegex = /\d{10,}/;

    //assigns vars to form entry locations
    let cName = document.getElementById('userName');
    let phone = document.getElementById('phone');
    let email = document.getElementById('userEmail');
    let comment = document.getElementById('userComments');
    let formContense = document.getElementById('submitedFormContense');

    //bools for validation check
    let emailValid = false;
    let phoneValid = false;
    let nameValid = true;

    //tests email against regex
    if(!(emailRegex.test(email.value))){
        emailValid = false;
        email.nextSibling.innerHTML = "<br>Please enter a valid email address";
        email.nextSibling.classList.add("error");
    }else{
        emailValid = true;
        email.nextSibling.innerHTML = "";
        email.nextSibling.classList.remove("error");
    }

    //validates phone against regex
    if(!(phoneRegex.test(phone.value))){
        phoneValid = false;
        phone.nextSibling.innerHTML = "<br>Phone # must only use digits 0-9 and be 10 numbers in length";
        phone.nextSibling.classList.add("error");
    }else{
        phoneValid = true;
        phone.nextSibling.innerHTML = "";
        phone.nextSibling.classList.remove("error");
    }

    //form submission
    if(emailValid == true && phoneValid == true && nameValid == true){
        alert("Information Submitted!");
        //display entered information below submit button
        formContense.innerHTML = "Thank you for your submission!<br><br><strong>Contact Details:</strong><br>" + "Name: " + cName.value + "<br>"  + "Phone: " + phone.value + "<br>" + "Email: " + email.value + "<br>" + "Message: " + comment.value;

        //reset form values
        cName.value = "";
        phone.value = "";
        email.value = "";
        comment.value = "";
        //reset error messages (if any)
        cName.nextSibling.innerHTML = "";
        phone.nextSibling.innerHTML = "";
        email.nextSibling.innerHTML = "";
        comment.nextSibling.innerHTML = "";

    }else{
        //console.log()
    }
}
//adds an event listener to form submission
document.getElementById('game').addEventListener("submit", game);
document.getElementById('contact').addEventListener("submit", validateContactForm);
