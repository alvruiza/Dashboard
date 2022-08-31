const body = document.querySelector("body"), 
      index = body.querySelector(".indexli"),
      home =  body.querySelector(".homeli"),
      section = body.querySelector(".home"),
      funds = body.querySelector(".fundsli"),
      portfolio = body.querySelector(".portfolioli");
     

import ufvalue from "./uf.js"
import utmValue from "./utm.js"
import usdValue from "./usd.js"
import riskyValues from "./riskynorris.js"
import pittValues from "./pitt.js";
import clooneyValues from "./clooney.js";
import streepValues from "./streep.js";
import mixChart from "./fundsgraph.js";
import getNews from "./news.js"
import { cxsePrices, esgvPrices, ftecPrices, kompPrices, qqqPrices, smhprices, vtPrices, vtvPrices, drawChart } from "./riskyetfs.js"

getNews()
 

index.addEventListener("click", () => {
    section.innerHTML = `<div class="text">Indicadores</div>
    <div class="container-fluid usdcont">
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
    section.innerHTML = `<div class="text">Inicio</div>
    <div class="container-fluid">
        <div class="row justify-content-center newsrow">
            <div class="col-lg-4 col-md-6 col-xs-6">
                <div class="container-fluid newspanel">
                    <h1 class="newstitle">Noticias</h1>
                    <div class="newsimg">
                        <img class="newsimgsrc" id="img1" src="https://imageio.forbes.com/specials-images/imageserve/630ce6d8109a80e610401034/0x0.jpg?format=jpg&width=1200">                             
                    </div>
                    <h1 class="newsheadline" id="headline1">3M Is Out, Find Other Dividend Stocks Instead</h1>
                    <p class="newslead" id="lead1">3M Company (MMM) got hammered on Friday afternoon after a federal judge ruled that 230,000 lawsuits for defective military earplugs can proceed against 3M despite the bankruptcy of its subsidiary that sold them. Leave drama behind and walk away.</p>
                </div>                 
            </div>
            <div class="col-lg-4 col-md-6 col-xs-6">
                <div class="container-fluid newspanel">
                    <h1 class="newstitle">Noticias</h1>
                    <div class="newsimg">
                        <img class="newsimgsrc" id="img2" src="https://imageio.forbes.com/specials-images/imageserve/630ce6d8109a80e610401034/0x0.jpg?format=jpg&width=1200">                             
                    </div>
                    <h1 class="newsheadline" id="headline2">3M Is Out, Find Other Dividend Stocks Instead</h1>
                    <p class="newslead" id="lead2">3M Company (MMM) got hammered on Friday afternoon after a federal judge ruled that 230,000 lawsuits for defective military earplugs can proceed against 3M despite the bankruptcy of its subsidiary that sold them. Leave drama behind and walk away.</p>
                </div>                 
            </div>
            <div class="col-lg-4 col-md-6 col-xs-6">
                <div class="container-fluid newspanel">
                    <h1 class="newstitle">Noticias</h1>
                    <div class="newsimg">
                        <img class="newsimgsrc" id="img3" src="https://imageio.forbes.com/specials-images/imageserve/630ce6d8109a80e610401034/0x0.jpg?format=jpg&width=1200">                             
                    </div>
                    <h1 class="newsheadline" id="headline3">3M Is Out, Find Other Dividend Stocks Instead</h1>
                    <p class="newslead" id="lead3">3M Company (MMM) got hammered on Friday afternoon after a federal judge ruled that 230,000 lawsuits for defective military earplugs can proceed against 3M despite the bankruptcy of its subsidiary that sold them. Leave drama behind and walk away.</p>
                </div>                 
            </div>                
        </div>
    </div>`
    
    getNews()
 })

funds.addEventListener("click", () => {
    section.innerHTML = `<div class="text">Fondos</div>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-3 col-md-6 col-xs-6">
                <div class="container-fluid ratiopanel">                      
                    <span class="fundtitle">Risky Norris</span>                        
                    <p class="riskyprice"></p>
                    <p class="riskytag">valor cuota al cierre jornada anterior</p>
                    <p class="riskyvar" id="riskyvar">var</p>
                    <p class="riskytag">variación diaria</p>                        
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-xs-6">
                <div class="container-fluid ratiopanel">                      
                    <span class="fundtitle">Moderate Pitt</span>                        
                    <p class="pittprice"></p>
                    <p class="riskytag">valor cuota al cierre jornada anterior</p>
                    <p class="pittvar" id="pittvar">var</p>
                    <p class="riskytag">variación diaria</p>                        
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-xs-6">
                <div class="container-fluid ratiopanel">                      
                    <span class="fundtitle">Conservative Clooney</span>                        
                    <p class="clooneyprice"></p>
                    <p class="riskytag">valor cuota al cierre jornada anterior</p>
                    <p class="clooneyvar" id="clooneyvar">var</p>
                    <p class="riskytag">variación diaria</p>                        
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-xs-6">
                <div class="container-fluid ratiopanel">                      
                    <span class="fundtitle">Very Conservative Streep</span>                        
                    <p class="streepprice"></p>
                    <p class="riskytag">valor cuota al cierre jornada anterior</p>
                    <p class="streepvar" id="streepvar">var</p>
                    <p class="riskytag">variación diaria</p>                        
                </div>
            </div>                        
        </div>
    </div>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12 col-xs-12 ">
                <div class="container-fluid fundspanel">
                    <p class="fundtitle">Comportamiento histórico de los fondos</p>
                    <canvas id="fundschart"></canvas>
                </div>
            </div>
        </div>
    </div>
</div>`

    //riskyValues()
    //pittValues()
    //clooneyValues()
    //streepValues()
    //mixChart()
 })

 portfolio.addEventListener("click", () =>{
    section.innerHTML = `<div class="container-fluid">
    <div class="text">Portafolios</div>
    <div class="row justify-content-center">
        <div class="col-lg-7 col-md-3 col-xs-6">
            <div class="etfpanel">
                <h1 class="etftitle">Risky Norris</h1>
                <div class="funds">
                    <table class="etftable">
                        <tr class="item">
                            <th class="item">Fondo</th>
                            <th class="item">% del Portafolio</th>
                            <th class="item">Hoy</th>                                                                       
                        </tr>
                        <tr class="item">
                            <td class="etf">CXSE</td>
                            <td class="etfshare">1,22%</td>
                            <td class="etfprice" id="cxseprice"></td>                                    
                        </tr>
                        <tr class="item">
                            <td class="etf">ESGV</td>
                            <td class="etfshare">32,46%</td>
                            <td class="etfprice" id="esgvprice"></td>                                    
                        </tr>
                        <tr class="item">
                            <td class="etf">FTEC</td>
                            <td class="etfshare">14,77%</td>
                            <td class="etfprice" id="ftecprice"></td>                                    
                        </tr>
                        <tr class="item">
                            <td class="etf">KOMP</td>
                            <td class="etfshare">5,03%</td>
                            <td class="etfprice" id="kompprice"></td>                                    
                        </tr>
                        <tr class="item">
                            <td class="etf">QQQ</td>
                            <td class="etfshare">2,50%</td>
                            <td class="etfprice" id="qqqprice"></td>                                    
                        </tr>
                        <tr class="item">
                            <td class="etf">SMH</td>
                            <td class="etfshare">16,51%</td>
                            <td class="etfprice" id="smhprice"></td>                                    
                        </tr>
                        <tr class="item">
                            <td class="etf">VT</td>
                            <td class="etfshare">12,15%</td>
                            <td class="etfprice" id="vtprice"></td>                                    
                        </tr>
                        <tr class="item">
                            <td class="etf">VTV</td>
                            <td class="etfprice">8,59%</td>
                            <td class="etf" id="vtvprice"></td>                                    
                        </tr>
                    </table>
                    <div class="dailyresult">
                        <p></p>
                        <h1 class="etftitle">Resultado diario</h1>
                        <p class="dailyprice">-0,01%</p>
                    </div>                          
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-2 col-xs-2">
            <div class="etfchartpanel">
                <h1 class="etfcharttitle">Composición del Portafolio</h1>
                <canvas id="etfchart"></canvas>
            </div>
        </div>
    </div>
</div>`

cxsePrices()
 esgvPrices()
 ftecPrices()
 kompPrices()
 qqqPrices()
 smhprices()
 vtPrices()
 vtvPrices()
 usdValue()
 drawChart()
 })