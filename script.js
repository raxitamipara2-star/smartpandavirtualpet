let hunger=50,happiness=50,energy=50;

function update(){
 document.getElementById("hunger").value=hunger;
 document.getElementById("happiness").value=happiness;
 document.getElementById("energy").value=energy;

 let pet=document.getElementById("pet");
 pet.className="";
 if(hunger>70) pet.classList.add("sad");
 else if(energy<30) pet.classList.add("sleep");
 else pet.classList.add("happy");
}

function feed(){ hunger=Math.max(0,hunger-15); happiness+=5; update(); }
function play(){ happiness=Math.min(100,happiness+15); energy-=10; hunger+=5; update(); }
function sleepPet(){ energy=Math.min(100,energy+20); update(); }

setInterval(()=>{
 hunger=Math.min(100,hunger+2);
 energy=Math.max(0,energy-2);
 happiness=Math.max(0,happiness-1);
 update();
},3000);

update();
