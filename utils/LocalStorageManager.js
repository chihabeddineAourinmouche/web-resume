const LocalStorageManager = () => {
	const parseData = (value) => {
		try {
			return JSON.parse(value)
		} catch (error) {
			return value
		}
	}

	const set = (key, value) => localStorage.setItem(key, JSON.stringify(value))

	const get = (key) => parseData(localStorage.getItem(key))

	const update = (key, newValue) => {
		get(key) && set(key, Object.assign({}, get(key), newValue))
	}

	const remove = (key) => localStorage.removeItem(key)

	const clear = () => localStorage.clear()

	const has = (key) => localStorage.getItem(key) !== null

	return { set, get, update, remove, clear, has }
}

const localStorageManager = LocalStorageManager()
