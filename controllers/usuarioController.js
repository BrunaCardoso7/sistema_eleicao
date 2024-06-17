const usuarioModel = require('../models/usuarioModel');

async function login(req, res) {
    const { username, password } = req.body;
    try {
        const user = await usuarioModel.getUserByUsernameAndPassword(username, password);

        console.log(user)
        if (user) {
            res.redirect('welcome?username=' + user.Nome + '&tipo=' + user.Tipo);
        } else {
            // Credenciais inválidas, redirecionar de volta para a página de login
            res.redirect('login');
        }
    } catch (error) {
        console.error('Erro durante a autenticação:', error);
        res.status(500).send('Erro durante a autenticação');
    }
}

async function welcome(req, res) {
    const { username, tipo } = req.query;
    res.render('adm/welcome', { usuario: username, tipo: tipo });
}

module.exports = { login, welcome };
