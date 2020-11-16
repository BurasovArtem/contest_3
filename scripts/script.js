function test() {
	let burger = document.getElementById('burger'),
		menu = document.getElementById('mobile'),
		mobile_content = document.getElementById('mobile_content');
	if (menu.classList.contains('active')) {
		menu.classList.remove('active');
		mobile_content.style.display = 'none';
	} else {
		menu.classList.add('active');
		mobile_content.style.display = 'flex';
	}
}