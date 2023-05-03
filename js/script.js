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
  
  	// initialize the counter to 0
	let counter = 0
  
	// initalize numbers as an empty string
	let numbers = ""
	
	// get the user number
	let userNum = parseInt(document.getElementById('userNum').value)	

	// use a while loop to display the numbers from 0 up to the user number
	while (counter <= userNum) {
    
		// build the string of numbers with a line break each time
		numbers = numbers + counter + "<br>"
    
		// increment the counter
		counter = counter +1
	}
	
  	// return the string of numbers back to html
  	document.getElementById('display-results').innerHTML = numbers
}
