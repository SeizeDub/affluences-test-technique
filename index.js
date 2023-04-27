let time;
let outputEl = document.getElementById('output');

flatpickr("#picker", {
    allowInput: true,
    inline : true,
    enableTime: true,
    dateFormat: "Y-m-d\\TH:i:S",
    locale: 'fr',
    appendTo: document.getElementById('picker'),
    onChange: function(selectedDates, dateStr) {
        time = dateStr;
    },
    onReady: function(selectedDates, dateStr) {
        time = dateStr;
        console.log(time);
    },
});

document.getElementById("form").onsubmit = async e => {
    e.preventDefault();
    let response = await fetch(`http://localhost:8080/resource/1337/available?datetime=${time}Z`);
    let data = await response.json();
    outputEl.innerText = data.available ? 'Le créneau demandé est disponible.' : 'Le créneau demandé est indisponible';
}