function getRemoteStyle_edifier_rc600a(config) {
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
	width: 492px;
	margin: 0 auto
}

#remote-control-edifier_rc600a {
	position: relative;
	background: url(${base_url}/remote-background.png) no-repeat;
	width: 492px;
	height: 517px
}

#remote-control-edifier_rc600a h2,
#remote-control-edifier_rc600a span {
	position: absolute;
	left: -5000px
}

#remote-control-edifier_rc600a div {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#power a,
#opt a,
#pc a,
#cox a,
#aux a,
#bluetooth a,
#volumeup a,
#volumedown a,
#previous a,
#next a,
#play a {
	position: absolute;
	display: block
}

#remote-control-edifier_rc600a div#power a {
	left: 234px;
	bottom: 396px;
	width: 17px;
	height: 20px;
	background: url(${base_url}/btn-power.png) no-repeat
}

#remote-control-edifier_rc600a div#power a:hover {
	background-image: url(${base_url}/btn-power_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-edifier_rc600a div#opt a {
	left: 105px;
	bottom: 296px;
	width: 27px;
	height: 38px;
	background: url(${base_url}/btn-opt.png) no-repeat
}

#remote-control-edifier_rc600a div#opt a:hover {
	background-image: url(${base_url}/btn-opt_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-edifier_rc600a div#pc a {
	left: 358px;
	bottom: 305px;
	width: 22px;
	height: 27px;
	background: url(${base_url}/btn-pc.png) no-repeat
}

#remote-control-edifier_rc600a div#pc a:hover {
	background-image: url(${base_url}/btn-pc_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-edifier_rc600a div#cox a {
	left: 107px;
	bottom: 188px;
	width: 25px;
	height: 40px;
	background: url(${base_url}/btn-cox.png) no-repeat
}

#remote-control-edifier_rc600a div#cox a:hover {
	background-image: url(${base_url}/btn-cox_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-edifier_rc600a div#aux a {
	left: 357px;
	bottom: 190px;
	width: 25px;
	height: 41px;
	background: url(${base_url}/btn-aux.png) no-repeat
}

#remote-control-edifier_rc600a div#aux a:hover {
	background-image: url(${base_url}/btn-aux_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-edifier_rc600a div#bluetooth a {
	left: 237px;
	bottom: 114px;
	width: 15px;
	height: 20px;
	background: url(${base_url}/btn-bluetooth.png) no-repeat
}

#remote-control-edifier_rc600a div#bluetooth a:hover {
	background-image: url(${base_url}/btn-bluetooth_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-edifier_rc600a div#volumeup a {
	left: 233px;
	bottom: 326px;
	width: 21px;
	height: 21px;
	background: url(${base_url}/btn-vol-up.png) no-repeat
}

#remote-control-edifier_rc600a div#volumeup a:hover {
	background-image: url(${base_url}/btn-vol-up_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-edifier_rc600a div#volumedown a {
	left: 234px;	
	bottom: 187px;
	width: 20px;
	height: 7px;	
	background: url(${base_url}/btn-vol-down.png) no-repeat
}

#remote-control-edifier_rc600a div#volumedown a:hover {
	background-image: url(${base_url}/btn-vol-down_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-edifier_rc600a div#previous a {
	left: 160px;
	bottom: 253px;
	width: 27px;
	height: 18px;
	background: url(${base_url}/btn-previous.png) no-repeat
}

#remote-control-edifier_rc600a div#previous a:hover {
	background-image: url(${base_url}/btn-previous_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-edifier_rc600a div#next a {
	left: 300px;
	bottom: 255px;
	width: 27px;
	height: 18px;
	background: url(${base_url}/btn-next.png) no-repeat
}

#remote-control-edifier_rc600a div#next a:hover {
	background-image: url(${base_url}/btn-next_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-edifier_rc600a div#play a {
	left: 232px;
	bottom: 255px;
	width: 23px;
	height: 18px;
	background: url(${base_url}/btn-play.png) no-repeat
}

#remote-control-edifier_rc600a div#play a:hover {
	background-image: url(${base_url}/btn-play_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}
  `;
}

function getRemoteHtml_edifier_rc600a(config){
 const template = config.remote_template;
 return `
	<div class="container">
		<div style="text-align:center">
		<h1>${config.name}</h1>
		</div>
		<div id="remote-control-edifier_rc600a">
			<h2>
				Main navigation
			</h2>
			<div id="power" class="myButton-${template}"><a href="#" title="Power"><span>Power</span></a></div>
			<div id="opt" class="myButton-${template}"><a href="#" title="OPT"><span>OPT</span></a></div>
			<div id="pc" class="myButton-${template}"><a href="#" title="PC"><span>PC</span></a></div>
			<div id="cox" class="myButton-${template}"><a href="#" title="COX"><span>COX</span></a></div>
			<div id="aux" class="myButton-${template}"><a href="#" title="AUX"><span>AUX</span></a></div>
			<div id="bluetooth" class="myButton-${template}"><a href="#" title="Bluetooth"><span>Bluetooth</span></a></div>
			
			<div id="volumeup" class="myButton-${template}"><a href="#" title="Volume Up"><span>Volume Up</span></a></div>
			<div id="volumedown" class="myButton-${template}"><a href="#" title="Volume Down"><span>Volume Down</span></a></div>
			<div id="previous" class="myButton-${template}"><a href="#" title="Previous"><span>Previous</span></a></div>
			<div id="next" class="myButton-${template}"><a href="#" title="Next"><span>Next</span></a></div>
			
			<div id="play" class="myButton-${template}"><a href="#" title="Play"><span>Play</span></a></div>
		</div>
	</div>
`;
}