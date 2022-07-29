function getRemoteStyle_apple4kremote(config) {
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

#remote-control-apple4kremote {
	position: relative;
	background: url(${base_url}/apple4kremote.png) no-repeat;
	width: 349px;
	height: 930px;
	margin: auto;
}

#remote-control-apple4kremote ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#up a,
#left a,
#select a,
#right a,
#down a,
#menu a,
#tv a,
#siri a,
#volup a,
#play a,
#voldown a {
	position: absolute;
	display: block
}

#remote-control-apple4kremote li#up a {
    left: 124px;
    top: 51px;
    width: 101px;
    height: 53px;	
	background: url(${base_url}/up.png) no-repeat
}

#remote-control-apple4kremote li#left a {
    left: 56px;
    top: 106px;
    width: 53px;
    height: 101px;	
	background: url(${base_url}/left.png) no-repeat
}

#remote-control-apple4kremote li#select a {
    left: 121px;
    top: 111px;
    width: 104px;
    height: 103px;	
	background: url(${base_url}/select.png) no-repeat
}

#remote-control-apple4kremote li#right a {
    left: 245px;
    top: 106px;
    width: 53px;
    height: 101px;	
	background: url(${base_url}/right.png) no-repeat
}

#remote-control-apple4kremote li#down a {
    left: 124px;
    top: 230px;
    width: 101px;
    height: 53px;	
	background: url(${base_url}/down.png) no-repeat
}

#remote-control-apple4kremote li#menu a {
    left: 63px;
    top: 295px;
    width: 101px;
    height: 102px;	
	background: url(${base_url}/menu.png) no-repeat
}

#remote-control-apple4kremote li#tv a {
    left: 186px;
    top: 295px;
    width: 101px;
    height: 102px;	
	background: url(${base_url}/tv.png) no-repeat
}

#remote-control-apple4kremote li#siri a {
    left: 63px;
    top: 415px;
    width: 100px;
    height: 102px;	
	background: url(${base_url}/siri.png) no-repeat
}

#remote-control-apple4kremote li#volup a {
    left: 191px;
    top: 417px;
    width: 92px;
    height: 101px;	
	background: url(${base_url}/volup.png) no-repeat
}

#remote-control-apple4kremote li#play a {
    left: 63px;
    top: 536px;
    width: 100px;
    height: 100px;	
	background: url(${base_url}/play.png) no-repeat
}

#remote-control-apple4kremote li#voldown a {
    left: 191px;
    top: 534px;
    width: 92px;
    height: 100px;	
	background: url(${base_url}/voldown.png) no-repeat
}


#remote-control-apple4kremote li#up a:hover {
	background: url(${base_url}/up_over.png) no-repeat 0px 0px
}

#remote-control-apple4kremote li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}

#remote-control-apple4kremote li#select a:hover {
	background: url(${base_url}/select_over.png) no-repeat 0px 0px
}

#remote-control-apple4kremote li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}

#remote-control-apple4kremote li#down a:hover {
	background: url(${base_url}/down_over.png) no-repeat 0px 0px
}

#remote-control-apple4kremote li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}  

#remote-control-apple4kremote li#tv a:hover {
	background: url(${base_url}/tv_over.png) no-repeat 0px 0px
}  

#remote-control-apple4kremote li#siri a:hover {
	background: url(${base_url}/siri_over.png) no-repeat 0px 0px
}  

#remote-control-apple4kremote li#volup a:hover {
	background: url(${base_url}/volup_over.png) no-repeat 0px 0px
}

#remote-control-apple4kremote li#play a:hover {
	background: url(${base_url}/play_over.png) no-repeat 0px 0px
}

#remote-control-apple4kremote li#voldown a:hover {
	background: url(${base_url}/voldown_over.png) no-repeat 0px 0px
}  
  `;
}

function getRemoteHtml_apple4kremote(config){
 const template = config.remote_template;
 return `

 <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-apple4kremote">
				<ul>
					<li id="up" class="myButton-${template}"><a href="#" title="up"></a></li>
					<li id="left" class="myButton-${template}"><a href="#" title="left"></a></li>
					<li id="select" class="myButton-${template}"><a href="#" title="select"></a></li>
					<li id="right" class="myButton-${template}"><a href="#" title="right"></a></li>
					<li id="down" class="myButton-${template}"><a href="#" title="down"></a></li>
					<li id="menu" class="myButton-${template}"><a href="#" title="menu"</a></li>
					<li id="tv" class="myButton-${template}"><a href="#" title="tv"></a></li>
					<li id="siri" class="myButton-${template}"><a href="#" title="siri"></a></li>
					<li id="volup" class="myButton-${template}"><a href="#" title="volup"></a></li>
					<li id="play" class="myButton-${template}"><a href="#" title="play"></a></li>
					<li id="voldown" class="myButton-${template}"><a href="#" title="voldown"></a></li>			
				</ul>
			</div>	
		</div>

`;
}
