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

if (document.body.contentEditable !== 'true')
{
  document.body.contentEditable = 'true';
  document.designMode='on';
  
  alert.innerText = 'This web page should now be editable!' 
} else { 
  document.body.contentEditable = 'false';
  document.designMode='off';
  
  alert.style.color = '#621';
  alert.style.backgroundColor = '#eaad';
  alert.innerText = 'Whole-page editing disabled!' ;
}



// '(This is the edit-webpage bookmarklet from at alanhogan.com/bookmarklets)';

document.body.appendChild(alert);

setTimeout(() => {
  alert.style.opacity = 0;
},
3000);

setTimeout(() => {
  alert.remove();
},
4000);
