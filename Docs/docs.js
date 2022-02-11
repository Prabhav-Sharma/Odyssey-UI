const sidebar=document.getElementById("sidebar");
const navBtn=document.getElementById("nav-button");
const mainSection =document.getElementById("main-section");
const article=document.getElementById("article");


const intervalID= setInterval(()=>{
    if(window.innerWidth<=880) toggle();
},2500);


const toggle=()=>{
    if(sidebar.className =="sidebar"){
        sidebar.className="sidebar-toggle";
        article.className="flex-column article-toggle";
        clearInterval(intervalID);
   }else {
       sidebar.className="sidebar";
       article.className="flex-column";
   }
   };

navBtn.addEventListener("click",toggle);

hljs.highlightAll();