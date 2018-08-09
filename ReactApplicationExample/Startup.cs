using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ReactApplicationExample.Startup))]
namespace ReactApplicationExample
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
