(function setSliderListener(){
	var sliderItems = document.querySelectorAll(".date__slider-item");
	for (let item of sliderItems)
	{
  		item.addEventListener("click", listen = () => {
  			for (let item of sliderItems)
  			{
  				item.classList.remove("active-day");
  			}
		item.classList.toggle("active-day");
		});
	}
	//console.log(sliderItems);
}());