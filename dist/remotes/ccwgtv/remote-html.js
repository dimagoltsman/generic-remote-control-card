function getRemoteStyle_ccwgtv(config) {

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
            font-family: "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif;
        }
        
        .container {
            width: 224px;
            margin: 0 auto
        }
        
        #remote-control-ccwgtv {
            position: relative;
            background: url(${base_url}/remote.png) no-repeat;
            width: 178px;
            height: 559px;
        }
        
        span {
            display: none;
        }
        
        li {
            display: inline-block;
        }
        
        ul a {
            display: inline-block;
            position: absolute;
            width: 29px;
            height: 29px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: contain;
            border-radius: 50%;
            transition: opacity 0.3s ease-in-out;
        }
        
        ul a:hover,
        ul a:focus,
        ul a:active {
            opacity: 0.3;
        }
        
        #remote-control-ccwgtv ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
        }
        
        #top a {
            top: 15px;
            background-image: url(${base_url}/top.png);
        }
        
        #bottom a,
        #ok a,
        #top a {
            left: 68px;
        }
        
        #bottom a {
            top: 117px;
            background-image: url(${base_url}/bottom.png);
        }
        
        
        #clickleft a,
        #clickright a,
        #ok a {
            top: 63px;
        }
        
        #ok a {
            background-image: url(${base_url}/ok.png);
        }
        
        #clickleft a {
            left: 18px;
            background-image: url(${base_url}/clickleft.png);
        }
        
        #clickright a {
            left: 119px;
            background-image: url(${base_url}/clickright.png);
        }
        
        #back a {
            left: 27px;
            top: 174px;
            width: 26px;
            background-image: url(${base_url}/go_back.png);
        }
        
        #assistant a {
            left: 107px;
            top: 167px;
            width: 39px;
            height: 41px;
            background-image: url(${base_url}/assistant.png);
        }
        
        
        #home a,
        #mute a {
            top: 240px;
            width: 26px;
            height: 41px;
        }
        
        #home a {
            left: 30px;
            background-image: url(${base_url}/home.png);
        }
        
        #mute a {
            left: 113px;
            background-image: url(${base_url}/mute.png);
        }
        
        #youtube a,
        #netflix a {
            top: 313px;
            width: 45px;
            height: 41px;
        }
        
        #youtube a {
            left: 20px;
            background-image: url(${base_url}/youtube.png);
        }
        
        #netflix a {
            left: 109px;
            background-image: url(${base_url}/netflix.png);
        }
        
        
        #power a,
        #source a {
            top: 388px;
            transform: scale(0.8);
        }
        
        #power a {
            left: 30px;
            background-image: url(${base_url}/power.png);
        }
        
        #source a {
            left: 118px;
            background-image: url(${base_url}/source.png);
        }
        
        .audio-controls {
            position: absolute;
            left: 168px;
            top: 100px;
            width: 40px;
            background: #b8b7b1;
            border-radius: 0;
            border-top-right-radius: 14px;
            border-bottom-right-radius: 14px;
            height: 70px;
            transform: rotate(-1.5deg);
        }
        
        #volumeup a,
        #volumedown a {
            left: 5.5px;
            width: 25px;
        }
        
        #volumeup a {
            top: 5px;
            background-image: url(${base_url}/volume.png);
        }
        
        #volumedown a {
            bottom: 5px;
            background-image: url(${base_url}/volumedown.png);
        }
    `;
}

function getRemoteHtml_ccwgtv(config){
    const template = config.remote_template;

    return `
        <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-ccwgtv">
				<ul>
					<li id="power" class="myButton-${template}"><a href="#" title="Power"><span>Power</span></a></li>
					<li id="assistant" class="myButton-${template}"><a href="#" title="assistant"><span>assistant</span></a></li>
					<li id="home" class="myButton-${template}"><a href="#" title="home"><span>home</span></a></li>
					<li id="back" class="myButton-${template}"><a href="#" title="Go back to beginning"><span>back</span></a></li>
					<li id="mute" class="myButton-${template}"><a href="#" title="Mute"><span>mute</span></a></li>
					<li id="youtube" class="myButton-${template}"><a href="#" title="Start Youtube"><span>youtube</span></a></li>
					<li id="netflix" class="myButton-${template}"><a href="#" title="Start Netflix"><span>netflix</span></a></li>
					<li id="source" class="myButton-${template}"><a href="#" title="Select Input Source"><span>source</span></a></li>
					<li id="clickleft" class="myButton-${template}"><a href="#" title="clickleft"><span>clickleft</span></a></li>
					<li id="clickright" class="myButton-${template}"><a href="#" title="clickright"><span>clickright</span></a></li>
					<li class="myButton-${template}" id="back"><a href="#" title="Go back to beginning"><span>back</span></a></li>
					<li class="myButton-${template}" id="top"><a href="#" title="Top of gallery"><span>Top of Gallery</span></a></li>
					<li class="myButton-${template}" id="bottom"><a href="#" title="Bottom of gallery"><span>Bottom of Gallery</span></a></li>
					<li class="myButton-${template}" id="ok"><a href="#" title="OK - start slideshow"><span>OK - start slideshow</span></a></li>
				</ul>
				<ul class="audio-controls">
				    <li id="volumeup" class="myButton-${template}"><a href="#" title="volume"><span>volume</span></a></li>
					<li id="volumedown" class="myButton-${template}"><a href="#" title="volumedown"><span>volumedown</span></a></li>
                </ul>
			</div>	
		</div>
    `;
}