(function() {
	const linkedImages = document.querySelectorAll('a[href$=".gif"], a[href$=".jpeg"], a[href$=".jpg"], a[href$=".png"], a[href$=".apng"], a[href$=".webp"]');
	linkedImages.forEach(function(a) {
		a.insertAdjacentHTML('afterend', '<div><img alt="" src="'+a.href.replaceAll('"','&quot;')+'" style="max-width:100%" /></div>')
	});
	const linkedVideos = document.querySelectorAll('a[href$=".mov"], a[href$=".mp4"], a[href$=".avi"], a[href$=".webm"], a[href$=".wmv"]');
	linkedVideos.forEach(function(a) {
		a.insertAdjacentHTML('afterend', '<div><video controls src="'+a.href.replaceAll('"','&quot;')+'" style="max-width:100%"></video></div>')
	});
})();
