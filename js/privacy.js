const hamburger = document.querySelector('.navbar__hamburger');
const sideNav = document.querySelector('.sideNav');
const sideNavLinks = document.querySelectorAll('.sideNav__list-items');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('navbar__hamburger--active');
	sideNav.classList.toggle('sideNav--hide');
});

sideNavLinks.forEach((i) => {
	i.addEventListener('click', () => {
		sideNav.classList.add('sideNav--hide');
		hamburger.classList.toggle('navbar__hamburger--active');
	});
});
