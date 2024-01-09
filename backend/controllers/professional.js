const professionalRoute = (req, res) => {
    const data = {
        "professionalName":"Robert Hathaway",
        "base64Image":"../public/images/base64Image.jpg"
        }
    res.send(data);

};

module.exports = {
    professionalRoute
};