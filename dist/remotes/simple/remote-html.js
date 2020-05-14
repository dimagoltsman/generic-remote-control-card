function getRemoteStyle_simple(config) {
   
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
	width: 224px;
	margin: 0 auto
}

#remote-control-simple {
	position: relative;
	background: url(${base_url}/remote-back2.png) no-repeat;
	width: 224px;
	height: 507px
}

#remote-control-simple h2,
#remote-control-simple span {
	position: absolute;
	left: -5000px
}

#remote-control-simple ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#power a,
#volmin a,
#volplus a,
#mute a,
#source a,
#button1 a,
#button2 a,
#button3 a,
#button4 a,
#button5 a,
#button6 a,
#button7 a,
#button8 a,
#button9 a,
#buttonClear a,
#button0 a,
#buttonEnter a,
#exit a,
#info a,
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

#remote-control-simple li#power a {
	left: 33px;
	top: 29px;
	width: 37px;
	height: 37px;
	background: url(${base_url}/remote-home.jpg) no-repeat
}

#remote-control-simple li#power a:hover {
	background-image: url(${base_url}/remote-home.jpg);
	background-repeat: no-repeat;
	background-position: 0 -37px
}


#remote-control-simple li#source a {
	left: 154px;
	top: 29px;
	width: 37px;
	height: 37px;
	background: url(${base_url}/remote-sitemap.jpg) no-repeat
}

#remote-control-simple li#source a:hover {
	background-image: url(${base_url}/remote-sitemap.jpg);
	background-repeat: no-repeat;
	background-position: 0 -37px
}

#remote-control-simple li#volmin a,
#remote-control-simple li#volplus a,
#remote-control-simple li#mute a,
#remote-control-simple li#button1 a,
#remote-control-simple li#button2 a,
#remote-control-simple li#button3 a,
#remote-control-simple li#button4 a,
#remote-control-simple li#button5 a,
#remote-control-simple li#button6 a,
#remote-control-simple li#button7 a,
#remote-control-simple li#button8 a,
#remote-control-simple li#button9 a,
#remote-control-simple li#buttonClear a,
#remote-control-simple li#button0 a,
#remote-control-simple li#buttonEnter a {
	width: 41px;
	height: 21px;
	background: url(${base_url}/remote-button.jpg) no-repeat
}

#remote-control-simple li#volmin a {
	left: 91px;
	top: 40px
}

#remote-control-simple li#volplus a {
	left: 91px;
	top: 10px
}

#remote-control-simple li#mute a {
	left: 91px;
	top: 72px
}

#remote-control-simple li#button1 a {
	left: 38px;
	top: 114px
}

#remote-control-simple li#button2 a {
	left: 91px;
	top: 114px
}

#remote-control-simple li#button3 a {
	left: 145px;
	top: 114px
}

#remote-control-simple li#button4 a {
	left: 38px;
	top: 155px
}

#remote-control-simple li#button5 a {
	left: 91px;
	top: 155px
}

#remote-control-simple li#button6 a {
	left: 145px;
	top: 155px
}

#remote-control-simple li#button7 a {
	left: 38px;
	top: 196px
}

#remote-control-simple li#button8 a {
	left: 91px;
	top: 196px
}

#remote-control-simple li#button9 a {
	left: 145px;
	top: 196px
}

#remote-control-simple li#buttonClear a {
	left: 38px;
	top: 237px
}

#remote-control-simple li#button0 a {
	left: 91px;
	top: 237px
}

#remote-control-simple li#buttonEnter a {
	left: 145px;
	top: 237px
}

#remote-control-simple li#volmin a:hover,
#remote-control-simple li#volplus a:hover,
#remote-control-simple li#mute a:hover,
#remote-control-simple li#button1 a:hover,
#remote-control-simple li#button2 a:hover,
#remote-control-simple li#button3 a:hover,
#remote-control-simple li#button4 a:hover,
#remote-control-simple li#button5 a:hover,
#remote-control-simple li#button6 a:hover,
#remote-control-simple li#button7 a:hover,
#remote-control-simple li#button8 a:hover,
#remote-control-simple li#button9 a:hover,
#remote-control-simple li#buttonClear a:hover,
#remote-control-simple li#button0 a:hover,
#remote-control-simple li#buttonEnter a:hover {
	background-image: url(${base_url}/remote-button.jpg);
	background-repeat: no-repeat;
	background-position: 0 -21px
}

#remote-control-simple li#exit a {
	width: 29px;
	height: 30px;
	left: 41px;
	top: 331px;
	background: url(${base_url}/remote-circle3.jpg) no-repeat 0 -19px
}

#remote-control-simple li#info a {
	width: 33px;
	height: 23px;
	left: 74px;
	top: 312px;
	background: url(${base_url}/remote-circle3.jpg) no-repeat -33px 0px
}

#remote-control-simple li#menu a {
	width: 33px;
	height: 23px;
	left: 116px;
	top: 312px;
	background: url(${base_url}/remote-circle3.jpg) no-repeat -75px 0
}

#remote-control-simple li#back a {
	width: 29px;
	height: 30px;
	left: 154px;
	top: 332px;
	background: url(${base_url}/remote-circle3.jpg) no-repeat -113px -20px
}

#remote-control-simple li#left a {
	width: 25px;
	height: 59px;
	left: 58px;
	top: 365px;
	background: url(${base_url}/remote-circle3.jpg) no-repeat -17px -53px
}

#remote-control-simple li#right a {
	width: 23px;
	height: 59px;
	left: 139px;
	top: 365px;
	background: url(${base_url}/remote-circle3.jpg) no-repeat -98px -53px
}

#remote-control-simple li#top a {
	width: 62px;
	height: 23px;
	left: 80px;
	top: 342px;
	background: url(${base_url}/remote-circle3.jpg) no-repeat -39px -30px
}

#remote-control-simple li#bottom a {
	width: 61px;
	height: 22px;
	left: 80px;
	top: 424px;
	background: url(${base_url}/remote-circle3.jpg) no-repeat -39px -112px
}

#remote-control-simple li#ok a {
	width: 44px;
	height: 46px;
	left: 89px;
	top: 371px;
	background: url(${base_url}/remote-circle3.jpg) no-repeat -48px -59px
}

#remote-control-simple li#exit a:hover {
	background: url(${base_url}/remote-circle3.jpg) no-repeat 0 -157px
}

#remote-control-simple li#info a:hover {
	background: url(${base_url}/remote-circle3.jpg) no-repeat -33px -138px
}

#remote-control-simple li#menu a:hover {
	background: url(${base_url}/remote-circle3.jpg) no-repeat -75px -138px
}

#remote-control-simple li#back a:hover {
	background: url(${base_url}/remote-circle3.jpg) no-repeat -113px -158px
}

#remote-control-simple li#left a:hover {
	background: url(${base_url}/remote-circle3.jpg) no-repeat -17px -191px
}

#remote-control-simple li#right a:hover {
	background: url(${base_url}/remote-circle3.jpg) no-repeat -98px -191px
}

#remote-control-simple li#top a:hover {
	background: url(${base_url}/remote-circle3.jpg) no-repeat -39px -168px
}

#remote-control-simple li#bottom a:hover {
	background: url(${base_url}/remote-circle3.jpg) no-repeat -39px -250px
}

#remote-control-simple li#ok a:hover {
	background: url(${base_url}/remote-circle3.jpg) no-repeat -48px -197px
}
    
  `;
}

function getRemoteHtml_simple(config){return `
    
 <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-simple">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton-simple"><a href="#" title="Power"><span>Power</span></a></li>
					<li id="volmin" class="myButton-simple"><a href="#" title="Vol Min"><span>Vol Min</span></a></li>
					<li id="volplus" class="myButton-simple"><a href="#" title="Vol Plus"><span>Vol Plus</span></a></li>
					<li id="mute" class="myButton-simple"><a href="#" title="Vol Mute"><span>Vol Mute</span></a></li>
					<li id="source" class="myButton-simple"><a href="#" title="Source"><span>Source</span></a></li>
				</ul>
				<h2>
					Select a site section
				</h2>
				<ul>
					<li id="button1"      class="myButton-simple"><a href="#" title="Section 1" ><span>Section 1</span></a></li>
					<li id="button2"      class="myButton-simple"><a href="#" title="Section 2"><span>Section 2</span></a></li>
					<li id="button3"      class="myButton-simple"><a href="#" title="Section 3"><span>Section 3</span></a></li>
					<li id="button4"      class="myButton-simple"><a href="#" title="Section 4"><span>Section 4</span></a></li>
					<li id="button5"      class="myButton-simple"><a href="#" title="Section 5"><span>Section 5</span></a></li>
					<li id="button6"      class="myButton-simple"><a href="#" title="Section 6"><span>Section 6</span></a></li>
					<li id="button7"      class="myButton-simple"><a href="#" title="Section 7"><span>Section 7</span></a></li>
					<li id="button8"      class="myButton-simple"><a href="#" title="Section 8"><span>Section 8</span></a></li>
					<li id="button9"      class="myButton-simple"><a href="#" title="Section 9"><span>Section 9</span></a></li>
					<li id="buttonClear"  class="myButton-simple""><a href="#" title="Section 10"><span>Section 10</span></a></li>
					<li id="button0"      class="myButton-simple""><a href="#" title="Section 11"><span>Section 11</span></a></li>
					<li id="buttonEnter"  class="myButton-simple""><a href="#" title="Section 12"><span>Section 12</span></a></li>
				</ul>
				<h2>
					Photo gallery exiter
				</h2>
				<ul>
					<li class="myButton-simple" id="exit"><a href="#" title="exit full gallery"><span>exit</span></a></li>
					<li class="myButton-simple" id="info"><a href="#" title="Info on gallery"><span>Info</span></a></li>
					<li class="myButton-simple" id="menu"><a href="#" title="Menu"><span>Menu</span></a></li>
					<li class="myButton-simple" id="back"><a href="#" title="Go back to beginning"><span>back</span></a></li>
					<li class="myButton-simple" id="left"><a href="#" title="Left"><span>Left</span></a></li>
					<li class="myButton-simple" id="right"><a href="#" title="right"><span>right</span></a></li>
					<li class="myButton-simple" id="top"><a href="#" title="Top of gallery"><span>Top of Gallery</span></a></li>
					<li class="myButton-simple" id="bottom"><a href="#" title="Bottom of gallery"><span>Bottom of Gallery</span></a></li>
					<li class="myButton-simple" id="ok"><a href="#" title="OK - start slideshow"><span>OK - start slideshow</span></a></li>
				</ul>
			</div>	
		</div>

`;
}