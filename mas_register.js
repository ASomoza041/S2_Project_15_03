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

function sessionTest() {
      var confSession = document.getElementById("sessionBox");
      if (confSession.selectedIndex === -1) {
            confSession.setCustomValidity("Select a Session Package");
      } else {
            confSession.setCustomValidity("");
      }
}

function calcCart() {
      var confName = document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value;
      var confGroup = document.getElementById("groupBox").value;
      var confMail = document.getElementById("mailBox").value;
      var confPhone = document.getElementById("phoneBox").value;
      var confBanquet = document.getElementById("banquetBox").value;
      var confBanquetCost = confBanquet * 55;
      var selectedIndex = document.forms.regForm.elements.sessionBox.value;
      if (sessionBox.selectedIndex != -1) {
            var confSession = document.forms.regForm.elements.sessionBox[selectedIndex].textContent;
            var confSessionCost = document.forms.regForm.elements.sessionBox.value;
      } else {
            confSession = "";
            confSessionCost = 0;
      }

      if (document.forms.regForm.elements.mediaCB.checked) {
            var confPack = "yes";
            var confPackCost = 115;
      } else {
            confPack = "no";
            confPackCost = 0;
      }
      var confTotal = parseFloat(confBanquetCost) + parseFloat(confSessionCost) + parseFloat(confPackCost);
      writeSessionValues();
}

function writeSessionValues() {
      document.getElementById("") = ;
      document.getElementById("") = ;
      document.getElementById("") = ;
      document.getElementById("") = ;
      document.getElementById("") = ;
      document.getElementById("") = ;
      document.getElementById("") = ;
      document.getElementById("") = ;
}