const requestLogger = (req, res, next) => {
    const timestamp = newDate.toISOString
    const method = req.method
    const path = req.path
    const ip = req.ip
    const browserDeviceDetails = req.get["user-agent"]
    console.log(`[{$timestamp}] [${method}] [${path}]`)
    next()
}

module.exports = {requestLogger}