function utmValue() {
    const data = {
        labels: [],
     datasets: [{
            label: 'Variación a 32 meses',
            data: [],
            backgroundColor: [                    
                'rgba(91, 255, 245, 0.6)',
            ],
            borderColor: [               
                'rgba(91, 255, 245)'
             ],
             fillColor: [
                "rgba(91, 255, 245)"
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
    
    const myChart = new Chart(document.getElementById("utmGraph"), config);

    let utmSelector = document.querySelector(".utmvalue")
    let varSelector = document.querySelector(".utmvar")

    async function getValue(){        
        let url = "https://mindicador.cl/api/utm"        
        let data = await fetch(url)
        data = await data.json()        
        return data;
    }
    getValue().then(data => {
      function getUtm(){
          let utm = data.serie[0].valor
          let utm2 = data.serie[1].valor
          let varUtm = (utm - utm2).toString()
          let varpercent = (((utm - utm2) / utm) * 100).toFixed(2)
          utm = utm.toString()
          utm = "$" + utm.slice(0, 2) + "." + utm.slice(2)
          varUtm = "$" + varUtm  + " +" + varpercent + "%"  
          utmSelector.innerText = utm
          varSelector.innerText = varUtm                  
      }
      
      function utmSeries() {
        let getSeries = data.serie.map(function(index) {
            let valor = index.valor            
            return valor
        })
        
        let getLabels = data.serie.map(function(index){
        let fecha = index.fecha.slice(0,7)        
        return fecha
      })
      myChart.config.data.labels = getLabels.sort()
      myChart.config.data.datasets[0].data = getSeries.sort((a, b) => a - b)
      myChart.update()
      
      }
      getUtm()
      utmSeries()
    })

}

export default utmValue