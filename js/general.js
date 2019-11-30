// open mobile menu
var menuIcon = document.getElementById('burger-menu');
menuIcon.addEventListener('click', openMobileMenu);

function openMobileMenu() {
	var menu = document.getElementById('menu-mobile');
	if (menu.style.display === 'block') {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'block';
	}
}

// close mobile menu after clicking on list item
var menuListItem = document.getElementById('menu-mobile').getElementsByTagName('li');

for (var i = 0; i < menuListItem.length; i++) {
    var self = menuListItem[i];
    self.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu() {
	var menu = document.getElementById('menu-mobile');
	menu.style.display = 'none';
}