using RealtimeChatAPI.Hubs;

var builder = WebApplication.CreateBuilder(args);



// SIGNALR
builder.Services.AddSignalR();



// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "CorsPolicy",
        policy =>
        {
            policy
                .WithOrigins(
                    "http://127.0.0.1:5500",
                    "http://localhost:5500"
                )
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
        });
});



var app = builder.Build();



// USA CORS
app.UseCors("CorsPolicy");



// HUB
app.MapHub<ChatHub>("/chatHub");



app.Run();