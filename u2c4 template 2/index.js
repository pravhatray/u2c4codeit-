// write js code here corresponding to index.html
// You should add submit event on the form
var masaiForm=document.querySelector("#masaiForm");

var arr=JSON.parse(localStorage.getItem("schedule"))||[];
masaiForm.addEventListener("submit" , function(){

    event.preventDefault()
   var obj={

    dnumber:masaiForm.matchNum.value,
    dteamA:masaiForm.teamA.value,
    dteamB:masaiForm.teamB.value,
    ddate:masaiForm.date.value,
    dvenue:masaiForm.venue.value,

   }
   arr.push(obj)
   console.log(arr)
   localStorage.setItem("schedule" , JSON.stringify(arr));
   window.location.href="matches.html";
})