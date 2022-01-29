function getRemoteStyle_jblsoundbar(config) {
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

#remote-control-jblsoundbar {
	position: relative;
	background: url(${base_url}/jblsoundbar_remote.png) no-repeat;
	width: 327px;
	height: 692px
}

#remote-control-jblsoundbar h2,
#remote-control-jblsoundbar span {
	position: absolute;
	left: 5000px
}

#remote-control-jblsoundbar ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#power a,
#bluetooth a,
#source a,
#aux a,
#optical a,
#feedback a,
#minus a,
#mute a,
#plus a,
#bassminus a,
#bassplus a,
#surround a,
#stereo a,
#harman a {
	position: absolute;
	display: block
}

#remote-control-jblsoundbar li#power a {
    left: 56px;
    top: 75px;
    width: 38px;
    height: 38px;	
	background: url(${base_url}/power.png) no-repeat
}

#remote-control-jblsoundbar li#bluetooth a {
    left: 147px;
    top: 74px;
    width: 38px;
    height: 38px;	
	background: url(${base_url}/bluetooth.png) no-repeat
}

#remote-control-jblsoundbar li#source a {
    left: 240px;
    top: 74px;
    width: 38px;
    height: 38px;	
	background: url(${base_url}/source.png) no-repeat
}

#remote-control-jblsoundbar li#aux a {
    left: 56px;
    top: 158px;
    width: 38px;
    height: 38px;	
	background: url(${base_url}/auxiliar.png) no-repeat
}

#remote-control-jblsoundbar li#optical a {
    left: 148px;
    top: 157px;
    width: 38px;
    height: 38px;	
	background: url(${base_url}/optical.png) no-repeat
}

#remote-control-jblsoundbar li#feedback a {
    left: 233px;
    top: 157px;
    width: 46px;
    height: 38px;	
	background: url(${base_url}/feedback.png) no-repeat
}

#remote-control-jblsoundbar li#minus a {
    left: 55px;
    top: 239px;
    width: 38px;
    height: 38px;	
	background: url(${base_url}/minus.png) no-repeat
}

#remote-control-jblsoundbar li#mute a {
    left: 148px;
    top: 239px;
    width: 38px;
    height: 38px;	
	background: url(${base_url}/mute.png) no-repeat
}

#remote-control-jblsoundbar li#plus a {
    left: 238px;
    top: 239px;
    width: 38px;
    height: 38px;	
	background: url(${base_url}/plus.png) no-repeat
}

#remote-control-jblsoundbar li#bassminus a {
    left: 55px;
    top: 322px;
    width: 38px;
    height: 38px;	
	background: url(${base_url}/minus.png) no-repeat
}

#remote-control-jblsoundbar li#bassplus a {
    left: 238px;
    top: 322px;
    width: 38px;
    height: 38px;	
	background: url(${base_url}/plus.png) no-repeat
}

#remote-control-jblsoundbar li#surround a {
    left: 55px;
    top: 405px;
    width: 38px;
    height: 38px;	
	background: url(${base_url}/surround.png) no-repeat
}

#remote-control-jblsoundbar li#stereo a {
    left: 147px;
    top: 406px;
    width: 38px;
    height: 38px;	
	background: url(${base_url}/stereo.png) no-repeat
}

#remote-control-jblsoundbar li#harman a {
    left: 238px;
    top: 406px;
    width: 38px;
    height: 38px;	
	background: url(${base_url}/harman.png) no-repeat
}

#remote-control-jblsoundbar li#power a:hover {
	background: url(${base_url}/power_over.png) no-repeat 0px 0px
}

#remote-control-jblsoundbar li#bluetooth a:hover {
	background: url(${base_url}/bluetooth_over.png) no-repeat 0px 0px
}

#remote-control-jblsoundbar li#source a:hover {
	background: url(${base_url}/source_over.png) no-repeat 0px 0px
}

#remote-control-jblsoundbar li#aux a:hover {
	background: url(${base_url}/auxiliar_over.png) no-repeat 0px 0px
}

#remote-control-jblsoundbar li#optical a:hover {
	background: url(${base_url}/optical_over.png) no-repeat 0px 0px
}

#remote-control-jblsoundbar li#feedback a:hover {
	background: url(${base_url}/feedback_over.png) no-repeat 0px 0px
}  

#remote-control-jblsoundbar li#minus a:hover {
	background: url(${base_url}/minus_over.png) no-repeat 0px 0px
}  

#remote-control-jblsoundbar li#mute a:hover {
	background: url(${base_url}/mute_over.png) no-repeat 0px 0px
}  

#remote-control-jblsoundbar li#plus a:hover {
	background: url(${base_url}/plus_over.png) no-repeat 0px 0px
}

#remote-control-jblsoundbar li#bassminus a:hover {
	background: url(${base_url}/minus_over.png) no-repeat 0px 0px
}

#remote-control-jblsoundbar li#bassplus a:hover {
	background: url(${base_url}/plus_over.png) no-repeat 0px 0px
}  

#remote-control-jblsoundbar li#surround a:hover {
	background: url(${base_url}/surround_over.png) no-repeat 0px 0px
}  

#remote-control-jblsoundbar li#stereo a:hover {
	background: url(${base_url}/stereo_over.png) no-repeat 0px 0px
}

#remote-control-jblsoundbar li#harman a:hover {
	background: url(${base_url}/harman_over.png) no-repeat 0px 0px
}
  `;
}

function getRemoteHtml_jblsoundbar(config){
 const template = config.remote_template;
 return `

 <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-jblsoundbar">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton-${template}"><a href="#" title="Power"><span>Power</span></a></li>
					<li id="bluetooth" class="myButton-${template}"><a href="#" title="Bluetooth"><span>Bluetooth</span></a></li>
					<li id="source" class="myButton-${template}"><a href="#" title="Source"><span>Source</span></a></li>
					<li id="aux" class="myButton-${template}"><a href="#" title="Aux"><span>Aux</span></a></li>
					<li id="optical" class="myButton-${template}"><a href="#" title="Optical"><span>Optical</span></a></li>
					<li id="feedback" class="myButton-${template}"><a href="#" title="Feedback"><span>Feedback</span></a></li>
					<li id="minus" class="myButton-${template}"><a href="#" title="Minus"><span>Minus</span></a></li>
					<li id="mute" class="myButton-${template}"><a href="#" title="Mute"><span>Mute</span></a></li>
					<li id="plus" class="myButton-${template}"><a href="#" title="Plus"><span>Plus</span></a></li>
					<li id="bassminus" class="myButton-${template}"><a href="#" title="Minus"><span>Minus</span></a></li>
					<li id="bassplus" class="myButton-${template}"><a href="#" title="Plus"><span>Plus</span></a></li>
					<li id="surround" class="myButton-${template}"><a href="#" title="Surround"><span>Surround</span></a></li>
					<li id="stereo" class="myButton-${template}"><a href="#" title="Stereo"><span>Stereo</span></a></li>
					<li id="harman" class="myButton-${template}"><a href="#" title="Harman"><span>Harman</span></a></li>					
				</ul>
			</div>	
		</div>

`;
}
