const VERSION = "1.0";
const messageSuffix = "\n\n--pip.js version v"+VERSION+"\nalanhogan.com/bookmarklets";

if (!document.pictureInPictureEnabled) {
  alert("Your browser doesn’t support picture-in-picture!" + messageSuffix);
  return;
}

const videos = document.getElementsByTagName("video");
if (videos.length < 1) {
  alert("No HTML5 videos were detected on page!" + messageSuffix);
  return;
}


let curPipFound = false;
for (let i = 0; i <videos.length; i++) {
  const pipEl = document.pictureInPictureElement;
  console.log('pipEl', pipEl);
  if (!document.pictureInPictureElement) {
    console.log('Showing PIP for video #' + (i + 1) + messageSuffix);
    videos[i].requestPictureInPicture();
    break;
  } else if (!curPipFound && document.pictureInPictureElement == videos[i]) {
    curPipFound = true;
    console.log('Found!' + messageSuffix);
    if (i == videos.length - 1) { videos[0].requestPictureInPicture(); }
  } else if (!curPipFound) {
    console.log('not found yet...' + messageSuffix);
  }
}
