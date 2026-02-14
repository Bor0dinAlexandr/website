let services = document.getElementById("services");
let servicesInput = document.querySelectorAll(".service>label>input");
let servicesContent = document.querySelectorAll(".service>div");

let serviceContentOpen = serviceContent =>{
    serviceContent.classList.remove("isNotActiveService");
    services.style.backgroundImage = `url(${serviceContent.dataset.nameService}.png)`;

}

let serviceContentClose = serviceContent =>{
    serviceContent.classList.add("isNotActiveService");
}

servicesInput.forEach(serviceInput=>{
    serviceInput.addEventListener("change", (event)=>{
        servicesContent.forEach(serviceContent=>{
            serviceContent.dataset.nameService === event.target.dataset.nameService ? serviceContentOpen(serviceContent) : serviceContentClose(serviceContent);
        });
    })
})
