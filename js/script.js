const tombolMenu = document.querySelector('.tombol-menu');
const menu = document.querySelector('nav .menu ul');
const listMenu = document.querySelectorAll('nav .menu ul li a');
const carousel = document.querySelector('.carousel');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const carouselItem = document.querySelectorAll('.carousel-item');

document.addEventListener('DOMContentLoaded', function () {
	// Toggle menu pada mobile
	tombolMenu.addEventListener('click', function () {
		menu.classList.toggle('show');
	});

	// Efek scroll (menambah background putih di navbar)
	window.addEventListener('scroll', function () {
		let nav = document.querySelector('nav');
		const heightViewport = window.innerHeight;
		if (window.scrollY > heightViewport) {
			nav.style.backgroundColor = 'white';
			listMenu.forEach((item) => {
				item.style.color = 'black';
			});
			nav.style.color = 'black';
		} else {
			nav.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
			listMenu.forEach((item) => {
				item.style.color = 'white';
			});
			nav.style.color = 'white';
		}
	});

	// Efek suara peluit Quidditch
	document
		.getElementById('play-whistle')
		.addEventListener('click', function () {
			let whistleSound = new Audio('assets/sounds/quidditch-whistle.mp3');
			whistleSound.play();
		});

	// Efek suara mantra saat tombol diklik
	document
		.getElementById('cast-spell')
		.addEventListener('click', function () {
			let spellSound = new Audio('assets/sounds/wingardium-leviosa.mp3');
			spellSound.play();
		});
});

document.addEventListener('mousemove', (e) => {
	const follower = document.getElementById('follower');
	const centerX = window.innerWidth / 2;
	const centerY = window.innerHeight / 2;

	// Hitung offset relatif terhadap titik tengah layar
	const offsetX = (e.clientX - centerX) * 0.1; // 10% dari pergerakan kursor
	const offsetY = (e.clientY - centerY) * 0.1;

	follower.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

const scrollAmount = 320;

// nextBtn.addEventListener('click', () => {
// 	carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
// });

// prevBtn.addEventListener('click', () => {
// 	carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
// });

carouselItem.forEach((item) => {
	item.addEventListener('mouseover', () => {
		const popover = item.querySelector('.popover');
		popover.style.display = 'flex';
		console.log(popover);
	});

	item.addEventListener('mouseout', () => {
		const popover = item.querySelector('.popover');
		popover.style.display = 'none';
	});
});
console.log(carouselItem);
