// (optional) slight parallax tilt for the analytics glass panel
const panel = document.querySelector('.panel');
let raf = null;

function tilt(e){
  const r = panel.getBoundingClientRect();
  const px = (e.clientX - r.left)/r.width - 0.5;  // -0.5..0.5
  const py = (e.clientY - r.top)/r.height - 0.5;

  if(raf) cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    panel.style.transform = `perspective(900px) rotateY(${px*6}deg) rotateX(${-py*6}deg) translateY(-2px)`;
  });
}
function reset(){ panel.style.transform = ''; }

panel.addEventListener('pointermove', tilt);
panel.addEventListener('pointerleave', reset);
