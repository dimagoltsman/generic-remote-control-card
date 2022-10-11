//definition section
var lineTable = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
  ["COMMA", "SPACE", "DOTT", "ENTER"],
];
var noLetterKeys = [
  [8, "BACKSPACE"],
  [13, "ENTER"],
  [20, "CAPSLOCK"],
  [32, "SPACE"],
  [188, "COMMA"],
  [190, "DOTT"],
];
var linesNames = [
  "firstLine",
  "secondLine",
  "thirdLine",
  "fourthLine",
  "fivethLine",
];

function getRemoteStyle_android_custom_keyboard(config) {
  const template = config.remote_template;

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

#remote-control-android_custom_keyboard {
	position: relative;
	width: 464px;
	height: 244px
}

#remote-control-android_custom_keyboard h2 {
	position: absolute;
	left: -5000px
}

#remote-control-android_custom_keyboard div {
	margin: 0;
	padding: 0;
	list-style-type: none
}

.container {
	width: 464px;
	margin: 0 auto
}
div.buttonsLine {
	height: 50px;
	width: 464px;
	margin: 5px;
}
div.keyButton {
	position: relative;
	height: 90%;
	width: 9.85%;
	border-radius: 20%;
	color: white;
	text-align: center;
	font-family: Arial;
	font-size: 100%;
	margin-left: 1%;
	margin-right: 1%;
	float: left;
}
div.specialCharsField {
	position: absolute;
	border-radius: 20%;
	background: #222222;
	display: none;
}
div.specialChar {
	position: relative;
	background: none;
	color: white;
	text-align: center;
	font-family: Arial;
	font-size: 100%;
	margin: 2px;
	padding: 3px;
	float: left;
}
div.letter {
	user-select: none;
	cursor: default;
	position: relative;
	top: 30%;
}
div.specialChar:hover, .specialCharHover {
	background: #969696;
}
div.keyButton:active, .keyButtonActive {
	transform: translate(1px, 1px);
}
div#btn-1, #btn-2, #btn-3, #btn-4, #btn-5, #btn-6, #btn-7, #btn-8, #btn-9, #btn-0, #btn-Q, #btn-W, #btn-E, #btn-R, #btn-T, #btn-Y, #btn-U, #btn-I, #btn-O, #btn-P{
	background: #333333;
}
div#btn-Z, #btn-X, #btn-C, #btn-V, #btn-B, #btn-N, #btn-M, #btn-COMMA, #btn-DOTT {
	background: #333333;
	left: 14.85%;
}
div#btn-A, #btn-S, #btn-D, #btn-F, #btn-G, #btn-H, #btn-J, #btn-K, #btn-L {
	background: #333333;
	left: 5%;
}
div#btn-BACKSPACE, #btn-ENTER {
	background: #333333;
	width: 14.85%;
	border-radius: 12.3%;
	left: 14.85%;
}
div#btn-SPACE {
	background: #333333;
	width: 49.85%;
	border-radius: 4%;
	left: 14.85%;
}
`;
}

function getRemoteHtml_android_custom_keyboard(config) {
  const template = config.remote_template;
  const base_url = `/hacsfiles/generic-remote-control-card/remotes/${template}/`;

  var mainContainer = document.createElement("div");
  mainContainer.setAttribute("class", "container");

  var newDiv = document.createElement("div");
  newDiv.setAttribute("style", "text-align:center");
  mainContainer.appendChild(newDiv);

  var newElement = document.createElement("h1");
  newElement.innerHTML = config.name;
  newDiv.appendChild(newElement);

  var mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "remote-control-android_custom_keyboard");
  mainContainer.appendChild(mainDiv);

  newElement = document.createElement("h2");
  newElement.innerHTML = "Main navigation";
  mainDiv.appendChild(newElement);

  linesNames.forEach((itemId) => {
    newDiv = document.createElement("div");
    newDiv.setAttribute("id", itemId);
    newDiv.setAttribute("class", "buttonsLine");
    mainDiv.appendChild(newDiv);
  });

  var hyperlink = document.createElement("a");
  hyperlink.setAttribute("id", "hyperlink");
  hyperlink.setAttribute("href", "#");
  hyperlink.setAttribute("title", "");
  mainDiv.appendChild(hyperlink);

  //all letters' buttons printing
  lineTable.forEach((lineLetters, index) => {
    lineLetters.forEach((item) => {
      createDivWithContent(
        linesNames[index],
        "btn-" + String(item),
        "keyButton",
        "sub-" + String(item),
        "letter",
        getContent(item, true)
      );
    });
  });

  //creates Button with Key name as a content
  function createDivWithContent(
    parentId,
    mainId,
    mainClass,
    subId,
    subClass,
    content
  ) {
    var parentObj = mainContainer.querySelector("#" + parentId);
    if (parentObj != null) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("id", mainId);
      newDiv.setAttribute("class", mainClass);
      newDiv.classList.add("myButton-" + String(template));
      if (subId != null && subId != "") {
        var subDiv = document.createElement("div");
        subDiv.setAttribute("id", subId);
        subDiv.setAttribute("class", "letter");
        subDiv.appendChild(content);
        newDiv.appendChild(subDiv);
      } else newDiv.appendChild(content);
      parentObj.appendChild(newDiv);
    } else
      console.log(
        "createDivWithContent function couldn't create new div, because parent object with ID: " +
          String(parentId) +
          " doesn't exist."
      );
  }

  function getContent(item, condition) {
    if (item === "BACKSPACE") {
      var content = document.createElement("img");
      content.setAttribute("src", base_url + "icn-backspace.png");
    } else if (item === "COMMA") var content = document.createTextNode(",");
    else if (item === "SPACE") var content = document.createTextNode(" ");
    else if (item === "DOTT") var content = document.createTextNode(".");
    else if (item === "ENTER") {
      var content = document.createElement("img");
      content.setAttribute("src", base_url + "icn-enter.png");
    } else
      var content = document.createTextNode(
        condition ? String(item).toUpperCase() : String(item).toLowerCase()
      );
    return content;
  }
  return mainContainer.outerHTML;
}
