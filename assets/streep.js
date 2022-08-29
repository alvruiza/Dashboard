function streepValues() {
    async function getValues() {
        let url = "https://fintual.cl/api/real_assets/15077/days"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    getValues().then(data => {
        let varSelector = document.querySelector(".streepvar")
        let streepSelector = document.querySelector(".streepprice")
        let varId = document.getElementById ("streepvar")
        let dayValue = data.data[0].attributes.price
        let value2 =data.data[1].attributes.price
        let streepvar = (dayValue - value2)
        let streepPercent = (((dayValue -value2) / dayValue) * 100)
        dayValue = dayValue.toFixed(2)
        if (streepvar < 0) {
            varId.classList.toggle("negative")
            streepPercent = " " + streepPercent.toFixed(2)
        }else{
            varId.classList.toggle("positive")
            streepPercent = "+" + streepPercent.toFixed(2)
        }
        streepSelector.innerText ="$" + dayValue
        varSelector.innerText = "$" + streepvar.toFixed(2) + " " + streepPercent + "%"         
    })
}

export default streepValues