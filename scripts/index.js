
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


//image carosel script for about me section

let image = document.getElementById("image-carosel")
let text = document.getElementById("carosel-words")
let firstImages =["images/headshot.png","images/one.jpeg","images/two.jpeg","images/three.jpeg"];
let firstWords =["Headshot",  "43 inch Black Drum", "47 inch Spinner Shark", "A piece of the Berlin wall"]

for(let i =0; i < 100; i++){

    image.addEventListener("webkitanimationend",switchImage(i,text,image,firstImages,firstWords));
    
}
//image carosel script for fun facts page
let funImage = document.getElementById("fun-image")
let funText = document.getElementById("fun-carosel")

let funImages =["images/image0.jpeg","images/image1.jpg","images/image2.jpeg","images/image3.jpeg"];
let funWords =["My Art",  "My Digital Art", "The Computer I built", "My Steak n' Potatoes"]

for(let i =0; i < 100; i++){

    funImage.addEventListener("webkitanimationend",switchImage(i,funText,funImage,funImages,funWords));
    
}


//qoute to create a carosel
function switchImage(i,pageText,imageSrc, Images, Words ){
    setTimeout(function()
        {
            imageSrc.src = Images[i%4];
            pageText.innerHTML = Words[i%4];
           
        }, 8000 * i);

}

//image carosel ro