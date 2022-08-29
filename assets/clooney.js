function clooneyValues() {
    async function getValues() {
        let url = "https://fintual.cl/api/real_assets/188/days"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    getValues().then(data => {
        let varSelector = document.querySelector(".clooneyvar")
        let clooneySelector = document.querySelector(".clooneyprice")
        let varId = document.getElementById ("clooneyvar")
        let dayValue = data.data[0].attributes.price
        let value2 =data.data[1].attributes.price
        let clooneyvar = (dayValue - value2)
        let clooneypercent = (((dayValue -value2) / dayValue) * 100)
        dayValue = dayValue.toFixed(2)
        if (clooneyvar < 0) {
            varId.classList.toggle("negative")
            clooneypercent = " " + clooneypercent.toFixed(2)
        }else{
            varId.classList.toggle("positive")
            clooneypercent = "+" + clooneypercent.toFixed(2)
        }
        clooneySelector.innerText ="$" + dayValue
        varSelector.innerText = "$" + clooneyvar.toFixed(2) + " " + clooneypercent + "%"         
    })
}

export default clooneyValues