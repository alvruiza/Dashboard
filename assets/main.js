const body = document.querySelector("body"), 
      index = body.querySelector(".indexli"),
      home =  body.querySelector(".homeli"),
      section = body.querySelector(".home");
     


import ufvalue from "./uf.js"
import utmValue from "./utm.js"
import usdValue from "./usd.js";


usdValue()
ufvalue()
utmValue()


index.addEventListener("click", () => {
    section.innerHTML = `<div class="text">Indicadores</div>
    <div class="container-fluid">
        <div class="row usdrow">
            <div class="col-lg-6 col-md-6 col-xs-6">
                <div class="usdpanel">
                    <div class="container-fluid usd">
                        <div class="row justify-content-center graphtitle">
                            <div class="col-lg-3 col-md-3 col-xs-3">
                                <p class="tag">indicador</p>
                                <p class="usdtitle">USDCLP</p>
                            </div>
                            <div class="col-lg-4 col-md-4 col-xs-4">
                                <h6 class="tag">valor actual</h6>
                                <p class="usdvalue"></p>                         
                            </div>
                            <div class="col-lg-5 col-md-5 col-xs-5">
                                <h6 class="tag">variación</h6>
                                <p class="usdvar" id="usdvar">var</p>
                            </div>                            
                       </div>                
                        <canvas id="usdGraph">
                        </canvas>
                    </div>    
                </div>                                   
           </div> 
           <div class="col-lg-6 col-md-6 col-xs-6">
            <div class="ufpanel">
                <div class="container-fluid usd">
                    <div class="row justify-content-center graphtitle">
                        <div class="col-lg-3 col-md-3 col-xs-3">
                            <p class="tag">indicador</p>
                            <p class="uftitle">UF Hoy</p>
                        </div>
                        <div class="col-lg-4 col-md-4 col-xs-4">
                            <p class="tag">valor actual</p>
                            <p class="ufvalue">$</p>
                        </div>
                        <div class="col-lg-5 col-md-5 col-xs-5">
                            <h6 class="tag">variación</h6>
                            <p class="ufvar">var</p>
                        </div>
                        <canvas id="ufGraph"></canvas>
                    </div>
                </div>
            </div>
            </div>        
        </div>
        <div class="row utmrow">
            <div class="col-lg-6 col-md-6 col-xs-6">
                <div class="utmpanel">
                    <div class="container-fluid usd">
                        <div class="row justify-content-center graphtitle">
                            <div class="col-lg-3 col-md-3 col-xs-3">
                                <p class="tag">indicador</p>
                                <p class="utmh1">UTM</p>
                            </div>
                            <div class="col-lg-4 col-md-4 col-xs-4">
                                <h6 class="tag">valor actual</h6>
                                <p class="utmvalue">$</p>
                            </div>
                            <div class="col-lg-5 col-md-5 col-xs-5">
                                <h6 class="tag">variación</h6>
                                <p class="utmvar">var</p>
                            </div>
                            <canvas id="utmGraph"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    usdValue()
    ufvalue()
    utmValue()

})

home.addEventListener("click", () => { 
    section.innerHTML = ``
 })
