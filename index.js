  
/* 

////////////////////  This version requires an inline  onclick="myFunction"  code inside an html element ///////////////////////

 ======================= The bigggest cone here is that it requires id to function properly ================================
  function myFunction() {
      var checkBox = document.getElementById("myCheck1");
      var backgroundColor = document.getElementById("firstRow");

      if(checkBox.checked == true) {
          backgroundColor.style.background = "#adadad"
      }else{
          backgroundColor.style.background = "#303030"
      }
  }

   ///////////////////////This section was made with a help of Marat bayke//////////////////////////////



  var listOfInputs = document.getElementsByClassName("inside_div");

  for (i=0; i<listOfInputs.length;i++){

      listOfInputs[i].addEventListener("click",addBackground)
  }

  function addBackground(event){
      //event.style.background = "#ffffff"
      event.target.parentNode.style.background = "#adadad"
      console.log(event)

  }

  */



// ========================           SELECT && UNSELECT EVENT STARTS HERE          ================================//


 var element = document.getElementsByClassName("inside_div");

 for (var i=0; i < element.length; i++){
     element[i].addEventListener("click",addColor)
 }
 
 function addColor(event){
   event.target.parentNode.classList.toggle("when_checkbox_is_checked");

}

// =======================       ENDS HERE       ==========================//




// =======================               SELECT ALL EVENT STARTS HERE      =======================//


var allElements = document.getElementById("allSelect");

allElements.addEventListener("click",allTogle);

function allTogle(event) {
    var allRows = document.getElementsByClassName("row");

    for (var i=0; i<allRows.length; i++){
        allRows[i].classList.toggle("when_checkbox_is_checked");
        
    }
}


// =================== ENDS HERE ========================//



/*   ////////////////////////Idea was to check all checkboxes when user checks SELECT ALL CHECKBOX / didn't work ///////////////////////////////////////////////////


allElements.addEventListener("click",checkedAll);

function checkedAll(event) {
    var allChecked = document.getElementsByClassName("inside_div");

    for (var i=0; i<allChecked.length; i++){

        if (allChecked[i].checked == false ){
            allChecked[i].checked;
        }else{
            allChecked[i];
        }
        
    }


}
*/

// =========================      ENDS HERE    =====================//


// ========================= DELETE INDIVIDUALLY   STARTS HERE========================//

var delInd = document.getElementsByClassName("inside_button");

for (var i = 0; i <delInd.length; i++){
    delInd[i].addEventListener("click",delThis)
}

function delThis(event){
    event.target.parentNode.remove('row')
}

// ===================  ENDS HERE==============================//


//   ================= DELETE ALL STARTS HERE ==================//



var delAll = document.getElementById("delete");

delAll.addEventListener("click",allDelete);

function allDelete(event) {
    
    var allRows = document.getElementsByClassName("row");
    for(var i = 0; i < allRows.length; i++){
        allRows[i].parentNode.remove('row')
    }
}

// ===================  ENDS HERE =================//



// ===================== DELETE SELECTED STARTS HERE =====================//

var delChecked = document.getElementById("delete_checked");

delChecked.addEventListener("click",deleteOnlyIfChecked);

function deleteOnlyIfChecked(event) {
    var checkedRows = document.getElementsByClassName("when_checkbox_is_checked");

        for( var i = 0; i < checkedRows.length; i++){
            checkedRows[i].remove('when_checkbox_is_checked')
        }
}

// ======================== ENDS HERE =================================//





