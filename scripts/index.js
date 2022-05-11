
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

for(let i =0; i < 100; i++){

    image.addEventListener("webkitanimationend",switchImage(i));
    
}


function switchImage(i){
    setTimeout(function()
        {
            if(i % 4 == 0)
            {
                document.getElementById("image-carosel").src="images/headshot.png";
               
            }
            else if(i  % 4 == 1)
            {
                document.getElementById("image-carosel").src="images/one.jpeg";

            }
            else if(i % 4 ==2){
                document.getElementById("image-carosel").src="images/two.jpeg";
            }
            else{
                document.getElementById("image-carosel").src="images/three.jpeg";
            }
           
        }, 10000 * i);

}