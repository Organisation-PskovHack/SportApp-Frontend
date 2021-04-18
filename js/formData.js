buttonNext = document.querySelector(".login__button");
buttonNext.addEventListener("click", function getFormInputs()
{
	const form = document.forms[0].querySelectorAll("input");
	for (let input of form)
	{
		console.log(input.value);
	}
});