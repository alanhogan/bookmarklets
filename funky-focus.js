/* v1.2 */
const style = document.createElement('style');
style.type = 'text/css';
style.innerText = `

@keyframes ffwiggle {
    0%   { 
        transform: translateX(0);
    }
    5%   { 
        transform: translateX(-5px);
    }
    10%  { 
        transform: translateX(5px);
    }
    15%  { 
        transform: translateX(-5px);
    }
    20%  { 
        transform: translateX(5px);
    }
    25%  { 
        transform: translateX(-5px);
    }
    30%  { 
        transform: translateX(5px);
    }
    35%  { 
        transform: translateX(0);
    }
    100% { 
        transform: translateX(0);
    }
}


:focus {
  /* FYI: Filters won't work on non-replaced inline boxes e.g. spans, links, etc without a change in the display property */
  filter: hue-rotate(-24deg) brightness(1.1) !important;
  outline: #eebb22a0 solid 5px !important;
  outline-offset: -2px !important;
  text-shadow: 0.04em 0.04em 0.04em #0008, -0.04em -0.04em 0.04em #fff8;
  
  backdrop-filter: contrast(0.7);

  animation-name: ffwiggle;
  animation-duration: 6s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}
`;
document.head.appendChild(style);
