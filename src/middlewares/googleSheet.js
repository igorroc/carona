import { GOOGLE_SPREADSHEET_ID, GOOGLE_SPREADSHEET_API_KEY } from "@env"

export default DataAPI = async (page) => {
	const sheetURL = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SPREADSHEET_ID}/values/${page}?valueRenderOption=UNFORMATTED_VALUE&key=${GOOGLE_SPREADSHEET_API_KEY}`

	try {
		let data = await fetch(sheetURL)
		let { values } = await data.json()
		if (values) {
			let [, ...Data] = await values.map((data) => data)
			return Data
		}
	} catch (err) {
		console.log("Error", err.message)
		console.log(err)
	}
}

export const getNames = async () => {
	let names = []

	await DataAPI("Total")
		.then((response) => {
			if (response) {
				response.map((row, i) => {
					if (row[0] && i >= 4) {
						names.push({ title: row[0], id: i })
					}
				})
			}
		})
		.catch((err) => console.log(err))

	return names
}

export const getSaldo = async () => {
	let saldo = 0
	await DataAPI("Total")
		.then((response) => {
			if (response) {
				if (response[1]) {
					saldo = response[1][5]
				}
			}
		})
		.catch((err) => console.log(err))

	return saldo
}

export const getTripsAmount = async () => {
	let trips = 0
	await DataAPI("Total")
		.then((response) => {
			if (response) {
				if (response[1]) {
					trips = response[1][0]
				}
			}
		})
		.catch((err) => console.log(err))

	return trips
}

export const getUserAvatar = async (name) => {
	let avatar = "man"

	await DataAPI("Personagens")
		.then((response) => {
			if (response) {
				response.map((row) => {
					if (row[1] && row[0] == name) {
						avatar = row[1]
					}
				})
			}
		})
		.catch((err) => console.log("GetUser - Error:", err))

	return avatar
}

export const getLastPayer = async () => {
	let lastPayer = ""
	await DataAPI("Caixa")
		.then((response) => {
			if (response) {
				let row = response[response.length - 1]
				lastPayer = row[0]
			}
		})
		.catch((err) => console.log(err))

	return lastPayer
}

export const getMostTripsPerson = async () => {
	let mostTripsPerson = ""
	await DataAPI("Total")
		.then((response) => {
			if (response) {
				let row = response[4]
				if (row) {
					mostTripsPerson = row[0]
				}
			}
		})
		.catch((err) => console.log(err))

	return mostTripsPerson
}

export const getWorstPayer = async () => {
	let worstPayer = ""
	let worstPayerValue = 0

	await DataAPI("Total")
		.then((response) => {
			if (response) {
				response.map((row) => {
					if (row.length == 5) {
						if (worstPayerValue > row[4]) {
							worstPayerValue = row[4]
							worstPayer = row[0]
						}
					}
				})
			}
		})
		.catch((err) => console.log(err))

	return worstPayer
}

export const getLastTrip = async () => {
	let lastTrip = {
		users: [],
		date: "",
	}

	await DataAPI("DataBase")
		.then(async (response) => {
			if (response) {
				if (response) {
					let lastRow = response[response.length - 1]
					let destination = lastRow[2]
					let dateString = fixDate(lastRow[1])
					lastTrip.date = dateString

					for (
						let i = response.length - 1;
						i > response.length - 5;
						i--
					) {
						let row = response[i]
						if (
							row[2] == destination &&
							fixDate(row[1]) == dateString
						) {
							let avatar = await getUserAvatar(row[0])
							lastTrip.users.push({ name: row[0], avatar })
						} else {
							break
						}
					}
				}
			}
		})
		.catch((err) => console.log(err))

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
