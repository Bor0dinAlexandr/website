let services = document.getElementById("services");
let servicesInput = document.querySelectorAll(".service>label>input");
let servicesContent = document.querySelectorAll(".service>div");
let dataDays = document.querySelectorAll(".dataDay");
let day = new Date().getDay();

let serviceContentOpen = serviceContent =>{
    serviceContent.classList.remove("isNotActiveService");
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


dataDays.forEach(dataDay=>{
    if(dataDay.dataset.day==day){
        dataDay.classList.add("NowDataDay");
    }
})