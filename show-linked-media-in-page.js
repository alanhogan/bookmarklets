(function() {
	const linkedImages = document.querySelectorAll('a[href$="gif"], a[href$="jpeg"], a[href$="jpg"], a[href$="png"], a[href$="apng"], a[href$="webp"]');
	linkedImages.forEach(function(a) {
		a.insertAdjacentHTML('afterend', '<div class="large-picture-wrap"><img alt="" src="'+a.href+'" /></div>')
	});
	const linkedVideos = document.querySelectorAll('a[href$="mov"], a[href$="mp4"], a[href$="avi"], a[href$="webm"]');
	linkedVideos.forEach(function(a) {
		a.insertAdjacentHTML('afterend', '<div class="large-picture-wrap"><video controls src="'+a.href+'" style="max-width:100%"></video></div>')
	});
})();
