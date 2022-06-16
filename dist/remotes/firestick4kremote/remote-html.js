function getRemoteStyle_firestick4kremote(config) {
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
	width: 360px;
	margin: 0 auto
}

#remote-control-firestick4kremote {
	position: relative;
	background: url(${base_url}/firestick4kremote.png) no-repeat;
	width: 332px;
	height: 768px
}

#remote-control-firestick4kremote h2,
#remote-control-firestick4kremote span {
	position: absolute;
	left: 5000px
}

#remote-control-firestick4kremote ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#pwr a,
#mic a,
#volup a,
#voldown a,
#mute a,
#up a,
#left a,
#select a,
#right a,
#down a,
#back a,
#home a,
#menu a,
#rwd a,
#play a,
#fwd a {
	position: absolute;
	disrwd: block
}

#remote-control-firestick4kremote li#pwr a {
    left: 86px;
    top: 27px;
    width: 36px;
    height: 36px;	
	background: url(${base_url}/pwr.png) no-repeat
}

#remote-control-firestick4kremote li#mic a {
    left: 140px;
    top: 68px;
    width: 49px;
    height: 49px;	
	background: url(${base_url}/mic.png) no-repeat
}

#remote-control-firestick4kremote li#volup a {
    left: 140px;
    top: 428px;
    width: 49px;
    height: 49px;	
	background: url(${base_url}/volup.png) no-repeat
}

#remote-control-firestick4kremote li#voldown a {
    left: 140px;
    top: 485px;
    width: 49px;
    height: 49px;	
	background: url(${base_url}/voldown.png) no-repeat
}

#remote-control-firestick4kremote li#mute a {
    left: 140px;
    top: 548px;
    width: 49px;
    height: 49px;	
	background: url(${base_url}/mute.png) no-repeat
}

#remote-control-firestick4kremote li#up a {
    left: 120px;
    top: 129px;
    width: 89px;
    height: 42px;	
	background: url(${base_url}/up.png) no-repeat
}

#remote-control-firestick4kremote li#left a {
    left: 78px;
    top: 169px;
    width: 42px;
    height: 89px;	
	background: url(${base_url}/left.png) no-repeat
}

#remote-control-firestick4kremote li#select a {
    left: 134px;
    top: 183px;
    width: 63px;
    height: 63px;	
	background: url(${base_url}/select.png) no-repeat
}

#remote-control-firestick4kremote li#right a {
    left: 210px;
    top: 169px;
    width: 42px;
    height: 89px;	
	background: url(${base_url}/right.png) no-repeat
}

#remote-control-firestick4kremote li#down a {
    left: 120px;
    top: 256px;
    width: 89px;
    height: 42px;	
	background: url(${base_url}/down.png) no-repeat
}

#remote-control-firestick4kremote li#back a {
    left: 80px;
    top: 308px;
    width: 49px;
    height: 49px;	
	background: url(${base_url}/back.png) no-repeat
}

#remote-control-firestick4kremote li#home a {
    left: 140px;
    top: 308px;
    width: 49px;
    height: 49px;	
	background: url(${base_url}/home.png) no-repeat
}

#remote-control-firestick4kremote li#menu a {
    left: 200px;
    top: 308px;
    width: 49px;
    height: 49px;	
	background: url(${base_url}/menu.png) no-repeat
}

#remote-control-firestick4kremote li#rwd a {
    left: 80px;
    top: 367px;
    width: 49px;
    height: 49px;	
	background: url(${base_url}/rwd.png) no-repeat
}

#remote-control-firestick4kremote li#play a {
    left: 140px;
    top: 367px;
    width: 49px;
    height: 49px;	
	background: url(${base_url}/play.png) no-repeat
}

#remote-control-firestick4kremote li#fwd a {
    left: 200px;
    top: 367px;
    width: 49px;
    height: 49px;	
	background: url(${base_url}/fwd.png) no-repeat
}


#remote-control-firestick4kremote li#pwr a:hover {
	background: url(${base_url}/pwr_over.png) no-repeat 0px 0px
}

#remote-control-firestick4kremote li#mic a:hover {
	background: url(${base_url}/mic_over.png) no-repeat 0px 0px
}

#remote-control-firestick4kremote li#volup a:hover {
	background: url(${base_url}/volup_over.png) no-repeat 0px 0px
}

#remote-control-firestick4kremote li#voldown a:hover {
	background: url(${base_url}/voldown_over.png) no-repeat 0px 0px
}

#remote-control-firestick4kremote li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}

#remote-control-firestick4kremote li#up a:hover {
	background: url(${base_url}/up_over.png) no-repeat 0px 0px
}

#remote-control-firestick4kremote li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}

#remote-control-firestick4kremote li#select a:hover {
	background: url(${base_url}/select_over.png) no-repeat 0px 0px
}

#remote-control-firestick4kremote li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}

#remote-control-firestick4kremote li#down a:hover {
	background: url(${base_url}/down_over.png) no-repeat 0px 0px
}

#remote-control-firestick4kremote li#back a:hover {
	background: url(${base_url}/back_over.png) no-repeat 0px 0px
}  

#remote-control-firestick4kremote li#home a:hover {
	background: url(${base_url}/home_over.png) no-repeat 0px 0px
}  

#remote-control-firestick4kremote li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}  

#remote-control-firestick4kremote li#rwd a:hover {
	background: url(${base_url}/rwd_over.png) no-repeat 0px 0px
}

#remote-control-firestick4kremote li#play a:hover {
	background: url(${base_url}/play_over.png) no-repeat 0px 0px
}

#remote-control-firestick4kremote li#fwd a:hover {
	background: url(${base_url}/fwd_over.png) no-repeat 0px 0px
}  
  `;
}

function getRemoteHtml_firestick4kremote(config){
 const template = config.remote_template;
 return `

 <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-firestick4kremote">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="pwr" class="myButton-${template}"><a href="#" title="pwr"><span>pwr</span></a></li>
					<li id="mic" class="myButton-${template}"><a href="#" title="mic"><span>mic</span></a></li>
					<li id="volup" class="myButton-${template}"><a href="#" title="volup"><span>volup</span></a></li>
					<li id="voldown" class="myButton-${template}"><a href="#" title="voldown"><span>voldown</span></a></li>
					<li id="mute" class="myButton-${template}"><a href="#" title="mute"><span>mute</span></a></li>
					<li id="up" class="myButton-${template}"><a href="#" title="up"><span>up</span></a></li>
					<li id="left" class="myButton-${template}"><a href="#" title="left"><span>left</span></a></li>
					<li id="select" class="myButton-${template}"><a href="#" title="select"><span>select</span></a></li>
					<li id="right" class="myButton-${template}"><a href="#" title="right"><span>right</span></a></li>
					<li id="down" class="myButton-${template}"><a href="#" title="down"><span>down</span></a></li>
					<li id="back" class="myButton-${template}"><a href="#" title="back"><span>back</span></a></li>
					<li id="home" class="myButton-${template}"><a href="#" title="home"><span>home</span></a></li>
					<li id="menu" class="myButton-${template}"><a href="#" title="menu"><span>menu</span></a></li>
					<li id="rwd" class="myButton-${template}"><a href="#" title="rwd"><span>rwd</span></a></li>
					<li id="play" class="myButton-${template}"><a href="#" title="play"><span>play</span></a></li>
					<li id="fwd" class="myButton-${template}"><a href="#" title="fwd"><span>fwd</span></a></li>			
				</ul>
			</div>	
		</div>

`;
}
