async function getValue() {
    let currency = document.querySelector(".usdvalue");
    const url = "https://api.currencyscoop.com/v1/latest/usd/clp?api_key=29ab980d5b6e2f58a5395a1d2d635d28"    
    let query = {
        method: "GET",               
    }

    try{
        let data = await fetch(url, query);
        data = await data.json()
        data = data.response.rates.CLP        
        console.log(data)
        currency.innerText = "$" + (data).toFixed(2).replace(".",",")       
        
    } catch (error){
        alert("Error en la consulta de divisas")
    }
    
} 

getValue() 

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

function drawChart() {
    async function dataSeries () {
        const url = "https://api.exchangerate.host/timeseries?start_date=2022-07-22&end_date=2022-08-22&base=USD&symbols=CLP&places=2"
        const response = await fetch(url)
        const dataSeries = response.json()
        return dataSeries;
    }; 
    
    dataSeries().then(dataSeries => {
        let getLabels = Object.keys(dataSeries.rates)
        let labels = getLabels.map(function(index){
            return index
        })

        let getPrices = Object.values(dataSeries.rates)    
        let prices = getPrices.map(function(index){
            return index.CLP
        })
        
        myChart.config.data.labels = labels
        myChart.config.data.datasets[0].data = prices
        myChart.update()        
    });
   
    
}

drawChart()

export { drawChart, getValue }








 
