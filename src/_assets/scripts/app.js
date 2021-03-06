// Quantity selector button
// From https://tailwindcomponents.com/component/number-input-counter
// Modifications to set minimum and to dispatch a "change" event by Brett
function decrement(e) {
	const btn = e.target.parentNode.parentElement.querySelector(
		'button[data-action="decrement"]'
	);
	const target = btn.nextElementSibling;
	let value = Number(target.value);
	if (value > 1) value--;
	target.value = value;
	target.dispatchEvent(new Event("change"));
}

function increment(e) {
	const btn = e.target.parentNode.parentElement.querySelector(
		'button[data-action="decrement"]'
	);
	const target = btn.nextElementSibling;
	let value = Number(target.value);
	value++;
	target.value = value;
	target.dispatchEvent(new Event("change"));
}

const decrementButtons = document.querySelectorAll(
	`button[data-action="decrement"]`
);

const incrementButtons = document.querySelectorAll(
	`button[data-action="increment"]`
);

decrementButtons.forEach((btn) => {
	btn.addEventListener("click", decrement);
});

incrementButtons.forEach((btn) => {
	btn.addEventListener("click", increment);
});



// Quantity connected to Foxy links
const qtyInputs = document.querySelectorAll("input[name='quantity']");
qtyInputs.forEach(qty => {
	qty.addEventListener("change", function (e) {
		const quantity = e.target.value;
		let foo = e.target.closest("[data-foxy-product-container]").querySelectorAll(
			"[data-foxy-product-link]"
		).forEach(function (l) {
			// console.log(l.href);
			l.href = l.href.replace(/&quantity=\d+/g, "&quantity=" + quantity);
		});
	});
});