"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author: Alex Somoza 
   Date: 4-18-19   
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/
//This event listner will run when the page loads and will run an anonymous function that will set up many event handlers that will help set up the cart and check any validators.
window.addEventListener("load", function () {
      calcCart();
      document.getElementById("regSubmit").onclick = sessionTest;
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquetBox").onblur = calcCart;

      document.getElementById("sessionBox").onchange = calcCart;
      document.getElementById("mediaCB").onclick = calcCart;
});
//This will check if a package has been selected and if not it will not let the user submit the form and give them a notcifcation telling them to shoose a package.
function sessionTest() {
      confSession = document.getElementById("sessionBox");
      if (confSession.selectedIndex === -1) {
            confSession.setCustomValidity("Select a Session Package");
      } else {
            confSession.setCustomValidity("");
      }
}
//This function will go through and assign values to the session storage based on the users choices and get them ready for display later. It will also calculate the total cost of the users selected items.
function calcCart() {
      sessionStorage.confName = document.forms.regForm.elements.fnBox.value + " " + document.forms.regForm.elements.lnBox.value;
      sessionStorage.confGroup = document.forms.regForm.elements.groupBox.value;
      sessionStorage.confMail = document.forms.regForm.elements.mailBox.value;
      sessionStorage.confPhone = document.forms.regForm.elements.phoneBox.value;
      sessionStorage.confBanquet = document.forms.regForm.elements.banquetBox.value;
      sessionStorage.confBanquetCost = sessionStorage.confBanquet * 55;
      var selectedIndex = document.getElementById("sessionBox").selectedIndex;


      if (selectedIndex != -1) {
            sessionStorage.confSession = document.forms.regForm.elements.sessionBox[selectedIndex].text;
            sessionStorage.confSessionCost = document.forms.regForm.elements.sessionBox[selectedIndex].value;
      } else {
            sessionStorage.confSession = "";
            sessionStorage.confSessionCost = 0;
      }

      if (document.forms.regForm.elements.mediaCB.checked) {
            sessionStorage.confPack = "yes";
            sessionStorage.confPackCost = 115;
      } else {
            sessionStorage.confPack = "no";
            sessionStorage.confPackCost = 0;
      }
      sessionStorage.confTotal = parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confSessionCost) + parseFloat(sessionStorage.confPackCost);
      writeSessionValues();
}
//This function will display the values in the session storage in the cart based on what the user chose.
function writeSessionValues() {
      document.getElementById("regName").textContent = sessionStorage.confName;
      document.getElementById("regGroup").textContent = sessionStorage.confGroup;
      document.getElementById("regEmail").textContent = sessionStorage.confMail;
      document.getElementById("regPhone").textContent = sessionStorage.confPhone;
      document.getElementById("regSession").textContent = sessionStorage.confSession;
      document.getElementById("regBanquet").textContent = sessionStorage.confBanquet;
      document.getElementById("regPack").textContent = sessionStorage.confPack;

      document.getElementById("regTotal").textContent = "$" + sessionStorage.confTotal;
}