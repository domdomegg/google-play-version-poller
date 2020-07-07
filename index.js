const axios = require('axios').default

const UPDATE_INTERVAL = 60 // seconds
const GOOGLE_PLAY_LINK = 'https://play.google.com/store/apps/details?id=com.google.android.apps.playconsole'

let lastVersion;

const logAppVersion = async () => {
	const res = await axios.get(GOOGLE_PLAY_LINK)
	const version = res.data.match(/Current Version<\/div><span class=".+?"><div class=".+?"><span class=".+?">(.+?)</)[1]
	if (lastVersion && lastVersion != version)
		console.log(`Version changed!`)
	console.log(`Public version on Google Play as of ${new Date().toLocaleString()}: ${version}`)
	lastVersion = version
}

logAppVersion()
setInterval(logAppVersion, UPDATE_INTERVAL * 1000)