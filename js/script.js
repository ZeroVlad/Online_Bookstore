const categoriesListBtn = document.querySelector('aside .title');

window.onload = () => {
	document.body.classList.add('loaded');
}

categoriesListBtn.onclick = () =>{
	const categoriesList = document.querySelector('.categories-list');
	categoriesList.classList.toggle('open');
}