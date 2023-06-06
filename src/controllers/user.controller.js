const soma = (req, res) => {
    const soma = 120 + 1

    res.send({soma: soma})
}

module.exports = { soma }