const tombolMenu = document.querySelector('.tombol-menu');
const menu = document.querySelector('nav .menu ul');
const listMenu = document.querySelectorAll('nav .menu ul li a');
const carousel = document.querySelector('.carousel');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const carouselItem = document.querySelectorAll('.carousel-item');

function isInViewportWithPadding(element, paddingTop = 0, paddingBottom = 0) {
	const rect = element.getBoundingClientRect();
	const viewportTop = 0 + paddingTop;
	const viewportBottom = window.innerHeight - paddingBottom;

	return rect.top < viewportBottom && rect.bottom > viewportTop;
}

document.addEventListener('DOMContentLoaded', function () {
	// Toggle menu pada mobile
	tombolMenu.addEventListener('click', function () {
		menu.classList.toggle('show');
	});

	// Efek scroll (menambah background putih di navbar)
	window.addEventListener('scroll', function () {
		const bg = this.document.querySelector('.hogwarts-bg');
		const nav = document.querySelector('nav');
		const contentHogwarts = document.querySelector('.hogwarts-contain');
		const contentHogwarts2 = document.querySelector('.hogwarts-contain-2');
		const heightViewport = window.innerHeight;

		if (window.scrollY > window.innerHeight) {
			bg.style.opacity = (window.scrollY - window.innerHeight) / 1000;

			console.log(window.scrollY - window.innerHeight);
		}

		if (window.scrollY > heightViewport * 3) {
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

		if (isInViewportWithPadding(contentHogwarts, 250, 250)) {
			contentHogwarts.style.opacity = 1;
		} else {
			contentHogwarts.style.opacity = 0;
		}

		if (isInViewportWithPadding(contentHogwarts2, 250, 250)) {
			contentHogwarts2.style.opacity = 1;
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
