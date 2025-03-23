const tombolMenu = document.querySelector('.tombol-menu');
const menu = document.querySelector('nav .menu ul');
const listMenu = document.querySelectorAll('nav .menu ul li a');
const carousel = document.querySelector('.carousel');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const carouselItem = document.querySelectorAll('.carousel-item');
const internalHogwarts = document.querySelector('.internal-hogwarts-img');
const homeAud = new Audio('assets/sounds/home.mp3');
const hogwartsAud = new Audio('assets/sounds/hogwarts.mp3');
const quidditchAud = new Audio('assets/sounds/quidditch.mp3');
const quidditchH3 = document.querySelector('#quidditch > .intro-text > h1');
const popoverQuidditch = document.querySelector('.popover-quidditch');
const battleVideo = document.querySelector('#battle-video');

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

	internalHogwarts.addEventListener('mouseover', function () {
		internalHogwarts.style.opacity = 0;
	});

	internalHogwarts.addEventListener('mouseout', function () {
		internalHogwarts.style.opacity = 1;
	});

	// Efek scroll (menambah background putih di navbar)
	window.addEventListener('scroll', function () {
		const bg = this.document.querySelector('.hogwarts-bg');
		const nav = document.querySelector('nav');
		const contentHogwarts = document.querySelector('.hogwarts-contain');
		const contentHogwarts2 = document.querySelector('.hogwarts-contain-2');
		const heightViewport = window.innerHeight;

		if (window.scrollY < this.window.innerHeight) {
			homeAud.play();
		} else {
			homeAud.pause();
		}

		if (
			window.scrollY > this.window.innerHeight &&
			window.scrollY < heightViewport * 3
		) {
			hogwartsAud.play();
		} else if (window.scrollY < this.window.innerHeight) {
			hogwartsAud.pause();
		} else {
			hogwartsAud.pause();
		}

		if (
			window.scrollY > heightViewport * 3 &&
			window.scrollY < heightViewport * 4 + heightViewport / 4
		) {
			quidditchAud.play();
		} else if (window.scrollY < heightViewport * 4) {
			quidditchAud.pause();
		} else {
			quidditchAud.pause();
		}

		if (window.scrollY > window.innerHeight) {
			bg.style.opacity = (window.scrollY - window.innerHeight) / 1000;
		}

		// if (window.scrollY > heightViewport * 3 + heightViewport / 4) {
		// 	nav.style.display = 'none';
		// } else {
		// 	nav.style.display = 'flex';
		// }

		if (window.scrollY > heightViewport * 4 + heightViewport / 4) {
			battleVideo.play();
		} else {
			battleVideo.pause();
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

quidditchH3.addEventListener('mouseover', () => {
	popoverQuidditch.style.display = 'flex';
	console.log(popover);
});

quidditchH3.addEventListener('mouseout', () => {
	popoverQuidditch.style.display = 'none';
});

console.log(quidditchH3);
