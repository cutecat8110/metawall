"use strict";(self["webpackChunkmetawall"]=self["webpackChunkmetawall"]||[]).push([[527],{9527:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var s=n(3396),a=n(9242);const o=t=>((0,s.dD)("data-v-03f18085"),t=t(),(0,s.Cn)(),t),r=o((()=>(0,s._)("div",{class:"border bg-white title"},[(0,s._)("h1",{class:"border bg-white"},"張貼動態")],-1))),c={class:"border bg-white post"},l=o((()=>(0,s._)("h2",null,"貼文內容",-1))),i={for:"content",class:"border content-wrapper"},d=o((()=>(0,s._)("button",{type:"button",class:"btn upload"},"上傳圖片",-1))),u=["src"],p={class:"submit-wrapper"};function m(t,e,n,o,m,h){return(0,s.wg)(),(0,s.iD)("div",null,[r,(0,s._)("div",c,[l,(0,s._)("label",i,[(0,s.wy)((0,s._)("textarea",{"onUpdate:modelValue":e[0]||(e[0]=t=>m.content=t),name:"content",placeholder:"輸入您的貼文內容",id:"content",class:"content"},null,512),[[a.nr,m.content]])]),d,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>m.image=t)},null,512),[[a.nr,m.image]]),m.image?((0,s.wg)(),(0,s.iD)("img",{key:0,src:m.image,alt:"",class:"border preview"},null,8,u)):(0,s.kq)("",!0),(0,s._)("div",p,[(0,s._)("button",{type:"button",class:"btn border submit",onClick:e[2]||(e[2]=(...t)=>h.createPosts&&h.createPosts(...t))},"送出貼文")])])])}var h={name:"PostView",data(){return{content:"",image:""}},methods:{createPosts(){this.$store.commit("Load",!0);const t="https://damp-springs-73410.herokuapp.com/post",e={user:"6284bd0df623a5fcf56630f0",image:this.image,content:this.content};this.$http.post(t,e).then((()=>{this.$store.commit("Load",!1)})).then((()=>{this.$router.push({name:"posts-wall"})}))}}},b=n(89);const w=(0,b.Z)(h,[["render",m],["__scopeId","data-v-03f18085"]]);var g=w}}]);
//# sourceMappingURL=527.cd37a50e.js.map