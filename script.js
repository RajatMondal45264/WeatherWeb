// Weather web app using API calling 

const input = document.getElementById("btn")
input.addEventListener("click",()=>{
    const place = document.getElementById("location").value ;

    const updateReport = (data)=>{
        const element = document.getElementById("weatherinfo");
        const icon = document.getElementById("weatherIcon");
        element.innerHTML = ` TODAY'S WEATHER
        🌡 Temperature: ${data.current.temp_c} °C <br>
        ☁️ Condition: ${data.current.condition.text}
    `;
        icon.src = "https:" + data.current.condition.icon;

    }

    const prom = fetch(`https://api.weatherapi.com/v1/current.json?key=62bbb6d1d1d84fe08dc180955261301&q=${place}&aqi=yes`);

    prom
    .then((res)=>{
        return res.json();
    }).then((data)=> updateReport(data));
});