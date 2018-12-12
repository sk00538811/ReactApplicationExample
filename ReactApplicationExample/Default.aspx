<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ReactApplicationExample._Default" %>

<asp:Content ID="cntHeaderScript" runat="server" ContentPlaceHolderID="cphHeaderScript">
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <script src="Scripts/lib/React/react-with-addons-0.9.0.js"></script>
    <script id="scptExmap" src="Scripts/example/basic-Component.js"></script>
</asp:Content>
<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div class="row">
        <div class="col-md-4 ">
            <div class="form-group">
                <label class="label label-info" for="drpReactExample">Select React Example:</label>
                <select class="form-control" id="drpReactExample"> 
                </select>
            </div>
        </div>
        <div class="col-md-2 ">
            <br />
            <button id="btnApplyReactExample" class="btn btn-primary" type="button">Apply</button>
        </div>
    </div>
     <hr class="col-xs-12" />
    <div class="row ">
        <label class="label label-info">Description</label>
        <div class="well">
            <div id="react-app-detail"></div>
        </div>
    </div>
    <hr class="col-xs-12" />
    <div class="row ">
        <label class="label label-info">react-app</label>
        <div class="well">
            <div id="react-app"></div>
        </div>
    </div>
    <hr class="col-xs-12" />
    <div class="row ">
        <div id="ScriptSample" class="well-lg">
            <label class="label label-info">Sample Script</label>
            <pre>
         var rootElement_ = React.DOM.div({
            className: 'btn btn-primary'
        }, "Submit");
         </pre>
            <pre>//initialization code
         React.renderComponent(rootElement_, document.getElementById('react-app')); 
        </pre>
        </div>
    </div>
    
    <script> 
        $(document).ready(function () {
            $('#drpReactExample').val("");
            $.ajax({
                type: 'GET',
                url: 'Example/Index',
                async: false,
                data: null,
                dataType: 'json',
                contentType: 'application/json'
            }).done(function (response) {
                $('select[id="drpReactExample"]').empty()
                $('select[id="drpReactExample"]').append('<option value="">Without class compunent</option>');
                $.each(response, function (idex, item) {
                    $('select[id="drpReactExample"]').append('<option value="' + item.Value + '">' + item.Text + '</option>');
                });

            }).fail(function (jqXHR, exception) {
                // Our error logic here
                var msg = '';
                switch (jqXHR.status) {
                    case "0":
                        msg = 'Not connect.\n Verify Network.'; break;
                    case "404":
                        msg = 'Requested page not found. [404]'; break;
                    case "500":
                        msg = 'Internal Server Error [500].'; break;
                    case "parsererror":
                        msg = 'Requested JSON parse failed.'; break;
                    case "timeout":
                        msg = 'Time out error.'; break;
                    case "abort":
                        msg = 'Ajax request aborted.'; break;
                    default:
                        msg = 'Uncaught Error.\n' + jqXHR.responseText; break;
                }
                $('#post').html(msg);
            }).always(function () {
                alert("complete");
            });
            var rootElement_ = React.DOM.div({
                className: 'btn btn-primary'
            }, "Submit");
            React.renderComponent(rootElement_, document.getElementById('react-app'));

            function loadScript(url, callback) {

                var script = document.createElement("script")
                script.type = "text/javascript";
                script.id = "scptExmap";
                if (script.readyState) {  //IE
                    script.onreadystatechange = function () {
                        if (script.readyState == "loaded" ||
                            script.readyState == "complete") {
                            script.onreadystatechange = null;
                            callback();
                        }
                    };
                } else {  //Others
                    script.onload = function () {
                        callback();
                    };
                }

                script.src = url + "?" + Math.random();
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            $('#btnApplyReactExample').click(function () {
                var url = $('#drpReactExample').val();
                if (url == "") { window.location.reload(); return; }
                $('script#scptExmap').remove();
                loadScript(url, function () {
                    debugger;
                    //initialization code
                    React.renderComponent(rootElement(), document.getElementById('react-app'));
                    $('#ScriptSample').empty();
                    $('#ScriptSample').append('<label class="label label-info">Sample Script</label>');
                    $.getScript(url)
                        .done(function (r) {
                            /* yay, all good, do something */
                            $('#ScriptSample').append($('<pre></pre>').text(r));
                            $('#ScriptSample').append($('<pre></pre>').text("//initialization code\nReact.renderComponent(rootElement(), document.getElementById('react-app'));"));
                        })
                        .fail(function () {
                            /* boo, fall back to something else */
                            $('#ScriptSample').append('<label class="label label-warning">Unable to Load Script</label>');
                        });
                });
            });
        });

    </script>
</asp:Content>
