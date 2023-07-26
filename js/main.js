const $toggleImg = document.querySelector(".toggle-img")

$toggleImg.addEventListener("click", (e) => {
	const target = e.currentTarget
	const children = target.children[0]
	const animationType = children.dataset.animation
	const $sofaImg = document.querySelector("#sofa")
	const imgByType = {
		static: {
			src: "./assets/sofa.gif",
			attributes: {
				src: "./assets/x.svg",
				"data-animation": "animated",
			},
		},
		animated: {
			src: "./assets/sofa.jpg",
			attributes: {
				src: "./assets/360.svg",
				"data-animation": "static",
			},
		},
	}
	const img = createImgElement(imgByType[animationType].attributes)
	target.replaceChild(img, children)
	$sofaImg.setAttribute("src", imgByType[animationType].src)
})

function createImgElement(attributes) {
	const img = document.createElement("img")
	for (let attribute of Object.keys(attributes)) {
		img.setAttribute(attribute, attributes[attribute])
	}
	return img
}
