// write js code here corresponding to matches.html


var a=JSON.parse(localStorage.getItem("schedule"));

display(a);

let fa=JSON.parse(localStorage.getItem("favourites")) || [];

function filter(){
   let x=document.querySelector("#filterVenue").value;

   if(filterVenue.value=="none"){
       display(a)
   }
   else{

   
   let y=a.filter(function(element){
       return element.dvenue==x;

   })
   display(y)
}
}




function display(data)
{
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(element){

        let tr=document.createElement("tr");

        let td1=document.createElement("td");
        td1.textContent=element.dnumber;

        let td2=document.createElement("td");
        td2.textContent=element.dteamA;

        let td3=document.createElement("td");
        td3.textContent=element.dteamB;

        let td4=document.createElement("td");
        td4.textContent=element.ddate;

        let td5=document.createElement("td");
        td5.textContent=element.dvenue;

        let td6=document.createElement("td");
        td6.textContent="Favourites";
        td6.style.color="blue";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            fav(element)
        });


        tr.append(td1,td2,td3,td4,td5,td6)
        console.log(tr)
        document.querySelector("tbody").append(tr);

    });
        
    
}

function fav(element){
    console.log(element)
    fa.push(element);
    localStorage.setItem("favourites" , JSON.stringify(fa))
}