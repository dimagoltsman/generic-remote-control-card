function getRemoteStyle_hisense_googletv(config) {
    const template = config.remote_template;
    const base_url = `/hacsfiles/generic-remote-control-card/remotes/${template}`;

    return `
        ha-card {
            background-color: transparent;
            box-shadow: var(--paper-material-elevation-0_-_box-shadow);
        }

        .container {
            width: 220px;
            margin: 0 auto;
        }

        #remote-control-hisense_googletv {
            position: relative;
            background: url(${base_url}/remote.png) no-repeat;
            background-size: contain;
            width: 200px;
            height: 873px;
            margin: auto;
        }

        #remote-control-hisense_googletv ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
        }

        #remote-control-hisense_googletv li a {
            position: absolute;
            display: block;
            border-radius: 50%;
            transition: background-color 0.2s ease;
            cursor: pointer;
        }

        #remote-control-hisense_googletv li a:hover,
        #remote-control-hisense_googletv li a:active {
            background-color: rgba(255, 255, 255, 0.25);
        }

        span { display: none; }

        /* Row 1: Power & Source */
        #power a {
            left: 27px; top: 38px;
            width: 34px; height: 34px;
        }
        #source a {
            left: 136px; top: 38px;
            width: 34px; height: 34px;
        }

        /* Row 2: Netflix, YouTube, Prime Video */
        #netflix a {
            left: 21px; top: 95px;
            width: 44px; height: 48px;
        }
        #youtube a {
            left: 75px; top: 95px;
            width: 44px; height: 48px;
        }
        #prime a {
            left: 128px; top: 95px;
            width: 44px; height: 48px;
        }

        /* Row 3: Disney+, Tubi, Favorites */
        #disney a {
            left: 21px; top: 155px;
            width: 44px; height: 48px;
        }
        #tubi a {
            left: 75px; top: 155px;
            width: 44px; height: 48px;
        }
        #favorites a {
            left: 128px; top: 155px;
            width: 44px; height: 48px;
        }

        /* Row 4: Profile, Google Assistant, Settings */
        #profile a {
            left: 30px; top: 243px;
            width: 28px; height: 28px;
        }
        #assistant a {
            left: 75px; top: 215px;
            width: 44px; height: 40px;
        }
        #settings a {
            left: 136px; top: 243px;
            width: 28px; height: 28px;
        }

        /* D-pad */
        #up a {
            left: 70px; top: 280px;
            width: 55px; height: 45px;
            border-radius: 28px 28px 8px 8px;
        }
        #left a {
            left: 30px; top: 322px;
            width: 45px; height: 55px;
            border-radius: 28px 8px 8px 28px;
        }
        #ok a {
            left: 78px; top: 330px;
            width: 40px; height: 40px;
        }
        #right a {
            left: 122px; top: 322px;
            width: 45px; height: 55px;
            border-radius: 8px 28px 28px 8px;
        }
        #down a {
            left: 70px; top: 375px;
            width: 55px; height: 45px;
            border-radius: 8px 8px 28px 28px;
        }

        /* Navigation row: Back, Home, Live TV */
        #back a {
            left: 30px; top: 427px;
            width: 28px; height: 28px;
        }
        #home a {
            left: 77px; top: 433px;
            width: 40px; height: 40px;
        }
        #livetv a {
            left: 136px; top: 427px;
            width: 28px; height: 28px;
        }

        /* Volume & Channel: top row */
        #volup a {
            left: 28px; top: 483px;
            width: 32px; height: 24px;
            border-radius: 8px;
        }
        #mute a {
            left: 83px; top: 505px;
            width: 28px; height: 28px;
        }
        #chup a {
            left: 138px; top: 483px;
            width: 28px; height: 24px;
            border-radius: 8px;
        }

        /* Volume & Channel: bottom row */
        #voldown a {
            left: 28px; top: 538px;
            width: 32px; height: 24px;
            border-radius: 8px;
        }
        #cc a {
            left: 83px; top: 540px;
            width: 28px; height: 22px;
            border-radius: 8px;
        }
        #chdown a {
            left: 138px; top: 538px;
            width: 28px; height: 24px;
            border-radius: 8px;
        }

        /* Bottom row: Menu, Play/Pause, 123 */
        #menu a {
            left: 28px; top: 580px;
            width: 34px; height: 28px;
            border-radius: 14px;
        }
        #playpause a {
            left: 81px; top: 580px;
            width: 34px; height: 28px;
        }
        #num123 a {
            left: 133px; top: 580px;
            width: 34px; height: 28px;
            border-radius: 14px;
        }
    `;
}

function getRemoteHtml_hisense_googletv(config) {
    const template = config.remote_template;

    return `
        <div class="container">
            <div style="text-align:center">
                <h1>${config.name}</h1>
            </div>
            <div id="remote-control-hisense_googletv">
                <ul>
                    <li id="power" class="myButton-${template}"><a href="#" title="Power"><span>Power</span></a></li>
                    <li id="source" class="myButton-${template}"><a href="#" title="Source"><span>Source</span></a></li>

                    <li id="netflix" class="myButton-${template}"><a href="#" title="Netflix"><span>Netflix</span></a></li>
                    <li id="youtube" class="myButton-${template}"><a href="#" title="YouTube"><span>YouTube</span></a></li>
                    <li id="prime" class="myButton-${template}"><a href="#" title="Prime Video"><span>Prime Video</span></a></li>

                    <li id="disney" class="myButton-${template}"><a href="#" title="Disney+"><span>Disney+</span></a></li>
                    <li id="tubi" class="myButton-${template}"><a href="#" title="Tubi"><span>Tubi</span></a></li>
                    <li id="favorites" class="myButton-${template}"><a href="#" title="Favorites"><span>Favorites</span></a></li>

                    <li id="profile" class="myButton-${template}"><a href="#" title="Profile"><span>Profile</span></a></li>
                    <li id="assistant" class="myButton-${template}"><a href="#" title="Google Assistant"><span>Google Assistant</span></a></li>
                    <li id="settings" class="myButton-${template}"><a href="#" title="Settings"><span>Settings</span></a></li>

                    <li id="up" class="myButton-${template}"><a href="#" title="Up"><span>Up</span></a></li>
                    <li id="left" class="myButton-${template}"><a href="#" title="Left"><span>Left</span></a></li>
                    <li id="ok" class="myButton-${template}"><a href="#" title="OK"><span>OK</span></a></li>
                    <li id="right" class="myButton-${template}"><a href="#" title="Right"><span>Right</span></a></li>
                    <li id="down" class="myButton-${template}"><a href="#" title="Down"><span>Down</span></a></li>

                    <li id="back" class="myButton-${template}"><a href="#" title="Back"><span>Back</span></a></li>
                    <li id="home" class="myButton-${template}"><a href="#" title="Home"><span>Home</span></a></li>
                    <li id="livetv" class="myButton-${template}"><a href="#" title="Live TV"><span>Live TV</span></a></li>

                    <li id="volup" class="myButton-${template}"><a href="#" title="Volume Up"><span>Volume Up</span></a></li>
                    <li id="mute" class="myButton-${template}"><a href="#" title="Mute"><span>Mute</span></a></li>
                    <li id="chup" class="myButton-${template}"><a href="#" title="Channel Up"><span>Channel Up</span></a></li>

                    <li id="voldown" class="myButton-${template}"><a href="#" title="Volume Down"><span>Volume Down</span></a></li>
                    <li id="cc" class="myButton-${template}"><a href="#" title="Closed Captions"><span>CC</span></a></li>
                    <li id="chdown" class="myButton-${template}"><a href="#" title="Channel Down"><span>Channel Down</span></a></li>

                    <li id="menu" class="myButton-${template}"><a href="#" title="Menu"><span>Menu</span></a></li>
                    <li id="playpause" class="myButton-${template}"><a href="#" title="Play/Pause"><span>Play/Pause</span></a></li>
                    <li id="num123" class="myButton-${template}"><a href="#" title="123"><span>123</span></a></li>
                </ul>
            </div>
        </div>
    `;
}
