/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-6-04-HTML-EXTRA/sw.js", {
    scope: "/ICS2O-UNIT-6-04-HTML-EXTRA/",
  })
}

/**
 * Input.
 */

 window.onload = function() {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)

  // input
  const sideA = parseInt(params.get('a'))
  const sideB = parseInt(params.get('b'))
  const sideC = parseInt(params.get('C'))
  const sideD = parseInt(params.get('D'))


  // process
  const area = sideA + sideB + sideC + sideD
  const dimensions = "<ul>\n<li>a side = " + sideA + "</li>\n<li>b side = " + sideB + "</li>\n<li>c side = " + sideC + "</li>\n<li>d side = " + sideD + "</li>\n</ul>"

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' mm²'
}

