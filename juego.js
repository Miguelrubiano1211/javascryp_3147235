console.log (" ... juego memoria ...")


let main = document.getElementById("main")

let avatar = "https://www.stickerni.tn/wp-content/uploads/2023/03/morty-ricky.webp"  


const pintarHtml = () => {

    for (let x= 0; x<= 3 ; x ++) {
    let fila = document.createElement("div")
    fila.classList.add("fila")

    for (let y= 0; y<= 3 ; y ++) {

        let celda = document.createElement("div")
        celda.setAttribute("class", "celda")
    
        let img = document.createElement("img")
    
        img.setAttribute ("src" , avatar)
        img.classList.add("pic")
    
        celda.appendChild(img)
        fila.appendChild(celda)

    }

  

    main.appendChild(fila)

}



}


pintarHtml()
