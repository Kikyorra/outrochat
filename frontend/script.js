const connection = new signalR.HubConnectionBuilder()

    .withUrl('http://localhost:5212/chatHub')

    .withAutomaticReconnect()

    .build();



let botaoEnviar =
    document.getElementById('enviar');

let inputMensagem =
    document.getElementById('mensagem');

let mensagens =
    document.getElementById('mensagens');



// COMEÇA DESABILITADO
botaoEnviar.disabled = true;



// CONECTAR
async function conectar()
{
    try {

        await connection.start();

        console.log('Conectado ao SignalR');



        // HABILITA BOTÃO
        botaoEnviar.disabled = false;

    }
    catch(erro)
    {
        console.error('Erro conexão:', erro);

        setTimeout(conectar, 2000);
    }
}

conectar();



// USUÁRIO CONECTADO
connection.on(
    'UsuarioConectado',
    function(usuario)
    {
        let p = document.createElement('p');

        p.innerHTML =
            `🟢 <em>${usuario} entrou no chat</em>`;

        mensagens.appendChild(p);

        mensagens.scrollTop =
            mensagens.scrollHeight;
    }
);



// USUÁRIO DESCONECTADO
connection.on(
    'UsuarioDesconectado',
    function(usuario)
    {
        let p = document.createElement('p');

        p.innerHTML =
            `🔴 <em>${usuario} saiu do chat</em>`;

        mensagens.appendChild(p);

        mensagens.scrollTop =
            mensagens.scrollHeight;
    }
);



// RECEBER MENSAGEM
connection.on(
    'ReceberMensagem',
    function(usuario, mensagem, horario)
    {
        let meuUsuario =
            document.getElementById('usuario').value;

        let div = document.createElement('div');



        // MENSAGEM DO PRÓPRIO USUÁRIO
        if(usuario === meuUsuario)
        {
            div.style.textAlign = 'right';
        }



        div.innerHTML = `
            <p>
                <strong>${usuario}</strong>
                <small>${horario}</small>
            </p>

            <p>${mensagem}</p>

            <hr>
        `;

        mensagens.appendChild(div);



        // AUTO SCROLL
        mensagens.scrollTop =
            mensagens.scrollHeight;
    }
);



// FUNÇÃO ENVIAR
async function enviarMensagem()
{
    let usuario =
        document.getElementById('usuario').value;

    let mensagem =
        document.getElementById('mensagem').value;



    if(
        usuario.trim() === '' ||
        mensagem.trim() === ''
    ) return;



    try {

        await connection.invoke(
            'EnviarMensagem',
            usuario,
            mensagem
        );



        inputMensagem.value = '';

    }
    catch(erro)
    {
        console.error(
            'Erro enviando mensagem:',
            erro
        );
    }
}



// CLICK BOTÃO
botaoEnviar.addEventListener(
    'click',
    enviarMensagem
);



// ENTER PARA ENVIAR
inputMensagem.addEventListener(
    'keydown',
    function(event)
    {
        if(event.key === 'Enter')
        {
            enviarMensagem();
        }
    }
);



// STATUS RECONEXÃO
connection.onreconnecting(() =>
{
    console.log('Reconectando...');

    botaoEnviar.disabled = true;
});



connection.onreconnected(() =>
{
    console.log('Reconectado!');

    botaoEnviar.disabled = false;
});



connection.onclose(() =>
{
    console.log('Conexão encerrada.');

    botaoEnviar.disabled = true;
});