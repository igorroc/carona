import { GOOGLE_SPREADSHEET_ID, GOOGLE_SPREADSHEET_API_KEY } from "@env"

export default DataAPI = async (page) => {
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

export const getTripsAmount = async () => {
	let trips = 0
	await DataAPI("Total").then((response) => {
		trips = response[1][0]
	})

	return trips
}

export const getAvatars = async () => {
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

export const getLastPayer = async () => {
	let lastPayer = ""
	await DataAPI("Caixa").then((response) => {
		let row = response[response.length - 1]
		lastPayer = row[0]
	})

	return lastPayer
}

export const getMostTripsPerson = async () => {
	let mostTripsPerson = ""
	await DataAPI("Total").then((response) => {
		let row = response[4]
		mostTripsPerson = row[0]
	})

	return mostTripsPerson
}

export const getWorstPayer = async () => {
	let worstPayer = ""
	let worstPayerValue = 0

	await DataAPI("Total").then((response) => {
		response.map((row) => {
			if (row.length == 5) {
				if (worstPayerValue > row[4]) {
					worstPayerValue = row[4]
					worstPayer = row[0]
				}
			}
		})
	})

	return worstPayer
}

export const getLastTrip = async () => {
	let lastTrip = {
		users: [],
		date: "",
	}

	// type UserInfo = {
	// 	name: string
	// 	avatar: string
	// }

	await DataAPI("DataBase").then((response) => {
		let lastRow = response[response.length - 1]
		let destination = lastRow[2]
		let dateString = fixDate(lastRow[1])
		lastTrip.date = dateString

		for (let i = response.length - 1; i > response.length - 5; i--) {
			let row = response[i]
			if (row[2] == destination && fixDate(row[1]) == dateString) {
				lastTrip.users.push({ name: row[0] })
			} else {
				break
			}
		}
	})

	return lastTrip
}

function fixDate(dateNumber) {
	const date = new Date((dateNumber - 25569) * 86400 * 1000)
	const timezoneOffset = date.getTimezoneOffset() * 60000
	const utcDate = new Date(date.getTime() + timezoneOffset)
	const dateString = utcDate.toLocaleDateString("pt-BR")
	const [month, day, year] = dateString.split("/")

	// Concatenar as partes novamente na ordem correta
	return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`
}
