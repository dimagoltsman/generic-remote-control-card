function getRemoteStyle_mibox(config) {
   
   const template = config.remote_template;
   const base_url = `/local/content-card-remote-control/${template}`;    
    
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

#remote-control-mibox {
	position: relative;
	background: url(${base_url}/remote-back.png) no-repeat;
	width: 153px;
	height: 608px
}

#remote-control-mibox h2,
#remote-control-mibox span {
	position: absolute;
	left: -5000px
}

#remote-control-mibox ul {
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
#microphone a,
#info a,
#home a,
#back a,
#top a,
#bottom a,
#ok a {
	position: absolute;
	display: block
}

#remote-control-mibox li#power a {
	left: 17px;
	top: 37px;
	width: 29px;
	height: 30px;
	background: url(${base_url}/power.png) no-repeat
}

#remote-control-mibox li#power a:hover {
	background-image: url(${base_url}/power_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-mibox li#microphone a {
	left: 119px;
	top: 250px;
	width: 28px;
	height: 29px;
	background: url(${base_url}/microphone.png) no-repeat
}

#remote-control-mibox li#microphone a:hover {
	background-image: url(${base_url}/microphone_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-mibox li#volumeup a {
	left: 69px;
	top: 299px;
	width: 29px;
	height: 30px;
	background: url(${base_url}/volume.png) no-repeat
}

#remote-control-mibox li#volumeup a:hover {
	background-image: url(${base_url}/volume_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-mibox li#volumedown a {
	left: 69px;
	top: 359px;
	width: 29px;
	height: 30px;
	background: url(${base_url}/volumedown.png) no-repeat
}

#remote-control-mibox li#volumedown a:hover {
	background-image: url(${base_url}/volumedown_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-mibox li#clickleft a {
	left: 21px;
	top: 137px;
	width: 29px;
	height: 29px;
	background: url(${base_url}/clickleft.png) no-repeat
}

#remote-control-mibox li#clickleft a:hover {
	background-image: url(${base_url}/clickleft_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-mibox li#clickright a {
	left: 116px;
	top: 138px;
	width: 29px;
	height: 29px;
	background: url(${base_url}/clickright.png) no-repeat
}

#remote-control-mibox li#clickright a:hover {
	background-image: url(${base_url}/clickright_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-mibox li#source a:hover {
	background-image: url(${base_url}/remote-sitemap.jpg);
	background-repeat: no-repeat;
	background-position: 0 -37px
}


#remote-control-mibox li#home a {
	width: 29px;
	height: 30px;
	left: 69px;
	top: 248px;
	background: url(${base_url}/home.png) no-repeat 0px 0
}



#remote-control-mibox li#back a {
	width: 28px;
	height: 29px;	
	left: 17px;	
	top: 249px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-mibox li#right a {
	width: 23px;
	height: 59px;
	left: 139px;
	top: 365px;
	background: url(${base_url}/remote-circle3.png) no-repeat -98px -53px
}

#remote-control-mibox li#top a {
	width: 29px;
	height: 29px;
	left: 69px;
	top: 93px;
	background: url(${base_url}/top.png) no-repeat 0px 0px
}

#remote-control-mibox li#bottom a {
	width: 29px;
	height: 29px;
	left: 68px;
	top: 190px;
	background: url(${base_url}/bottom.png) no-repeat 0px 0px
}

#remote-control-mibox li#ok a {
	width: 29px;
	height: 29px;
	left: 68px;
	top: 141px;
	background: url(${base_url}/ok.png) no-repeat 0px 0px
}


#remote-control-mibox li#home a:hover {
	background: url(${base_url}/home_over.png) no-repeat 0px 0px
}

#remote-control-mibox li#back a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}


#remote-control-mibox li#top a:hover {
	background: url(${base_url}/top_over.png) no-repeat 0px 0px
}

#remote-control-mibox li#bottom a:hover {
	background: url(${base_url}/bottom_over.png) no-repeat 0px 0px
}

#remote-control-mibox li#ok a:hover {
	background: url(${base_url}/ok_over.png) no-repeat 0px 0px
}
    
  `;
}

function getRemoteHtml_mibox(config){
 const template = config.remote_template;
 return `
    
 <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-mibox">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton-${template}"><a href="#" title="Power"><span>Power</span></a></li>
					<li id="microphone" class="myButton-${template}"><a href="#" title="microphone"><span>microphone</span></a></li>
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