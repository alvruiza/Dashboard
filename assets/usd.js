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
    async function dataSeries () {
        const url = "https://mindicador.cl/api/dolar"
        const response = await fetch(url)
        const data = await response.json()        
        return data;
    }; 
    
    dataSeries().then(data => { 
        function getUSD(){
            let usd = data.serie[0].valor
            let usd1 = data.serie[1].valor
            let varUsd = (usd - usd1)
            let varUsdEnt = varUsd.toFixed(2)
            let varUsdPercent = (((usd - usd1) / usd)*100)
            let usdPrice = usd.toString().replace(".",",")            
            usdSelector.innerText = "$" + usdPrice
            if (varUsd < 0){
                varId.classList.toggle("negative")
            }else{
                varId.classList.toggle("positive")
            }
            varSelector.innerText = "$" + varUsdEnt + " " + varUsdPercent.toFixed(2) + "%"
        }       
        
        function usdSeries(){
                let getLabels = data.serie.map(function(index){
                let fecha = index.fecha.slice(0,10)            
                return fecha
            })

            let getSeries = data.serie.map(function(index){
                let valor = index.valor                
                return valor
            })
            myChart.config.data.labels = getLabels.sort()
            myChart.config.data.datasets[0].data = getSeries.reverse()
            myChart.update()
        }
        getUSD()
        usdSeries()      
    });
   
    
}

export default usdValue 








 
