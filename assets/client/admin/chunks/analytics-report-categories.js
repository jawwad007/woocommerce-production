"use strict";(self.webpackChunk_wcAdmin_webpackJsonp=self.webpackChunk_wcAdmin_webpackJsonp||[]).push([[185],{57636:function(e,t,r){r.d(t,{Z:function(){return c}});var o=r(69307),a=r(92819),s=r(55609),n=r(86020),i=r(10431);class c extends o.Component{getCategoryAncestorIds(e,t){const r=[];let o=e.parent;for(;o;)r.unshift(o),o=t.get(o).parent;return r}getCategoryAncestors(e,t){const r=this.getCategoryAncestorIds(e,t);if(r.length)return 1===r.length?t.get((0,a.first)(r)).name+" › ":2===r.length?t.get((0,a.first)(r)).name+" › "+t.get((0,a.last)(r)).name+" › ":t.get((0,a.first)(r)).name+" … "+t.get((0,a.last)(r)).name+" › "}render(){const{categories:e,category:t,query:r}=this.props,a=(0,i.getPersistedQuery)(r);return t?(0,o.createElement)("div",{className:"woocommerce-table__breadcrumbs"},this.getCategoryAncestors(t,e),(0,o.createElement)(n.Link,{href:(0,i.getNewPath)(a,"/analytics/categories",{filter:"single_category",categories:t.id}),type:"wc-admin"},t.name)):(0,o.createElement)(s.Spinner,null)}}},18882:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var o=r(69307),a=r(7862),s=r.n(a),n=r(65736),i=r(92694),c=r(9818),m=r(63193),l=r(79548);const{addCesSurveyForAnalytics:d}=(0,c.dispatch)(l.Ls),u=(0,i.applyFilters)("woocommerce_admin_categories_report_charts",[{key:"items_sold",label:(0,n.__)("Items sold","woocommerce-admin"),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:(0,n.__)("Net sales","woocommerce-admin"),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:(0,n.__)("Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"}]),g=(0,i.applyFilters)("woocommerce_admin_category_report_advanced_filters",{filters:{},title:(0,n._x)("Categories match {{select /}} filters","A sentence describing filters for Categories. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce-admin")}),_=[{label:(0,n.__)("All categories","woocommerce-admin"),value:"all"},{label:(0,n.__)("Single category","woocommerce-admin"),value:"select_category",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_category",chartMode:"item-comparison",path:["select_category"],settings:{type:"categories",param:"categories",getLabels:m.YC,labels:{placeholder:(0,n.__)("Type to search for a category","woocommerce-admin"),button:(0,n.__)("Single Category","woocommerce-admin")}}}]},{label:(0,n.__)("Comparison","woocommerce-admin"),value:"compare-categories",chartMode:"item-comparison",settings:{type:"categories",param:"categories",getLabels:m.YC,labels:{helpText:(0,n.__)("Check at least two categories below to compare","woocommerce-admin"),placeholder:(0,n.__)("Search for categories to compare","woocommerce-admin"),title:(0,n.__)("Compare Categories","woocommerce-admin"),update:(0,n.__)("Compare","woocommerce-admin")},onClick:d}}];Object.keys(g.filters).length&&_.push({label:(0,n.__)("Advanced filters","woocommerce-admin"),value:"advanced"});const p=(0,i.applyFilters)("woocommerce_admin_categories_report_filters",[{label:(0,n.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:_}]);var y=r(94333),h=r(92819),b=r(10431),w=r(86020),f=r(81595),v=r(67221),C=r(57636),S=r(13732),k=r(79811);class q extends o.Component{constructor(e){super(e),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:(0,n.__)("Category","woocommerce-admin"),key:"category",required:!0,isSortable:!0,isLeftAligned:!0},{label:(0,n.__)("Items sold","woocommerce-admin"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:(0,n.__)("Net sales","woocommerce-admin"),key:"net_revenue",isSortable:!0,isNumeric:!0},{label:(0,n.__)("Products","woocommerce-admin"),key:"products_count",isSortable:!0,isNumeric:!0},{label:(0,n.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0}]}getRowsContent(e){const{render:t,formatDecimal:r,getCurrencyConfig:a}=this.context,{categories:s,query:n}=this.props;if(!s)return[];const i=a();return(0,h.map)(e,(e=>{const{category_id:a,items_sold:c,net_revenue:m,products_count:l,orders_count:d}=e,u=s.get(a),g=(0,b.getPersistedQuery)(n);return[{display:(0,o.createElement)(C.Z,{query:n,category:u,categories:s}),value:u&&u.name},{display:(0,f.formatValue)(i,"number",c),value:c},{display:t(m),value:r(m)},{display:u&&(0,o.createElement)(w.Link,{href:(0,b.getNewPath)(g,"/analytics/categories",{filter:"single_category",categories:u.id}),type:"wc-admin"},(0,f.formatValue)(i,"number",l)),value:l},{display:(0,f.formatValue)(i,"number",d),value:d}]}))}getSummary(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const{items_sold:r=0,net_revenue:o=0,orders_count:a=0}=e,{formatAmount:s,getCurrencyConfig:i}=this.context,c=i();return[{label:(0,n._n)("Category","Categories",t,"woocommerce-admin"),value:(0,f.formatValue)(c,"number",t)},{label:(0,n._n)("Item sold","Items sold",r,"woocommerce-admin"),value:(0,f.formatValue)(c,"number",r)},{label:(0,n.__)("Net sales","woocommerce-admin"),value:s(o)},{label:(0,n._n)("Order","Orders",a,"woocommerce-admin"),value:(0,f.formatValue)(c,"number",a)}]}render(){const{advancedFilters:e,filters:t,isRequesting:r,query:a}=this.props,s={helpText:(0,n.__)("Check at least two categories below to compare","woocommerce-admin"),placeholder:(0,n.__)("Search by category name","woocommerce-admin")};return(0,o.createElement)(S.Z,{compareBy:"categories",endpoint:"categories",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["items_sold","net_revenue","orders_count"],isRequesting:r,itemIdField:"category_id",query:a,searchBy:"categories",labels:s,tableQuery:{orderby:a.orderby||"items_sold",order:a.order||"desc",extended_info:!0},title:(0,n.__)("Categories","woocommerce-admin"),columnPrefsKey:"categories_report_columns",filters:t,advancedFilters:e})}}q.contextType=k.$;var E=(0,y.compose)((0,c.withSelect)(((e,t)=>{const{isRequesting:r,query:o}=t;if(r||o.search&&(!o.categories||!o.categories.length))return{};const{getItems:a,getItemsError:s,isResolving:n}=e(v.ITEMS_STORE_NAME),i={per_page:-1};return{categories:a("categories",i),isError:Boolean(s("categories",i)),isRequesting:n("getItems",["categories",i])}})))(q),R=r(21314),N=r(23961),x=r(13098),F=r(41021),I=r(25619);class A extends o.Component{getChartMeta(){const{query:e}=this.props,t="compare-categories"===e.filter&&e.categories&&e.categories.split(",").length>1,r="single_category"===e.filter&&!!e.categories,o=t||r?"item-comparison":"time-comparison";return{isSingleCategoryView:r,itemsLabel:r?(0,n.__)("%d products","woocommerce-admin"):(0,n.__)("%d categories","woocommerce-admin"),mode:o}}render(){const{isRequesting:e,query:t,path:r}=this.props,{mode:a,itemsLabel:s,isSingleCategoryView:n}=this.getChartMeta(),i={...t};return"item-comparison"===a&&(i.segmentby=n?"product":"category"),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(I.Z,{query:t,path:r,filters:p,advancedFilters:g,report:"categories"}),(0,o.createElement)(x.Z,{charts:u,endpoint:"products",isRequesting:e,limitProperties:n?["products","categories"]:["categories"],query:i,selectedChart:(0,R.Z)(t.chart,u),filters:p,advancedFilters:g,report:"categories"}),(0,o.createElement)(N.Z,{charts:u,filters:p,advancedFilters:g,mode:a,endpoint:"products",limitProperties:n?["products","categories"]:["categories"],path:r,query:i,isRequesting:e,itemsLabel:s,selectedChart:(0,R.Z)(t.chart,u)}),n?(0,o.createElement)(F.Z,{isRequesting:e,query:i,baseSearchQuery:{filter:"single_category"},hideCompare:n,filters:p,advancedFilters:g}):(0,o.createElement)(E,{isRequesting:e,query:t,filters:p,advancedFilters:g}))}}A.propTypes={query:s().object.isRequired,path:s().string.isRequired};var P=A},41021:function(e,t,r){var o=r(69307),a=r(65736),s=r(94333),n=r(22629),i=r(9818),c=r(92819),m=r(10431),l=r(86020),d=r(81595),u=r(74617),g=r(67221),_=r(57636),p=r(42934),y=r(13732),h=r(79811),b=r(4411);const w=(0,b.O3)("manageStock","no"),f=(0,b.O3)("stockStatuses",{});class v extends o.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:(0,a.__)("Product title","woocommerce-admin"),key:"product_name",required:!0,isLeftAligned:!0,isSortable:!0},{label:(0,a.__)("SKU","woocommerce-admin"),key:"sku",hiddenByDefault:!0,isSortable:!0},{label:(0,a.__)("Items sold","woocommerce-admin"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:(0,a.__)("Net sales","woocommerce-admin"),screenReaderLabel:(0,a.__)("Net sales","woocommerce-admin"),key:"net_revenue",required:!0,isSortable:!0,isNumeric:!0},{label:(0,a.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0},{label:(0,a.__)("Category","woocommerce-admin"),key:"product_cat"},{label:(0,a.__)("Variations","woocommerce-admin"),key:"variations",isSortable:!0},"yes"===w?{label:(0,a.__)("Status","woocommerce-admin"),key:"stock_status"}:null,"yes"===w?{label:(0,a.__)("Stock","woocommerce-admin"),key:"stock",isNumeric:!0}:null].filter(Boolean)}getRowsContent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const{query:t}=this.props,r=(0,m.getPersistedQuery)(t),{render:s,formatDecimal:i,getCurrencyConfig:g}=this.context,y=g();return(0,c.map)(e,(e=>{const{product_id:c,items_sold:g,net_revenue:h,orders_count:b}=e,v=e.extended_info||{},{category_ids:C,low_stock_amount:S,manage_stock:k,sku:q,stock_status:E,stock_quantity:R,variations:N=[]}=v,x=(0,n.decodeEntities)(v.name),F=(0,m.getNewPath)(r,"/analytics/orders",{filter:"advanced",product_includes:c}),I=(0,m.getNewPath)(r,"/analytics/products",{filter:"single_product",products:c}),{categories:A}=this.props,P=C&&A&&C.map((e=>A.get(e))).filter(Boolean)||[],V=(0,p.d)(E,R,S)?(0,o.createElement)(l.Link,{href:(0,u.getAdminLink)("post.php?action=edit&post="+c),type:"wp-admin"},(0,a._x)("Low","Indication of a low quantity","woocommerce-admin")):f[E];return[{display:(0,o.createElement)(l.Link,{href:I,type:"wc-admin"},x),value:x},{display:q,value:q},{display:(0,d.formatValue)(y,"number",g),value:g},{display:s(h),value:i(h)},{display:(0,o.createElement)(l.Link,{href:F,type:"wc-admin"},b),value:b},{display:(0,o.createElement)("div",{className:"woocommerce-table__product-categories"},P[0]&&(0,o.createElement)(_.Z,{category:P[0],categories:A}),P.length>1&&(0,o.createElement)(l.Tag,{label:(0,a.sprintf)((0,a._x)("+%d more","categories","woocommerce-admin"),P.length-1),popoverContents:P.map((e=>(0,o.createElement)(_.Z,{category:e,categories:A,key:e.id,query:t})))})),value:P.map((e=>e.name)).join(", ")},{display:(0,d.formatValue)(y,"number",N.length),value:N.length},"yes"===w?{display:k?V:(0,a.__)("N/A","woocommerce-admin"),value:k?f[E]:null}:null,"yes"===w?{display:k?(0,d.formatValue)(y,"number",R):(0,a.__)("N/A","woocommerce-admin"),value:R}:null].filter(Boolean)}))}getSummary(e){const{products_count:t=0,items_sold:r=0,net_revenue:o=0,orders_count:s=0}=e,{formatAmount:n,getCurrencyConfig:i}=this.context,c=i();return[{label:(0,a._n)("Product","Products",t,"woocommerce-admin"),value:(0,d.formatValue)(c,"number",t)},{label:(0,a._n)("Item sold","Items sold",r,"woocommerce-admin"),value:(0,d.formatValue)(c,"number",r)},{label:(0,a.__)("Net sales","woocommerce-admin"),value:n(o)},{label:(0,a._n)("Orders","Orders",s,"woocommerce-admin"),value:(0,d.formatValue)(c,"number",s)}]}render(){const{advancedFilters:e,baseSearchQuery:t,filters:r,hideCompare:s,isRequesting:n,query:i}=this.props,c={helpText:(0,a.__)("Check at least two products below to compare","woocommerce-admin"),placeholder:(0,a.__)("Search by product name or SKU","woocommerce-admin")};return(0,o.createElement)(y.Z,{compareBy:s?void 0:"products",endpoint:"products",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["products_count","items_sold","net_revenue","orders_count"],itemIdField:"product_id",isRequesting:n,labels:c,query:i,searchBy:"products",baseSearchQuery:t,tableQuery:{orderby:i.orderby||"items_sold",order:i.order||"desc",extended_info:!0,segmentby:i.segmentby},title:(0,a.__)("Products","woocommerce-admin"),columnPrefsKey:"products_report_columns",filters:r,advancedFilters:e})}}v.contextType=h.$,t.Z=(0,s.compose)((0,i.withSelect)(((e,t)=>{const{query:r,isRequesting:o}=t,{getItems:a,getItemsError:s,isResolving:n}=e(g.ITEMS_STORE_NAME);if(o||r.search&&(!r.products||!r.products.length))return{};const i={per_page:-1};return{categories:a("categories",i),isError:Boolean(s("categories",i)),isRequesting:n("getItems",["categories",i])}})))(v)}}]);