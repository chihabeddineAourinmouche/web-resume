const create = (type, parent = null, classNames = [], id = '', style = {}, events = [], attrs = {}) => {
	const element = document.createElement(type)
	if (classNames.length) classNames.forEach(className => element.classList.add(className))
	if (id !== '') element.id = id
	Object.keys(style).forEach(key => element.style[key] = style[key])
	events.forEach(e => {
		element.addEventListener(e.name, e.handler)
	})
	Object.keys(attrs).forEach(key => element[key] = attrs[key])
	if (parent != null) parent.appendChild(element)
	return element
}