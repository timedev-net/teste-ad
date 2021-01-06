const express = require('express');
const ActiveDirectory = require('activedirectory');
// const { json } = require('express');

const app = express()
const porta = 3333;
app.use(express.json())

const config = {
    url: 'ldap://rondonia.local',
    baseDN: 'dc=domain,dc=com',
};
const ad = new ActiveDirectory(config);

app.get( '/',(req, res) => {

    console.log('teste')
    const username = ''
    const password = ''
    
    ad.authenticate(username, password, function(err, auth) {
        if (err) {
            console.log('ERROR: '+JSON.stringify(err));
            return res.send(err);
        }
        if (auth) {
            console.log('Authenticated!');
            return res.send('Authenticated!')
        }
        else {
            console.log('Authentication failed!');
            return res.send('Authentication failed!!')
        }
    });
})

app.listen(porta, () => {
    console.log(`Example app listening at http://localhost:${porta}`)})
