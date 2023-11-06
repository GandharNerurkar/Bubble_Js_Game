var timer = 60;
var score = 0;
var hitrn = 0;

function makebubble(){
    var clutter= "";

for(var i=1;i<=200;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div id="bubble">${rn}</div>`;

}
document.querySelector("#panelbottom").innerHTML = clutter;

}

function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){

            timer--;
            document.querySelector("#timeval").textContent=timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#panelbottom").innerHTML=`<h2>Game Over</h2>`;
        }
    }, 1000)
}

function newhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}

function incscore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#panelbottom")
.addEventListener("click", function(details){
    var clicked = (Number(details.target.textContent));
    if(clicked === hitrn){
        incscore();
        makebubble();
        newhit();

    } 
})

makebubble();
runtimer();
newhit();

