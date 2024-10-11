const bg =["#11b619","red","black","white"];
let color = document.querySelector(".color");
let btn = document.querySelector(".button");
let ajout =document.querySelector(".ajout").value;
let button = document.querySelector(".bt");
let index = 0;
btn.addEventListener("click",()=>{
  
    document.body.style.backgroundColor = bg[index];
    color.textContent = bg[index];
    index++;
    console.log(index)
    if(index>bg.length-1)
    index = 0;
})
 function yes(){
    let ajout =document.querySelector(".ajout").value;
    bg.push(ajout);
    console.log(bg);
    if(ajout ==""){
        alert("ajouter des coleurs");
    }
}
