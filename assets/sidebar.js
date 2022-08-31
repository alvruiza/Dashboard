const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".switchtxt"),
      logo = body.querySelector(".logo");
      

    modeSwitch.addEventListener("click", () => {        
        body.classList.toggle("dark")
        if (body.classList.contains("dark")) {
            modeText.innerText = "Modo Luz"
            localStorage.setItem("mode", "dark")
        } else {
            modeText.innerText = "Modo Dark"
            localStorage.setItem("mode", "light")
        }        
        logoChange()    
    })

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close")
        if (sidebar.classList.contains("close")){
            localStorage.setItem("sbar", "close")       
        } else {
            localStorage.setItem("sbar", "open")
        }
        logoChange()
    })   
    

      function logoChange() {
        if(body.classList =="dark" && sidebar.classList =="sidebar") {
            document.getElementById("logo").src="https://i.postimg.cc/RZDxjzwf/Logo-de-Fintual-negativo.png";
        } else if (body.classList =="dark" && sidebar.classList =="sidebar close") {
            document.getElementById("logo").src="https://i.postimg.cc/pVSbKnXk/Dise-o-sin-t-tulo-98.png";
        } else if (body.classList =="" && sidebar.classList =="sidebar") {
            document.getElementById("logo").src="https://i.postimg.cc/QC7qFh83/Logo-de-Fintual.png";
        } else if (body.classList =="" && sidebar.classList =="sidebar close") {
            document.getElementById("logo").src="https://i.postimg.cc/pVSbKnXk/Dise-o-sin-t-tulo-98.png";
        }
      }

      function setMode() {
          let mode = localStorage.getItem("mode")
          if (mode == "dark") {
              body.classList.toggle("dark")
              logoChange()            
            }  
        }
        
        function barMode(){
          let sbar = localStorage.getItem("sbar")
          if (sbar == "close") {
            sidebar.classList.toggle("close")
            logoChange()
          } else if (sbar == "close" && mode == "dark") {
            sidebar.classList.toggle("close")
            logoChange()
        }   
      }
        
      setMode() 
      barMode()

 


      