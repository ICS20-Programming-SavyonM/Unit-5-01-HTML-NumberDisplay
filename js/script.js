// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from min up to the max user number
 */
function displayNumbers() {
  
  // Get the minimum and maximum numbers from the user
  let minNum = parseInt(document.getElementById('minInput').value)
  let maxNum = parseInt(document.getElementById('maxInput').value)

  // Check if minNum is greater than maxNum
  if (minNum > maxNum) {
    document.getElementById('output').innerHTML = "The minimum number has to be less than or equal to the maximum number."
    return
  }

  // Initialize the counter to the minimum value
  let counter = minNum

  // Initialize the output string as an empty string
  let output = ""

  // Use a while loop to generate the numbers between minNum and maxNum
  while (counter <= maxNum) {
    
    //add value of counter to the output
    output += counter + " "
    
    //increment the counter
    counter = counter + 1
  }

  // Display the generated numbers in the output 
  document.getElementById('output').innerHTML = "Numbers: " + output
}
