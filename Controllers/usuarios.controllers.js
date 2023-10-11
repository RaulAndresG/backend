const Usuario = require('../Models/Usuarios.js');

const postUsuario = async (req, res) => {
  const { nombre_usuario, rol, imagen, contraseña } = req.body;
  const usuario = new Usuario({ nombre_usuario, rol, imagen, contraseña });

  // Guardar en MONGODB
  await usuario.save();

  res.json({
    "message": "Usuario creado exitosamente",
    usuario
  });
}

const putUsuario = async (req, res) => {
  const { id } = req.params;

  const { _id, ...resto } = req.body;

  try {
    const usuario = await Usuario.findByIdAndUpdate(id, resto, { new: true });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({
      msg: "Usuario actualizado exitosamente",
      usuario
    });
  } catch (error) {
    res.status(500).json({ error: "Error en putUsuario" });
  }
}

const deleteUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const remove = await Usuario.findByIdAndRemove(id);

    if (!remove) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({ message: "Usuario borrado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error en deleteUsuario" });
  }
}

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().limit(100);
    res.json(usuarios);
  } catch (error) {
    console.error('Error en obtenerUsuarios:', error);
    res.status(500).json({ error: 'Error en obtenerUsuarios' });
  }
}

module.exports = { obtenerUsuarios, postUsuario, deleteUsuario, putUsuario };
