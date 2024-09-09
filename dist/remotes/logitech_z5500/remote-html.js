function getRemoteStyle_logitech_z5500(config) {
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

#remote-control-logitech_z5500 {
	position: relative;
	background: url(${base_url}/base.png) no-repeat;
	width: 269px;
	height: 694px;
	margin: auto;
}

#remote-control-logitech_z5500 h2,
#remote-control-logitech_z5500 span {
	position: absolute;
	left: 5000px
}

#remote-control-logitech_z5500 ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#test a,
#power a,
#direct a,
#optical a,
#coax a,
#effect a,
#settings a,
#sub_plus a,
#surround_plus a,
#sub_minus a,
#mute a,
#center_plus a,
#center_minus a,
#surround_minus a,
#volume_plus a,
#volume_minus a {
	position: absolute;
	display: block
}

#remote-control-logitech_z5500 li#test a {
    left: 44px;
    top: 81px;
    width: 40px;
    height: 40px;	
	background: url(${base_url}/test.png) no-repeat
}



#remote-control-logitech_z5500 li#power a {
    left: 184px;
    top: 85px;
    width: 52px;
    height: 34px;	
	background: url(${base_url}/power.png) no-repeat
}

#remote-control-logitech_z5500 li#direct a {
    left: 46px;
    top: 143px;
    width: 40px;
    height: 40px;	
	background: url(${base_url}/direct.png) no-repeat
}

#remote-control-logitech_z5500 li#optical a {
    left: 120px;
    top: 143px;
    width: 40px;
    height: 40px;	
	background: url(${base_url}/optical.png) no-repeat
}

#remote-control-logitech_z5500 li#coax a {
    left: 194px;
    top: 143px;
    width: 40px;
    height: 40px;	
	background: url(${base_url}/coax.png) no-repeat
}


#remote-control-logitech_z5500 li#effect a {
    left: 120px;
    top: 202px;
    width: 40px;
    height: 40px;	
	background: url(${base_url}/effect.png) no-repeat
}

#remote-control-logitech_z5500 li#settings a {
    left: 194px;
    top: 202px;
    width: 40px;
    height: 40px;	
	background: url(${base_url}/settings.png) no-repeat
}

#remote-control-logitech_z5500 li#sub_plus a {
    left: 39px;
    top: 259px;
    width: 45px;
    height: 20px;	
	background: url(${base_url}/sub_plus.png) no-repeat
}

#remote-control-logitech_z5500 li#center_plus a {
    left: 115px;
    top: 259px;
    width: 45px;
    height: 20px;		
	background: url(${base_url}/center_plus.png) no-repeat
}

#remote-control-logitech_z5500 li#surround_plus a {
    left: 187px;
    top: 259px;
    width: 45px;
    height: 20px;	;	
	background: url(${base_url}/surround_plus.png) no-repeat
}

#remote-control-logitech_z5500 li#sub_minus a {
    left: 39px;
    top: 301px;
    width: 45px;
    height: 20px;		
	background: url(${base_url}/sub_minus.png) no-repeat
}

#remote-control-logitech_z5500 li#center_minus a {
    left: 115px;
    top: 301px;
    width: 45px;
    height: 20px;		
	background: url(${base_url}/center_minus.png) no-repeat
}

#remote-control-logitech_z5500 li#surround_minus a {
    left: 187px;
    top: 301px;
    width: 45px;
    height: 20px;		
	background: url(${base_url}/surround_minus.png) no-repeat
}

#remote-control-logitech_z5500 li#mute a {
    left: 39px;
    top: 404px;
    width: 45px;
    height: 20px;		
	background: url(${base_url}/mute.png) no-repeat
}

#remote-control-logitech_z5500 li#volume_plus a {
    left: 96px;
    top: 334px;
    width: 77px;
    height: 37px;		
	background: url(${base_url}/volume_plus.png) no-repeat
}

#remote-control-logitech_z5500 li#volume_minus a {
    left: 96px;
    top: 394px;
    width: 76px;
    height: 38px;		
	background: url(${base_url}/volume_minus.png) no-repeat
}

#remote-control-logitech_z5500 li#test a:hover {
	background: url(${base_url}/test_over.png) no-repeat 0px 0px
}


#remote-control-logitech_z5500 li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}

#remote-control-logitech_z5500 li#direct a:hover {
	background: url(${base_url}/direct_over.png) no-repeat 0px 0px
}

#remote-control-logitech_z5500 li#optical a:hover {
	background: url(${base_url}/optical_over.png) no-repeat 0px 0px
}

#remote-control-logitech_z5500 li#coax a:hover {
	background: url(${base_url}/coax_over.png) no-repeat 0px 0px
}  


#remote-control-logitech_z5500 li#effect a:hover {
	background: url(${base_url}/effect_over.png) no-repeat 0px 0px
}  

#remote-control-logitech_z5500 li#settings a:hover {
	background: url(${base_url}/settings_over.png) no-repeat 0px 0px
}

#remote-control-logitech_z5500 li#sub_plus a:hover {
	background: url(${base_url}/sub_plus_over.png) no-repeat 0px 0px
}

#remote-control-logitech_z5500 li#surround_plus a:hover {
	background: url(${base_url}/surround_plus_over.png) no-repeat 0px 0px
}  

#remote-control-logitech_z5500 li#sub_minus a:hover {
	background: url(${base_url}/sub_minus_over.png) no-repeat 0px 0px
}  

#remote-control-logitech_z5500 li#center_minus a:hover {
	background: url(${base_url}/center_minus_over.png) no-repeat 0px 0px
}

#remote-control-logitech_z5500 li#center_plus a:hover {
	background: url(${base_url}/center_plus_over.png) no-repeat 0px 0px
}

#remote-control-logitech_z5500 li#surround_minus a:hover {
	background: url(${base_url}/surround_minus_over.png) no-repeat 0px 0px
}

#remote-control-logitech_z5500 li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}

#remote-control-logitech_z5500 li#volume_plus a:hover {
	background: url(${base_url}/volume_plus_over.png) no-repeat 0px 0px
}

#remote-control-logitech_z5500 li#volume_minus a:hover {
	background: url(${base_url}/volume_minus_over.png) no-repeat 0px 0px
}

  `;
}

function getRemoteHtml_logitech_z5500(config){
 const template = config.remote_template;
 return `

 <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-logitech_z5500">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="test" class="myButton-${template}"><a href="#" title="test"><span>test</span></a></li>
					<li id="power" class="myButton-${template}"><a href="#" title="power"><span>power</span></a></li>
					<li id="direct" class="myButton-${template}"><a href="#" title="direct"><span>direct</span></a></li>
					<li id="optical" class="myButton-${template}"><a href="#" title="Optical"><span>Optical</span></a></li>
					<li id="coax" class="myButton-${template}"><a href="#" title="coax"><span>coax</span></a></li>
					<li id="settings" class="myButton-${template}"><a href="#" title="settings"><span>settings</span></a></li>
					<li id="effect" class="myButton-${template}"><a href="#" title="effect"><span>effect</span></a></li>
					<li id="sub_plus" class="myButton-${template}"><a href="#" title="sub_plus"><span>sub_plus</span></a></li>
					<li id="surround_plus" class="myButton-${template}"><a href="#" title="surround_plus"><span>surround_plus</span></a></li>
					<li id="sub_minus" class="myButton-${template}"><a href="#" title="sub_minus"><span>sub_minus</span></a></li>
					<li id="center_plus" class="myButton-${template}"><a href="#" title="center_plus"><span>center_plus</span></a></li>
					<li id="center_minus" class="myButton-${template}"><a href="#" title="center_minus"><span>center_minus</span></a></li>
					<li id="surround_minus" class="myButton-${template}"><a href="#" title="surround_minus"><span>surround_minus</span></a></li>					
					<li id="mute" class="myButton-${template}"><a href="#" title="mute"><span>mute</span></a></li>
					<li id="volume_plus" class="myButton-${template}"><a href="#" title="volume_plus"><span>volume_plus</span></a></li>
					<li id="volume_minus" class="myButton-${template}"><a href="#" title="volume_minus"><span>volume_minus</span></a></li>


				</ul>
			</div>	
		</div>

`;
}
