function getRemoteStyle_yesremote(config) {
   
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
	width: 224px;
	margin: 0 auto
}

#remote-control-yesremote {
	position: relative;
	background: url(${base_url}/remote-back.png) no-repeat;
	width: 245px;
	height: 900px
}

#remote-control-yesremote h2,
#remote-control-yesremote span {
	position: absolute;
	left: -5000px
}

#remote-control-yesremote ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#tvpower a,
#yespower a,
#amppower a,
#av a,
#in a,
#button1 a,
#button2 a,
#button3 a,
#button4 a,
#button5 a,
#button6 a,
#button7 a,
#button8 a,
#button9 a,
#button0 a,
#vod a,
#mytv a,
#volumeup a,
#volumedown a,
#mute a,
#return a,
#channelup a,
#channeldown a,
#clickleft a,
#clickright a,
#clickup a,
#clickdown a,
#plus a,
#info a,
#ok a,
#table a,
#schedule a,
#orange a,
#green a,
#yellow a,
#blue a,
#rewind a,
#play a,
#forward a,
#rec a,
#stop a,
#pause a,
#microphone a {
	position: absolute;
	display: block
}

#remote-control-yesremote li#tvpower a {
	left: 57px;
	top: 52px;
	width: 37px;
	height: 32px;
	background: url(${base_url}/tv.png) no-repeat
}

#remote-control-yesremote li#tvpower a:hover {
	background-image: url(${base_url}/tv_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-yesremote li#yespower a {
	left: 105px;
	top: 50px;
	width: 37px;
	height: 32px;
	background: url(${base_url}/yes.png) no-repeat
}

#remote-control-yesremote li#yespower a:hover {
	background-image: url(${base_url}/yes_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-yesremote li#amppower a {
	left: 155px;
	top: 51px;
	width: 39px;
	height: 32px;
	background: url(${base_url}/amp.png) no-repeat
}

#remote-control-yesremote li#amppower a:hover {
	background-image: url(${base_url}/amp_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-yesremote li#av a {
	left: 51px;
	top: 94px;
	width: 38px;
	height: 38px;
	background: url(${base_url}/av.png) no-repeat
}

#remote-control-yesremote li#av a:hover {
	background-image: url(${base_url}/av_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-yesremote li#in a {
	left: 162px;
	top: 93px;
	width: 38px;
	height: 38px;
	background: url(${base_url}/in.png) no-repeat
}

#remote-control-yesremote li#in a:hover {
	background-image: url(${base_url}/in_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-yesremote li#button1 a {
	left: 47px;
	top: 145px;
	width: 47px;
	height: 34px;
	background: url(${base_url}/one.png) no-repeat
}

#remote-control-yesremote li#button1 a:hover {
	background-image: url(${base_url}/one_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-yesremote li#button2 a {
	left: 104px;
	top: 144px;
	width: 41px;
	height: 36px;
	background: url(${base_url}/two.png) no-repeat
}

#remote-control-yesremote li#button2 a:hover {
	background-image: url(${base_url}/two_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-yesremote li#button3 a {
	left: 155px;
	top: 145px;
	width: 48px;
	height: 34px;
	background: url(${base_url}/three.png) no-repeat
}

#remote-control-yesremote li#button3 a:hover {
	background-image: url(${base_url}/three_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}
 

#remote-control-yesremote li#button4 a {
	left: 47px;
	top: 194px;
	width: 46px;
	height: 34px;
	background: url(${base_url}/four.png) no-repeat
}

#remote-control-yesremote li#button4 a:hover {
	background-image: url(${base_url}/four_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}
 

#remote-control-yesremote li#button5 a {
	left: 104px;
	top: 193px;
	width: 41px;
	height: 36px;
	background: url(${base_url}/five.png) no-repeat
}

#remote-control-yesremote li#button5 a:hover {
	background-image: url(${base_url}/five_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-yesremote li#button6 a {
	left: 156px;
	top: 193px;
	width: 46px;
	height: 35px;
	background: url(${base_url}/six.png) no-repeat
}

#remote-control-yesremote li#button6 a:hover {
	background-image: url(${base_url}/six_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-yesremote li#button7 a {
	left: 47px;
	top: 243px;
	width: 46px;
	height: 34px;
	background: url(${base_url}/seven.png) no-repeat
}

#remote-control-yesremote li#button7 a:hover {
	background-image: url(${base_url}/seven_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-yesremote li#button8 a {
	left: 104px;
	top: 241px;
	width: 41px;
	height: 36px;
	background: url(${base_url}/eight.png) no-repeat
}

#remote-control-yesremote li#button8 a:hover {
	background-image: url(${base_url}/eight_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-yesremote li#button9 a {
	left: 156px;
	top: 241px;
	width: 46px;
	height: 35px;
	background: url(${base_url}/nine.png) no-repeat
}

#remote-control-yesremote li#button9 a:hover {
	background-image: url(${base_url}/nine_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}


#remote-control-yesremote li#button0 a {
	left: 104px;
	top: 289px;
	width: 38px;
	height: 38px;
	background: url(${base_url}/zero.png) no-repeat
}

#remote-control-yesremote li#button0 a:hover {
	background-image: url(${base_url}/zero_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
} 
 
#remote-control-yesremote li#vod a {
	left: 48px;
	top: 291px;
	width: 46px;
	height: 34px;
	background: url(${base_url}/vod.png) no-repeat
}

#remote-control-yesremote li#vod a:hover {
	background-image: url(${base_url}/vod_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}  
 
#remote-control-yesremote li#mytv a {
	left: 154px;
	top: 289px;
	width: 46px;
	height: 35px;
	background: url(${base_url}/mytv.png) no-repeat
}

#remote-control-yesremote li#mytv a:hover {
	background-image: url(${base_url}/mytv_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
} 

 
#remote-control-yesremote li#volumeup a {
	left: 33px;
	top: 340px;
	width: 44px;
	height: 41px;
	background: url(${base_url}/vup.png) no-repeat
}

#remote-control-yesremote li#volumeup a:hover {
	background-image: url(${base_url}/vup_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
} 

#remote-control-yesremote li#volumedown a {
	left: 38px;
	top: 379px;
	width: 43px;
	height: 40px;
	background: url(${base_url}/vdown.png) no-repeat
}

#remote-control-yesremote li#volumedown a:hover {
	background-image: url(${base_url}/vdown_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
} 

#remote-control-yesremote li#channelup a {
	left: 173px;
	top: 339px;
	width: 43px;
	height: 42px;
	background: url(${base_url}/chup.png) no-repeat
}

#remote-control-yesremote li#channelup a:hover {
	background-image: url(${base_url}/chup.png);
	background-repeat: no-repeat;
	background-position: 0 -42px
} 

#remote-control-yesremote li#channeldown a {
	left: 168px;
	top: 378px;
	width: 43px;
	height: 40px;
	background: url(${base_url}/chdown.png) no-repeat
}

#remote-control-yesremote li#channeldown a:hover {
	background-image: url(${base_url}/chdown.png);
	background-repeat: no-repeat;
	background-position: 0 -42px
}  

#remote-control-yesremote li#mute a {
	left: 96px;
	top: 340px;
	width: 57px;
	height: 35px;
	background: url(${base_url}/mute.png) no-repeat
}

#remote-control-yesremote li#mute a:hover {
	background-image: url(${base_url}/mute.png);
	background-repeat: no-repeat;
	background-position: 0 -35px
}  

#remote-control-yesremote li#return a {
	left: 104px;
	top: 385px;
	width: 42px;
	height: 37px;
	background: url(${base_url}/return.png) no-repeat
}

#remote-control-yesremote li#return a:hover {
	background-image: url(${base_url}/return.png);
	background-repeat: no-repeat;
	background-position: 0 -37px
}  

#remote-control-yesremote li#plus a {
	left: 170px;
	top: 439px;
	width: 40px;
	height: 39px;
	background: url(${base_url}/plus.png) no-repeat
}

#remote-control-yesremote li#plus a:hover {
	background-image: url(${base_url}/plus.png);
	background-repeat: no-repeat;
	background-position: 0 -40px
}  


#remote-control-yesremote li#info a {
	left: 171px;
	top: 568px;
	width: 40px;
	height: 39px;
	background: url(${base_url}/info.png) no-repeat
}

#remote-control-yesremote li#info a:hover {
	background-image: url(${base_url}/info.png);
	background-repeat: no-repeat;
	background-position: 0 -40px
}  

#remote-control-yesremote li#table a {
	left: 40px;
	top: 568px;
	width: 40px;
	height: 39px;
	background: url(${base_url}/table.png) no-repeat
}

#remote-control-yesremote li#table a:hover {
	background-image: url(${base_url}/table.png);
	background-repeat: no-repeat;
	background-position: 0 -40px
}  

#remote-control-yesremote li#schedule a {
	left: 40px;
	top: 439px;
	width: 40px;
	height: 39px;
	background: url(${base_url}/schedule.png) no-repeat
}

#remote-control-yesremote li#schedule a:hover {
	background-image: url(${base_url}/schedule.png);
	background-repeat: no-repeat;
	background-position: 0 -40px
}  

#remote-control-yesremote li#ok a {
	left: 97px;
	top: 493px;
	width: 57px;
	height: 60px;
	background: url(${base_url}/ok.png) no-repeat
}

#remote-control-yesremote li#ok a:hover {
	background-image: url(${base_url}/ok.png);
	background-repeat: no-repeat;
	background-position: 0 -60px
}  

#remote-control-yesremote li#clickup a {
	left: 71px;
	top: 448px;
	width: 113px;
	height: 75px;
	background: url(${base_url}/up.png) no-repeat
}

#remote-control-yesremote li#clickup a:hover {
	background-image: url(${base_url}/up.png);
	background-repeat: no-repeat;
	background-position: 0 -75px
}  

#remote-control-yesremote li#clickdown a {
	left: 68px;
	top: 522px;
	width: 113px;
	height: 75px;
	background: url(${base_url}/down.png) no-repeat
}

#remote-control-yesremote li#clickdown a:hover {
	background-image: url(${base_url}/down.png);
	background-repeat: no-repeat;
	background-position: 0 -75px
}  


#remote-control-yesremote li#clickright a {
	left: 122px;
	top: 475px;
	width: 76px;
	height: 95px;
	background: url(${base_url}/right.png) no-repeat
}

#remote-control-yesremote li#clickright a:hover {
	background-image: url(${base_url}/right.png);
	background-repeat: no-repeat;
	background-position: 0 -95px
}  


#remote-control-yesremote li#clickleft a {
	left: 49px;
	top: 468px;
	width: 80px;
	height: 109px;
	background: url(${base_url}/left.png) no-repeat
}

#remote-control-yesremote li#clickleft a:hover {
	background-image: url(${base_url}/left.png);
	background-repeat: no-repeat;
	background-position: 0 -109px
}  

#remote-control-yesremote li#orange a {
	left: 46px;
	top: 632px;
	width: 32px;
	height: 30px;
	background: url(${base_url}/orange.png) no-repeat
}

#remote-control-yesremote li#orange a:hover {
	background-image: url(${base_url}/orange.png);
	background-repeat: no-repeat;
	background-position: 0 -30px
}  

#remote-control-yesremote li#green a {
	left: 87px;
	top: 623px;
	width: 32px;
	height: 30px;
	background: url(${base_url}/green.png) no-repeat
}

#remote-control-yesremote li#green a:hover {
	background-image: url(${base_url}/green.png);
	background-repeat: no-repeat;
	background-position: 0 -30px
}  
#remote-control-yesremote li#yellow a {
	left: 131px;
	top: 623px;
	width: 32px;
	height: 30px;
	background: url(${base_url}/yellow.png) no-repeat
}

#remote-control-yesremote li#yellow a:hover {
	background-image: url(${base_url}/yellow.png);
	background-repeat: no-repeat;
	background-position: 0 -30px
}  
#remote-control-yesremote li#blue a {
	left: 172px;
	top: 633px;
	width: 32px;
	height: 30px;
	background: url(${base_url}/blue.png) no-repeat
}

#remote-control-yesremote li#blue a:hover {
	background-image: url(${base_url}/blue.png);
	background-repeat: no-repeat;
	background-position: 0 -30px
}  

#remote-control-yesremote li#play a {
	left: 103px;
	top: 672px;
	width: 44px;
	height: 43px;
	background: url(${base_url}/play.png) no-repeat
}

#remote-control-yesremote li#play a:hover {
	background-image: url(${base_url}/play.png);
	background-repeat: no-repeat;
	background-position: 0 -43px
}  

#remote-control-yesremote li#stop a {
	left: 103px;
	top: 721px;
	width: 44px;
	height: 43px;
	background: url(${base_url}/stop.png) no-repeat
}

#remote-control-yesremote li#stop a:hover {
	background-image: url(${base_url}/stop.png);
	background-repeat: no-repeat;
	background-position: 0 -43px
}  

#remote-control-yesremote li#rewind a {
	left: 51px;
	top: 676px;
	width: 45px;
	height: 38px;
	background: url(${base_url}/rewind.png) no-repeat
}

#remote-control-yesremote li#rewind a:hover {
	background-image: url(${base_url}/rewind.png);
	background-repeat: no-repeat;
	background-position: 0 -41px
}  

#remote-control-yesremote li#rec a {
	left: 53px;
	top: 721px;
	width: 45px;
	height: 38px;
	background: url(${base_url}/rec.png) no-repeat
}

#remote-control-yesremote li#rec a:hover {
	background-image: url(${base_url}/rec.png);
	background-repeat: no-repeat;
	background-position: 0 -43px
}  

#remote-control-yesremote li#forward a {
	left: 153px;
	top: 676px;
	width: 45px;
	height: 38px;
	background: url(${base_url}/forward.png) no-repeat
}

#remote-control-yesremote li#forward a:hover {
	background-image: url(${base_url}/forward.png);
	background-repeat: no-repeat;
	background-position: 0 -43px
}  

#remote-control-yesremote li#pause a {
	left: 153px;
	top: 721px;
	width: 45px;
	height: 38px;
	background: url(${base_url}/pause.png) no-repeat
}

#remote-control-yesremote li#pause a:hover {
	background-image: url(${base_url}/pause.png);
	background-repeat: no-repeat;
	background-position: 0 -38px
}  

  `;
}

function getRemoteHtml_yesremote(config){
 const template = config.remote_template;
 return `
    
 <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-yesremote">
				<h2>
					Power and Source
				</h2>
				<ul>
					<li id="tvpower" class="myButton-${config.remote_template}"><a href="#" title="TV power"><span>tvpower</span></a></li>
					<li id="yespower" class="myButton-${config.remote_template}"><a href="#" title="YES power"><span>yespower</span></a></li>
					<li id="amppower" class="myButton-${config.remote_template}"><a href="#" title="AMP power"><span>amppower</span></a></li>
					<li id="av" class="myButton-${config.remote_template}"><a href="#" title="AV"><span>av</span></a></li>					
					<li id="in" class="myButton-${config.remote_template}"><a href="#" title="IN"><span>in</span></a></li>					
					
				</ul>

                <h2>
				     Numbers
			    </h2>
				<ul>
					<li id="button1" class="myButton-${config.remote_template}"><a href="#" title="1"><span>button1</span></a></li>					
					<li id="button2" class="myButton-${config.remote_template}"><a href="#" title="2"><span>button2</span></a></li>					
					<li id="button3" class="myButton-${config.remote_template}"><a href="#" title="3"><span>button3</span></a></li>					
					<li id="button4" class="myButton-${config.remote_template}"><a href="#" title="4"><span>button4</span></a></li>					
					<li id="button5" class="myButton-${config.remote_template}"><a href="#" title="5"><span>button5</span></a></li>					
					<li id="button6" class="myButton-${config.remote_template}"><a href="#" title="6"><span>button6</span></a></li>					
					<li id="button7" class="myButton-${config.remote_template}"><a href="#" title="7"><span>button7</span></a></li>					
					<li id="button8" class="myButton-${config.remote_template}"><a href="#" title="8"><span>button8</span></a></li>					
					<li id="button9" class="myButton-${config.remote_template}"><a href="#" title="9"><span>button9</span></a></li>					
					<li id="button0" class="myButton-${config.remote_template}"><a href="#" title="0"><span>button0</span></a></li>					
					<li id="vod" class="myButton-${config.remote_template}"><a href="#" title="VOD"><span>vod</span></a></li>					
					<li id="mytv" class="myButton-${config.remote_template}"><a href="#" title="myTV"><span>mytv</span></a></li>					
				</ul>
				<h2>
					Volume and Channels
				</h2>
				<u1>
					<li id="volumeup" class="myButton-${config.remote_template}"><a href="#" title="Volume +"><span>volumeup</span></a></li>					
					<li id="volumedown" class="myButton-${config.remote_template}"><a href="#" title="Volume -"><span>volumedown</span></a></li>					
					<li id="channelup" class="myButton-${config.remote_template}"><a href="#" title="Channel +"><span>channelup</span></a></li>					
					<li id="channeldown" class="myButton-${config.remote_template}"><a href="#" title="Channel -"><span>channeldown</span></a></li>					
					<li id="mute" class="myButton-${config.remote_template}"><a href="#" title="Mute"><span>mute</span></a></li>					
					<li id="return" class="myButton-${config.remote_template}"><a href="#" title="Return"><span>return</span></a></li>					
				</u1>
				<h2>
					Navigation
				</h2>
				<u1>
					<li id="clickdown" class="myButton-${config.remote_template}"><a href="#" title="Down"><span>clickdown</span></a></li>					
					<li id="clickup" class="myButton-${config.remote_template}"><a href="#" title="Up"><span>clickup</span></a></li>					
					<li id="clickleft" class="myButton-${config.remote_template}"><a href="#" title="left"><span>clickleft</span></a></li>					
					<li id="clickright" class="myButton-${config.remote_template}"><a href="#" title="Right"><span>clickright</span></a></li>					
					<li id="ok" class="myButton-${config.remote_template}"><a href="#" title="OK"><span>ok</span></a></li>					
					<li id="info" class="myButton-${config.remote_template}"><a href="#" title="?"><span>info</span></a></li>					
					<li id="plus" class="myButton-${config.remote_template}"><a href="#" title="+"><span>plus</span></a></li>					
					<li id="table" class="myButton-${config.remote_template}"><a href="#" title="Info"><span>table</span></a></li>					
					<li id="schedule" class="myButton-${config.remote_template}"><a href="#" title="Schedule"><span>schedule</span></a></li>					
				</u1>
				<h2>
					DVR
				</h2>
				<u1>
					<li id="orange" class="myButton-${config.remote_template}"><a href="#" title="Orange"><span>orange</span></a></li>					
					<li id="green" class="myButton-${config.remote_template}"><a href="#" title="Green"><span>green</span></a></li>					
					<li id="yellow" class="myButton-${config.remote_template}"><a href="#" title="Yellow"><span>yellow</span></a></li>					
					<li id="blue" class="myButton-${config.remote_template}"><a href="#" title="Blue"><span>blue</span></a></li>					
					<li id="rewind" class="myButton-${config.remote_template}"><a href="#" title="Rewind"><span>rewind</span></a></li>					
					<li id="play" class="myButton-${config.remote_template}"><a href="#" title="Play"><span>play</span></a></li>					
					<li id="forward" class="myButton-${config.remote_template}"><a href="#" title="Forward"><span>plus</span></a></li>					
					<li id="rec" class="myButton-${config.remote_template}"><a href="#" title="Record"><span>forward</span></a></li>					
					<li id="stop" class="myButton-${config.remote_template}"><a href="#" title="Stop"><span>stop</span></a></li>					
					<li id="pause" class="myButton-${config.remote_template}"><a href="#" title="Pause"><span>pause</span></a></li>					
				</u1>


			</div>	
		</div>

`;
}