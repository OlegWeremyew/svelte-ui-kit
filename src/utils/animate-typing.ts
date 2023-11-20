export const typeText = (id: string, text: string): void => {
	const letters = text.replaceAll('<br>', '*').split('');
	const el = document.getElementById(id);
	(function addLetter() {
		if (letters.length > 0) {
			const letter = letters.shift();

			if (letter === '*') {
				el.innerHTML += '<br>';
			} else {
				el.innerHTML += `<span class='letter'>${letter}</span>`;
			}

			addLetter();
		}
	})();
	let counter = 0;

	const children = [...el.children];
	children[0].classList.add('show-text');

	(function addAnimation(child: ChildNode) {
		child.addEventListener('animationend', () => {
			counter += 1;
			if (counter < text.length) {
				const checkState = () => {
					const sibling = child.nextSibling as HTMLElement;
					sibling.classList.add('show-text');
					addAnimation(child.nextSibling);
				};
				checkState();
			}
		});
	})(children[0]);
};
