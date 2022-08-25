



function ufvalue () {
    const data = {
        labels: [],
     datasets: [{
            label: 'Variación a 30 días',
            data: [],
            backgroundColor: [                    
                'rgba(145, 201, 253, 0.6)',
            ],
            borderColor: [               
                'rgba(145, 201, 253)'
             ],
             fillColor: [
                "rgba(145, 201, 253)"
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

    const myChart = new Chart(document.getElementById("ufGraph"), config);
    let ufSelector = document.querySelector(".ufvalue")
    let varSelector = document.querySelector(".ufvar")
    async function getValue(){
        let url = "https://mindicador.cl/api/uf"
        let data = await fetch(url)
        data = await data.json()
        return data;
    };
    
    getValue().then(data => {
        function ufValue() {
            let getUf = data.serie[0].valor
            let getUf2 = data.serie[1].valor
            let varUf = (getUf - getUf2).toFixed(2)
            let ufPercent = (((getUf - getUf2) / getUf) * 100).toFixed(2)
            getUf = getUf.toString().replace(".",",")
            let uf = "$" + getUf.slice(0,2) + "." + getUf.slice(2)
            ufSelector.innerText = uf
            varSelector.innerText = "$" + varUf + " +" + ufPercent +"%"
            return uf
        }

        function ufSeries() {
                let getSeries = data.serie.map(function(index){
                let valor = index.valor                          
                return valor
            })

                let getLabels = data.serie.map(function(index){
                let fecha = index.fecha.replace("T04:00:00.000Z", ".")
                return fecha
            })              
            myChart.config.data.labels = getLabels.sort()
            myChart.config.data.datasets[0].data = getSeries.sort((a, b) => a - b)
            myChart.update()
        }

        ufSeries()
        ufValue()
    })
    
   
    
}

export default ufvalue