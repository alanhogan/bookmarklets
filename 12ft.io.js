const loc = document.location;
if (typeof loc == 'undefined') {
  alert ('It doesn\'t look like you are currently viewing a page. (Location undefined)');
}
else document.location = `https://12ft.io/${loc}`;
