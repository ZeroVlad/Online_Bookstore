const categoriesListBtn = document.querySelector('aside .title');
const otherDetalisBtn = document.querySelector('.other-detalis-btn');
const productInfBtn = document.querySelector('.product-inf-btn');

window.onload = () => {
	document.body.classList.add('loaded');
}

if (categoriesListBtn != null) {
	categoriesListBtn.onclick = () =>{
		const categoriesList = document.querySelector('.categories-list');
		categoriesList.classList.toggle('open');
	}
}

if ((otherDetalisBtn != null)&&(productInfBtn != null)) {
	otherDetalisBtn.addEventListener('click', () => {
		const otherDetalis = document.querySelector('.other-detalis');
		removeActive();
		otherDetalisBtn.classList.add('active');
		otherDetalis.classList.add('active');
	});
	productInfBtn.addEventListener('click', () => {
		const productInf = document.querySelector('.product-inf');
		removeActive();
		productInfBtn.classList.add('active');
		productInf.classList.add('active');
	});
}

function removeActive() {
	const btns = document.querySelectorAll('.switch-text');
	const texts = document.querySelectorAll('.product-inf-block .text div');

	for (let i = 0; i < btns.length; i++) {
		let btn = btns[i];
		btn.classList.remove('active');
	}

	for (let i = 0; i < texts.length; i++) {
		let text = texts[i];
		text.classList.remove('active');
	}
}