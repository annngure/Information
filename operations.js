function fn() {
 var d = new Date();
 var date = parseInt(document.getElementByclass("date").value);

const male=["Kwasi", "Kwadwo" ,"Kwabena" ,"Kwaku" ,"Yaw" ,"Kofi" ,"Kwame"]
   console.log( male);

 const female=["Akasua", "Adwoa" ,"Abenna" ,"Akua" ,"Yaa" ,"Afua" ,"Ama"]
  console.log ( female);

  const days=["Sunday" ,"Monday" ,"Tuesday" ,"Wednesday" ,"Thursday" ,"Friday" ,"Saturday"]
  console.log(days); 
    
 function getAkan(){
     const male =document.getElementById('male').checked;
     const female=document.getElementById('female').checked;
     if (male==true &&female==false){
         if(days==[0]){
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
         else { alert ("invalid")
     }
     if (female == false){
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
        else { alert ("invalid")
        }
    }
     }

 }
}