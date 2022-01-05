function getRemoteStyle_infocus_ir1109r1(config) {
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
	width: 215px;
	margin: 0 auto
}

#remote-control-infocus_ir1109r1 {
	position: relative;
	background: url(${base_url}/remote-background.png) no-repeat;
	width: 215px;
	height: 717px
}

#remote-control-infocus_ir1109r1 h2,
#remote-control-infocus_ir1109r1 span {
	position: absolute;
	left: -5000px
}

#remote-control-infocus_ir1109r1 div {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#avmute a,
#power a,
#resync a,
#source a,
#up a,
#left a,
#enter a,
#right a,
#down a,
#menu a,
#eco a,
#keystoneup a,
#keystonedown a,
#volumeup a,
#volumedown a,
#one a,
#two a,
#three a,
#four a,
#five a,
#six a,
#seven a,
#eight a,
#nine a,
#mouse a,
#zero a,
#mute a {
	position: absolute;
	display: block
}

#remote-control-infocus_ir1109r1 div#avmute a {
	left: 39px;
	bottom: 661px;
	width: 45px;
	height: 12px;
	background: url(${base_url}/btn-av-mute.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#avmute a:hover {
	background-image: url(${base_url}/btn-av-mute_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#power a {
	left: 139px;
	bottom: 655px;
	width: 21px;
	height: 25px;
	background: url(${base_url}/btn-power.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#power a:hover {
	background-image: url(${base_url}/btn-power_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#resync a {
	left: 19px;
	bottom: 584px;
	width: 34px;
	height: 36px;
	background: none
}

#remote-control-infocus_ir1109r1 div#resync a:hover {
	background-image: url(${base_url}/btn-re-sync_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#source a {
	left: 157px;
	bottom: 585px;
	width: 34px;
	height: 36px;
	background: none
}

#remote-control-infocus_ir1109r1 div#source a:hover {
	background-image: url(${base_url}/btn-source_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-infocus_ir1109r1 div#up a {
	left: 98px;
	bottom: 593px;
	width: 17px;
	height: 17px;
	background: url(${base_url}/btn-up.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#up a:hover {
	background-image: url(${base_url}/btn-up_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#left a {
	left: 27px;
	bottom: 523px;
	width: 17px;
	height: 17px;
	background: url(${base_url}/btn-left.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#left a:hover {
	background-image: url(${base_url}/btn-left_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-infocus_ir1109r1 div#enter a {
	left: 90px;
	bottom: 526px;
	width: 31px;
	height: 12px;
	background: url(${base_url}/btn-enter.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#enter a:hover {
	background-image: url(${base_url}/btn-enter_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#right a {
	left: 168px;
	bottom: 525px;
	width: 17px;
	height: 17px;
	background: url(${base_url}/btn-right.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#right a:hover {
	background-image: url(${base_url}/btn-right_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#down a {
	left: 97px;	
	bottom: 456px;
	width: 17px;
	height: 17px;	
	background: url(${base_url}/btn-down.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#down a:hover {
	background-image: url(${base_url}/btn-down_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#menu a {
	left: 22px;
	bottom: 446px;
	width: 30px;
	height: 12px;
	background: url(${base_url}/btn-menu.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#menu a:hover {
	background-image: url(${base_url}/btn-menu_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#eco a {
	left: 163px;
	bottom: 447px;
	width: 27px;
	height: 12px;
	background: url(${base_url}/btn-eco.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#eco a:hover {
	background-image: url(${base_url}/btn-eco_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#keystoneup a {
	left: 50px;
	bottom: 385px;
	width: 24px;
	height: 24px;
	background: url(${base_url}/btn-plus.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#keystoneup a:hover {
	background-image: url(${base_url}/btn-plus_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#keystonedown a {
	left: 51px;
	bottom: 326px;
	width: 21px;
	height: 7px;
	background: url(${base_url}/btn-minus.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#keystonedown a:hover {
	background-image: url(${base_url}/btn-minus_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}
#remote-control-infocus_ir1109r1 div#volumeup a {
	left: 139px;
	bottom: 385px;
	width: 24px;
	height: 24px;
	background: url(${base_url}/btn-plus.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#volumeup a:hover {
	background-image: url(${base_url}/btn-plus_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#volumedown a {
	left: 140px;
	bottom: 326px;
	width: 21px;
	height: 7px;
	background: url(${base_url}/btn-minus.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#volumedown a:hover {
	background-image: url(${base_url}/btn-minus_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#one a {
	left: 42px;
	bottom: 254px;
	width: 6px;
	height: 11px;
	background: url(${base_url}/btn-one.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#one a:hover {
	background-image: url(${base_url}/btn-one_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#two a {
	left: 102px;
	bottom: 253px;
	width: 8px;
	height: 10px;
	background: url(${base_url}/btn-two.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#two a:hover {
	background-image: url(${base_url}/btn-two_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-infocus_ir1109r1 div#three a {
	left: 162px;
	bottom: 253px;
	width: 8px;
	height: 11px;
	background: url(${base_url}/btn-three.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#three a:hover {
	background-image: url(${base_url}/btn-three_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-infocus_ir1109r1 div#four a {
	left: 35px;
	bottom: 206px;
	width: 21px;
	height: 12px;
	background: url(${base_url}/btn-four.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#four a:hover {
	background-image: url(${base_url}/btn-four_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-infocus_ir1109r1 div#five a {
	left: 101px;
	bottom: 206px;
	width: 9px;
	height: 12px;
	background: url(${base_url}/btn-five.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#five a:hover {
	background-image: url(${base_url}/btn-five_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-infocus_ir1109r1 div#six a {
	left: 154px;
	bottom: 206px;
	width: 25px;
	height: 12px;
	background: url(${base_url}/btn-six.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#six a:hover {
	background-image: url(${base_url}/btn-six_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-infocus_ir1109r1 div#seven a {
	left: 34px;
	bottom: 160px;
	width: 21px;
	height: 12px;
	background: url(${base_url}/btn-seven.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#seven a:hover {
	background-image: url(${base_url}/btn-seven_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-infocus_ir1109r1 div#eight a {
	left: 102px;
	bottom: 160px;
	width: 9px;
	height: 12px;
	background: url(${base_url}/btn-eight.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#eight a:hover {
	background-image: url(${base_url}/btn-eight_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-infocus_ir1109r1 div#nine a {
	left: 155px;
	bottom: 160px;
	width: 21px;
	height: 12px;
	background: url(${base_url}/btn-nine.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#nine a:hover {
	background-image: url(${base_url}/btn-nine_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-infocus_ir1109r1 div#mouse a {
	left: 28px;
	bottom: 106px;
	width: 36px;
	height: 28px;
	background: none
}

#remote-control-infocus_ir1109r1 div#mouse a:hover {
	background-image: url(${base_url}/btn-over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-infocus_ir1109r1 div#zero a {
	left: 102px;
	bottom: 114px;
	width: 9px;
	height: 12px;
	background: url(${base_url}/btn-zero.png) no-repeat
}

#remote-control-infocus_ir1109r1 div#zero a:hover {
	background-image: url(${base_url}/btn-zero_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-infocus_ir1109r1 div#mute a {
	left: 148px;
	bottom: 106px;
	width: 36px;
	height: 28px;
	background: none
}

#remote-control-infocus_ir1109r1 div#mute a:hover {
	background-image: url(${base_url}/btn-over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

  
  
  `;
}

function getRemoteHtml_infocus_ir1109r1(config){
 const template = config.remote_template;
 return `
	<div class="container">
		<div style="text-align:center">
		<h1>${config.name}</h1>
		</div>
		<div id="remote-control-infocus_ir1109r1">
			<h2>
				Main navigation
			</h2>
			<div id="avmute" class="myButton-${template}"><a href="#" title="AV Mute"><span>AV Mute</span></a></div>
			<div id="power" class="myButton-${template}"><a href="#" title="Power"><span>Power</span></a></div>
			
			<div id="resync" class="myButton-${template}"><a href="#" title="Re-Sync"><span>Re-Sync</span></a></div>
			<div id="source" class="myButton-${template}"><a href="#" title="Source"><span>Source</span></a></div>
			
			<div id="up" class="myButton-${template}"><a href="#" title="Up"><span>Up</span></a></div>
			<div id="left" class="myButton-${template}"><a href="#" title="Left"><span>Left</span></a></div>
			<div id="enter" class="myButton-${template}"><a href="#" title="Enter"><span>Enter</span></a></div>
			<div id="right" class="myButton-${template}"><a href="#" title="Right"><span>Right</span></a></div>
			<div id="down" class="myButton-${template}"><a href="#" title="Down"><span>Down</span></a></div>
			
			<div id="menu" class="myButton-${template}"><a href="#" title="Menu"><span>Menu</span></a></div>
			<div id="eco" class="myButton-${template}"><a href="#" title="ECO"><span>ECO</span></a></div>
			
			<div id="keystoneup" class="myButton-${template}"><a href="#" title="Keystone Up"><span>Keystone Up</span></a></div>
			<div id="keystonedown" class="myButton-${template}"><a href="#" title="Keystone Down"><span>Keystone Down</span></a></div>
			<div id="volumeup" class="myButton-${template}"><a href="#" title="Volume Up"><span>Volume Up</span></a></div>
			<div id="volumedown" class="myButton-${template}"><a href="#" title="Volume Down"><span>Volume Down</span></a></div>
			
			<div id="one" class="myButton-${template}"><a href="#" title="1/VGA"><span>1/VGA</span></a></div>
			<div id="two" class="myButton-${template}"><a href="#" title="2/Video"><span>2/Video</span></a></div>
			<div id="three" class="myButton-${template}"><a href="#" title="3/HDMI"><span>3/HDMI</span></a></div>
			<div id="four" class="myButton-${template}"><a href="#" title="4/Page Up"><span>4/Page Up</span></a></div>
			<div id="five" class="myButton-${template}"><a href="#" title="5/Aspect"><span>5/Aspect</span></a></div>
			<div id="six" class="myButton-${template}"><a href="#" title="6/Zoom Up"><span>6/Zoom Up</span></a></div>
			<div id="seven" class="myButton-${template}"><a href="#" title="7/Page Down"><span>7/Page Down</span></a></div>
			<div id="eight" class="myButton-${template}"><a href="#" title="8/Freeze"><span>8/Freeze</span></a></div>
			<div id="nine" class="myButton-${template}"><a href="#" title="9/Zoom Down"><span>9/Zoom Down</span></a></div>
			<div id="mouse" class="myButton-${template}"><a href="#" title="Mouse"><span>Mouse</span></a></div>
			<div id="zero" class="myButton-${template}"><a href="#" title="0/Picture"><span>0/Picture</span></a></div>
			<div id="mute" class="myButton-${template}"><a href="#" title="Mute"><span>Mute</span></a></div>
			
		</div>
	</div>
`;
}
