const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated_bg_texts');

function getData() {
	header.innerHTML = `<img src="https://images.unsplash.com/photo-1659183712702-51419775bfe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt=""/>`;

	title.innerHTML = `Lorem ipsum dolor sit amet.`;

	excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, consequuntur?`;

	profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/73.jpg" alt="" />`;

	name.innerHTML = `John Doe`;
	date.innerHTML = `Aug 28, 2022`;

	animated_bgs.forEach((bg) => {
		bg.classList.remove('animated-bg');
	});
	animated_bgs.forEach((bgtext) => {
		bgtext.classList.remove('animated_bg_texts');
	});
}

setTimeout(getData, 2500);
