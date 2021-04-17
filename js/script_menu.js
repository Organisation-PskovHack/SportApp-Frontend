(function menu()
{
	const menu = document.querySelector(".open__menu");
	const menu_button = document.querySelector(".header__menu");
	menu_button.addEventListener("click", listen = () => {
		menu_button.classList.toggle("menu__active");
		menu.classList.toggle("hide__menu");
	});
}());