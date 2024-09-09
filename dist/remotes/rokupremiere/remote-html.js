function getRemoteStyle_rokupremiere(config) {
   const template = config.remote_template;
   const base_url = `/hacsfiles/generic-remote-control-card/remotes/${template}`;
   
  return `
    ha-card{
    	background-color:transparent;
    	box-shadow:var(--paper-material-elevation-0_-_box-shadow);
    }
    body {
	margin: 0;
	padding: 0px;
	font-family: "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif
}

.container {
	width: 242px;
	margin: 0 auto
}

#remote-control-rokupremiere {
	position: relative;
	background: url(${base_url}/rokupremiere.png?1) no-repeat;
	width: 242px;
	height: 720px
}

#remote-control-rokupremiere ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#forward a,
#rewind a,
#playpause a,
#left a,
#right a,
#up a,
#down a,
#ok a,
#asterisk a,
#rakuten a,
#spotify a,
#text a,
#googleplay a,
#netflix a,
#leftarrow a,
#home a,
#replay a {
	position: absolute;
	display: block
}

#remote-control-rokupremiere li#rewind a {
    left: 54px;
    top: 369px;
    width: 30px;
    height: 18px;	
	background: url(${base_url}/rewind.png?1) no-repeat
}

#remote-control-rokupremiere li#forward a {
    left: 157px;
    top: 369px;
    width: 30px;
    height: 18px;	
	background: url(${base_url}/forward.png?1) no-repeat
}

#remote-control-rokupremiere li#playpause a {
    left: 109px;
    top: 370px;
    width: 24px;
    height: 18px;	
	background: url(${base_url}/playpause.png?1) no-repeat
}

#remote-control-rokupremiere li#left a {
	left: 54px;
    top: 207px;
    width: 24px;
    height: 27px;	
	background: url(${base_url}/left.png?1) no-repeat
}

#remote-control-rokupremiere li#right a {
    left: 157px;
    top: 207px;
    width: 24px;
    height: 27px;	
	background: url(${base_url}/right.png?1) no-repeat
}

#remote-control-rokupremiere li#up a {
    left: 102px;
    top: 162px;
    width: 37px;
    height: 18px;	
	background: url(${base_url}/up.png?1) no-repeat
}

#remote-control-rokupremiere li#down a {
    left: 102px;
    top: 261px;
    width: 37px;
    height: 18px;	
	background: url(${base_url}/down.png?1) no-repeat
}

#remote-control-rokupremiere li#ok a {
    left: 102px;
    top: 207px;
    width: 37px;
    height: 27px;	
	background: url(${base_url}/ok.png?1) no-repeat
}

#remote-control-rokupremiere li#asterisk a {
    left: 145px;
    top: 315px;
    width: 30px;
    height: 27px;	
	background: url(${base_url}/asterisk.png?1) no-repeat
}

#remote-control-rokupremiere li#rakuten a {
    left: 48px;
    top: 483px;
    width: 64px;
    height: 33px;	
	background: url(${base_url}/rakuten.png?1) no-repeat
}

#remote-control-rokupremiere li#spotify a {
    left: 127px;
    top: 483px;
    width: 64px;
    height: 32px;	
	background: url(${base_url}/spotify.png?1) no-repeat
}

#remote-control-rokupremiere li#googleplay a {
	left: 127px;
	top: 434px;
    width: 65px;
    height: 34px;	
	background: url(${base_url}/googleplay.png?1) no-repeat 0 0px
}

#remote-control-rokupremiere li#netflix a {
	left: 48px;
	top: 434px;
    width: 64px;
    height: 34px;	
	background: url(${base_url}/netflix.png?1) no-repeat 0 0px
}

#remote-control-rokupremiere li#leftarrow a {
    left: 66px;
    top: 99px;
    width: 30px;
    height: 27px;	
	background: url(${base_url}/leftarrow.png?1) no-repeat
}

#remote-control-rokupremiere li#home a {
    left: 145px;
    top: 99px;
    width: 30px;
    height: 27px;	
	background: url(${base_url}/home.png?1) no-repeat
}

#remote-control-rokupremiere li#replay a {
    left: 67px;
    top: 315px;
    width: 30px;
    height: 27px;	
	background: url(${base_url}/replay.png?1) no-repeat
}



#remote-control-rokupremiere li#playpause a:hover {
	background: url(${base_url}/playpause_over.png?1) no-repeat 0px 0px
}  

#remote-control-rokupremiere li#rewind a:hover {
	background: url(${base_url}/rewind_over.png?1) no-repeat 0px 0px
}  

#remote-control-rokupremiere li#forward a:hover {
	background: url(${base_url}/forward_over.png?1) no-repeat 0px 0px
}  

#remote-control-rokupremiere li#left a:hover {
	background: url(${base_url}/left_over.png?1) no-repeat 0px 0px
}  

#remote-control-rokupremiere li#right a:hover {
	background: url(${base_url}/right_over.png?1) no-repeat 0px 0px
}  

#remote-control-rokupremiere li#up a:hover {
	background: url(${base_url}/up_over.png?1) no-repeat 0px 0px
}  

#remote-control-rokupremiere li#down a:hover {
	background: url(${base_url}/down_over.png?1) no-repeat 0px 0px
}  

#remote-control-rokupremiere li#ok a:hover {
	background: url(${base_url}/ok_over.png?1) no-repeat 0px 0px
}  

#remote-control-rokupremiere li#asterisk a:hover {
	background: url(${base_url}/asterisk_over.png?1) no-repeat 0px 0px
}  

#remote-control-rokupremiere li#rakuten a:hover {
	background: url(${base_url}/rakuten_over.png?1) no-repeat 0px 0px
}  

#remote-control-rokupremiere li#spotify a:hover {
	background: url(${base_url}/spotify_over.png?1) no-repeat 0px 0px
}  

#remote-control-rokupremiere li#googleplay a:hover {
	background: url(${base_url}/googleplay_over.png?1) no-repeat 0 0px
}

#remote-control-rokupremiere li#netflix a:hover {
	background: url(${base_url}/netflix_over.png?1) no-repeat 0 0px
}

#remote-control-rokupremiere li#leftarrow a:hover {
	background: url(${base_url}/leftarrow_over.png?1) no-repeat 0 0px
}

#remote-control-rokupremiere li#home a:hover {
	background: url(${base_url}/home_over.png?1) no-repeat 0 0px
}

#remote-control-rokupremiere li#replay a:hover {
	background: url(${base_url}/replay_over.png?1) no-repeat 0 0px
}

#remote-control-rokupremiere li#tv a:hover {
	background: url(${base_url}/tv_over.png?1) no-repeat 0px 0px
}
  `;

}

function getRemoteHtml_rokupremiere(config){
 const template = config.remote_template;
 return `

 <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-rokupremiere">
				<ul>
					<li class="myButton-${template}" id="playpause"><a href="#" title="playpause"></a></li>
					<li class="myButton-${template}" id="rewind"><a href="#" title="rewind"></a></li>
					<li class="myButton-${template}" id="play"><a href="#" title="play"></a></li>
					<li class="myButton-${template}" id="forward"><a href="#" title="forward"></a></li>
					<li class="myButton-${template}" id="googleplay"><a href="#" title="googleplay"></a></li>
					<li class="myButton-${template}" id="netflix"><a href="#" title="netflix"></a></li>
					<li class="myButton-${template}" id="leftarrow"><a href="#" title="leftarrow"></a></li>
					<li class="myButton-${template}" id="home"><a href="#" title="home"></a></li>
					<li class="myButton-${template}" id="replay"><a href="#" title="replay"></a></li>
					<li class="myButton-${template}" id="asterisk"><a href="#" title="asterisk"></a></li>
					<li class="myButton-${template}" id="rakuten"><a href="#" title="rakuten"></a></li>
					<li class="myButton-${template}" id="spotify"><a href="#" title="spotify"></a></li>
					<li class="myButton-${template}" id="ok"><a href="#" title="ok"></a></li>
					<li class="myButton-${template}" id="left"><a href="#" title="left"></a></li>
					<li class="myButton-${template}" id="right"><a href="#" title="right"></a></li>
					<li class="myButton-${template}" id="up"><a href="#" title="up"></a></li>
					<li class="myButton-${template}" id="down"><a href="#" title="down"></a></li>
				</ul>
			</div>	
		</div>

`;
}
