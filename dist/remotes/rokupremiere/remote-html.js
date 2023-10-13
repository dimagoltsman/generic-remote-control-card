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
	padding: 20px;
	font-family: "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif
}

.container {
	width: 220px;
	margin: 0 auto
}

#remote-control-rokupremiere {
	position: relative;
	background: url(${base_url}/rokupremiere.png?1) no-repeat;
	width: 191px;
	height: 578px
}

#remote-control-rokupremiere h2,
#remote-control-rokupremiere span {
	position: absolute;
	left: 200px
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
    left: 30px;
    top: 269px;
    width: 35px;
    height: 35px;	
	background: url(${base_url}/rewind.png?1) no-repeat
}

#remote-control-rokupremiere li#forward a {
    left: 129px;
    top: 267px;
    width: 30px;
    height: 39px;	
	background: url(${base_url}/forward.png?1) no-repeat
}

#remote-control-rokupremiere li#playpause a {
    left: 68px;
    top: 269px;
    width: 58px;
    height: 38px;	
	background: url(${base_url}/playpause.png?1) no-repeat
}

#remote-control-rokupremiere li#left a {
	left: 51px;
    top: 159px;
    width: 19px;
    height: 21px;	
	background: url(${base_url}/left.png?1) no-repeat
}

#remote-control-rokupremiere li#right a {
    left: 125px;
    top: 159px;
    width: 18px;
    height: 22px;	
	background: url(${base_url}/right.png?1) no-repeat
}

#remote-control-rokupremiere li#up a {
    left: 86px;
    top: 121px;
    width: 22px;
    height: 21px;	
	background: url(${base_url}/up.png?1) no-repeat
}

#remote-control-rokupremiere li#down a {
    left: 87px;
    top: 195px;
    width: 21px;
    height: 19px;	
	background: url(${base_url}/down.png?1) no-repeat
}

#remote-control-rokupremiere li#ok a {
    left: 85px;
    top: 161px;
    width: 25px;
    height: 19px;	
	background: url(${base_url}/ok.png?1) no-repeat
}

#remote-control-rokupremiere li#asterisk a {
    left: 99px;
    top: 235px;
    width: 57px;
    height: 30px;	
	background: url(${base_url}/asterisk.png?1) no-repeat
}

#remote-control-rokupremiere li#rakuten a {
    left: 35px;
    top: 354px;
    width: 62px;
    height: 40px;	
	background: url(${base_url}/rakuten.png?1) no-repeat
}

#remote-control-rokupremiere li#spotify a {
    left: 96px;
    top: 354px;
    width: 62px;
    height: 40px;	
	background: url(${base_url}/spotify.png?1) no-repeat
}

#remote-control-rokupremiere li#googleplay a {
	left: 96px;
	top: 316px;
    width: 62px;
    height: 40px;	
	background: url(${base_url}/googleplay.png?1) no-repeat 0 0px
}

#remote-control-rokupremiere li#netflix a {
	left: 34px;
	top: 316px;
    width: 62px;
    height: 40px;	
	background: url(${base_url}/netflix.png?1) no-repeat 0 0px
}

#remote-control-rokupremiere li#leftarrow a {
    left: 27px;
    top: 63px;
    width: 70px;
    height: 40px;	
	background: url(${base_url}/leftarrow.png?1) no-repeat
}

#remote-control-rokupremiere li#home a {
    left: 96px;
    top: 63px;
    width: 66px;
    height: 40px;	
	background: url(${base_url}/home.png?1) no-repeat
}

#remote-control-rokupremiere li#replay a {
    left: 34px;
    top: 234px;
    width: 62px;
    height: 29px;	
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
				<h2>
					Main navigation
				</h2>
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
