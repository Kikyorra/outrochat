using Microsoft.AspNetCore.SignalR;

namespace RealtimeChatAPI.Hubs;

public class ChatHub : Hub
{
    public async Task EnviarMensagem(
        string usuario,
        string mensagem
    )
    {
        var horario =
            DateTime.Now.ToString("HH:mm");



        await Clients.All.SendAsync(
            "ReceberMensagem",
            usuario,
            mensagem,
            horario
        );
    }
}