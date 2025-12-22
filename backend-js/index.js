const express = require('express');
const mongoose = require('mongoose');   
const app = express();
const User = require('./models/User');   
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');   
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashed });
    await user.save();
    res.send('✅ Inscription réussie');
  } catch (err) {
    res.status(400).send('❌ Email déjà utilisé');
  }
});   
app.use(express.urlencoded({ extended: true }));
app.use(express.json());   
app.get('/', (req, res) => {
  res.send('Backend JS fonctionne');
});

app.post('/login', (req, res) => {
  console.log('Données reçues :', req.body);
  res.send(`Bienvenue, ${req.body.email} !`);
});

app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000');
});   
