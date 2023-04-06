import { GOOGLE_SPREADSHEET_ID, GOOGLE_SPREADSHEET_API_KEY } from "@env"

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

export const getSaldo = async () => {
	let saldo = 0
	await DataAPI("Total").then((response) => {
		saldo = response[1][5]
	})

	return saldo
}

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

const getLastPayer = async () => {
	let lastPayer = {}
	await DataAPI("Caixa").then((response) => {
		lastPayer = response[response.length - 1]
	})

	return lastPayer
}

export default DataAPI
