webpackJsonp([32],{kO8k:function(e,t){e.exports={draw:1,recordsTotal:40,recordsFiltered:40,data:[{order:null,createUser:"可以增删改查",updateId:1,delFlag:1,createId:1,audits:null,billNo:"可以增删改查",checkStatus:2,opType:2,updateDate:1514904877e3,updateUser:"可以增删改查",createDate:1514904868e3,createDateStr:"2018-01-02 22:54:28",updateDateStr:"2018-01-02 22:54:37",merNum:1,reason:null,id:46},{order:null,createUser:"可以增删改查",updateId:1,delFlag:1,createId:1,audits:null,billNo:"可以增删改查",checkStatus:2,opType:1,updateDate:1514863423e3,updateUser:"可以增删改查",createDate:1514863292e3,createDateStr:"2018-01-02 11:21:32",updateDateStr:"2018-01-02 11:23:43",merNum:1,reason:null,id:45},{order:null,createUser:"可以增删改查",updateId:null,delFlag:1,createId:1,audits:null,billNo:"可以增删改查",checkStatus:1,opType:1,updateDate:null,updateUser:null,createDate:1512749481e3,createDateStr:"2017-12-09 00:11:21",updateDateStr:null,merNum:2,reason:null,id:44},{order:null,createUser:"可以增删改查",updateId:1,delFlag:1,createId:1,audits:null,billNo:"可以增删改查",checkStatus:2,opType:2,updateDate:1512633458e3,updateUser:"可以增删改查",createDate:1512633447e3,createDateStr:"2017-12-07 15:57:27",updateDateStr:"2017-12-07 15:57:38",merNum:1,reason:null,id:43},{order:null,createUser:"可以增删改查",updateId:null,delFlag:1,createId:1,audits:null,billNo:"可以增删改查",checkStatus:1,opType:2,updateDate:null,updateUser:null,createDate:1512071798e3,createDateStr:"2017-12-01 03:56:38",updateDateStr:null,merNum:1,reason:null,id:42},{order:null,createUser:"可以增删改查",updateId:1,delFlag:1,createId:1,audits:null,billNo:"可以增删改查",checkStatus:2,opType:2,updateDate:1512038806e3,updateUser:"可以增删改查",createDate:1512029595e3,createDateStr:"2017-11-30 16:13:15",updateDateStr:"2017-11-30 18:46:46",merNum:1,reason:null,id:41},{order:null,createUser:"可以增删改查",updateId:1,delFlag:1,createId:1,audits:null,billNo:"可以增删改查",checkStatus:2,opType:2,updateDate:1512029384e3,updateUser:"可以增删改查",createDate:1512029377e3,createDateStr:"2017-11-30 16:09:37",updateDateStr:"2017-11-30 16:09:44",merNum:1,reason:null,id:40},{order:null,createUser:"可以增删改查",updateId:null,delFlag:1,createId:1,audits:null,billNo:"可以增删改查",checkStatus:1,opType:2,updateDate:null,updateUser:null,createDate:1512028989e3,createDateStr:"2017-11-30 16:03:09",updateDateStr:null,merNum:1,reason:null,id:39},{order:null,createUser:"可以增删改查",updateId:1,delFlag:1,createId:1,audits:null,billNo:"可以增删改查",checkStatus:2,opType:2,updateDate:1512028823e3,updateUser:"可以增删改查",createDate:1512028792e3,createDateStr:"2017-11-30 15:59:52",updateDateStr:"2017-11-30 16:00:23",merNum:1,reason:null,id:38},{order:null,createUser:"可以增删改查",updateId:1,delFlag:1,createId:1,audits:null,billNo:"可以增删改查",checkStatus:2,opType:2,updateDate:1512028151e3,updateUser:"可以增删改查",createDate:1512028139e3,createDateStr:"2017-11-30 15:48:59",updateDateStr:"2017-11-30 15:49:11",merNum:1,reason:null,id:37}]}},qeik:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("BO1k"),i=a.n(l),r=a("woOf"),n=a.n(r),s=a("viA7"),o=a("cAgV"),d=a("0xDb"),c=a("kdCj"),u=[{key:"2",display_name:"审核通过"},{key:"1",display_name:"待审核"},{key:"0",display_name:"退回"}],p=u.reduce(function(e,t){return e[t.key]=t.display_name,e},{}),m=a("kO8k"),y={name:"complexTable",directives:{waves:o.a},data:function(){return{tableKey:0,list:m.data,total:20,listLoading:!1,listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:u,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1,addContent:{title:"新增商户审核单据",width:"90%",type:1,label:[{type:0,label:"商户名称",width:"150"},{type:1,label:"商户类型",width:"150",options:["系统管理员","录入员","审核员","测试员","123"]},{type:0,label:"联系人",width:"150"},{type:0,label:"联系电话",width:"150"},{type:1,label:"所属省份",width:"150",options:["系统管理员","录入员","审核员","测试员","123"]},{type:1,label:"所属城市",width:"150",options:["系统管理员","录入员","审核员","测试员","123"]},{type:1,label:"所属区县",width:"150",options:["系统管理员","录入员","审核员","测试员","123"]},{type:0,label:"详细地址",width:"100"},{type:0,label:"物流服务",width:"100"},{type:0,label:"配送服务",width:"100"},{type:0,label:"操作",width:"100"}],content:[{model:[]}]}}},filters:{statusFilter:function(e){return{published:"success",draft:"info",deleted:"danger"}[e]},typeFilter:function(e){return p[e]}},methods:{add:function(){this.$refs.addDialog.add()},opType:function(e,t){return 2==e.opType?"修改":1==e.opType?"增加":"未知"},getList:function(){var e=this;this.listLoading=!0,Object(s.c)(this.listQuery).then(function(t){e.list=t.data.items,e.total=t.data.total,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作成功",type:"success"}),e.status=t},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&(e.temp.id=parseInt(100*Math.random())+1024,e.temp.author="vue-element-admin",Object(s.a)(e.temp).then(function(){e.list.unshift(e.temp),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))})},handleUpdate:function(e){var t=this;this.temp=n()({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a=n()({},e.temp);a.timestamp=+new Date(a.timestamp),Object(s.e)(a).then(function(){var t=!0,a=!1,l=void 0;try{for(var r,n=i()(e.list);!(t=(r=n.next()).done);t=!0){var s=r.value;if(s.id===e.temp.id){var o=e.list.indexOf(s);e.list.splice(o,1,e.temp);break}}}catch(e){a=!0,l=e}finally{try{!t&&n.return&&n.return()}finally{if(a)throw l}}e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(e){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var t=this.list.indexOf(e);this.list.splice(t,1)},handleFetchPv:function(e){var t=this;Object(s.d)(e).then(function(e){t.pvData=e.data.pvData,t.dialogPvVisible=!0})},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e(62),a.e(61)]).then(a.bind(null,"zWO4")).then(function(t){var a=e.formatJson(["timestamp","title","type","importance","status"],e.list);t.export_json_to_excel(["timestamp","title","type","importance","status"],a,"table-list"),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(d.a)(t[e]):t[e]})})}},components:{addDialog:c.a}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:e.$t("merchant.filter.billNo")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:e.$t("merchant.filter.merchantName")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:e.$t("merchant.filter.merchantType")},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.calendarTypeOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name+"("+e.key+")",value:e.key}})})),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:e.$t("merchant.filter.checkStatus")},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.calendarTypeOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name+"("+e.key+")",value:e.key}})})),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:e.$t("merchant.filter.goodsCode")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:e.$t("merchant.filter.linkMan")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:e.$t("merchant.filter.phone")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("merchant.filter.search")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.add}},[e._v(e._s(e.$t("premiss.filter.add")))])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"给我一点时间",border:"",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"selection","min-width":"45",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"billNo",align:"center",label:e.$t("merchant.table.billNo"),"min-width":"150px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"merNum",label:e.$t("merchant.table.merNum"),"min-width":"110",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createUser",label:e.$t("merchant.table.createUser"),"min-width":"130",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createDateStr",label:e.$t("merchant.table.createDate"),"min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateUser",label:e.$t("merchant.table.updateUser"),"min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateDateStr",label:e.$t("merchant.table.updateDate"),"min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{"min-width":"150",align:"center",label:e.$t("merchant.table.checkStatus")},scopedSlots:e._u([{key:"default",fn:function(t){return["2"==t.row.checkStatus?a("span",{staticStyle:{color:"green"}},[e._v("审核通过")]):1==t.row.checkStatus?a("span",{staticStyle:{color:"orange"}},[e._v("待审核")]):a("span",{staticStyle:{color:"red"}},[e._v("退回")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"opType",align:"center",label:e.$t("merchant.table.opType"),formatter:e.opType,"min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("merchant.table.actions"),fixed:"right","min-width":"180","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v(e._s(e.$t("merchant.table.edit")))]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(a){e.handleModifyStatus(t.row,"deleted")}}},[e._v(e._s(e.$t("merchant.table.delete")))])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:e.$t("table.type"),prop:"type"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.type,callback:function(t){e.$set(e.temp,"type",t)},expression:"temp.type"}},e._l(e.calendarTypeOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.date"),prop:"timestamp"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"Please pick a date"},model:{value:e.temp.timestamp,callback:function(t){e.$set(e.temp,"timestamp",t)},expression:"temp.timestamp"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.title"),prop:"title"}},[a("el-input",{model:{value:e.temp.title,callback:function(t){e.$set(e.temp,"title",t)},expression:"temp.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.status")}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},e._l(e.statusOptions,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.importance")}},[a("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:e.temp.importance,callback:function(t){e.$set(e.temp,"importance",t)},expression:"temp.importance"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("table.remark")}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Please input"},model:{value:e.temp.remark,callback:function(t){e.$set(e.temp,"remark",t)},expression:"temp.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"Reading statistics",visible:e.dialogPvVisible},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),e._v(" "),a("add-dialog",{ref:"addDialog",attrs:{addContent:e.addContent}})],1)},staticRenderFns:[]},b=a("VU/8")(y,h,!1,null,null,null);t.default=b.exports}});