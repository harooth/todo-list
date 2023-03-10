let input = document.querySelector(".message");
let button = document.querySelector(".add");
let ul = document.querySelector(".todo");
let deleteTodo = document.querySelector(".delete");

let todoArr = []

if (localStorage.getItem('todo')) {
	todoArr = JSON.parse(localStorage.getItem('todo'))
	render()
}

const doThings = function () {
	if (input.value.trim() == "") {
		input.value = "";
		return;
	}
	let todo = {
		message: input.value,
		checked: false,
	}
	input.value = ''
	// console.log(todo)
	todoArr.push(todo)
	localStorage.setItem("todo", JSON.stringify(todoArr))
	render();
	console.log(todoArr)
}

button.addEventListener("click", doThings)
input.addEventListener("keyup", function (e) {
	if (e.keyCode == 13) {
		doThings();
	}
});

deleteTodo.addEventListener("click", () => {


	// todoArr.length = 0;
	// localStorage.setItem("todo", JSON.stringify([]))
	// render();

	todoArr = todoArr.filter((el) => {
		return el.checked == false;
	});
	localStorage.setItem("todo", JSON.stringify(todoArr))
	render()
	console.log(todoArr);
})

ul.addEventListener('change', function (event) {
	let id = event.target.getAttribute("id");
	todoArr[id].checked = !todoArr[id].checked;
	localStorage.setItem("todo", JSON.stringify(todoArr))
	console.log(todoArr)
})

function render() {
	let result = ''

	todoArr.forEach((el, i) => {
		result += `
			<li>
				<input type="checkbox" id="${i}" ${el.checked ? 'checked' : ''}>
				<label for="${i}">${el.message}</label>
			</li>
		`
	})

	ul.innerHTML = result;
}




{/* <li>
	<input type="checkbox" id="todo_1">
	<label for="todo_1">test</label>
</li> */}