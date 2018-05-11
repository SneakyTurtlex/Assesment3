var to = document.getElementById("to"),
    message = document.getElementById("message"),
    from = document.getElementById("from"),
    reciver = document.getElementById("reciver"),
    mymsg = document.getElementById("mymsg"),
    sender = document.getElementById("sender"),
    bgimg = document.getElementById("bgimg"),
    postcard = document.getElementById("postcard"),
    gallery = document.getElementById("gallery"),
    preview = document.getElementById("preview"),
    imgs = document.getElementById("imgs");
    
var num = 1;


reciver.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        
   to.innerHTML = reciver.value; 
    }
});

mymsg.addEventListener("keyup", function(ev){
   if(ev.keyCode == 13){
       message.innerHTML = mymsg.value;
   } 
});

sender.addEventListener("keyup", function(ev){
   if(ev.keyCode == 13){
       from.innerHTML = sender.value;
   } 
});

bgimg.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        
        postcard.style.backgroundImage = "url("+bgimg.value+")";
    
 }
    
});

gallery.addEventListener("click", function(){
    
    var ndiv = document.createElement("div");
    ndiv.className = "imgs";
    preview.appendChild(ndiv);
    ndiv.style.backgroundImage = "url("+bgimg.value+")";
    
    var ntitle = document.createElement("div")
    ntitle.className = "ntitle";
    ntitle.innerHTML = to.value;
    ndiv.appendChild(ntitle);
    
    
    var nbg = document.createElement("img");
    nbg.className = "nbg";
    nbg.src = bgimg;
    ndiv.appendChild(nbg);
    
   });



