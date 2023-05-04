// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function displayNumbers() {
  var min = parseInt(document.getElementById("minInput").value);
  var max = parseInt(document.getElementById("maxInput").value);
  var output = document.getElementById("output");
  
  if (isNaN(min) || isNaN(max)) {
    output.textContent = "Please enter valid numbers.";
    return;
  }
  
  if (min > max) {
    output.textContent = "Minimum number should be less than or equal to the maximum number.";
    return;
  }
  
  var numbers = [];
  for (var i = min; i <= max; i++) {
    numbers.push(i);
  }
  
  output.textContent = "Numbers: " + numbers.join(", ");
}
