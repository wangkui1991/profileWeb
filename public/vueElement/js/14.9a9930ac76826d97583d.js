webpackJsonp([14],{U6RW:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("BO1k"),i=l.n(a),n=l("woOf"),o=l.n(n),s=l("viA7"),r=l("cAgV"),u=l("0xDb"),p=[{key:"2",display_name:"审核通过"},{key:"1",display_name:"待审核"},{key:"0",display_name:"退回"}],c=p.reduce(function(e,t){return e[t.key]=t.display_name,e},{}),m=l("ZQUo"),d={name:"complexTable",directives:{waves:r.a},data:function(){return{tableKey:0,list:m.data,total:20,listLoading:!1,listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:p,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},filters:{statusFilter:function(e){return{published:"success",draft:"info",deleted:"danger"}[e]},typeFilter:function(e){return c[e]}},methods:{getList:function(){var e=this;this.listLoading=!0,Object(s.c)(this.listQuery).then(function(t){e.list=t.data.items,e.total=t.data.total,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作成功",type:"success"}),e.status=t},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&(e.temp.id=parseInt(100*Math.random())+1024,e.temp.author="vue-element-admin",Object(s.a)(e.temp).then(function(){e.list.unshift(e.temp),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))})},handleUpdate:function(e){var t=this;this.temp=o()({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var l=o()({},e.temp);l.timestamp=+new Date(l.timestamp),Object(s.e)(l).then(function(){var t=!0,l=!1,a=void 0;try{for(var n,o=i()(e.list);!(t=(n=o.next()).done);t=!0){var s=n.value;if(s.id===e.temp.id){var r=e.list.indexOf(s);e.list.splice(r,1,e.temp);break}}}catch(e){l=!0,a=e}finally{try{!t&&o.return&&o.return()}finally{if(l)throw a}}e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(e){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var t=this.list.indexOf(e);this.list.splice(t,1)},handleFetchPv:function(e){var t=this;Object(s.d)(e).then(function(e){t.pvData=e.data.pvData,t.dialogPvVisible=!0})},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([l.e(62),l.e(61)]).then(l.bind(null,"zWO4")).then(function(t){var l=e.formatJson(["timestamp","title","type","importance","status"],e.list);t.export_json_to_excel(["timestamp","title","type","importance","status"],l,"table-list"),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(u.a)(t[e]):t[e]})})}}},g={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container calendar-list-container"},[l("div",{staticClass:"filter-container"},[l("el-input",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"一级分类"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"二级分类"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"品牌"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"商品名称"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"商品编号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"WMS商品编码"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"商品类型"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"编码"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),l("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:"运营区"},model:{value:e.listQuery.importance,callback:function(t){e.$set(e.listQuery,"importance",t)},expression:"listQuery.importance"}},e._l(e.importanceOptions,function(e){return l("el-option",{key:e,attrs:{label:e,value:e}})})),e._v(" "),l("el-select",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"请输入货主名称"},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.calendarTypeOptions,function(e){return l("el-option",{key:e.key,attrs:{label:e.display_name+"("+e.key+")",value:e.key}})})),e._v(" "),l("el-select",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"正常品上架状态"},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.calendarTypeOptions,function(e){return l("el-option",{key:e.key,attrs:{label:e.display_name+"("+e.key+")",value:e.key}})})),e._v(" "),l("el-select",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"换盖品上架状态"},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.calendarTypeOptions,function(e){return l("el-option",{key:e.key,attrs:{label:e.display_name+"("+e.key+")",value:e.key}})})),e._v(" "),l("el-select",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"积分品上架状态"},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.calendarTypeOptions,function(e){return l("el-option",{key:e.key,attrs:{label:e.display_name+"("+e.key+")",value:e.key}})})),e._v(" "),l("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),l("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.add}},[e._v(e._s(e.$t("premiss.filter.add")))])],1),e._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"给我一点时间",border:"",stripe:"",fit:"","highlight-current-row":""}},[l("el-table-column",{attrs:{prop:"id",label:"编码","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"wmsGoodsNo",label:"WMS商品编码","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"goodsId",label:"商品编码","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"goodsName",label:"商品名称","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"oaName",label:"运营区","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"merchantName",label:"商户","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"serviceProvider",label:"服务商","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"typeName",label:"商品类型","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"oneClassify",label:"一级分类","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"twoClassify",label:"二级分类","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"brankName",label:"品牌","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"goodsUnit",label:"基本单位","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"stock",label:"库存","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"price",label:"售价","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"sales",label:"总销量","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"conversionCoefficient",label:"转换基数","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"issyn",label:"是否自动同步","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"normalShelves",label:"正常品上架状态","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"swapCapShelves",label:"换盖品上架状态","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"integralShelves",label:"积分品上架状态","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"normalUptime",label:"正常品上架时间","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"normalDowntime",label:"正常品下架时间","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"swapUptime",label:"换盖品上架时间","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"swapDowntime",label:"换盖品下架时间","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"integralUptime",label:"积分品上架时间","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"intergralDowntime",label:"积分品下架时间","min-width":"120",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{align:"center",label:e.$t("supplier.table.actions"),fixed:"right","min-width":"180","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(l){e.handleUpdate(t.row)}}},[e._v(e._s(e.$t("supplier.table.edit")))]),e._v(" "),l("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(l){e.handleModifyStatus(t.row,"deleted")}}},[e._v(e._s(e.$t("supplier.table.delete")))])]}}])})],1),e._v(" "),l("div",{staticClass:"pagination-container"},[l("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1),e._v(" "),l("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"70px"}},[l("el-form-item",{attrs:{label:e.$t("table.type"),prop:"type"}},[l("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.type,callback:function(t){e.$set(e.temp,"type",t)},expression:"temp.type"}},e._l(e.calendarTypeOptions,function(e){return l("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("table.date"),prop:"timestamp"}},[l("el-date-picker",{attrs:{type:"datetime",placeholder:"Please pick a date"},model:{value:e.temp.timestamp,callback:function(t){e.$set(e.temp,"timestamp",t)},expression:"temp.timestamp"}})],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("table.title"),prop:"title"}},[l("el-input",{model:{value:e.temp.title,callback:function(t){e.$set(e.temp,"title",t)},expression:"temp.title"}})],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("table.status")}},[l("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},e._l(e.statusOptions,function(e){return l("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("table.importance")}},[l("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:e.temp.importance,callback:function(t){e.$set(e.temp,"importance",t)},expression:"temp.importance"}})],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("table.remark")}},[l("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Please input"},model:{value:e.temp.remark,callback:function(t){e.$set(e.temp,"remark",t)},expression:"temp.remark"}})],1)],1),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"==e.dialogStatus?l("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):l("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"Reading statistics",visible:e.dialogPvVisible},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[l("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),l("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]},f=l("VU/8")(d,g,!1,null,null,null);t.default=f.exports},ZQUo:function(e,t){e.exports={draw:1,recordsTotal:5800,recordsFiltered:5800,data:[{operateAreaId:2,goodsId:2,merchantId:5,updateId:null,delFlag:null,stock:0,sales:0,price:2,updateDate:null,merchantName:"福州和发贸易有限公司1",originalPrice:null,suggestPrice:null,goodsName:"1",oaName:"厦门市",issyn:"1",wmsGoodsNo:null,normalShelves:0,swapCapShelves:0,integralShelves:0,goodsScore:null,goodsUnit:"3",conversionCoefficient:null,sumStock:null,normalUptime:1511685745e3,normalDowntime:null,swapUptime:null,swapDowntime:null,integralUptime:null,intergralDowntime:null,brankName:"东古",oneClassify:null,twoClassify:null,serviceProvider:null,saleUnit:null,wmsGoodsUnit:null,saleStep:null,specifications:null,normalRatio:null,swapCapRatio:null,integralRatio:null,appRatio:null,pcRatio:null,wechatRatio:null,promotionInfo:null,serveInfo:null,promptInfo:null,origin:null,id:33,typeName:"水果篮"},{operateAreaId:2,goodsId:2,merchantId:9,updateId:null,delFlag:null,stock:0,sales:0,price:2,updateDate:null,merchantName:"12313",originalPrice:null,suggestPrice:null,goodsName:"1",oaName:"厦门市",issyn:"1",wmsGoodsNo:null,normalShelves:0,swapCapShelves:0,integralShelves:0,goodsScore:null,goodsUnit:"3",conversionCoefficient:null,sumStock:null,normalUptime:1511685745e3,normalDowntime:null,swapUptime:null,swapDowntime:null,integralUptime:null,intergralDowntime:null,brankName:"东古",oneClassify:null,twoClassify:null,serviceProvider:null,saleUnit:null,wmsGoodsUnit:null,saleStep:null,specifications:null,normalRatio:null,swapCapRatio:null,integralRatio:null,appRatio:null,pcRatio:null,wechatRatio:null,promotionInfo:null,serveInfo:null,promptInfo:null,origin:null,id:34,typeName:"水果篮"},{operateAreaId:2,goodsId:7,merchantId:2,updateId:null,delFlag:null,stock:0,sales:0,price:8,updateDate:null,merchantName:"adasf",originalPrice:null,suggestPrice:null,goodsName:"13",oaName:"厦门市",issyn:"1",wmsGoodsNo:"1",normalShelves:1,swapCapShelves:0,integralShelves:1,goodsScore:null,goodsUnit:null,conversionCoefficient:1,sumStock:null,normalUptime:1511685745e3,normalDowntime:null,swapUptime:null,swapDowntime:null,integralUptime:null,intergralDowntime:null,brankName:"马祖东引",oneClassify:"111",twoClassify:"第二级",serviceProvider:"",saleUnit:"1",wmsGoodsUnit:null,saleStep:1,specifications:null,normalRatio:null,swapCapRatio:null,integralRatio:null,appRatio:null,pcRatio:null,wechatRatio:null,promotionInfo:null,serveInfo:null,promptInfo:null,origin:null,id:1,typeName:"加工部"},{operateAreaId:2,goodsId:7,merchantId:5,updateId:null,delFlag:null,stock:0,sales:0,price:.01,updateDate:null,merchantName:"福州和发贸易有限公司1",originalPrice:null,suggestPrice:null,goodsName:"13",oaName:"厦门市",issyn:"1",wmsGoodsNo:null,normalShelves:0,swapCapShelves:0,integralShelves:0,goodsScore:null,goodsUnit:null,conversionCoefficient:null,sumStock:null,normalUptime:1511685745e3,normalDowntime:null,swapUptime:null,swapDowntime:null,integralUptime:null,intergralDowntime:null,brankName:"马祖东引",oneClassify:"111",twoClassify:"第二级",serviceProvider:null,saleUnit:null,wmsGoodsUnit:null,saleStep:null,specifications:null,normalRatio:null,swapCapRatio:null,integralRatio:null,appRatio:null,pcRatio:null,wechatRatio:null,promotionInfo:null,serveInfo:null,promptInfo:null,origin:null,id:28,typeName:"加工部"},{operateAreaId:2,goodsId:11,merchantId:1,updateId:null,delFlag:null,stock:0,sales:2,price:10,updateDate:null,merchantName:"adasf1",originalPrice:null,suggestPrice:null,goodsName:"测试",oaName:"厦门市",issyn:"1",wmsGoodsNo:"1",normalShelves:1,swapCapShelves:1,integralShelves:1,goodsScore:null,goodsUnit:null,conversionCoefficient:1,sumStock:null,normalUptime:1511685745e3,normalDowntime:null,swapUptime:null,swapDowntime:null,integralUptime:null,intergralDowntime:null,brankName:"东古",oneClassify:null,twoClassify:"111",serviceProvider:"",saleUnit:"1",wmsGoodsUnit:null,saleStep:1,specifications:null,normalRatio:null,swapCapRatio:null,integralRatio:null,appRatio:null,pcRatio:null,wechatRatio:null,promotionInfo:null,serveInfo:null,promptInfo:null,origin:null,id:3,typeName:"加工部"},{operateAreaId:2,goodsId:36,merchantId:12,updateId:null,delFlag:null,stock:0,sales:0,price:3,updateDate:null,merchantName:"福州和发贸易有限公司（测试）",originalPrice:null,suggestPrice:null,goodsName:"雅士力中老年豆奶粉",oaName:"厦门市",issyn:"1",wmsGoodsNo:"3",normalShelves:0,swapCapShelves:0,integralShelves:0,goodsScore:null,goodsUnit:"瓶",conversionCoefficient:3,sumStock:null,normalUptime:1511685745e3,normalDowntime:null,swapUptime:null,swapDowntime:null,integralUptime:null,intergralDowntime:null,brankName:"雅士利",oneClassify:null,twoClassify:null,serviceProvider:null,saleUnit:"3",wmsGoodsUnit:null,saleStep:3,specifications:null,normalRatio:null,swapCapRatio:null,integralRatio:null,appRatio:null,pcRatio:null,wechatRatio:null,promotionInfo:null,serveInfo:null,promptInfo:null,origin:null,id:46,typeName:"豆奶类"},{operateAreaId:2,goodsId:26888,merchantId:571,updateId:null,delFlag:null,stock:0,sales:529,price:33,updateDate:null,merchantName:"福建万全速配供应链管理有限公司",originalPrice:null,suggestPrice:null,goodsName:"银鹭桂圆八宝粥360g*12/件",oaName:"厦门市",issyn:"1",wmsGoodsNo:"B01824",normalShelves:1,swapCapShelves:0,integralShelves:0,goodsScore:null,goodsUnit:"罐",conversionCoefficient:12,sumStock:null,normalUptime:1501646501e3,normalDowntime:null,swapUptime:null,swapDowntime:null,integralUptime:null,intergralDowntime:null,brankName:"银鹭",oneClassify:"饮料牛奶",twoClassify:"八宝粥羹类",serviceProvider:"",saleUnit:"件",wmsGoodsUnit:null,saleStep:1,specifications:null,normalRatio:null,swapCapRatio:null,integralRatio:null,appRatio:null,pcRatio:null,wechatRatio:null,promotionInfo:null,serveInfo:null,promptInfo:null,origin:null,id:26976,typeName:"粥样饮品"},{operateAreaId:2,goodsId:26889,merchantId:571,updateId:null,delFlag:null,stock:0,sales:162,price:33,updateDate:null,merchantName:"福建万全速配供应链管理有限公司",originalPrice:null,suggestPrice:null,goodsName:"银鹭桂圆莲子八宝粥360*12/件",oaName:"厦门市",issyn:"1",wmsGoodsNo:"B01825",normalShelves:1,swapCapShelves:0,integralShelves:0,goodsScore:null,goodsUnit:"罐",conversionCoefficient:12,sumStock:null,normalUptime:1501646913e3,normalDowntime:null,swapUptime:null,swapDowntime:null,integralUptime:null,intergralDowntime:null,brankName:"银鹭",oneClassify:"饮料牛奶",twoClassify:"八宝粥羹类",serviceProvider:null,saleUnit:"件",wmsGoodsUnit:null,saleStep:1,specifications:null,normalRatio:null,swapCapRatio:null,integralRatio:null,appRatio:null,pcRatio:null,wechatRatio:null,promotionInfo:null,serveInfo:null,promptInfo:null,origin:null,id:26977,typeName:"粥样饮品"},{operateAreaId:2,goodsId:26890,merchantId:571,updateId:null,delFlag:null,stock:0,sales:70,price:34,updateDate:null,merchantName:"福建万全速配供应链管理有限公司",originalPrice:null,suggestPrice:null,goodsName:"银鹭低糖莲子八宝粥360g*12/件",oaName:"厦门市",issyn:"1",wmsGoodsNo:"B01826",normalShelves:1,swapCapShelves:0,integralShelves:0,goodsScore:null,goodsUnit:"罐",conversionCoefficient:12,sumStock:null,normalUptime:1501646992e3,normalDowntime:null,swapUptime:null,swapDowntime:null,integralUptime:null,intergralDowntime:null,brankName:"银鹭",oneClassify:"饮料牛奶",twoClassify:"八宝粥羹类",serviceProvider:null,saleUnit:"件",wmsGoodsUnit:null,saleStep:1,specifications:null,normalRatio:null,swapCapRatio:null,integralRatio:null,appRatio:null,pcRatio:null,wechatRatio:null,promotionInfo:null,serveInfo:null,promptInfo:null,origin:null,id:26978,typeName:"粥样饮品"},{operateAreaId:2,goodsId:26891,merchantId:571,updateId:null,delFlag:null,stock:0,sales:103,price:36,updateDate:null,merchantName:"福建万全速配供应链管理有限公司",originalPrice:null,suggestPrice:null,goodsName:"银鹭好粥道（椰奶燕麦）280g*12/件",oaName:"厦门市",issyn:"1",wmsGoodsNo:"B01827",normalShelves:1,swapCapShelves:0,integralShelves:0,goodsScore:null,goodsUnit:"罐",conversionCoefficient:12,sumStock:null,normalUptime:1501659374e3,normalDowntime:null,swapUptime:null,swapDowntime:null,integralUptime:null,intergralDowntime:null,brankName:"银鹭",oneClassify:"饮料牛奶",twoClassify:"八宝粥羹类",serviceProvider:null,saleUnit:"件",wmsGoodsUnit:null,saleStep:1,specifications:null,normalRatio:null,swapCapRatio:null,integralRatio:null,appRatio:null,pcRatio:null,wechatRatio:null,promotionInfo:null,serveInfo:null,promptInfo:null,origin:null,id:26979,typeName:"粥样饮品"}]}}});