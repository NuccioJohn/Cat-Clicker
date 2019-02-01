let clicks = 0;

let elem = document.getElementById('cat-to-click-one');
elem.addEventListener('click', function(){
    clicks++;
    document.getElementById('number-of-clicks').innerHTML = clicks;
  //the element has been clicked... do stuff here
  console.log("Cat has been clicked " + clicks + " times!");
}, false);

let elem2 = document.getElementById('cat-to-click-two');
elem2.addEventListener('click', function(){
    clicks++;
    document.getElementById('number-of-clicks').innerHTML = clicks;
  //the element has been clicked... do stuff here
  console.log("Cat has been clicked " + clicks + " times!");
}, false);