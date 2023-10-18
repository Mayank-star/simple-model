let section=document.querySelector("section");
// console.log(section);
 let form=document.forms[0];
//  console.log(form);
 let close= document.querySelector("span");
//  console.log(close);

let id=setInterval(()=>{
    section.style.display="flex";
},3000);

close.addEventListener("click",e=>{
   
     section.style.display="none";

});

form.addEventListener("submit",e=>{
    
    e.preventDefault();
    clearInterval(id);
    section.style.display="none";
    alert("Submit successfully");

});

 