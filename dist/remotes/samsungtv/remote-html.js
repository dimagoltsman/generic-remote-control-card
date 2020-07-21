function getRemoteStyle_samsungtv(config) {
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

#remote-control-samsungtv {
	position: relative;
	background: url(${base_url}/samsungtv_remote.png) no-repeat;
	width: 224px;
	height: 728px
}

#remote-control-samsungtv h2,
#remote-control-samsungtv span {
	position: absolute;
	left: 5000px
}

#remote-control-samsungtv ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#power a,
#samsungtv a,
#volmin a,
#volplus a,
#mute a,
#source a,
#one a,
#two a,
#three a,
#four a,
#five a,
#six a,
#seven a,
#eight a,
#nine a,
#zero a,
#lastch a,
#fastforward a,
#rewind a,
#play a,
#pause a,
#stop a,
#channelup a,
#channeldown a,
#menu a,
#back a,
#exit a,
#guide a,
#info a,
#left a,
#right a,
#top a,
#bottom a,
#ok a {
	position: absolute;
	display: block
}

#remote-control-samsungtv li#power a {
	left: 33px;
	top: 34px;
	width: 27px;
	height: 29px;
	background: url(${base_url}/power.png) no-repeat
}

#remote-control-samsungtv li#source a {
	left: 152px;
	top: 33px;
	width: 40px;
	height: 29px;
	background: url(${base_url}/source.png) no-repeat
}

#remote-control-samsungtv li#source a:hover {
	background-image: url(${base_url}/source_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-samsungtv li#one a {
	left: 42px;
	top: 92px;
	width: 10px;
	height: 21px;
	background: url(${base_url}/one.png) no-repeat 0 0px
}

#remote-control-samsungtv li#two a {
	left: 103px;
	top: 92px;
	width: 14px;
	height: 20px;
	background: url(${base_url}/two.png) no-repeat 0 0px
}

#remote-control-samsungtv li#three a {
	left: 166px;
	top: 91px;
	width: 14px;
	height: 21px;
	background: url(${base_url}/three.png) no-repeat 0 0px
}

#remote-control-samsungtv li#four a {
	width: 15px;
	height: 20px;
	left: 41px;
	top: 138px;
	background: url(${base_url}/four.png) no-repeat 0 0px
}

#remote-control-samsungtv li#five a {
	width: 14px;
	height: 21px;
	left: 104px;
	top: 137px;
	background: url(${base_url}/five.png) no-repeat 0 0px
}


#remote-control-samsungtv li#six a {
	width: 14px;
	height: 20px;
	left: 166px;
	top: 137px;
	background: url(${base_url}/six.png) no-repeat 0 0px
}


#remote-control-samsungtv li#seven a {
	width: 14px;
	height: 21px;
	left: 42px;
	top: 183px;
	background: url(${base_url}/seven.png) no-repeat 0 0px
}

#remote-control-samsungtv li#eight a {
	width: 14px;
	height: 21px;
	left: 104px;
	top: 183px;
	background: url(${base_url}/eight.png) no-repeat 0 0px
}

#remote-control-samsungtv li#nine a {
	width: 14px;
	height: 20px;
	left: 166px;
	top: 183px;
	background: url(${base_url}/nine.png) no-repeat 0 0px
}


#remote-control-samsungtv li#zero a {
	width: 14px;
	height: 20px;
	left: 104px;
	top: 229px;
	background: url(${base_url}/zero.png) no-repeat 0 0px
}

#remote-control-samsungtv li#volplus a {
	width: 25px;
	height: 26px;	
	left: 39px;	
	top: 286px;
	background: url(${base_url}/volplus.png) no-repeat 0 0px
}

#remote-control-samsungtv li#volmin a {
	width: 26px;
	height: 5px;
	left: 39px;
	top: 369px;
	background: url(${base_url}/volmin.png) no-repeat 0 0px
}

#remote-control-samsungtv li#menu a {
	width: 38px;
	height: 28px;
	left: 31px;
	top: 415px;
	background: url(${base_url}/menu.png) no-repeat 0px 0px;
}

#remote-control-samsungtv li#mute a {
	width: 29px;
	height: 28px;
	left: 96px;
	top: 288px;
	background: url(${base_url}/mute.png) no-repeat 0 0px
}

#remote-control-samsungtv li#lastch a {
	width: 40px;
	height: 28px;
	left: 153px;
	top: 225px;
	background: url(${base_url}/lastch.png) no-repeat 0 0px
}

#remote-control-samsungtv li#back a {
    width: 38px;
    height: 29px;
	left: 31px;
	top: 576px;
    background: url(${base_url}/back.png) no-repeat 0px 0px;
}

#remote-control-samsungtv li#exit a {
    width: 35px;
    height: 28px;
    left: 152px;
    top: 577px;
    background: url(${base_url}/exit.png) no-repeat 0px 0px;
}

#remote-control-samsungtv li#guide a {
    width: 38px;
    height: 14px;
    left: 151px;
    top: 423px;
    background: url(${base_url}/guide.png) no-repeat 0px 0px;
}

#remote-control-samsungtv li#info a {
    width: 27px;
    height: 28px;
    left: 157px;
    top: 467px;
    background: url(${base_url}/info.png) no-repeat 0px 0px;
}

#remote-control-samsungtv li#left a {
	width: 20px;
	height: 16px;
	left: 44px;
	top: 527px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#right a {
	width: 19px;
	height: 15px;
	left: 157px;
	top: 529px;
	background: url(${base_url}/right.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#top a {
	left: 102px;
	top: 475px;
	width: 16px;
	height: 19px;
	background: url(${base_url}/top.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#bottom a {
	width: 16px;
	height: 20px;
	left: 102px;
	top: 576px;
	background: url(${base_url}/bottom.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#fastforward a {
	width: 18px;
	height: 12px;
	left: 168px;
	top: 703px;
	background: url(${base_url}/fastforward.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#rewind a {
	width: 18px;
	height: 12px;
	left: 35px;
	top: 702px;
	background: url(${base_url}/rewind.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#play a {
	width: 11px;
	height: 12px;
	left: 81px;
	top: 702px;
	background: url(${base_url}/play.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#pause a {
    width: 10px;
    height: 11px;
    left: 128px;
    top: 703px;
    background: url(${base_url}/pause.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#stop a {
	width: 13px;
	height: 13px;
	left: 172px;
	top: 666px;
	background: url(${base_url}/stop.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#channelup a {
	width: 34px;
	height: 34px;
	left: 152px;
	top: 289px;
	background: url(${base_url}/channelup.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#channeldown a {
	width: 33px;
	height: 33px;
	left: 153px;
	top: 349px;
	background: url(${base_url}/channeldown.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#ok a {
	width: 23px;
	height: 15px;
	left: 99px;
	top: 528px;
	background: url(${base_url}/ok.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#one a:hover {
	background: url(${base_url}/one_over.png) no-repeat 0 0px
}


#remote-control-samsungtv li#two a:hover {
	background: url(${base_url}/two_over.png) no-repeat 0 0px
}

#remote-control-samsungtv li#three a:hover {
	background: url(${base_url}/three_over.png) no-repeat 0 0px
}

#remote-control-samsungtv li#four a:hover {
	background: url(${base_url}/four_over.png) no-repeat 0 0px
}

#remote-control-samsungtv li#five a:hover {
	background: url(${base_url}/five_over.png) no-repeat 0 0px
}

#remote-control-samsungtv li#six a:hover {
	background: url(${base_url}/six_over.png) no-repeat 0 0px
}

#remote-control-samsungtv li#seven a:hover {
	background: url(${base_url}/seven_over.png) no-repeat 0 0px
}

#remote-control-samsungtv li#eight a:hover {
	background: url(${base_url}/eight_over.png) no-repeat 0 0px
}

#remote-control-samsungtv li#nine a:hover {
	background: url(${base_url}/nine_over.png) no-repeat 0 0px
}

#remote-control-samsungtv li#zero a:hover {
	background: url(${base_url}/zero_over.png) no-repeat 0 0px
}

#remote-control-samsungtv li#volplus a:hover {
	background: url(${base_url}/volplus_over.png) no-repeat 0 0px
}

#remote-control-samsungtv li#volmin a:hover {
	background: url(${base_url}/volmin_over.png) no-repeat 0 0px
}

#remote-control-samsungtv li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#lastch a:hover {
	background: url(${base_url}/lastch_over.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#back a:hover {
	background: url(${base_url}/back_over.png) no-repeat 0px 0px;
}

#remote-control-samsungtv li#exit a:hover {
	background: url(${base_url}/exit_over.png) no-repeat 0px 0px;
}

#remote-control-samsungtv li#guide a:hover {
	background: url(${base_url}/guide_over.png) no-repeat 0px 0px;
}

#remote-control-samsungtv li#info a:hover {
	background: url(${base_url}/info_over.png) no-repeat 0px 0px;
}

#remote-control-samsungtv li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#top a:hover {
	background: url(${base_url}/top_over.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#bottom a:hover {
	background: url(${base_url}/bottom_over.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#fastforward a:hover {
	background: url(${base_url}/fastforward_over.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#rewind a:hover {
	background: url(${base_url}/rewind_over.png) no-repeat 0px 0px
}
#remote-control-samsungtv li#play a:hover {
	background: url(${base_url}/play_over.png) no-repeat 0px 0px
}
#remote-control-samsungtv li#pause a:hover {
	background: url(${base_url}/pause_over.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#stop a:hover {
	background: url(${base_url}/stop_over.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#channelup a:hover {
	background: url(${base_url}/channelup_over.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#channeldown a:hover {
	background: url(${base_url}/channeldown_over.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}

#remote-control-samsungtv li#ok a:hover {
	background: url(${base_url}/ok_over.png) no-repeat 0px 0px
}
  `;
}

function getRemoteHtml_samsungtv(config){
 const template = config.remote_template;
 return `

 <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-samsungtv">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton-${template}"><a href="#" title="Power"><span>Power</span></a></li>
					<li id="volmin" class="myButton-${template}"><a href="#" title="Vol Min"><span>Vol Min</span></a></li>
					<li id="volplus" class="myButton-${template}"><a href="#" title="Vol Plus"><span>Vol Plus</span></a></li>
					<li id="mute" class="myButton-${template}"><a href="#" title="Vol Mute"><span>Vol Mute</span></a></li>
					<li id="source" class="myButton-${template}"><a href="#" title="Source"><span>Source</span></a></li>
				</ul>

				<ul>
					<li id="lastch"  class="myButton-${template}""><a href="#" title="last ch"><span>lastch</span></a></li>
				</ul>

				<ul>
					<li class="myButton-${template}" id="one"><a href="#" title="one"><span>one</span></a></li>
					<li class="myButton-${template}" id="two"><a href="#" title="two"><span>two</span></a></li>
					<li class="myButton-${template}" id="three"><a href="#" title="three"><span>three</span></a></li>
					<li class="myButton-${template}" id="four"><a href="#" title="four"><span>four</span></a></li>
					<li class="myButton-${template}" id="five"><a href="#" title="five"><span>five</span></a></li>
					<li class="myButton-${template}" id="six"><a href="#" title="six"><span>six</span></a></li>
					<li class="myButton-${template}" id="seven"><a href="#" title="seven"><span>seven</span></a></li>
					<li class="myButton-${template}" id="eight"><a href="#" title="eight"><span>eight</span></a></li>
					<li class="myButton-${template}" id="nine"><a href="#" title="nine"><span>nine</span></a></li>
					<li class="myButton-${template}" id="zero"><a href="#" title="zero"><span>zero</span></a></li>
					<li class="myButton-${template}" id="fastforward"><a href="#" title="fastforward"><span>fastforward</span></a></li>
					<li class="myButton-${template}" id="rewind"><a href="#" title="rewind"><span>rewind</span></a></li>
					<li class="myButton-${template}" id="play"><a href="#" title="play"><span>play</span></a></li>
					<li class="myButton-${template}" id="pause"><a href="#" title="pause"><span>pause</span></a></li>
					<li class="myButton-${template}" id="stop"><a href="#" title="stop"><span>stop</span></a></li>						
					<li class="myButton-${template}" id="channelup"><a href="#" title="channel up"><span>channelup</span></a></li>
					<li class="myButton-${template}" id="channeldown"><a href="#" title="channel down"><span>channeldown</span></a></li>
					<li class="myButton-${template}" id="menu"><a href="#" title="Menu"><span>Menu</span></a></li>
					<li class="myButton-${template}" id="back"><a href="#" title="Go back"><span>back</span></a></li>
					<li class="myButton-${template}" id="exit"><a href="#" title="Exit"><span>exit</span></a></li>
					<li class="myButton-${template}" id="guide"><a href="#" title="Guide"><span>guide</span></a></li>
					<li class="myButton-${template}" id="info"><a href="#" title="Info"><span>info</span></a></li>
					<li class="myButton-${template}" id="left"><a href="#" title="Left"><span>Left</span></a></li>
					<li class="myButton-${template}" id="right"><a href="#" title="right"><span>right</span></a></li>
					<li class="myButton-${template}" id="top"><a href="#" title="Top"><span>Top</span></a></li>
					<li class="myButton-${template}" id="bottom"><a href="#" title="Bottom"><span>Bottom</span></a></li>
					<li class="myButton-${template}" id="ok"><a href="#" title="OK"><span>OK</span></a></li>
				</ul>
			</div>	
		</div>

`;
}
