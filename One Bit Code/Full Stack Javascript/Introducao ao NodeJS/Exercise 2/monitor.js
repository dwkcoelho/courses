//Extensions
const os = require("node:os")
const fs = require("node:fs")
const path = require("node:path")
//Map to edit result from os.plataform()
const systemPlatformMap = {
  "win32": "Windows",
  "linux": "Linux",
  "darwin": "MacOS",
  "freebsd": "FreeBSD"
}
//Function to get mainly data from system
function getSystemInfo() {
  const system = systemPlatformMap[os.platform()]
  const arch = os.arch()
  const cpu = os.cpus()[0].model

  const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
  const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60

  const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
  const uptimeHoursInSeconds = uptimeHours * 60 * 60

  const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
  const uptimeMinsInSeconds = uptimeMins * 60

  const uptimeSecs = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)

  const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`

  const ramTotal = os.totalmem() / 1024 / 1024 / 1024
  const ramUsage = (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024
  const ramUsagePercent = Math.round((ramUsage / ramTotal) * 100)

  return { system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent }
}

//Show the data
function printLog({ system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent }) {
  console.clear()
  console.log("SYSTEM DETAILS")
  console.log(`Operating System: ${system}`)
  console.log(`Architecture: ${arch}`)
  console.log(`Process Model: ${cpu}`)
  console.log(`System Uptime: ${uptime}`)
  console.log(`RAM Usage: ${ramUsage.toFixed(2)} GB / ${ramTotal.toFixed(2)} GB (${ramUsagePercent} %)`)
}
//Build the file and append data
function saveLog({ system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent }) {
  const logContent = `SYSTEM DETAILS | Operating System: ${system} | Architecture: ${arch} | Process Model: ${cpu} | System Uptime: ${uptime} | RAM Usage: ${ramUsage.toFixed(2)} GB / ${ramTotal.toFixed(2)} GB (${ramUsagePercent} %)\n---\n`

  const logDir = path.join("/", "log")
  
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir)
  }

  const logFilePath = path.join(logDir, "log.txt")
  fs.appendFileSync(logFilePath, logContent)
}
//Execute the program each 1s
setInterval(() => {
  const systemInfo = getSystemInfo()
  printLog(systemInfo)
  saveLog(systemInfo)
}, 1000)