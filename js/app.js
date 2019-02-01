let clicks = 0;

let elem = document.getElementById('cat-to-click');
elem.addEventListener('click', function(){
    clicks++;
    document.getElementById('number-of-clicks').innerHTML = clicks;
  //the element has been clicked... do stuff here
  console.log("Cat has been clicked " + clicks + " times!");
}, false);