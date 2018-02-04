window.onload = function() {

  let animationDuration = 600; // 2000 millieseconds

  function animate(i) {
    setTimeout(function() {
      dockIcons[i].classList.add('animate');
    }, (i + 1) * animationDuration);
  }

  for (var i = 0; i < dockIcons.length; i++)
    animate(i);

}();
