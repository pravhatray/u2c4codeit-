// write js code here corresponding to favourites.html


var f=JSON.parse(localStorage.getItem("favourites"));
display(f);


function display(list)
{
    
    document.querySelector("tbody").innerHTML="";
    list.forEach(function(element,index){


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

        var td6=document.createElement("td");
        td6.innerText="Delete";
        td6.style.color="red";
        td6.style.cursor="pointer";
        td6.addEventListener("click" , function() {
            deleteFunction(element,index)
        })
    
       
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);

    })
}

function  deleteFunction(element ,index){
    f.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(f));
    window.location.reload()
}