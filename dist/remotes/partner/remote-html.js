function getRemoteStyle_partner(config) {
   
   const base_url = `/local/content-card-remote-control/${config.remote_template}`;    
    
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

#remote-control-partner {
	position: relative;
	background: url(${base_url}/partner_remote.png) no-repeat;
	width: 159px;
	height: 618px
}

#remote-control-partner h2,
#remote-control-partner span {
	position: absolute;
	left: 5000px
}

#remote-control-partner ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#power a,
#partner a,
#volmin a,
#volplus a,
#mute a,
#record a,
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
#section12 a,
#lastch a,
#fastforward a,
#rewind a,
#play a,
#stop a,
#vod a,
#myrec a,
#netflix a,
#youtube a,
#channelup a,
#channeldown a,
#home a,
#menu a,
#back a,
#circle a,
#left a,
#right a,
#top a,
#bottom a,
#ok a {
	position: absolute;
	display: block
}

#remote-control-partner li#power a {
	left: 33px;
	top: 43px;
	width: 15px;
	height: 16px;
	background: url(${base_url}/power.png) no-repeat
}

#remote-control-partner li#source a {
	left: 74px;
	top: 43px;
	width: 14px;
	height: 16px;
	background: url(${base_url}/source.png) no-repeat
}

#remote-control-partner li#source a:hover {
	background-image: url(${base_url}/source_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-partner li#partner a {
	left: 118px;
	top: 43px;
	width: 15px;
	height: 16px;
	background: url(${base_url}/partner.png) no-repeat
}

#remote-control-partner li#one a {
	width: 6px;
	height: 13px;
	left: 36px;
	top: 436px;
	background: url(${base_url}/one.png) no-repeat 0 0px
}

#remote-control-partner li#two a {
	width: 11px;
	height: 15px;
	left: 80px;
	top: 436px;
	background: url(${base_url}/two.png) no-repeat 0 0px
}

#remote-control-partner li#three a {
	width: 9px;
	height: 13px;
	left: 123px;
	top: 436px;
	background: url(${base_url}/three.png) no-repeat 0 0px
}

#remote-control-partner li#four a {
	width: 8px;
	height: 11px;
	left: 36px;
	top: 470px;
	background: url(${base_url}/four.png) no-repeat 0 0px
}

#remote-control-partner li#five a {
	width: 8px;
	height: 13px;
	left: 80px;
	top: 470px;
	background: url(${base_url}/five.png) no-repeat 0 0px
}


#remote-control-partner li#six a {
	width: 8px;
	height: 13px;
	left: 123px;
	top: 470px;
	background: url(${base_url}/six.png) no-repeat 0 0px
}


#remote-control-partner li#seven a {
	width: 8px;
	height: 13px;
	left: 36px;
	top: 502px;
	background: url(${base_url}/seven.png) no-repeat 0 0px
}

#remote-control-partner li#eight a {
	width: 8px;
	height: 13px;
	left: 80px;
	top: 502px;
	background: url(${base_url}/eight.png) no-repeat 0 0px
}

#remote-control-partner li#nine a {
	width: 8px;
	height: 13px;
	left: 123px;
	top: 502px;
	background: url(${base_url}/nine.png) no-repeat 0 0px
}


#remote-control-partner li#zero a {
	width: 11px;
	height: 15px;
	left: 80px;
	top: 535px;
	background: url(${base_url}/zero.png) no-repeat 0 0px
}

#remote-control-partner li#volplus a {
	width: 15px;
	height: 15px;	
	left: 31px;	
	top: 261px;
	background: url(${base_url}/volplus.png) no-repeat 0 0px
}

#remote-control-partner li#volmin a {
	width: 15px;
	height: 3px;
	left: 32px;
	top: 299px;
	background: url(${base_url}/volmin.png) no-repeat 0 0px
}

#remote-control-partner li#menu a {
	width: 16px;
	height: 16px;
	left: 23px;
	top: 270px;
	background: url(${base_url}/menu.png) no-repeat 0px 0px;
}

#remote-control-partner li#mute a {
	width: 15px;
	height: 15px;
	left: 75px;
	top: 253px;
	background: url(${base_url}/mute.png) no-repeat 0 0px
}

#remote-control-partner li#record a {
	width: 13px;
	height: 13px;
	left: 77px;
	top: 298px;
	background: url(${base_url}/record.png) no-repeat 0 0px
}

#remote-control-partner li#section12 a {
	width: 18px;
	height: 14px;
	left: 120px;
	top: 536px;
	background: url(${base_url}/section12.png) no-repeat 0 0px
}

#remote-control-partner li#lastch a {
	width: 14px;
	height: 16px;
	left: 32px;
	top: 533px;
	background: url(${base_url}/lastch.png) no-repeat 0 0px
}

#remote-control-partner li#back a {
    width: 17px;
    height: 16px;
	left: 30px;
	top: 214px;
    background: url(${base_url}/back.png) no-repeat 0px 0px;
}

#remote-control-partner li#circle a {
    width: 17px;
    height: 17px;
	left: 119px;
	top: 213px;
    background: url(${base_url}/circle.png) no-repeat 0px 0px;
}

#remote-control-partner li#left a {
	width: 13px;
	height: 22px;
	left: 35px;
	top: 126px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-partner li#right a {
	width: 13px;
	height: 22px;
	left: 118px;
	top: 126px;
	background: url(${base_url}/right.png) no-repeat 0px 0px
}

#remote-control-partner li#top a {
	width: 22px;
	height: 13px;
	left: 72px;
	top: 88px;
	background: url(${base_url}/top.png) no-repeat 0px 0px
}

#remote-control-partner li#bottom a {
	width: 22px;
	height: 13px;
	left: 73px;
	top: 170px;
	background: url(${base_url}/bottom.png) no-repeat 0px 0px
}

#remote-control-partner li#netflix a {
	width: 50px;
	height: 14px;
	left: 25px;
	top: 367px;
	background: url(${base_url}/netflix.png) no-repeat 0px 0px
}

#remote-control-partner li#fastforward a {
	width: 16px;
	height: 9px;
	left: 123px;
	top: 336px;
	background: url(${base_url}/fastforward.png) no-repeat 0px 0px
}

#remote-control-partner li#rewind a {
	width: 16px;
	height: 9px;
	left: 25px;
	top: 336px;
	background: url(${base_url}/rewind.png) no-repeat 0px 0px
}

#remote-control-partner li#play a {
	width: 16px;
	height: 10px;
	left: 91px;
	top: 336px;
	background: url(${base_url}/play.png) no-repeat 0px 0px
}

#remote-control-partner li#stop a {
	width: 10px;
	height: 10px;
	left: 63px;
	top: 336px;
	background: url(${base_url}/stop.png) no-repeat 0px 0px
}

#remote-control-partner li#vod a {
	width: 28px;
	height: 11px;
	left: 102px;
	top: 367px;
	background: url(${base_url}/vod.png) no-repeat 0px 0px
}

#remote-control-partner li#myrec a {
	width: 35px;
	height: 8px;
	left: 102px;
	top: 399px;
	background: url(${base_url}/myrec.png) no-repeat 0px 0px
}

#remote-control-partner li#youtube a {
	width: 35px;
	height: 15px;
	left: 32px;
	top: 396px;
	background: url(${base_url}/youtube.png) no-repeat 0px 0px
}

#remote-control-partner li#channelup a {
	width: 15px;
	height: 14px;
	left: 120px;
	top: 260px;
	background: url(${base_url}/channelup.png) no-repeat 0px 0px
}

#remote-control-partner li#channeldown a {
	width: 15px;
	height: 14px;
	left: 120px;
	top: 294px;
	background: url(${base_url}/channeldown.png) no-repeat 0px 0px
}

#remote-control-partner li#home a {
	width: 25px;
	height: 23px;
	left: 70px;
	top: 211px;
	background: url(${base_url}/home.png) no-repeat 0px 0px
}

#remote-control-partner li#ok a {
	width: 23px;
	height: 24px;
	left: 71px;
	top: 126px;
	background: url(${base_url}/ok.png) no-repeat 0px 0px
}

#remote-control-partner li#partner a:hover {
	background: url(${base_url}/partner_over.png) no-repeat 0 0px
}

#remote-control-partner li#one a:hover {
	background: url(${base_url}/one_over.png) no-repeat 0 0px
}


#remote-control-partner li#two a:hover {
	background: url(${base_url}/two_over.png) no-repeat 0 0px
}

#remote-control-partner li#three a:hover {
	background: url(${base_url}/three_over.png) no-repeat 0 0px
}

#remote-control-partner li#four a:hover {
	background: url(${base_url}/four_over.png) no-repeat 0 0px
}

#remote-control-partner li#five a:hover {
	background: url(${base_url}/five_over.png) no-repeat 0 0px
}

#remote-control-partner li#six a:hover {
	background: url(${base_url}/six_over.png) no-repeat 0 0px
}

#remote-control-partner li#seven a:hover {
	background: url(${base_url}/seven_over.png) no-repeat 0 0px
}

#remote-control-partner li#eight a:hover {
	background: url(${base_url}/eight_over.png) no-repeat 0 0px
}

#remote-control-partner li#nine a:hover {
	background: url(${base_url}/nine_over.png) no-repeat 0 0px
}

#remote-control-partner li#zero a:hover {
	background: url(${base_url}/zero_over.png) no-repeat 0 0px
}

#remote-control-partner li#volplus a:hover {
	background: url(${base_url}/volplus_over.png) no-repeat 0 0px
}

#remote-control-partner li#volmin a:hover {
	background: url(${base_url}/volmin_over.png) no-repeat 0 0px
}

#remote-control-partner li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}

#remote-control-partner li#section12 a:hover {
	background: url(${base_url}/section12_over.png) no-repeat 0px 0px
}

#remote-control-partner li#lastch a:hover {
	background: url(${base_url}/lastch_over.png) no-repeat 0px 0px
}

#remote-control-partner li#back a:hover {
	background: url(${base_url}/back_over.png) no-repeat 0px 0px;
}

#remote-control-partner li#circle a:hover {
	background: url(${base_url}/circle_over.png) no-repeat 0px 0px;
}

#remote-control-partner li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}

#remote-control-partner li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}

#remote-control-partner li#top a:hover {
	background: url(${base_url}/top_over.png) no-repeat 0px 0px
}

#remote-control-partner li#bottom a:hover {
	background: url(${base_url}/bottom_over.png) no-repeat 0px 0px
}

#remote-control-partner li#netflix a:hover {
	background: url(${base_url}/netflix.png) no-repeat 0px 0px
}
#remote-control-partner li#fastforward a:hover {
	background: url(${base_url}/fastforward_over.png) no-repeat 0px 0px
}

#remote-control-partner li#rewind a:hover {
	background: url(${base_url}/rewind_over.png) no-repeat 0px 0px
}
#remote-control-partner li#play a:hover {
	background: url(${base_url}/play_over.png) no-repeat 0px 0px
}

#remote-control-partner li#vod a:hover {
	background: url(${base_url}/vod_over.png) no-repeat 0px 0px
}

#remote-control-partner li#myrec a:hover {
	background: url(${base_url}/myrec_over.png) no-repeat 0px 0px
}

#remote-control-partner li#stop a:hover {
	background: url(${base_url}/stop_over.png) no-repeat 0px 0px
}
#remote-control-partner li#youtube a:hover {
	background: url(${base_url}/youtube.png) no-repeat 0px 0px
}

#remote-control-partner li#channelup a:hover {
	background: url(${base_url}/channelup_over.png) no-repeat 0px 0px
}

#remote-control-partner li#channeldown a:hover {
	background: url(${base_url}/channeldown_over.png) no-repeat 0px 0px
}

#remote-control-partner li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}

#remote-control-partner li#record a:hover {
	background: url(${base_url}/record_over.png) no-repeat 0px 0px
}

#remote-control-partner li#home a:hover {
	background: url(${base_url}/home_over.png) no-repeat 0px 0px
}

#remote-control-partner li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}

#remote-control-partner li#ok a:hover {
	background: url(${base_url}/ok_over.png) no-repeat 0px 0px
}
  `;
}

function getRemoteHtml_partner(config){return `
       <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-partner">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton-partner"><a href="#" title="Power"><span>Power</span></a></li>
					<li id="volmin" class="myButton-partner"><a href="#" title="Vol Min"><span>Vol Min</span></a></li>
					<li id="volplus" class="myButton-partner"><a href="#" title="Vol Plus"><span>Vol Plus</span></a></li>
					<li id="mute" class="myButton-partner"><a href="#" title="Vol Mute"><span>Vol Mute</span></a></li>
					<li id="record" class="myButton-partner"><a href="#" title="record"><span>Vol record</span></a></li>
					<li id="source" class="myButton-partner"><a href="#" title="Source"><span>Source</span></a></li>
				</ul>

				<ul>
					<li id="section12"  class="myButton-partner""><a href="#" title="Section 12"><span>Section 12</span></a></li>
					<li id="lastch"  class="myButton-partner""><a href="#" title="last ch"><span>lastch</span></a></li>
				</ul>

				<ul>
					<li class="myButton-partner" id="partner"><a href="#" title="partner"><span>partner</span></a></li>
					<li class="myButton-partner" id="one"><a href="#" title="one"><span>one</span></a></li>
					<li class="myButton-partner" id="two"><a href="#" title="two"><span>two</span></a></li>
					<li class="myButton-partner" id="three"><a href="#" title="three"><span>three</span></a></li>
					<li class="myButton-partner" id="four"><a href="#" title="four"><span>four</span></a></li>
					<li class="myButton-partner" id="five"><a href="#" title="five"><span>five</span></a></li>
					<li class="myButton-partner" id="six"><a href="#" title="six"><span>six</span></a></li>
					<li class="myButton-partner" id="seven"><a href="#" title="seven"><span>seven</span></a></li>
					<li class="myButton-partner" id="eight"><a href="#" title="eight"><span>eight</span></a></li>
					<li class="myButton-partner" id="nine"><a href="#" title="nine"><span>nine</span></a></li>
					<li class="myButton-partner" id="zero"><a href="#" title="zero"><span>zero</span></a></li>
					<li class="myButton-partner" id="netflix"><a href="#" title="netflix"><span>netflix</span></a></li>
					<li class="myButton-partner" id="fastforward"><a href="#" title="fastforward"><span>fastforward</span></a></li>
					<li class="myButton-partner" id="rewind"><a href="#" title="rewind"><span>rewind</span></a></li>
					<li class="myButton-partner" id="play"><a href="#" title="play"><span>play</span></a></li>
					<li class="myButton-partner" id="vod"><a href="#" title="vod"><span>vod</span></a></li>
					<li class="myButton-partner" id="myrec"><a href="#" title="myrec"><span>myrec</span></a></li>
					<li class="myButton-partner" id="stop"><a href="#" title="stop"><span>stop</span></a></li>						
					<li class="myButton-partner" id="youtube"><a href="#" title="youtube"><span>youtube</span></a></li>
					<li class="myButton-partner" id="channelup"><a href="#" title="channel up"><span>channelup</span></a></li>
					<li class="myButton-partner" id="channeldown"><a href="#" title="channel down"><span>channeldown</span></a></li>
					<li class="myButton-partner" id="home"><a href="#" title="home"><span>home</span></a></li>
					<li class="myButton-partner" id="menu"><a href="#" title="Menu"><span>Menu</span></a></li>
					<li class="myButton-partner" id="back"><a href="#" title="Go back"><span>back</span></a></li>
					<li class="myButton-partner" id="circle"><a href="#" title="circle"><span>circle</span></a></li>
					<li class="myButton-partner" id="left"><a href="#" title="Left"><span>Left</span></a></li>
					<li class="myButton-partner" id="right"><a href="#" title="right"><span>right</span></a></li>
					<li class="myButton-partner" id="top"><a href="#" title="Top"><span>Top</span></a></li>
					<li class="myButton-partner" id="bottom"><a href="#" title="Bottom"><span>Bottom</span></a></li>
					<li class="myButton-partner" id="ok"><a href="#" title="OK"><span>OK</span></a></li>
				</ul>
			</div>	
		</div>

`;
}