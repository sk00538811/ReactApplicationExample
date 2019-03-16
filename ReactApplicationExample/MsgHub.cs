using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace ReactApplicationExample
{
    public class MsgHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
        public void Send(string name, string message)
        {
            // Call the addNewMessageToPage method to update clients.
            Clients.All.addNewMessageToPage(name, message);
        }
        public void OneToOneSend(string name, string message,string clientId)
        {
            // Call the addNewMessageToPage method to update client specific msg.
            Clients.Client(clientId).appendNewMessage(name, message);
        }
    }
}