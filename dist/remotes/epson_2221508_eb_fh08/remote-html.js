function getRemoteStyle_epson_2221508_eb_fh08(config) {
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
	width: 287px;
	margin: 0 auto
}

#remote-control-epson_2221508_eb_fh08 {
	position: relative;
	background: url(${base_url}/remote-background.png) no-repeat;
	width: 287px;
	height: 767px
}

#remote-control-epson_2221508_eb_fh08 h2 {
	position: absolute;
	left: -5000px
}

#remote-control-epson_2221508_eb_fh08 div {
	position: absolute;
}


#remote-control-epson_2221508_eb_fh08 div#power {
	left: 8.75mm;
	top: 9.5mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_blue_power.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#power:active {
	background: url(${base_url}/btn_blue_power_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#sourcesearch {
	left: 45.75mm;
	top: 9.5mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#sourcesearch:active {
	background: url(${base_url}/btn_white_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#hdmi {
	left: 8.75mm;
	top: 20mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#hdmi:active {
	background: url(${base_url}/btn_white_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#computer {
	left: 27.75mm;
	top: 20mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#computer:active {
	background: url(${base_url}/btn_white_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#usb {
	left: 45.75mm;
	top: 20mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#usb:active {
	background: url(${base_url}/btn_white_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#lan {
	left: 45.75mm;
	top: 30.5mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#lan:active {
	background: url(${base_url}/btn_white_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#one {
	left: 8.75mm;
	top: 44mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_1.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#one:active {
	background: url(${base_url}/btn_1_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#two {
	left: 27.75mm;
	top: 44mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_2.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#two:active {
	background: url(${base_url}/btn_2_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#three {
	left: 45.75mm;
	top: 44mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_3.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#three:active {
	background: url(${base_url}/btn_3_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#four {
	left: 8.75mm;
	top: 54.5mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_4.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#four:active {
	background: url(${base_url}/btn_4_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#five {
	left: 27.75mm;
	top: 54.5mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_5.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#five:active {
	background: url(${base_url}/btn_5_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#six {
	left: 45.75mm;
	top: 54.5mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_6.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#six:active {
	background: url(${base_url}/btn_6_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#seven {
	left: 8.75mm;
	top: 65mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_7.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#seven:active {
	background: url(${base_url}/btn_7_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#eight {
	left: 27.75mm;
	top: 65mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_8.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#eight:active {
	background: url(${base_url}/btn_8_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#nine {
	left: 45.75mm;
	top: 65mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_9.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#nine:active {
	background: url(${base_url}/btn_9_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#num {
	left: 8.75mm;
	top: 75.5mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_num.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#num:active {
	background: url(${base_url}/btn_num_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#zeroall {
	left: 27.75mm;
	top: 75.5mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_0_all.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#zeroall:active {
	background: url(${base_url}/btn_0_all_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#id {
	left: 45.75mm;
	top: 75.5mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_id.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#id:active {
	background: url(${base_url}/btn_id_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#menu {
	left: 11mm;	
	top: 89.75mm;
	width: 37px;
	height: 37px;	
	background: url(${base_url}/btn_circle_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#menu:active {
	background: url(${base_url}/btn_circle_white_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#esc {
	left: 54.75mm;	
	top: 89.75mm;
	width: 37px;
	height: 37px;	
	background: url(${base_url}/btn_circle_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#esc:active {
	background: url(${base_url}/btn_circle_white_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#up {
	left: 26.75mm;
	top: 87.25mm;
	width: 83px;
	height: 39px;
	background: url(${base_url}/btn_top.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#up:active {
	background: url(${base_url}/btn_top_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#left {
	left: 19.9mm;
	top: 93.9mm;
	width: 39px;
	height: 83px;
	background: url(${base_url}/btn_left.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#left:active {
	background: url(${base_url}/btn_left_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#enter {
	left: 29.5mm;
	top: 96.25mm;
	width: 63px;
	height: 62px;
	background: url(${base_url}/btn_enter.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#enter:active {
	background: url(${base_url}/btn_enter_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#right {
	left: 45.5mm;
	top: 93.9mm;
	width: 39px;
	height: 83px;
	background: url(${base_url}/btn_right.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#right:active {
	background: url(${base_url}/btn_right_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#down {
	left: 26.75mm;
	top: 111.75mm;
	width: 83px;
	height: 39px;
	background: url(${base_url}/btn_bottom.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#down:active {
	background: url(${base_url}/btn_bottom_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#user {
	left: 11mm;	
	top: 113.35mm;
	width: 37px;
	height: 37px;	
	background: url(${base_url}/btn_circle_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#user:active {
	background: url(${base_url}/btn_circle_white_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#default {
	left: 54.75mm;	
	top: 113.35mm;
	width: 37px;
	height: 37px;	
	background: url(${base_url}/btn_circle_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#default:active {
	background: url(${base_url}/btn_circle_white_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#colormode {
	left: 11.7mm;
	top: 129.85mm;
	width: 61px;
	height: 30px;
	background: url(${base_url}/btn_u_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#colormode:active {
	background: url(${base_url}/btn_u_white_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#aspect {
	left: 11.7mm;
	top: 139mm;
	width: 61px;
	height: 30px;
	background: url(${base_url}/btn_d_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#aspect:active {
	background: url(${base_url}/btn_d_white_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#ezoomup {
	left: 30.3mm;
	top: 129.85mm;
	width: 61px;
	height: 30px;
	background: url(${base_url}/btn_u_zoom.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#ezoomup:active {
	background: url(${base_url}/btn_u_zoom_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#ezoomdown {
	left: 30.3mm;
	top: 139mm;
	width: 61px;
	height: 30px;
	background: url(${base_url}/btn_d_zoom.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#ezoomdown:active {
	background: url(${base_url}/btn_d_zoom_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#volumeup {
	left: 49mm;
	top: 129.85mm;
	width: 61px;
	height: 30px;
	background: url(${base_url}/btn_u_volume.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#volumeup:active {
	background: url(${base_url}/btn_u_volume_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#volumedown {
	left: 49mm;
	top: 139mm;
	width: 61px;
	height: 30px;
	background: url(${base_url}/btn_d_volume.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#volumedown:active {
	background: url(${base_url}/btn_d_volume_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#avmute {
	left: 8.75mm;
	top: 150.5mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#avmute:active {
	background: url(${base_url}/btn_white_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#split {
	left: 27.75mm;
	top: 150.5mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#split:active {
	background: url(${base_url}/btn_white_down.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#freeze {
	left: 45.75mm;
	top: 150.5mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_white.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#freeze:active {
	background: url(${base_url}/btn_white_down.png) no-repeat
}


#remote-control-epson_2221508_eb_fh08 div#home {
	left: 45.75mm;
	top: 161mm;
	width: 81px;
	height: 47px;
	background: url(${base_url}/btn_home.png) no-repeat
}

#remote-control-epson_2221508_eb_fh08 div#home:active {
	background: url(${base_url}/btn_home_down.png) no-repeat
}


  `;
}

function getRemoteHtml_epson_2221508_eb_fh08(config){
 const template = config.remote_template;
 return `
	<div class="container">
		<div style="text-align:center">
		<h1>${config.name}</h1>
		</div>
		<div id="remote-control-epson_2221508_eb_fh08">
			<h2>
				Main navigation
			</h2>
			<div id="power" class="myButton-${template}" title="Power"></div>
			<div id="sourcesearch" class="myButton-${template}" title="Source Search"></div>
			
			<div id="hdmi" class="myButton-${template}" title="HDMI"></div>
			<div id="computer" class="myButton-${template}" title="Computer"></div>
			<div id="usb" class="myButton-${template}" title="USB"></div>
			
			<div id="lan" class="myButton-${template}" title="LAN"></div>
			
			<div id="one" class="myButton-${template}" title="1"></div>
			<div id="two" class="myButton-${template}" title="2"></div>
			<div id="three" class="myButton-${template}" title="3"></div>

			<div id="four" class="myButton-${template}" title="4"></div>
			<div id="five" class="myButton-${template}" title="5"></div>
			<div id="six" class="myButton-${template}" title="6"></div>

			<div id="seven" class="myButton-${template}" title="7"></div>
			<div id="eight" class="myButton-${template}" title="8"></div>
			<div id="nine" class="myButton-${template}" title="9"></div>

			<div id="num" class="myButton-${template}" title="Num"></div>
			<div id="zeroall" class="myButton-${template}" title="0/All"></div>
			<div id="id" class="myButton-${template}" title="ID"></div>
			
			<div id="menu" class="myButton-${template}" title="Menu"></div>
			<div id="esc" class="myButton-${template}" title="Esc"></div>
			<div id="up" class="myButton-${template}" title="Up"></div>
			<div id="left" class="myButton-${template}" title="Left"></div>
			<div id="enter" class="myButton-${template}" title="Enter"></div>
			<div id="right" class="myButton-${template}" title="Right"></div>
			<div id="down" class="myButton-${template}" title="Down"></div>
			<div id="user" class="myButton-${template}" title="User"></div>
			<div id="default" class="myButton-${template}" title="Default"></div>
			
			<div id="colormode" class="myButton-${template}" title="Color Mode"></div>
			<div id="ezoomup" class="myButton-${template}" title="E-Zoom Up"></div>
			<div id="volumeup" class="myButton-${template}" title="Volume Up"></div>

			<div id="aspect" class="myButton-${template}" title="Aspect"></div>
			<div id="ezoomdown" class="myButton-${template}" title="E-Zoom Down"></div>
			<div id="volumedown" class="myButton-${template}" title="Volume Down"></div>
			
			<div id="avmute" class="myButton-${template}" title="AV/Mute"></div>
			<div id="split" class="myButton-${template}" title="Split"></div>
			<div id="freeze" class="myButton-${template}" title="Freeze"></div>

			<div id="home" class="myButton-${template}" title="Home"></div>
			
		</div>
	</div>
`;
}
