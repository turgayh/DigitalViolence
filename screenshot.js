// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

console.log("Started to working");
let currentUrl = null;

function setScreenshotUrl(url) {
  document.getElementById('target').src = url; 
  //console.log("setScreenshotUrl:"+url);
}   

function setCurrentUrl(url){ 
  currentUrl = url;
  console.log("ActiveUrl:"+url);
  console.log("CurrentUrl:"+currentUrl);
  document.getElementById("url").innerHTML =currentUrl;
}   

document.addEventListener('DOMContentLoaded', function(){
  var button = document.getElementById('submit');
  var container = document.getElementById('container');
  var imagesArray = ['cat1.jpg','cat2.jpg','cat3.jpg','cat4.jpg','cat5.jpg'] 
  

  button.addEventListener('click',function(){
      alert("test");
      console.log("click me");
      },false);
  },false);
 
