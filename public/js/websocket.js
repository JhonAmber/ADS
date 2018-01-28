
(function (window,document,JSON){
          
          var url = 'wss://echo.websocket.org/',
                           ws = new WebSocket(url),
                           btnEnviar = document.getElementById("enviar"),
                           mensaje = document.getElementById("mensaje"),
                           resultado = document.getElementById("resultado");
                          
          ws.onopen = onOpen;
          ws.onclose = onClose;
          ws.onmessage = onMessage;

          btnEnviar.addEventListener('click',Enviar);
          
          function onOpen(){
                console.log("conectado........") ;
          }

          function onClose(){
                    console.log('desconectado.....');
          }

          function onMessage(evt){

                var obj = JSON.parse(evt.data),
                msg = obj.mensaje;  

                resultado.innerHTML += "<br>" + msg;
          }


          function Enviar(){

                var msg={ mensaje: mensaje.value };       
                ws.send(JSON.stringify(msg));
          }
          
})(window,document,JSON);

