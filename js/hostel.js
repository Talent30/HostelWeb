//popup menu function on the navigation bar
function popupmenu() {
	let mainNav = document.getElementById('js-menu');
	let navBarToggle = document.getElementById('js-navbar-toggle');
	navBarToggle.addEventListener('click', function() {
  		mainNav.classList.toggle('active');
	});
}