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
                    <option value="">Without class compunent</option>
                    <option value="Scripts/example/basic-Component.js">basic-Component </option>
                    <option value="Scripts/example/button.js">button</option>
                    <option value="Scripts/example/button-click.js">button click </option>
                    <option value="Scripts/example/nested-Component.js">nested-Component </option>
                    <option value="Scripts/example/component-prop.js">component prop </option>
                    <option value="Scripts/example/component-state.js">component state </option>
                    <option value="Scripts/example/child-call-perent-method.js">child-call-perent-method </option>
                    <option value="Scripts/example/passing-data-between-classes-components.js">passing-data-between-classes-components </option>
                    <option value="Scripts/example/modal-Component_0.js">modal component 0 </option>
                    <option value="Scripts/example/modal-Component_1.js">modal component 1 </option>
                    <option value="Scripts/example/modal-Component_2.js">modal component 2 </option>
                    <option value="Scripts/example/modal-Invoke-modal-Component_2.js">modal-Invoke-modal 3 </option>
                </select>
            </div>
        </div>
        <div class="col-md-2 ">
            <br />
            <button id="btnApplyReactExample" class="btn btn-primary" type="button">Apply</button>
        </div>
    </div>
    <hr class="col-xs-12" />
    <div class="row">
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
