const DataAPI = async (page) => {
	const sheetURL = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SPREADSHEET_ID}/values/${page}?valueRenderOption=UNFORMATTED_VALUE&key=${GOOGLE_SPREADSHEET_API_KEY}`

	try {
		let data = await fetch(sheetURL)
		let { values } = await data.json()
		let [, ...Data] = await values.map((data) => data)
		return Data
	} catch (err) {
		console.log("Error", err.message)
		console.log(err)
	}
}

const getAvatars = async () => {
	let avatars = {}

	await DataAPI("Personagens").then((response) => {
		console.log(response)
		data.forEach((item) => {
			console.log(item)
			avatars[item[0]] = item[1] || "man"
		})
	})

	return avatars
}

export default DataAPI
