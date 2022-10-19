const DataAPI = async (page) => {
	const sheetURL = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SPREADSHEET_ID}/values/${page}?valueRenderOption=FORMATTED_VALUE&key=${GOOGLE_SPREADSHEET_API_KEY}`

	try {
		let data = await fetch(sheetURL)
		let { values } = await data.json()
		let [, ...Data] = await values.map((data) => data)
		return Data
	} catch {
		console.log("Error")
	}
}
export default DataAPI
