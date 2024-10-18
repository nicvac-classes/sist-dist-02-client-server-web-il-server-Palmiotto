
// Qui importiamo le dipendenze necessarie e creiamo un'istanza di Express. 
// L'oggetto app.js sarà il nostro web server.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// Questo middleware intercetta tutte le richieste in arrivo e analizza automaticamente i dati inviati tramite form HTML. 
// extended: true permette di gestire dati complessi nei form.
app.use(bodyParser.urlencoded({ extended: true }));


// Risponde alle richieste GET all'URL root ('/') 
// req: contiene i dettagli della richiesta.
// res: oggetto usato per inviare la risposta.
// Invia direttamente HTML contenente un form.
app.get('/', (req, res) => {
    res.send(`
        <form action="/greet" method="POST">
            <label for="nome">Inserisci il tuo nome:</label>
            <input type="text" id="nome" name="nome">
            <button type="submit">Invia</button>
        </form>
    `);
});


// Gestisce le richieste POST all'URL '/greet'
// Accede ai dati del form tramite req.body.nome
// Invia una risposta HTML personalizzata.
app.post('/greet', (req, res) => {
    const nome = req.body.nome;
    res.send(`<h1>Ciao, ${nome}!</h1>`);
});


// Configura il server per ascoltare sulla porta 3000.
// Mostra un messaggio di conferma quando il server è attivo.
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Il server Server è in esecuzione su http://localhost:${PORT}`);
});