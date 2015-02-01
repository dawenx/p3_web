require({cache:{
'url:p3/widget/app/templates/Assembly.html':"<form dojoAttachPoint=\"containerNode\" class=\"PanelForm\"\n    dojoAttachEvent=\"onreset:_onReset,onsubmit:_onSubmit,onchange:validate\">\n\n    <div class=\"appsetup appshadow\">\n\t\t<div class=\"appbox\">\n\t\t\t<label for=\"infolder\">Input Folder</label>\n\t\t\t<div data-dojo-type=\"dijit/form/FilteringSelect\" name=\"infolder\" data-dojo-attach-point=\"workspaceName\" style=\"width:300px\" required=\"true\" data-dojo-props=\"\"></div>\n\t\t\t<div style=\"margin:0 80px 0 80px; display: inline-block;\">Upload to Blah</div>\n\t\t</div>\n\t\t<div class=\"appbox\">\n\t\t\t<label for=\"outfolder\">Output Folder</label>\n\t\t\t<div data-dojo-type=\"dijit/form/FilteringSelect\"  name=\"infolder\" data-dojo-attach-point=\"workspaceName\" style=\"width:300px\" required=\"true\" data-dojo-props=\"\"></div>\n\t\t\t<div data-dojo-type=\"dijit/form/ValidationTextBox\" name=\"name\" data-dojo-attach-point=\"workspaceName\" style=\"width:300px\" required=\"true\" data-dojo-props=\"intermediateChanges:true,missingMessage:'Name Must be provided for Folder',trim:true,placeHolder:'Output Name'\"></div>\n\t    \t</div>\n    </div>\n    <div style=\"width: 700px;margin:auto;margin-top: 10px;padding:10px;\">\n\t<div style=\"width:700px; margin:auto\" class=\"formFieldsContainer\">\n\t\t<div id=\"pairedBox\" class=\"appbox appshadow\">\n\t\t\t<h4 class=\"appboxlabel\"> Paired read library</h4>\n\t\t\t<div class=\"approw\">\n\t\t\t\tRead File 1\n\t\t\t\t<div data-dojo-type=\"dijit/form/FilteringSelect\" name=\"file1pair\" data-dojo-attach-point=\"read1pair1\" style=\"width:300px\" required=\"true\" data-dojo-props=\"\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"approw\">\n\t\t\t\tRead File 2\t\t\n\t\t\t\t<div data-dojo-type=\"dijit/form/FilteringSelect\" name=\"file2pair\" data-dojo-attach-point=\"read2pair1\" style=\"width:300px\" required=\"true\" data-dojo-props=\"\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"approw\">\n\t\t\t\t<label for=\"strategy\">Interleaved</label>\n\t\t\t\t<select data-dojo-type=\"dijit/form/Select\" name=\"interleaved\" data-dojo-attach-point=\"workspaceName\" style=\"width:300px\" required=\"true\" data-dojo-props=\"intermediateChanges:true,missingMessage:'Name Must be provided for Folder',trim:true,placeHolder:'MySubFolder'\">\n\t\t\t\t<option value=\"true\">True</option>\n\t\t\t\t<option value=\"false\">False</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"approw\">\n\t\t\t\tAverage Insert Size\n\t\t\t\t<div class=\"insertspinner\" data-dojo-type=\"dijit/form/NumberSpinner\" data-dojo-attach-point=\"avgpair1\" value=\"100\" data-dojo-props=\"smallDelta:10, constraints:{min:9,max:2000,places:0}\" ></div>\n\t\t\t</div>\n\t\t\t<div class=\"approw\">\n\t\t\t\tStd. Insert\t\t\n\t\t\t\t<div class=\"insertspinner\" data-dojo-type=\"dijit/form/NumberSpinner\" data-dojo-attach-point=\"stdpair1\" value=\"100\" data-dojo-props=\"smallDelta:10, constraints:{min:9,max:2000,places:0}\" ></div>\t\t\n\t\t\t</div>\n\t\t\t<div class=\"readbuttons\">\n\t\t\t\t<button type=\"button\" class=\"round-button\" onclick=\"alert('Hello world!')\">+</button>\n\t\t\t</div>\n                </div>\n\n\t\t<div class=\"appbox appshadow\">\n\t\t\t<h4 class=\"appboxlabel\">Single read library</h4>\n\t\t\t<label for=\"singleread\">Read File</label>\n\t\t\t<div data-dojo-type=\"dijit/form/FilteringSelect\" name=\"readfile\" data-dojo-attach-point=\"read1\" style=\"width:300px\" required=\"true\" data-dojo-props=\"\"></div>\n\t\t\t<div class=\"readbuttons\">\n\t\t\t\t<button type=\"button\" class=\"round-button\" onclick=\"alert('Hello world!')\">+</button>\n\t\t\t</div>\n                </div>\n\t\t<div class=\"appbox appshadow\">\n\t\t\t<h4 class=\"appboxlabel\">Parameters</h4>\n\t\t\t<div class=\"approw\">\n\t\t\t\t<label for=\"contigsfile\">Benchmark File</label>\n\t\t\t\t<div data-dojo-type=\"dijit/form/FilteringSelect\" name=\"files\" data-dojo-attach-point=\"workspaceName\" style=\"width:300px\" required=\"true\" data-dojo-props=\"\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"approw\">\n\t\t\t\t<label for=\"strategy\">Assembly Strategy</label>\n\t\t\t\t<select data-dojo-type=\"dijit/form/Select\" name=\"geneticCode\" data-dojo-attach-point=\"workspaceName\" style=\"width:300px\" required=\"true\" data-dojo-props=\"intermediateChanges:true,missingMessage:'Name Must be provided for Folder',trim:true,placeHolder:'MySubFolder'\">\n\t\t\t\t<option value=\"auto\">auto</option>\n\t\t\t\t<option value=\"4\">4</option>\n\t\t\t\t</select>\n\t\t\t</div>\n                </div>\n\t\t\n\n\t</div >\n\t\t<div style=\"width:400px; margin:auto\" class=\"workingMessage messageContainer\">\n\t\t\tSubmitting Assembly Job\n\t\t</div>\n\n\t\t<div style=\"width:400px; margin:auto\" class=\"submittedMessage messageContainer\">\n\t\t\tSubmitting Assembly Job\n\t\t</div>\n\n\t\t<div style=\"width:400px; margin:auto\" class=\"errorMessage messageContainer\">\n\t\t\t<div style=\"font-weight:900;font-size:1.1em;\">Error Submitting AssemblyJob<div>\n\t\t\t<p data-dojo-attach-point=\"errorMessage\">Error</p>\n\t\t</div>\n\t\t\n\t\t<div style=\"margin-top: 10px; text-align:center;\">\n\t\t\t<div data-dojo-attach-point=\"cancelButton\" data-dojo-attach-event=\"onClick:onCancel\" data-dojo-type=\"dijit/form/Button\">Cancel</div>\n\t\t\t<div data-dojo-attach-point=\"resetButton\" type=\"reset\" data-dojo-type=\"dijit/form/Button\">Reset</div>\n\t\t\t<div data-dojo-attach-point=\"submitButton\" type=\"submit\" data-dojo-type=\"dijit/form/Button\">Assemble</div>\n\t\t</div>\t\n\t</div>\n</form>\n\n"}});
define("p3/widget/app/Assembly", [
	"dojo/_base/declare","dijit/_WidgetBase","dojo/on",
	"dojo/dom-class","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin",
	"dojo/text!./templates/Assembly.html","./AppBase"
], function(
	declare, WidgetBase, on,
	domClass,Templated,WidgetsInTemplate,
	Template,AppBase
){
	return declare([AppBase], {
		"baseClass": "App Assembly",
		templateString: Template,
		applicationName: "Assembly"
	});
});

