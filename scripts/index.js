
let qouteEl = document.getElementById("qouteEl");

let speakerEl = document.getElementById("speakerEl");

let textBox = document.getElementById("qoute-box");
let count = 0;




// Code for Chrome, Safari and Opera
//x.addEventListener("webkitAnimationStart", myStartFunction);

// Standard syntax
//textBox.addEventListener("animationstart", switchQoute());


for(let i =0; i < 80; i++){

    textBox.addEventListener("webkitanimationend",switchQoute(i));
    
}

function switchQoute(i){
    setTimeout(function()
        {
            if(i % 3 == 0)
            {
                console.log("entered")
               
                qouteEl.innerHTML = '“Build your own dreams, or someone else will hire you to build theirs.”';
                speakerEl.innerHTML = "- Farraj Gray ";
            }
            else if(i  % 3 == 1)
            {
                qouteEl.innerHTML = '“Life is not a matter of holding good cards, but of playing a poor hand well."';
                speakerEl.innerHTML = "-  Robert Louis Stevenson";
            }
            else{
                qouteEl.innerHTML = '“When you know what you want, and want it bad enough, you’ll find a way to get it.”';
                speakerEl.innerHTML = "-  Jim Rohn";
            }
           
        }, 9000 * i);

}


//image carosel script

let image = document.getElementById("image-carosel")
let text = document.getElementById("carosel-words")

for(let i =0; i < 100; i++){

    image.addEventListener("webkitanimationend",switchImage(i));
    
}


function switchImage(i){
    setTimeout(function()
        {
            if(i % 4 == 0)
            {
               image.src="images/headshot.png";
               text.innerHTML= "Headshot";
               
            }
            else if(i  % 4 == 1)
            {
                image.src="images/one.jpeg";
                text.innerHTML= "43 inch Black Drum";

            }
            else if(i % 4 ==2){
                image.src="images/two.jpeg";
                text.innerHTML="47 inch Spinner Shark"
            }
            else{
                image.src="images/three.jpeg";
                text.innerHTML="A piece of the Berlin wall"
            }
           
        }, 8030 * i);

}

//image carosel ro