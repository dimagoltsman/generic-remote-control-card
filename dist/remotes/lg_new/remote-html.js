function getRemoteStyle_lg_new(config) {
   
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

#remote-control-lg_new {
	position: relative;
	background: url(${base_url}/lg_remote.png) no-repeat;
	width: 159px;
	height: 596px
}

#remote-control-lg_new h2,
#remote-control-lg_new span {
	position: absolute;
	left: 5000px
}

#remote-control-lg_new ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#power a,
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
#list a,
#section12 a,
#exit a,
#netflix a,
#amazon a,
#channelup a,
#channeldown a,
#microphone a,
#settings a,
#menu a,
#back a,
#left a,
#right a,
#top a,
#bottom a,
#ok a {
	position: absolute;
	display: block
}

#remote-control-lg_new li#power a {
	left: 32px;
	top: 36px;
	width: 30px;
	height: 32px;
	background: url(${base_url}/power.png) no-repeat
}

#remote-control-lg_new li#source a {
	left: 66px;
	top: 418px;
	width: 24px;
	height: 15px;
	background: url(${base_url}/source.png) no-repeat
}

#remote-control-lg_new li#source a:hover {
	background-image: url(${base_url}/source_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-lg_new li#exit a {
	width: 24px;
	height: 10px;
	left: 22px;
	top: 410px;
	background: url(${base_url}/exit.png) no-repeat 0 0px
}


#remote-control-lg_new li#one a {
	width: 6px;
	height: 13px;
	left: 39px;
	top: 85px;
	background: url(${base_url}/one.png) no-repeat 0 0px
}

#remote-control-lg_new li#two a {
	width: 11px;
	height: 15px;
	left: 74px;
	top: 83px;
	background: url(${base_url}/two.png) no-repeat 0 0px
}

#remote-control-lg_new li#three a {
	width: 9px;
	height: 13px;
	left: 110px;
	top: 85px;
	background: url(${base_url}/three.png) no-repeat 0 0px
}

#remote-control-lg_new li#four a {
	width: 8px;
	height: 11px;
	left: 37px;
	top: 111px;
	background: url(${base_url}/four.png) no-repeat 0 0px
}

#remote-control-lg_new li#five a {
	width: 8px;
	height: 13px;
	left: 75px;
	top: 110px;
	background: url(${base_url}/five.png) no-repeat 0 0px
}


#remote-control-lg_new li#six a {
	width: 8px;
	height: 13px;
	left: 110px;
	top: 111px;
	background: url(${base_url}/six.png) no-repeat 0 0px
}


#remote-control-lg_new li#seven a {
	width: 8px;
	height: 13px;
	left: 39px;
	top: 137px;
	background: url(${base_url}/seven.png) no-repeat 0 0px
}

#remote-control-lg_new li#eight a {
	width: 8px;
	height: 13px;
	left: 75px;
	top: 136px;
	background: url(${base_url}/eight.png) no-repeat 0 0px
}

#remote-control-lg_new li#nine a {
	width: 8px;
	height: 13px;
	left: 110px;
	top: 136px;
	background: url(${base_url}/nine.png) no-repeat 0 0px
}


#remote-control-lg_new li#zero a {
	width: 11px;
	height: 15px;
	left: 75px;
	top: 164px;
	background: url(${base_url}/zero.png) no-repeat 0 0px
}

#remote-control-lg_new li#volplus a {
	width: 28px;
	height: 28px;
	left: 25px;
	top: 191px;
	background: url(${base_url}/volplus.png) no-repeat 0 0px
}

#remote-control-lg_new li#volmin a {
	width: 28px;
	height: 5px;
	left: 25px;
	top: 246px;
	background: url(${base_url}/volmin.png) no-repeat 0 0px
}

#remote-control-lg_new li#menu a {
	width: 16px;
	height: 16px;
	left: 23px;
	top: 270px;
	background: url(${base_url}/menu.png) no-repeat 0px 0px;
}

#remote-control-lg_new li#mute a {
	width: 18px;
	height: 18px;
	left: 70px;
	top: 195px;
	background: url(${base_url}/mute.png) no-repeat 0 0px
}

#remote-control-lg_new li#list a {
	width: 40px;
	height: 40px;
	left: 23px;
	top: 150px;
	background: url(${base_url}/list.png) no-repeat 0 0px
}

#remote-control-lg_new li#section12 a {
	width: 15px;
	height: 16px;
	left: 107px;
	top: 162px;
	background: url(${base_url}/section12.png) no-repeat 0 0px
}

#remote-control-lg_new li#back a {
    width: 26px;
    height: 8px;
	left: 19px;
	top: 394px;
    background: url(${base_url}/back.png) no-repeat 0px 0px;
}

#remote-control-lg_new li#left a {
	width: 13px;
	height: 22px;
	left: 32px;
	top: 329px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-lg_new li#right a {
	width: 13px;
	height: 22px;
	left: 114px;
	top: 329px;
	background: url(${base_url}/right.png) no-repeat 0px 0px
}

#remote-control-lg_new li#top a {
	width: 22px;
	height: 13px;
	left: 67px;
	top: 294px;
	background: url(${base_url}/top.png) no-repeat 0px 0px
}

#remote-control-lg_new li#bottom a {
	width: 22px;
	height: 13px;
	left: 68px;
	top: 374px;
	background: url(${base_url}/bottom.png) no-repeat 0px 0px
}

#remote-control-lg_new li#netflix a {
	width: 36px;
	height: 23px;
	left: 17px;
	top: 418px;
	background: url(${base_url}/netflix.png) no-repeat 0px 0px
}

#remote-control-lg_new li#amazon a {
	width: 36px;
	height: 23px;
	left: 105px;
	top: 418px;
	background: url(${base_url}/amazon.png) no-repeat 0px 0px
}

#remote-control-lg_new li#channelup a {
	width: 24px;
	height: 22px;
	left: 105px;
	top: 195px;
	background: url(${base_url}/channelup.png) no-repeat 0px 0px
}

#remote-control-lg_new li#channeldown a {
	width: 24px;
	height: 22px;
	left: 105px;
	top: 238px;
	background: url(${base_url}/channeldown.png) no-repeat 0px 0px
}

#remote-control-lg_new li#microphone a {
	width: 24px;
	height: 22px;
	left: 70px;
	top: 242px;
	background: url(${base_url}/microphone.png) no-repeat 0px 0px
}

#remote-control-lg_new li#settings a {
	width: 15px;
	height: 15px;
	left: 118px;
	top: 269px;
	background: url(${base_url}/settings.png) no-repeat 0px 0px
}

#remote-control-lg_new li#ok a {
	width: 18px;
	height: 42px;
	left: 68px;
	top: 317px;
	background: url(${base_url}/ok.png) no-repeat 0px 0px
}

#remote-control-lg_new li#exit a:hover {
	background: url(${base_url}/exit_over.png) no-repeat 0 0px
}

#remote-control-lg_new li#one a:hover {
	background: url(${base_url}/one_over.png) no-repeat 0 0px
}


#remote-control-lg_new li#two a:hover {
	background: url(${base_url}/two_over.png) no-repeat 0 0px
}

#remote-control-lg_new li#three a:hover {
	background: url(${base_url}/three_over.png) no-repeat 0 0px
}

#remote-control-lg_new li#four a:hover {
	background: url(${base_url}/four_over.png) no-repeat 0 0px
}

#remote-control-lg_new li#five a:hover {
	background: url(${base_url}/five_over.png) no-repeat 0 0px
}

#remote-control-lg_new li#six a:hover {
	background: url(${base_url}/six_over.png) no-repeat 0 0px
}

#remote-control-lg_new li#seven a:hover {
	background: url(${base_url}/seven_over.png) no-repeat 0 0px
}

#remote-control-lg_new li#eight a:hover {
	background: url(${base_url}/eight_over.png) no-repeat 0 0px
}

#remote-control-lg_new li#nine a:hover {
	background: url(${base_url}/nine_over.png) no-repeat 0 0px
}

#remote-control-lg_new li#zero a:hover {
	background: url(${base_url}/zero_over.png) no-repeat 0 0px
}

#remote-control-lg_new li#volplus a:hover {
	background: url(${base_url}/volplus_over.png) no-repeat 0 0px
}

#remote-control-lg_new li#volmin a:hover {
	background: url(${base_url}/volmin_over.png) no-repeat 0 0px
}

#remote-control-lg_new li#menu a:hover {
	background: url(${base_url}/menu_over.png) no-repeat 0px 0px
}

#remote-control-lg_new li#list a:hover {
	background: url(${base_url}/list_over.png) no-repeat 0px 0px
}

#remote-control-lg_new li#section12 a:hover {
	background: url(${base_url}/section12_over.png) no-repeat 0px 0px
}

#remote-control-lg_new li#back a:hover {
	background: url(${base_url}/back_over.png) no-repeat 0px 0px;
}

#remote-control-lg_new li#left a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}

#remote-control-lg_new li#right a:hover {
	background: url(${base_url}/right_over.png) no-repeat 0px 0px
}

#remote-control-lg_new li#top a:hover {
	background: url(${base_url}/top_over.png) no-repeat 0px 0px
}

#remote-control-lg_new li#bottom a:hover {
	background: url(${base_url}/bottom_over.png) no-repeat 0px 0px
}

#remote-control-lg_new li#netflix a:hover {
	background: url(${base_url}/netflix.png) no-repeat 0px 0px
}

#remote-control-lg_new li#amazon a:hover {
	background: url(${base_url}/amazon.png) no-repeat 0px 0px
}

#remote-control-lg_new li#channelup a:hover {
	background: url(${base_url}/channelup_over.png) no-repeat 0px 0px
}

#remote-control-lg_new li#channeldown a:hover {
	background: url(${base_url}/channeldown_over.png) no-repeat 0px 0px
}

#remote-control-lg_new li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}

#remote-control-lg_new li#microphone a:hover {
	background: url(${base_url}/microphone_over.png) no-repeat 0px 0px
}

#remote-control-lg_new li#settings a:hover {
	background: url(${base_url}/settings_over.png) no-repeat 0px 0px
}

#remote-control-lg_new li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}

#remote-control-lg_new li#ok a:hover {
	background: url(${base_url}/ok_over.png) no-repeat 0px 0px
}
  `;
}

function getRemoteHtml_lg_new(config){return `
       <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-lg_new">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton-lg_new"><a href="#" title="Power"><span>Power</span></a></li>
					<li id="volmin" class="myButton-lg_new"><a href="#" title="Vol Min"><span>Vol Min</span></a></li>
					<li id="volplus" class="myButton-lg_new"><a href="#" title="Vol Plus"><span>Vol Plus</span></a></li>
					<li id="mute" class="myButton-lg_new"><a href="#" title="Vol Mute"><span>Vol Mute</span></a></li>
					<li id="source" class="myButton-lg_new"><a href="#" title="Source"><span>Source</span></a></li>
				</ul>

				<ul>
					<li id="list"  class="myButton-lg_new""><a href="#" title="list + 11"><span>+list</span></a></li>
					<li id="section12"  class="myButton-lg_new""><a href="#" title="Section 12"><span>Section 12</span></a></li>
				</ul>

				<ul>
					<li class="myButton-lg_new" id="exit"><a href="#" title="exit"><span>exit</span></a></li>
					<li class="myButton-lg_new" id="one"><a href="#" title="one"><span>one</span></a></li>
					<li class="myButton-lg_new" id="two"><a href="#" title="two"><span>two</span></a></li>
					<li class="myButton-lg_new" id="three"><a href="#" title="three"><span>three</span></a></li>
					<li class="myButton-lg_new" id="four"><a href="#" title="four"><span>four</span></a></li>
					<li class="myButton-lg_new" id="five"><a href="#" title="five"><span>five</span></a></li>
					<li class="myButton-lg_new" id="six"><a href="#" title="six"><span>six</span></a></li>
					<li class="myButton-lg_new" id="seven"><a href="#" title="seven"><span>seven</span></a></li>
					<li class="myButton-lg_new" id="eight"><a href="#" title="eight"><span>eight</span></a></li>
					<li class="myButton-lg_new" id="nine"><a href="#" title="nine"><span>nine</span></a></li>
					<li class="myButton-lg_new" id="zero"><a href="#" title="zero"><span>zero</span></a></li>
					<li class="myButton-lg_new" id="netflix"><a href="#" title="netflix"><span>netflix</span></a></li>
					<li class="myButton-lg_new" id="amazon"><a href="#" title="amazon"><span>amazon</span></a></li>
					<li class="myButton-lg_new" id="channelup"><a href="#" title="channel up"><span>channelup</span></a></li>
					<li class="myButton-lg_new" id="channeldown"><a href="#" title="channel down"><span>channeldown</span></a></li>
					<li class="myButton-lg_new" id="microphone"><a href="#" title="microphone"><span>microphone</span></a></li>
					<li class="myButton-lg_new" id="settings"><a href="#" title="settings"><span>settings</span></a></li>
					<li class="myButton-lg_new" id="menu"><a href="#" title="Menu"><span>Menu</span></a></li>
					<li class="myButton-lg_new" id="back"><a href="#" title="Go back"><span>back</span></a></li>
					<li class="myButton-lg_new" id="left"><a href="#" title="Left"><span>Left</span></a></li>
					<li class="myButton-lg_new" id="right"><a href="#" title="right"><span>right</span></a></li>
					<li class="myButton-lg_new" id="top"><a href="#" title="Top"><span>Top</span></a></li>
					<li class="myButton-lg_new" id="bottom"><a href="#" title="Bottom"><span>Bottom</span></a></li>
					<li class="myButton-lg_new" id="ok"><a href="#" title="OK"><span>OK</span></a></li>
				</ul>
			</div>	
		</div>

`;
}