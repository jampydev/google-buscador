 

document.querySelector('.btn').addEventListener('click', function() {


 src = document.querySelector('.search').value;
 
  if (src) {
    window.open('https://www.google.com/search?q=' + src);
  }
  else {
    alert('Please enter a search term');
  }



});