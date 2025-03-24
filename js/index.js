(() => {
	'use strict';

	const tombolMenu = document.querySelector('.tombol-menu');
	const menu = document.querySelector('nav .menu ul');
	const listMenu = document.querySelectorAll('nav .menu ul li a');
	const carouselItems = document.querySelectorAll('.carousel-item');
	const internalHogwarts = document.querySelector('.internal-hogwarts-img');
	const battleVideo = document.querySelector('#battle-video');
	const quidditchH3 = document.querySelector('#quidditch > .intro-text > h1');
	const popoverQuidditch = document.querySelector('.popover-quidditch');
	const closeButton = document.querySelector('.close-button');
	const homeAudio = new Audio('assets/sounds/home.mp3');
	const hogwartsAudio = new Audio('assets/sounds/hogwarts.mp3');
	const quidditchAudio = new Audio('assets/sounds/quidditch.mp3');

	let toggle = false;

	function isInViewportWithPadding(
		element,
		paddingTop = 0,
		paddingBottom = 0
	) {
		const rect = element.getBoundingClientRect();
		const viewportTop = 0 + paddingTop;
		const viewportBottom = window.innerHeight - paddingBottom;
		return rect.top < viewportBottom && rect.bottom > viewportTop;
	}

	const toggleMenu = () => {
		toggle = !toggle;
		toggle ? (menu.style.display = 'flex') : (menu.style.display = 'none');
	};

	const handleInternalHogwartsHover = () => {
		if (internalHogwarts) {
			internalHogwarts.addEventListener('mouseover', () => {
				internalHogwarts.style.opacity = '0';
			});
			internalHogwarts.addEventListener('mouseout', () => {
				internalHogwarts.style.opacity = '1';
			});
		}
	};

	const handleScrollAudio = () => {
		const viewportHeight = window.innerHeight;
		const scrollY = window.scrollY;
		const bg = document.querySelector('.hogwarts-bg');
		const contentHogwarts = document.querySelector('.hogwarts-contain');
		const contentHogwarts2 = document.querySelector('.hogwarts-contain-2');

		scrollY < viewportHeight ? homeAudio.play() : homeAudio.pause();

		if (scrollY > viewportHeight && scrollY < viewportHeight * 3) {
			hogwartsAudio.play();
		} else {
			hogwartsAudio.pause();
		}

		if (
			scrollY > viewportHeight * 3 &&
			scrollY < viewportHeight * 4 + viewportHeight / 4
		) {
			quidditchAudio.play();
		} else {
			quidditchAudio.pause();
		}

		if (bg && scrollY > viewportHeight) {
			bg.style.opacity = (scrollY - viewportHeight) / 1000;
		}

		if (battleVideo) {
			scrollY > viewportHeight * 4 + viewportHeight / 4
				? battleVideo.play()
				: battleVideo.pause();
		}

		if (contentHogwarts) {
			contentHogwarts.style.opacity = isInViewportWithPadding(
				contentHogwarts,
				250,
				250
			)
				? '1'
				: '0';
		}
		if (contentHogwarts2) {
			contentHogwarts2.style.opacity = isInViewportWithPadding(
				contentHogwarts2,
				250,
				250
			)
				? '1'
				: '0';
		}
	};

	const handleCarouselHover = () => {
		carouselItems.forEach((item) => {
			const popover = item.querySelector('.popover');
			if (popover) {
				item.addEventListener('mouseover', () => {
					popover.style.display = 'flex';
				});
				item.addEventListener('mouseout', () => {
					popover.style.display = 'none';
				});
			}
		});
	};

	const handleQuidditchPopover = () => {
		if (quidditchH3 && popoverQuidditch) {
			quidditchH3.addEventListener('mouseover', () => {
				popoverQuidditch.style.display = 'flex';
			});
			quidditchH3.addEventListener('mouseout', () => {
				popoverQuidditch.style.display = 'none';
			});
		}
	};

	const handleMouseMove = () => {
		const follower = document.getElementById('follower');
		if (!follower) return;
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;

		document.addEventListener('mousemove', (e) => {
			const offsetX = (e.clientX - centerX) * 0.1;
			const offsetY = (e.clientY - centerY) * 0.1;
			follower.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
		});
	};

	document.addEventListener('DOMContentLoaded', () => {
		if (tombolMenu) {
			tombolMenu.addEventListener('click', toggleMenu);
		}
		if (closeButton) {
			closeButton.addEventListener('click', toggleMenu);
		}
		if (window.innerWidth < 768) {
			listMenu.forEach((item) => {
				item.addEventListener('click', toggleMenu);
			});
		}
		handleInternalHogwartsHover();
		handleCarouselHover();
		handleQuidditchPopover();
		handleMouseMove();
		window.addEventListener('scroll', handleScrollAudio);
	});
})();
