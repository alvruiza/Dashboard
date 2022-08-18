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
        } else {
            modeText.innerText = "Modo Dark"
        }        
        logoChange()    
    })

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close")       
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