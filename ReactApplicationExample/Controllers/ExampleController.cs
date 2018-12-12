using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactApplicationExample.Controllers
{
    public class ExampleController : Controller
    {
        // GET: Example
        public ActionResult Index()
        {
         string scriptpath=   Server.MapPath("~/Scripts/example");
          FileInfo[] afi=  new DirectoryInfo(scriptpath).GetFiles("*.js", SearchOption.TopDirectoryOnly);
            var data = (from fi in afi
                        orderby fi.Name ascending
                        select new
                        { Text=fi.Name.Split('.').FirstOrDefault(),
                          Value= "Scripts/example/"+ fi.Name,
                        }).ToList();
            return Json( data, JsonRequestBehavior.AllowGet);
        }

        // GET: Example/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Example/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Example/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Example/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Example/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Example/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Example/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
