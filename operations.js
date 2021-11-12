function fn() {
 var d = new Date();
 var date = parseInt(document.getElementByclassName("day").value);
 var month = parseInt(document.getElementByclassName("month").value);
 var year = parseInt(document.getElementByclassName("year").value);

 if (day<0 || day>31){
     document.getElementByclass("dayerror").innerHtml ="Enter valid date";
     return false;
 } 
 else if (date==""){
     document.getElementByclass("dayerror").innerHtml ="Fill in data";
     return false;
 }
 else {
     d.setDate[date];
 }

 if (month <0 || day >12){
     document.getElementsByClassName("montherror").innerHtml="Enter valid month";
     return false;
 }
 else if (month ==""){
     document.getElementsByClassName("montherror").innerHtml ="Fill in data";
     return false;
 }
  else {
      d.setMonth(month);
  }
  if (month <0){
      document.getElementsByClassName("yearerror").innerHtml ="Fill in data";
      return false;
  }
  else {
      d.setYear(year);
  }
const male=["Kwasi", "Kwadwo" ,"Kwabena" ,"Kwaku" ,"Yaw" ,"Kofi" ,"Kwame"]
   console.log( male);

 const female=["Akasua", "Adwoa" ,"Abenna" ,"Akua" ,"Yaa" ,"Afua" ,"Ama"]
  console.log ( female);

  const days=["Sunday" ,"Monday" ,"Tuesday" ,"Wednesday" ,"Thursday" ,"Friday" ,"Saturday"]
  console.log(days); 
     
 function getAkan(){
     const male =document.getElementById('male').select;
     const female=document.getElementById('female').select ;
     if (male==true &&female==false){
         if(days== [0]){
             alert("your name is "+ male[0])
         }
         else if (days==[1]){
             alert("your name is" + male[1])
         }
         else if (days==[2]){
             alert("your name is" + male[2])
         }
         else if (days==[3]){
             alert("your name is" + male[3])
         }
         else if (days==[4]){
             alert("your name is " + male[4])
         }
         else if(days==[5]){
             alert("your name is "+ male [5])
         }
         else if (days==[6]){
             alert("your name is "+ male [6])
     }
    }
     else if (male==false &&female==true){
        if(days==[0]){
            alert("your name is "+ female[0])
        }
        else if (days==[1]){
            alert("your name is" + female[1])
        }
        else if (days==[2]){
            alert("your name is" + female[2])
        }
        else if (days==[3]){
            alert("your name is" + female[3])
        }
        else if (days==[4]){
            alert("your name is " + female[4])
        }
        else if(days==[5]){
            alert("your name is "+ female [5])
        }
        else if (days==[6]){
            alert("your name is "+ female [6])
        }
    
     }

    }
    getAkan();
}