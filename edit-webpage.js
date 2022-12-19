if ( ! document.body.contentEditable)
{
  document.body.contentEditable = 'true';
  document.designMode='on';
} else { 
  document.body.contentEditable = 'false';
  document.designMode='off';
}

document.body.contentEditable = 'true';
document.designMode='on';

const alert = document.createElement('div');
alert.style = `
  position: fixed;
  top: 0; right: 0;
  left: 0; bottom: auto;
  z-index: 100000000;
  background: #adbd;
  backdrop-filter: blur(0.2rem) saturate(1.2);
  font-size: 4vmin;
  color: #115522;
  text-align: center;
  padding: 0.4em;
  transition: opacity 1s ease-in;
`;
alert.innerText = 'This web page should now be editable!' 

// '(This is the edit-webpage bookmarklet from at alanhogan.com/bookmarklets)';

document.body.appendChild(alert);

setTimeout(() => {
  alert.style.opacity = 0;
},
3000);

setTimeout(() => {
},
4000);
