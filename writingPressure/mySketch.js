const p = document.querySelector("p");
const body = document.querySelector("body");
let wp = 0;



body.addEventListener('pointermove', function (ev) {
	wp = (ev.pressure);
	p.innerText = wp;
});

