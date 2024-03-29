const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/healthport', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB", err);
});

// Definir el esquema y el modelo para la colección tbladmin
const adminSchema = new mongoose.Schema({
  usuario: String,
  contrasena: String
});
const AdminModel = mongoose.model('tbladmin', adminSchema);

// Ruta para manejar las solicitudes de inicio de sesión
app.post('/login', async (req, res) => {
  const { usuario, contrasena } = req.body;

  try {
    // Buscar el usuario en la base de datos
    const admin = await AdminModel.findOne({ usuario: usuario });

    if (!admin) {
      res.status(401).send('Usuario no encontrado');
    } else {
      // Verificar la contraseña
      if (admin.contrasena === contrasena) {
        res.status(200).send('Inicio de sesión exitoso');
      } else {
        res.status(401).send('Contraseña incorrecta');
      }
    }
  } catch (error) {
    console.error("Error al buscar el administrador", error);
    res.status(500).send('Error interno del servidor');
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});