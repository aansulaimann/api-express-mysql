const logRequest = (req, res, next) => {
    console.log('LOG Req: Terjadi request ke PATH ', req.path)
    next()
}

module.exports = logRequest