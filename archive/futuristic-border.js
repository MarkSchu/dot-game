.control-panel .futuristic-border {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border: 1px solid #00ffff;
  border-radius: 8px;
  margin: 4px;
}

.control-panel .futuristic-border .left-top {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border: 1px solid #00ffff;
  border-radius: 8px;
  margin: 4px;
}


function xFuturisticBorder() {
  return (
    element('div', {className: 'futuristic-border'},
      svg('svg', {
        class: 'futuristic-border-svg', 
        viewBox: '0 0 100 100',
        preserveAspectRatio: 'none'
      },
        svg('path', {
          d: `
            M 5 5, 
            L 95 5,
            L 95 95,
            L 5 95
          `,
          // fill: '#00ffff'
          fill: 'blue'
        })
      )
    )
  )  
}

function FuturisticBorder() {
  return (
    element('div', {className: 'futuristic-border'},
      element('div', {className: 'left-top'}),
      element('div', {className: 'left'}),
      element('div', {className: 'left-bottom'}),
    )
  );
}