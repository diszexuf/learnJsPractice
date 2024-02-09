const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = [
	{
		title: 'test1',
		completed: false,
	},
	{
		title: 'test2',
		completed: true,
	},
]

function render() {
	listElement.innerHTML = ''
	if (notes.length === 0) {
		listElement.innerHTML = '<p>Нет элементов</p>'
	}
	for (let i = 0; i < notes.length; i++) {
		listElement.insertAdjacentHTML(
			'beforeend',
			getNoteTemplate(notes[i], i)
		)
	}
}

render()

createBtn.onclick = function () {
	if (inputElement.value.length === 0) {
		return
	}
	const newNote = {
		title: inputElement.value,
		completed: false,
	}

	notes.push(newNote)
	render()
	inputElement.value = ''
}

listElement.onclick = function (event) {
	if (event.target.dataset.index) {
		const index = Number(event.target.dataset.index)
		const type = event.target.dataset.type

		if (type === 'toggle') {
			notes[index].completed = !notes[index].completed
		} else if (type == 'remove') {
			notes.splice(index, 1)
		}
		render()
	}
}

function getNoteTemplate(note, index) {
	return `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="${note.completed ? 'text-decoration-line-through' : ''}">${
		note.title
	}</span>
      <span>
        <span class="btn btn-small btn-${
			note.completed ? 'warning' : 'success'
		}" data-index="${index}" data-type="toggle">&check;</span>
        <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
      </span>
  </li>
  `
}

const people = [
	{ name: 'asd', budget: 123 },
	{ name: 'qwe', budget: 1056 },
	{ name: 'zxc', budget: 789 },
	{ name: 'iop', budget: 319 },
]

// let sumBudget = 0
// const filteredPeople = people.filter((p) => p.budget > 500)
// filteredPeople.forEach((p) => (sumBudget += p.budget))

// console.log(sumBudget)

// const bybudget = p => p.budget > 500
// const pickBudget = p => p.budget

// const sumBudget = people
// 	.filter(bybudget)
// 	.map(pickBudget)
// 	.reduce((acc, p) => acc + p, 0)

// console.log(sumBudget)

const string = 'Privet, kak dela?'
// const reversed = string.split('').toReversed().join('')

const reversed = string
	.split('')
	.toReversed()
	.join('!')
	.split('')
	.filter((c) => c !== '!')
	.join('')

console.log(reversed)
