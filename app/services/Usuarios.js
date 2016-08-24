app.service('Usuarios', 
function Usuario(OfflineModel, Usuarios){
    var ListaUsuarios = OfflineModel.init('Usuarios', Usuarios);
    var infoUsuario = ['_id', 'nome', 'email'];
    Usuarios.setFields(infoUsuario);
    return Usuarios; 
});

app.value('Usuarios',[{_id: 1, nome: 'Otávio', email: 'otavio@osanchez.com.br'}]);