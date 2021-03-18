function getRemoteStyle_ccwgtv(config) {
   
    const template = config.remote_template;
    const base_url = `/hacsfiles/generic-remote-control-card/remotes/${template}`;    
     
   return `
   ha-card{
         background-color:transparent;
         box-shadow:var(--paper-material-elevation-0_-_box-shadow);
     }
     body {
     margin: 0;
     padding: 20px;
     font-family: "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif
 }
 
 .container {
     width: 224px;
     margin: 0 auto
 }
 
 #remote-control-ccwgtv {
     position: relative;
     background: url(${base_url}/remote.png) no-repeat;
     width: 178px;
     height: 559px
 }
 
 #remote-control-ccwgtv h2,
 #remote-control-ccwgtv span {
     position: absolute;
     left: -5000px
 }
 
 #remote-control-ccwgtv ul {
     margin: 0;
     padding: 0;
     list-style-type: none
 }
 
 #power a,
 #volumeup a,
 #volumedown a,
 #clickleft a,
 #clickright a,
 #mute a,
 #assistant a,
 #info a,
 #home a,
 #back a,
 #top a,
 #bottom a,
 #ok a {
     position: absolute;
     display: block
 }
 
 #remote-control-ccwgtv li#power a {
     left: 30px;
     top: 390px;
     width: 30px;
     height: 27px;
     background: url(${base_url}/power.png) no-repeat
 }
 
 #remote-control-ccwgtv li#power a:hover {
     background-image: url(${base_url}/power_over.png);
     background-repeat: no-repeat;
     background-position: 0 0px
 }
 
 #remote-control-ccwgtv li#assistant a {
     left: 105px;
     top: 150px;
     width: 47px;
     height: 41px;
     background: url(${base_url}/assistant.png) no-repeat
 }
 
 #remote-control-ccwgtv li#assistant a:hover {
     background-image: url(${base_url}/assistant_over.png);
     background-repeat: no-repeat;
     background-position: 0 0px
 }
 
 #remote-control-ccwgtv li#volumeup a {
     left: 155px;
     top: 120px;
     width: 29px;
     height: 30px;
     background: url(${base_url}/volume.png) no-repeat
 }
 
 #remote-control-ccwgtv li#volumeup a:hover {
     background-image: url(${base_url}/volume_over.png);
     background-repeat: no-repeat;
     background-position: 0 0px
 }
 
 
 #remote-control-ccwgtv li#volumedown a {
     left: 155px;
     top: 150px;
     width: 29px;
     height: 30px;
     background: url(${base_url}/volumedown.png) no-repeat
 }
 
 #remote-control-ccwgtv li#volumedown a:hover {
     background-image: url(${base_url}/volumedown_over.png);
     background-repeat: no-repeat;
     background-position: 0 0px
 }
 
 #remote-control-ccwgtv li#clickleft a {
     left: 21px;
     top: 64px;
     width: 29px;
     height: 29px;
     background: url(${base_url}/clickleft.png) no-repeat
 }
 
 #remote-control-ccwgtv li#clickleft a:hover {
     background-image: url(${base_url}/clickleft_over.png);
     background-repeat: no-repeat;
     background-position: 0 0px
 }
 
 
 #remote-control-ccwgtv li#clickright a {
     left: 116px;
     top: 64px;
     width: 29px;
     height: 29px;
     background: url(${base_url}/clickright.png) no-repeat
 }
 
 #remote-control-ccwgtv li#clickright a:hover {
     background-image: url(${base_url}/clickright_over.png);
     background-repeat: no-repeat;
     background-position: 0 0px
 }
  
 #remote-control-ccwgtv li#home a {
     width: 29px;
     height: 30px;
     left: 22px;
     top: 248px;
     background: url(${base_url}/home.png) no-repeat 0px 0
 }
 
 #remote-control-ccwgtv li#back a {
     width: 28px;
     height: 29px;	
     left: 22px;	
     top: 170px;
     background: url(${base_url}/left.png) no-repeat 0px 0px
 }
 
 #remote-control-ccwgtv li#right a {
     width: 29px;
     height: 29px;
     left: 116px;
     top: 64x;
     background: url(${base_url}/remote-circle3.png) no-repeat -98px -53px
 }
 
 #remote-control-ccwgtv li#top a {
     width: 29px;
     height: 29px;
     left: 69px;
     top: 20px;
     background: url(${base_url}/top.png) no-repeat 0px 0px
 }
 
 #remote-control-ccwgtv li#bottom a {
     width: 29px;
     height: 29px;
     left: 68px;
     top: 117px;
     background: url(${base_url}/bottom.png) no-repeat 0px 0px
 }
 
 #remote-control-ccwgtv li#ok a {
     width: 29px;
     height: 29px;
     left: 68px;
     top: 68px;
     background: url(${base_url}/ok.png) no-repeat 0px 0px
 }
 
 
 #remote-control-ccwgtv li#home a:hover {
     background: url(${base_url}/home_over.png) no-repeat 0px 0px
 }
 
 #remote-control-ccwgtv li#back a:hover {
     background: url(${base_url}/left_over.png) no-repeat 0px 0px
 }
 
 
 #remote-control-ccwgtv li#top a:hover {
     background: url(${base_url}/top_over.png) no-repeat 0px 0px
 }
 
 #remote-control-ccwgtv li#bottom a:hover {
     background: url(${base_url}/bottom_over.png) no-repeat 0px 0px
 }
 
 #remote-control-ccwgtv li#ok a:hover {
     background: url(${base_url}/ok_over.png) no-repeat 0px 0px
 }
     
   `;
 }
 
 function getRemoteHtml_ccwgtv(config){
  const template = config.remote_template;
  return `
     
  <div class="container">
             <div style="text-align:center">
             <h1>${config.name}</h1>
             </div>
             <div id="remote-control-ccwgtv">
                 <h2>
                     Main navigation
                 </h2>
                 <ul>
                     <li id="power" class="myButton-${template}"><a href="#" title="Power"><span>Power</span></a></li>
                     <li id="assistant" class="myButton-${template}"><a href="#" title="assistant"><span>assistant</span></a></li>
                     <li id="volumeup" class="myButton-${template}"><a href="#" title="volume"><span>volume</span></a></li>
                     <li id="volumedown" class="myButton-${template}"><a href="#" title="volumedown"><span>volumedown</span></a></li>
                     <li id="clickleft" class="myButton-${template}"><a href="#" title="clickleft"><span>clickleft</span></a></li>
                     <li id="clickright" class="myButton-${template}"><a href="#" title="clickright"><span>clickright</span></a></li>
                     
                 </ul>
 
 
                 <ul>
                     <li class="myButton-${template}" id="home"><a href="#" title="home"><span>home</span></a></li>
                     <li class="myButton-${template}" id="back"><a href="#" title="Go back to beginning"><span>back</span></a></li>
                     <li class="myButton-${template}" id="top"><a href="#" title="Top of gallery"><span>Top of Gallery</span></a></li>
                     <li class="myButton-${template}" id="bottom"><a href="#" title="Bottom of gallery"><span>Bottom of Gallery</span></a></li>
                     <li class="myButton-${template}" id="ok"><a href="#" title="OK - start slideshow"><span>OK - start slideshow</span></a></li>
                 </ul>
             </div>	
         </div>
 
 `;
 }