"use strict";(self["webpackChunkmetawall"]=self["webpackChunkmetawall"]||[]).push([[60],{4060:function(e,t,s){s.r(t),s.d(t,{default:function(){return q}});var a=s(3396),o=s(7139);const r=e=>((0,a.dD)("data-v-bf948710"),e=e(),(0,a.Cn)(),e),i={class:"post"},n={for:"content",class:"content-wrapper"},l=(0,a.Uk)("貼文內容 "),d={for:"uploadImage",class:"btn upload"},c=(0,a.Uk)(" 上傳圖片 "),m={class:"image-wrapper border radius"},p={key:0,class:"cover border cursor-none radius"},h=r((()=>(0,a._)("span",{class:"material-icons"}," image ",-1))),u=[h],g=["src"],b=r((()=>(0,a._)("span",{class:"material-icons"}," close ",-1))),f=[b],w=r((()=>(0,a._)("div",{class:"error-message"},"圖片格式錯誤，僅限 JPG、PNG 圖片",-1))),_={key:0,class:"error-message"},v={class:"submit-wrapper"},k=["disabled"];function $(e,t,s,r,h,b){const $=(0,a.up)("Title"),I=(0,a.up)("VField"),y=(0,a.up)("error-message"),P=(0,a.up)("VForm");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)($,{title:"張貼動態"}),(0,a.Wm)(P,{onSubmit:b.createPosts,class:"border bg-white radius"},{default:(0,a.w5)((({errors:s})=>[(0,a._)("label",n,[l,(0,a.Wm)(I,{refs:"ee",id:"content",name:"內容",modelValue:h.content,"onUpdate:modelValue":t[0]||(t[0]=e=>h.content=e),placeholder:"輸入您的貼文內容",class:"content border",rules:"required",as:"textarea"},null,8,["modelValue"]),(0,a.Wm)(y,{name:"內容"})]),(0,a._)("label",d,[c,(0,a.Wm)(I,{id:"uploadImage",name:"uploadImage",type:"file",class:"hide",onChange:e=>b.upload(s),rules:{ext:["jpg","png","jpeg"]}},null,8,["onChange"])]),(0,a._)("div",m,[(0,a._)("div",{class:"clamp",style:(0,o.j5)(h.paddingBottom)},[h.image?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",p,u)),h.image?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("img",{ref:"postsPhoto",onLoad:t[1]||(t[1]=t=>(e.successLoadImg,b.size())),src:h.image,alt:"",class:"hide"},null,40,g),(0,a._)("button",{type:"button",class:"btn border clear circle",onClick:t[2]||(t[2]=(...e)=>b.clearImg&&b.clearImg(...e))},f)],64)):(0,a.kq)("",!0)],4)]),(0,a.Wm)(y,{name:"uploadImage"},{default:(0,a.w5)((()=>[w])),_:1}),h.errMessage?((0,a.wg)(),(0,a.iD)("div",_,(0,o.zw)(h.errMessage),1)):(0,a.kq)("",!0),(0,a._)("div",v,[(0,a._)("button",{type:"submit",class:"btn border submit",disabled:b.disabled(s)}," 送出貼文 ",8,k)])])),_:1},8,["onSubmit"])])}const I=e=>((0,a.dD)("data-v-2e84f518"),e=e(),(0,a.Cn)(),e),y={class:"title"},P={class:"border bg-white"},C=I((()=>(0,a._)("div",{class:"mat border bg-white"},null,-1)));function D(e,t,s,r,i,n){return(0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("h1",P,(0,o.zw)(s.title),1),C])}var B={name:"TitleCMPT",props:["title"]},L=s(89);const M=(0,L.Z)(B,[["render",D],["__scopeId","data-v-2e84f518"]]);var V=M,W={name:"PostView",components:{Title:V},data(){return{content:"",image:"",err:!0,errMessage:"",paddingBottom:{}}},methods:{createPosts(){this.$store.commit("Load",!0);const e="https://agile-anchorage-83053.herokuapp.com/post",{headers:t}=this.$store.state,s={user:this.$store.state.user._id,image:this.image,content:this.content};this.$http.post(e,s,t).then((()=>{this.$router.push({name:"posts_wall"})})).catch((e=>{console.error(e)})).then((()=>{this.$store.commit("Load",!1)}))},async upload(e){if(this.errMessage="",this.image="",void 0===e.uploadImage){this.$store.commit("Load",!0);const e=document.getElementById("uploadImage").files[0],t=new FormData;t.append("file-to-upload",e);const s="https://agile-anchorage-83053.herokuapp.com/upload/post",{headers:a}=this.$store.state;this.$http.post(s,t,a).then((e=>{const{imgUrl:t}=e.data;this.image=t})).catch((e=>{this.errMessage=e.response.data.message})).then((()=>{this.$store.commit("Load",!1)}))}},clearImg(){this.image="",this.paddingBottom={paddingBottom:"52.35%"}},disabled(e){const t=Object.keys(e).length;return!this.content||0!==t},size(){if(this.$refs.postsPhoto){const{height:e}=this.$refs.postsPhoto,{width:t}=this.$refs.postsPhoto,s=e/t*100;this.paddingBottom={paddingBottom:s>150?"150%":`${s}%`}}}}};const j=(0,L.Z)(W,[["render",$],["__scopeId","data-v-bf948710"]]);var q=j}}]);
//# sourceMappingURL=60.300f02bb.js.map