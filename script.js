// Ascoltatore di eventi per il pulsante "Carica Dati"
let caricaDati = document.querySelector('#loadData');
caricaDati.addEventListener('click', function() {
    // Crea un oggetto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // URL dei dati JSON
    const url = 'https://jsonplaceholder.typicode.com/users';

    // Configura la richiesta
    xhr.open('GET', url, true);

    // Gestisci la risposta
    xhr.onload = function() {
        if (xhr.status === 200) {
            const dati = JSON.parse(xhr.responseText); // Analizza i dati JSON
            const corpoTabella = document.querySelector('#dataTable tbody');
            corpoTabella.innerHTML = ''; // Cancella le righe precedenti
            
            // Itera attraverso i dati JSON per creare le righe della tabella
            dati.forEach(elemento => {
                const riga = document.createElement('tr');

                // Crea celle per ID, Nome ed Email
                const cellaId = document.createElement('td');
                cellaId.textContent = elemento.id;
                riga.appendChild(cellaId);

                const cellaNome = document.createElement('td');
                cellaNome.textContent = elemento.name;
                riga.appendChild(cellaNome);

                const cellaEmail = document.createElement('td');
                cellaEmail.textContent = elemento.email;
                riga.appendChild(cellaEmail);

                // Aggiungi la riga al corpo della tabella
                corpoTabella.appendChild(riga);
            });
        }
    };

    // Invia la richiesta
    xhr.send();
});
