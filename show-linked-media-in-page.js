(function() {
	const linkedImages = document.querySelectorAll('a[href$=".gif" i], a[href$=".jpeg" i], a[href$=".jpg" i], a[href$=".png" i], a[href$=".apng" i], a[href$=".webp" i], a[href$=".avif" i], a[href$=".svg" i]');
	linkedImages.forEach(function(a) {
		a.insertAdjacentHTML('afterend', '<div><img alt="" src="'+a.href.replaceAll('"','&quot;')+'" style="max-width:100%" /></div>')
	});
	const linkedVideos = document.querySelectorAll('a[href$=".mov" i], a[href$=".mp4" i], a[href$=".avi" i], a[href$=".webm" i], a[href$=".wmv" i], a[href$=".flv" i] a[href$=".mkv" i]');
	linkedVideos.forEach(function(a) {
		a.insertAdjacentHTML('afterend', '<div><video controls src="'+a.href.replaceAll('"','&quot;')+'" style="max-width:100%"></video></div>')
	});
})();
