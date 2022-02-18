using System;
using System.Net;
using System.IO;
using System.Threading.Tasks;

namespace HTTPListenerChyrkaVitalii
{
    class Program
    {
        private static async Task Listen()
        {
            HttpListener listener = new HttpListener();
            listener.Prefixes.Add("http://localhost:8888/SomeServer/");
            listener.Start();
            Console.WriteLine("Waiting for connection...");

            while (true)
            {
                HttpListenerContext context = await listener.GetContextAsync();
                HttpListenerRequest request = context.Request;
                HttpListenerResponse response = context.Response;

                string responseString;
                using (StreamReader sr = new StreamReader("..\\..\\..\\ChyrkaHTML.html"))
                {
                    responseString = sr.ReadToEnd();
                }

                byte[] buffer = System.Text.Encoding.UTF8.GetBytes(responseString);
                response.ContentLength64 = buffer.Length;
                Stream output = response.OutputStream;
                output.Write(buffer, 0, buffer.Length);
                output.Close();
            }
        }

        static async Task Main(string[] args)
        {

            Listen();
            Console.WriteLine("input anything and press ENTER to exit:");
            Console.ReadLine();
            return;
        }
    }
}
