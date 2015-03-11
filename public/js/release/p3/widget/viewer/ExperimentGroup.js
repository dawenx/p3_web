define("p3/widget/viewer/ExperimentGroup", [
	"dojo/_base/declare","dijit/layout/BorderContainer","dojo/on",
	"dojo/dom-class","dijit/layout/ContentPane","dojo/dom-construct",
	"../Grid","../formatter","../../WorkspaceManager","dojo/_base/lang"
], function(
	declare, BorderContainer, on,
	domClass,ContentPane,domConstruct,
	Grid,formatter,WorkspaceManager,lang
){
	return declare([BorderContainer], {
		"baseClass": "ExperimentViewer",
		"disabled":false,
		"query": null,
		data: null,
		_setDataAttr: function(data){
			this.data=data;
			console.log("Data: ", data);
			WorkspaceManager.getObject(data.path + data.name).then(lang.hitch(this,function(obj){
				console.log("WorkspaceGroup: ", obj);
				if (obj && obj.data && typeof obj.data=='string'){

					obj.data = JSON.parse(obj.data);
				}

				if (obj && obj.data && obj.data.id_list && obj.data.id_list.feature_id){
					var featureIds= obj.data.id_list.fea

				}
				this.viewHeader.set("content", "<pre>"+JSON.stringify(obj.data,null,2)+"</pre>");		
			}));
/*
			var paths = this.data.autoMeta.output_files.filter(function(f){
				if (f instanceof Array){
					var path=f[0];
				}else{
					path = f;
				}
				if (f.match("sample.json")){
					return true
				}
				if (f.match("experiment.json")){
					return true
				}
				return false;	
			}).map(function(f){
				if (f instanceof Array){
					return f[0];
				}
			 	return f;
			});
*/
/*
			WorkspaceManager.getObjects(paths).then(lang.hitch(this,function(objs){
				objs.forEach(function(obj){
					if (typeof obj.data == 'string') {
						obj.data = JSON.parse(obj.data);
					}
				});
				this.viewHeader.set('content',);
				//this.viewer.renderArray(this.samples);
		
			}));
*/
		},
		startup: function(){
			if (this._started) {return;}
			this.viewHeader = new ContentPane({content: "Loading Experiments...<br><br>", region: "top"});
			this.viewer = new Grid({
				region: "center",
				deselectOnRefresh: true,
				columns: {
					title: {label: "Title", field: "expname"},
					genes: {label: "Genes", field: "genes"},
					sigGenesLR: {label: "Significant Genes (Log Ratio)", field: "sig_z_score"},
					sigGenesZS: {label: "Significant Genes (Z Score)", field: "sig_log_ratio"},
					strain: {label: "Strain", field: "organism"},
					gene_modification: {label: "Gene Modification", field: "mutant"},
					expCondition: {label: "Experiment Condition", field: "condition"},
					timePoint: {label: "Time Point", field: "timepoint"}
				}
			});
				var _self = this
                                this.viewer.on(".dgrid-content .dgrid-row:dblclick", function(evt) {
                                    var row = _self.viewer.row(evt);
                                    console.log("dblclick row:", row)
                                        on.emit(_self.domNode, "ItemDblClick", {
                                                item_path: row.data.path,
                                                item: row.data,
                                                bubbles: true,
                                                cancelable: true
                                        });
                                        console.log('after emit');
                                    //if (row.data.type == "folder"){
                //                              Topic.publish("/select", []);

                //                              Topic.publish("/navigate", {href:"/workspace" + row.data.path })
                //                              _selection={};
                                        //}
                                });
                                //_selection={};
                                //Topic.publish("/select", []);

                                this.viewer.on("dgrid-select", function(evt) {
                                        console.log('dgrid-select: ', evt);
                                        var newEvt = {
                                                rows: event.rows,
                                                selected: evt.grid.selection,
                                                grid: _self.viewer,
                                                bubbles: true,
                                                cancelable: true
                                        }
                                        on.emit(_self.domNode, "select", newEvt);
                                        //console.log("dgrid-select");
                                        //var rows = event.rows;
                                        //Object.keys(rows).forEach(function(key){ _selection[rows[key].data.id]=rows[key].data; });
                                        //var sel = Object.keys(_selection).map(function(s) { return _selection[s]; });
                                        //Topic.publish("/select", sel);
                                });
                                this.viewer.on("dgrid-deselect", function(evt) {
                                        console.log("dgrid-select");
                                        var newEvt = {
                                                rows: event.rows,
                                                selected: evt.grid.selection,
                                                grid: _self.viewer,
                                                bubbles: true,
                                                cancelable: true
                                        }
                                        on.emit(_self.domNode, "deselect", newEvt);
                                        return;
//                                      var rows = event.rows;
//                                      Object.keys(rows).forEach(function(key){ delete _selection[rows[key].data.id] });
//                                      var sel = Object.keys(_selection).map(function(s) { return _selection[s]; });
//                                      Topic.publish("/select", sel);
                                });
			this.addChild(this.viewHeader);
			this.addChild(this.viewer);
			this.inherited(arguments);
			this.viewer.refresh();
		}
	});
});