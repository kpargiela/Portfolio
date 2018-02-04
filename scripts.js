window.onload = function() {

  let animationDuration = 20000; // 2000 millieseconds

  function animateItems() {
     menuItem.each(function(i, item) {
        setTimeout(function(){
          item.addClass('animate');
        }, i * animationDuration); // this multiplies the index by the duration so the handler is fired in sequence
     });
  }
}();
