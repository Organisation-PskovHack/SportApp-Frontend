var newDate = new Date();
var weekDays = [];

function getDaysInMonth(month, year) {
	  let date = new Date(year, month, 1);
	  let days = []; 
	  while (date.getMonth() === month) {
	  	weekDays.push(date.getDay());
	    days.push(date.getDate());
	    date.setDate(date.getDate() + 1);
	  }

	  return days;
}
var daysList = getDaysInMonth(newDate.getMonth(),newDate.getFullYear());

(function getCurrentDate()
{


	let month = document.querySelector(".js__month");
	let year = document.querySelector(".js__year");
	var numberBlock = document.querySelector(".graph__number");

	let monthList = new Map();
	monthList.set(0,"Январь");
	monthList.set(1,"Февраль");
	monthList.set(2,"Март");
	monthList.set(3,"Апрель");
	monthList.set(4,"Май");
	monthList.set(5,"Июнь");
	monthList.set(6,"Июль");
	monthList.set(7,"Август");
	monthList.set(8,"Сентябрь");
	monthList.set(9,"Октябрь");
	monthList.set(10,"Ноябрь");
	monthList.set(11,"Декабрь");

	let weekDayList = new Map();
	weekDayList.set(0, "ВС");
	weekDayList.set(1, "ПН");
	weekDayList.set(2, "ВТ");
	weekDayList.set(3, "СР");
	weekDayList.set(4, "ЧТ");
	weekDayList.set(5, "ПТ");
	weekDayList.set(6, "СБ");

	currentMonth = newDate.getMonth();
	currentYear = newDate.getFullYear();
	month.innerHTML = monthList.get(currentMonth);
	year.innerHTML = currentYear;

	for (let i = 1; i <= daysList.length; i++)
	{
		numberBlock.insertAdjacentHTML("beforeend", `<div class="graph__number-item"><div class="month-number">${i}</div><div class="month-weekDay">${weekDayList.get(weekDays[i-1])}</div></div>`);
	}
}());

(function addListeners()
{
	let listeners = document.querySelectorAll(".graph__number-item");
	for (let listener of listeners)
	{
  		// console.log(listener);
  		listener.addEventListener("click", listen = () => {
		listener.classList.toggle("buttons-active");
		});
	}
}());