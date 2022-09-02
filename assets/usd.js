function usdValue() {
    const data = {
        labels: [],
     datasets: [{
            label: 'Variación a 30 días',
            data: [],
            backgroundColor: [                    
                'rgba(29, 89, 217,0.5)',
            ],
            borderColor: [               
                'rgba(29, 89, 217,1)'
             ],
             fillColor: [
                "rgba(29, 89, 217)"
             ],
            borderWidth: 1,
        }]
    }
    
    const config = {
        type: "line",
        data,
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            },
            legend: {
                display: true
            },
            tension: 0.4,
            fill: "origin",
        }
    }
    
    
    const myChart = new Chart(document.getElementById("usdGraph"), config);
    
    let usdSelector = document.querySelector(".usdvalue");
    let varSelector = document.querySelector(".usdvar");
    let varId = document.getElementById("usdvar")

    async function dataSeries(){
        try{
            let startYear = moment().subtract(42, 'days').format("YYYY")
            let startMonth = moment().subtract(42, 'days').format("MM")
            let startDay =  moment().subtract(42, 'days').format("DD")            
            let endYear = moment().format('YYYY')
            let endMonth = moment().format('MM')  
            let endDay = moment().format('DD') 
            let url = `https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/${startYear}/${startMonth}/dias_i/${startDay}/${endYear}/${endMonth}/dias_f/${endDay}?apikey=6b0901a03c3dbb1313fbaa917eedadfc8bc4bf04&formato=json`
            let data = await fetch(url)
            data = await data.json()
            return data;
            
        }catch(error){
            alert("error en la consulta de divisas")
        }
    }
    dataSeries().then(data => {
        data = data.Dolares.reverse()
        
        function getUSD() {
            let usd = data[0].Valor.replace(",", ".")
            let usd2 = data[1].Valor.replace(",", ".")            
            let varUsd = ((usd - usd2)).toFixed(2)
            let varUsdPercent = (((usd-usd2)/usd)*100)
            let usdPrice = usd.toString().replace(".",",")            
            usdSelector.innerText = "$" + usdPrice
            if (varUsd < 0){
                varId.classList.toggle("negative")
                varSelector.innerText =" " + "-" + "$" + varUsd.replace(".",",") + " " + "-" +  varUsdPercent.toFixed(2).replace(".",",") + "%"
            }else{
                varId.classList.toggle("positive")
                varSelector.innerText =" " + "+" + "$" + varUsd.replace(".",",") + " " + "+" +  varUsdPercent.toFixed(2).replace(".",",") + "%"
            }      
        }

        function usdSeries() {
            let getSeries = data.map(function(index) {
                let valor = index.Valor.replace(",",".")
                console.log(valor)                          
                return valor
            })

            let getLabels = data.map(function(index){
                let fecha = index.Fecha        
                return fecha    
            })

            myChart.config.data.labels = getLabels.sort()
            myChart.config.data.datasets[0].data = getSeries.reverse()
            myChart.update()
        }
        
        usdSeries()
        getUSD()
        
    })
    
}

export default usdValue 








 
