var imgs = Array.prototype.slice.call(document.getElementsByTagName('img'));
imgs.forEach(function (img) {
  if (img.src.substr(-4).toUpperCase() === '.GIF') {
    img.src = '//i.imgur.com/vMgrL.png';
  }
});
