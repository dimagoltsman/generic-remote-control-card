# Remote Control card #

<img src="https://github.com/dimagoltsman/ha-custom-lovelace-cards/blob/master/remote-control/screenshot.png?raw=true" height="400">

<img src="https://github.com/dimagoltsman/generic-remote-control-card/raw/master/example.png" height="400">

```
resources:
  - url: /hacsfiles/generic-remote-control-card/generic-remote-control-card.js
    type: module
```


# From HA version 0.115.0, broadlkink integration changed. you have to change card configuration. this readme is updated to the new version #
configuration is very easy. first, find your broadlink id for sending packets (can be found under HA services page),
and then just configure the broadlink codes for each button.

All buttons are configured according to the id of the button in the html section of `remote-html.js`

simple remote example:

```
buttons:
  back:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBgAAABJZEVEBITERMTEhMRExITEhISEjYUNhI3EzYTNhM1ExISNxQQFBETEhE4ExETEhM2EhISNxM2EzYTEhI3EzUUERM2EwAFOgABJ0gSAAwPAAEkSRMADA4AASVJEgANBQAAAAAAAAAA
  bottom:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKZIUERMSEhIUERUQFBEUERMSEzYUNhM2FTQUNhM2FBAUNhQ1FTQVNRQRFDUUERUQExITEhQRFBAVNBURFDUVNBU1FAAFTQABKUgVAA0FAAAAAAAAAAA=
  button0:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKpITERUQFRAUERQRFBETEhMRFTUUNRU0FTUTNhU0FRAVNRMSFBAVEBQRExIUERQRExEVNBU1FDUVNBU1FDUVNRQ1FAAFTgABKUgWAA0FAAAAAAAAAAA=
  button1:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKJIVEBUSEhISEhQRFBEUEBUQFjQUNRU0FDYUNRQ2FBETNhQ1FBEUERQRExETEhUQFBEUERQ1EzYVNRQ1FTQVNRQ1FQAFTQABKUgUAA0FAAAAAAAAAAA=
  button2:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKZIWDxQRFBEUERQRExEVEBQSEzYSNxQ2EzYSNxQ2ExEUNRUQFTUUERMRFBEVEBQRFBETNhMSFTQVNRQ1FTUTNhQ1FQAFTQABKUgTAA0FAAAAAAAAAAA=
  button3:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKpITERUQFRAUEhMRFBEUERQQFTUUNRQ1FTUUNRU0FRAVNRQ1FTQVERMRExIVEBQQFRAVERQREzYUNRM3EjcTNhQ2EwAFTgABKUgVAA0FAAAAAAAAAAA=
  button4:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKZIUERQRFBEUEBUQFRETERQRFDUUNhQ1FTQVNRQ1FBEUNhMRFBEUNRUQExIUERQRFBEUNRM3ExEUNRU1FDUUNRU1FAAFTQABKkcVAA0FAAAAAAAAAAA=
  button5:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBUAAABKZIVEBITFBAVERQRExEUERQREzYUNhM2FDUUNhM2FQ8VNRQ1Fg8UNhQRExEVEBQRFRAUERQ1FBEUNRU1FDUVNBU1FQAFTAABKkcUAAFpCQANBQAAAAA=
  button6:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKpITEhMRFBEWDxMRFREVEBMRFDUVNRQ1FTQWNBQ1Fg8WMxYQEzYSNxQRFBEVEBQRExEUNRURFBETNhM2FDYTNhU0FAAFTgABJ0kVAA0FAAAAAAAAAAA=
  button7:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJ5MWEBQRFBETERQRFRAUERQRFDUTNhU1FDUVNBU1ExITNhQ2EzUVNRQRFBETEhQRFBAVEBYPFRATNhM2FDYUNRQ1FQAFTgABKEgUAA0FAAAAAAAAAAA=
  button8:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJ5MVEBURExEUERQRFQ8VEBUQFDYUNRU0FDYTNhQ2ExEUNRUQFRAVERM2ExEUERUQFBETNhQ1FTUUERQ1FTQVNRU0FQAFTQABKUgTAA0FAAAAAAAAAAA=
  button9:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKpIUERQQFRAWDxQRFBEUERQRFDUUNhM1FjQUNRQ1FBEUNhQ1FBEWDxQ2ExITERMSFBAVERM2FDUWDxQ2EjcUNRM3EgAFTwABKkcUAA0FAAAAAAAAAAA=
  buttonClear: null
  buttonEnter: null
  exit:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBYAAABJJMTEhISExEUERMSEhITERQREzYTNhM2EzYTNhM2ExEUNRMSExITNRQ2EjYUERM2ExETNhM3ERMTERMRFDYSEhM2EwAFOwABJ0cSAAwPAAElSBQADQU=
  info:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKZMUEBUQExIUERMRFREUERMRFDUVNRQ1FDUVNRQ1FRAVNRQRExEUNRU1FBEUERMSFBAVMxc0FBEUERQ1FTUTNhQ2EwAFTgABKUcVAA0FAAAAAAAAAAA=
  left:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKpIVEBMRFRAVEBUQFBEUERQREjcUNhM2EzYUNhM2FBAVNRQ1FRAVEBQ2EzYTERYPFRAVERM2EjcUEBUREzYUNRQ2FAAFTQABKUgUAA0FAAAAAAAAAAA=
  menu:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKJMUERQREhMSEhUQFRAUERUQFjMVNBU1FDUUNhQ1FBEUNRQRFBEUNRUQFDYTEhISFBEVNBU1FBETNhQQFTUTNhU0FQAFTgABKEgVAA0FAAAAAAAAAAA=
  mute:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgCgAJaSEQ8RDxIPEg8SMBIvEg8SDxIvETERMBAxEg8SDxIPEQ8SkhIPEg8SDxIPETASDxIPERARLxIwEi8SDxIPEjARMBIwERASDREQEjASAAdhlJMSDxEQERARDxIvEjASDxEPETESMBEwEjARDxAQEg8SDxKSEg8REBEPEg8SMBEQEQ8REBIwEi8SLxIPEg8SLxIwEi8SDxEQEg8RMBEADQUAAAAAAAAAAA==
  ok:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBUAAkACXEAASiTFRAUERQRFBETEhQRExEUERU1FDUUNRU1FDUUNRYPEzcTNhQQFjQTEhU0Fg8UERQRFBEVNBQRFDYSEhQ1FTQVNRQABU4AASlIFAANBQAAAAA=
  power:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKJIVERQRFBATEhQRFBAUEhQRFDUVNBU1EzYUNRQ2FBETNhQ2ExEUNRU1FBEUERQQFBEVEBU1ExEUERQ1FTUUNRQ1FQAFTQABKUgUAA0FAAAAAAAAAAA=
  right:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKZIUERQRExIUERMRFBEVEBQREzYVNBU1FDUUNRU1FBETNhUQFBEUERQ1FTQVERMSExEUNRU1FDUUERUQFDUUNhM2FAAFTgABKEgVAA0FAAAAAAAAAAA=
  source:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBcAAwABPwAASmSFRAVEBQRFBEUERMSFBAUERU1FDUVNBU1FDUVNBUREzYUEBU1ExIUERM2FBAUERUREzYTERQ2FDUTEhQ1FTUUNRQABU0AASpIEwAMVgABKUgUAA0FAAAAAAAAAAAAAAAA
  top:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKJIVERQRExIVDxQRFBEUERQREzYTNhU1FTQWMxU1FBETNhQRFDUUNRUQFTUUERMSFBAUNRURExIUNRQQFTUUNRM2FQAFTgABKEgVAA0FAAAAAAAAAAA=
  volmin:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgDgAJGUERAREA8RERERLxAyEBEQEBAyDjMRLxMwEBEOEg8RERAOlBMPEBEQEBEQEg8REBAQETIQMBEyEDAQEBIvEjEQMBIPDxIPEhEPETASAAdclJMSDhAREBEPEw8xEi8QERARDzEPMxEwETEQEBEREBASDhGTEg8RDxASEBEOERAQERARMBIwEi8RMhAQETEOMhExEBAREBARDxIPMhEAB1yWkRAQERAQERAREDESLxEREBARMBAxEDERMBEQEREOExAQEZIQERAQEhAQEQ0TEBEQEBExEDEQMBIwERARAA0FAAAAAAAAAAA=
  volplus:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgCgAJSSEg8QEBIPERAPMhEyDxERDxAxEDESLxAyEREPEREQEBAQlBARDxIQEBAREi8PMhEvEhAQMRExDzIREBARDhISDhAyEBEQEQ8REi8RAAdclJMRDxAREREPEREwEi8SEBARDzIQMhAwDzESEBARERAQEBKSEg8QEBAREREPMREyDjESDhIwETESLxEQEBEREBAQETAPERERERAQMRAADQUAAAAAAAAAAA==
name: Hisense
remote_template: lg_new
style: |
  ha-card {
    font-size: 10px;
  }
  h1{
    text-align:left;
    margin-left: 50px;
  }
type: 'custom:generic-remote-control-card'



```


LG remote example:
(remote design by Avi Abeksis)
```
type: 'custom:generic-remote-control-card'
name: LG Tv
remote_template: simple
buttons:
  power: 
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: "b64:JgBYAAABKpIVEBURFDUWEBQRFBETEhURFDUVNRUQFTUVNRQ2FDUTNxQTExEUEhE3ExQTERMSFRITNRU1FDYUEhI3FDUVNRM3FQAFMwABKEoWAAxMAAEqSBUADQU="
  
  
  source:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: "b64:JgBYAAABJpMSExEUETgRFBEUERMSExITEjcSOBETEjgROBI4ETgSOBETEjgROBITEhMSEhM3ETgTNxITERMSOBE4EjgRExITEQAFGwABJkoSAAxGAAElSxIADQU="
  
   
  button1:  
  button2:  
  button3:  
  button4:  
  button5:  
  button6:  
  button7:  
  button8:  
  button9:  
  buttonClear:
  button0:
  buttonEnter:
  exit:
  info:
  menu:
  channeldown:
  channelup:
  netflix:
  left: 
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: "b64:JgBQAAABKpIVEBMRFRAVEBUQFBEUERQREjcUNhM2EzYUNhM2FBAVNRQ1FRAVEBQ2EzYTERYPFRAVERM2EjcUEBUREzYUNRQ2FAAFTQABKUgUAA0FAAAAAAAAAAA="
  right: 
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: "b64:JgBQAAABKZIUERQRExIUERMRFBEVEBQREzYVNBU1FDUUNRU1FBETNhUQFBEUERQ1FTQVERMSExEUNRU1FDUUERUQFDUUNhM2FAAFTgABKEgVAA0FAAAAAAAAAAA="
 
  top: 
  call: remote.send_command
  data:
    entity_id: remote.living_room_remote
    command: "b64:JgBQAAABKJIVERQRExIVDxQRFBEUERQREzYTNhU1FTQWMxU1FBETNhQRFDUUNRUQFTUUERMSFBAUNRURExIUNRQQFTUUNRM2FQAFTgABKEgVAA0FAAAAAAAAAAA="
    
  bottom: 
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: "b64:JgBQAAABKZIUERMSEhIUERUQFBEUERMSEzYUNhM2FTQUNhM2FBAUNhQ1FTQVNRQRFDUUERUQExITEhQRFBAVNBURFDUVNBU1FAAFTQABKUgVAA0FAAAAAAAAAAA="
  
  ok: 
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: "b64:JgBUAAkACXEAASiTFRAUERQRFBETEhQRExEUERU1FDUUNRU1FDUUNRYPEzcTNhQQFjQTEhU0Fg8UERQRFBEVNBQRFDYSEhQ1FTQVNRQABU4AASlIFAANBQAAAAA="
  back:
  volplus: 
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: "b64:JgBQAAABJZMTEhITETgSExEUERMSExITETgSOBITETgSNxM3ETgSOBEUETgRFBETEhMSExEUERMTNxISEzcROBM3ETgSOBI3EwAFGQABJkoSAA0FAAAAAAAAAAA="
  volmin: 
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: "b64:JgBYAAABJpMSExEUETgSExEUERMSExEUETgSOBMREjgROBI4ETgSNxI4EjgRExITERQRExITEhMRFBETEjgROBI4ETgSOBE4EQAFGwABJkoSAAxFAAEmShIADQU="
  
  mute: 
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: "b64:JgCgAJaSEQ8RDxIPEg8SMBIvEg8SDxIvETERMBAxEg8SDxIPEQ8SkhIPEg8SDxIPETASDxIPERARLxIwEi8SDxIPEjARMBIwERASDREQEjASAAdhlJMSDxEQERARDxIvEjASDxEPETESMBEwEjARDxAQEg8SDxKSEg8REBEPEg8SMBEQEQ8REBIwEi8SLxIPEg8SLxIwEi8SDxEQEg8RMBEADQUAAAAAAAAAAA=="
  
  
      
```


Mibox Remote example, with ADB server  
(remote design by Avi Abeksis)
<img src="https://github.com/dimagoltsman/ha-custom-lovelace-cards/blob/master/remote-control/content-card-remote-control/mibox/remote-back.png?raw=true" height="400">

```
buttons:
  back:
    call: androidtv.adb_command
    data:
      entity_id: media_player.workroom_mibox
      command: input keyevent 4
  bottom:
    call: androidtv.adb_command
    data:
      entity_id: media_player.workroom_mibox
      command: input keyevent 20
  clickleft:
    call: androidtv.adb_command
    data:
      entity_id: media_player.workroom_mibox
      command: input keyevent 21
  clickright:
    call: androidtv.adb_command
    data:
      entity_id: media_player.workroom_mibox
      command: input keyevent 22
  home:
    call: androidtv.adb_command
    data:
      entity_id: media_player.workroom_mibox
      command: input keyevent 3
  ok:
    call: androidtv.adb_command
    data:
      entity_id: media_player.workroom_mibox
      command: input keyevent 66
  power:
    call: androidtv.adb_command
    data:
      entity_id: media_player.workroom_mibox
      command: input keyevent 26
  top:
    call: androidtv.adb_command
    data:
      entity_id: media_player.workroom_mibox
      command: input keyevent 19
  volumedown:
    call: androidtv.adb_command
    data:
      entity_id: media_player.workroom_mibox
      command: input keyevent 25
  volumeup:
    call: androidtv.adb_command
    data:
      entity_id: media_player.workroom_mibox
      command: input keyevent 24
name: Workroom Mibox
remote_template: mibox
type: 'custom:generic-remote-control-card'

```

PartnerTV Remote example, thanx to @VirtualL :

<img src="https://github.com/dimagoltsman/ha-custom-lovelace-cards/blob/master/remote-control/content-card-remote-control/partner/remote-screen-shot.png?raw=true" height="400">

```
type: 'custom:generic-remote-control-card'
name: PartnerTV
remote_template: partner
buttons:
  power: 
  volplus: 
  volmin:
  partner: 
  mute: 
  record: 
  source: 
  one: 
  two: 
  three: 
  four: 
  five: 
  six: 
  seven: 
  eight: 
  nine: 
  zero: 
  section12:
  lastch:
  fastforward:
  rewind: 
  play: 
  stop: 
  vod: 
  myrec: 
  netflix: 
  youtube: 
  channelup:
  channeldown:
  home: 
  back: 
  circle: 
  left: 
  right: 
  top: 
  bottom: 
  ok: 
```

Samsung TV remote:

<img src="https://github.com/dimagoltsman/generic-remote-control-card/blob/master/samsungtvremote.png?raw=true" height="400">

```
buttons:
  back:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  bottom:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  button0:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  button1:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  button2:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  button3:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  button4:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  button5:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  button6:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  button7:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  button8:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  button9:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  buttonClear: null
  buttonEnter: null
  exit:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  info:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  left:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  menu:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  mute:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  ok:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  power:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  right:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  source:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  top:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  volmin:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
  volplus:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: RF_CODE
name: Samsung
remote_template: samsungtv
style: |
  ha-card {
    font-size: 10px;
  }
  h1{
    text-align:left;
    margin-left: 50px;
  }
type: 'custom:generic-remote-control-card'

```

Yes Remote (Design and codes by Rubinov lior):

<img src="https://github.com/dimagoltsman/generic-remote-control-card/raw/master/yesremote.png" height="400">

```
type: 'custom:generic-remote-control-card'
name: 'YES'
remote_template: yesremote
buttons:
  tvpower: null
  yespower:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBYAAABJ5ISExISEjgSEhMSEhMRExM3EhISExI3EjgSNxM3ERMSExI3EhMSExETEhMSNxMSEhMRExI4EjcSOBI3EhMSNxI3EwAFYgABJUoTAAxCAAEmShIADQU=
  amppower:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBUAE4UJxQTFCcUExQnFBMUExQTFBMUExQTFCcAAzxNFCcUExQnFBMUJxQTFBMUExQUFBMUExQnAAM7ThQmFBQTJxQTFCcUExQTFBQTFBQTFBMUJwANBQAAAAA=
  av:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBwAE4UJxQTFCcUExQTFCcUExQnFBMUExQTFBMAA0xOFCcUExQnFBMUExQnFBMUJxQTFBMUExQTAANMThQnFBMUJxQTFBMUJxQTFCYUFBQTFBMUEwADTE4UJxMUFCYUFBQTFCYUFBQmFBMUFBQTFBMADQUAAAAAAAAAAA==
  button1:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJ5ISEhITEjgRExITERQRExI4EhISExI3EjgSNxM3EhITEhEUEhISExEUETgSNxMSEhMSNxI3EzcSNxMSERQROBI3EwAFYgABJUoTAA0FAAAAAAAAAAA=
  button2:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpMTEhISEjgSEhITEhMRExM3EhISExI3EzcSNxM3EhISExI3EhMSExE4EhMROBITERQRExI4EjcSExI3EhMSNxM3EgAFYgABJUoTAA0FAAAAAAAAAAA=
  button3:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJZMSExETEjgRExITEhMSEhM3EhMRExM3EjcSNxM3EhITEhI3EhMSExE4EzcROBITEhISExI3EzcRFBISEhMROBM3EgAFYgABJUsRAA0FAAAAAAAAAAA=
  button4:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJZQSEhITETgSExITERMSExI3EhMSExE4EzcSNxI3ExISExETEhMSExE4EhMROBITERMSOBI3EzcRExI4ERMSOBI3EgAFYgABJkoSAA0FAAAAAAAAAAA=
  button5:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpMSEhMSEjcSExMSERMSExI4EhISExE4EzcSNxI4EhISExETEhMSExETEhMSOBISEhMROBI4ETgSNxM3EhMROBI3EgAFYwABJkkTAA0FAAAAAAAAAAA=
  button6:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJZMTEhITETgSExETEhMSExE4ExISEhI4EjcTNxE4EhMSEhITEhMRExI4EjcSOBETExISNxI4EjcTEhETEhMSNxM3EgAFYgABJkoRAA0FAAAAAAAAAAA=
  button7:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJZMSExETEzcSEhITEhMRExI4EhMRExI4ETgSNxM3EhITEhITETgSExEUETgSNxMSEhMROBITETgTNhMSEhMSNxM3EgAFYgABJUsSAA0FAAAAAAAAAAA=
  button8:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJZMTEhITETgTEhISEhMSExE4EhMRFBE4EjcTNxI3EhMSEhITEzcSEhM3EhISOBISEhMSNxMSEjcTEhI4EhISOBI3EgAFYgABJkoSAA0FAAAAAAAAAAA=
  button9:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpMSEhMSEjcTEhITERQSEhM3EhISExI3EzcROBM2ExISExETEzcSExETExISNxMSEhMSNxITETgTNhM3EhMROBI3EwAFYgABJUoTAA0FAAAAAAAAAAA=
  button0:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJZMTEhEUETgSExETEhMSExE4EhMRExM3ETgSOBI3EhMRExI4ETgTEhETEjgROBITEhMSEhITEjcTNxETEhMSNxM3EQAFYwABJkoSAA0FAAAAAAAAAAA=
  vod:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpMSEhMSEjcTEhITEhITEhI3EhMSExI3EjgSNxI3ExISExI3EhMSEhMSEhMSEhMSEhMSEhI4EjcSOBE4EzYSOBI3EwAFYQABJ0kTAA0FAAAAAAAAAAA=
  mytv:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJZQRExITETgSExEUERMSExE4EhMSExE4EjgTNhE4EhMSExETEjgSEhITEhMRExI4ERQROBEUEjcSNxI4ETgSExE4FAAFYAABJkoSAA0FAAAAAAAAAAA=
  volumeup: null
  volumedown: null
  channelup:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBYAAABJpITEhITETgSExITERMSExI3EhMSExE4EjcTNxE4EhMSExE4EhMROBITEjcSOBISExISExE4EhMROBITERMSOBE4EwAFYQABJkoSAAxDAAEmSRMADQU=
  channeldown:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBYAAABKJESExMREjgRExQREhMTERI4ExESExM2EjgSNxI4EhISExI3EjgROBITETgSOBETEhMSExETExISNxITEhMROBM3EgAFYgABJUoTAAxCAAElSxEADQU=
  mute:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgCoAE4UExQUFCYUExQnFBQTExUmFBMUFRIUFBUAA11OFBQTFhImFBQTKRIUExQUJhQTFBQUExQTAANfThQTFBMUJxQTFCcUExQTFCcUExQTFBQUEwADX04UExQTFCcUExQnFBMUExQnFBMUExQTFBQAA19OFBMUExQnFBMUJxQTFBMUJxQTFBQTExQTAANgThQTFBMUJxQUEycUExQTFCcUExQTFBMUEwANBQ==
  return:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBYAAABJZMTEhEUETgSExETExISExE4EhMRExI4EjcSOBI3EhMRExITEjcSExI3EjgSNxITEhMROBITETgSExETEhMSNxI4EQAFYwABJUsSAAxCAAEmShIADQU=
  clickleft:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpITEhITETgSExITEhISExE4ExISExE4EjcSOBE4ExISExEUERMSNxITEjcSOBISEhMSOBE4ERQROBITERMTNxI3EgAFYgABJ0kSAA0FAAAAAAAAAAA=
  clickright:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpMSEhMSEjcSExITERQRExI4ERMSExE4EjgROBI4ERMSExE4EjgSEhI4ETgTNxISEhMSExETEjgSEhITEhMROBI4EgAFYQABJkoSAA0FAAAAAAAAAAA=
  clickup:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJZMTEhEUETgSExETEhMSExE4ExIRExI4ETgSOBE4EhMRExI4EjcTEhE4ExIROBMSEhMRExITETgTEhI3ExISOBE4EgAFYgABJkoSAA0FAAAAAAAAAAA=
  clickdown:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBYAAABJpMRExITEjcSExITERMSExI4ERMSExI3EjgROBI3EhMTEhETExISOBETEhMROBITEhMROBI3ExITNhI4EhMROBI3EgAFYwABJUoTAAxCAAElSxIADQU=
  plus:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABKJMSEhITEjcTEhMSEhMRExI4ERMSExI3EzcSNxI4ERMTEhEUEhISOBI3EjcSOBEUERMSOBE4EhMRExITEhMROBI3EgAFYwABJUoSAA0FAAAAAAAAAAA=
  info:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBYAAABJZMSExEUETgSExETEhMSExE4EhMRExM3ETgSOBE4EhMRExITEhMSNxI4ERMSOBETEhMROBM3ERMSExI3EhMSOBE4EgAFYgABJkoSAAxDAAElShIADQU=
  ok:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpITEhITETgSExETEhMSExE4EhMRExI4ETgSOBE4EhMRExI4ETgSExEUERMSOBETEhMRFBETEjgROBI3EhMSOBE4EQAFYwABJkoSAA0FAAAAAAAAAAA=
  table:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpMSEhITEjcSExEUERMTEhI3EhMSExE4EjgSNxI3EhMSExETEjgROBITETgTNxETEhMSNxITEhMSNxITERQROBE4EgAFYwABJUoTAA0FAAAAAAAAAAA=
  schedule:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBYAAABJpMRExITETgSExITERMSExI3ExISExI3EjgSNxI3EhMSExETEjgSNxI4ERMSOBETEhMSNxITEhMRExM3ERMSOBE4EgAFYwABJUoTAAxCAAElSxEADQU=
  orange:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJZQSEhMSEjcSExITEhISExM2EhMTEhE4EjgSNxE4EhMSExETEjgROBM3ETgSNxMSEhMROBMSERQRExITEhISOBI3EwAFYAABJ0oSAA0FAAAAAAAAAAA=
  green:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpISExETEzcRExITEhMRExI4EhISExI4EjcSNxM3ERMSExI4ERMSOBE4EhMROBITERMSExI3EhMSExE4EhMROBM3EQAFYwABJUsRAA0FAAAAAAAAAAA=
  yellow:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpITEhITETgSExETEhMSExE4EhMRExI4EjcSOBI3EhMRExI4ERQSNxE4EzcSNxITERMSExI4ERMSExITERMTNxE4EgAFYgABJkoSAA0FAAAAAAAAAAA=
  blue:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJZQRExITETgSExITERMTEhM2EhMSExI3EjgROBI3ExISExE4EjgSNxI4EjcSNxMSERQRExITEhMSEhITERQSNxE4EgAFYwABJUoSAA0FAAAAAAAAAAA=
  rewind:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpMRFBETEzcRExMSEhMRExI4EhITEhI3EjgSNxM3EhISExITERMSExI3ExISExE4EhMSNxI4ETgWDxI3EjcTEhI4EQAFYwABJkoRAA0FAAAAAAAAAAA=
  play:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpMSEhITEjcTEhITERMSExI4ERMSExE4EjgROBI3EhMSExE4EhMSNxMSEhMRExI4ERMSExI3EhMTNxE4EjcSExI3EgAFYwABJUoTAA0FAAAAAAAAAAA=
  forward:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJZMTEhITETgTEhISEhMTEhE4ExIRFBE4EjcTNxI3EhMRFBE4EhMRExI4ERMTEhI3EhMSExI3EzcSEhI4ETgSExE4EgAFYgABJkoSAA0FAAAAAAAAAAA=
  rec:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpMRExMSEjcSExITERMSExI3EhMSExI3EzcROBI3EhMSExETEhMSNxMSEhMRExM3ERMSOBE4ExISNxI4ETgSExE4EwAFYgABJUoSAA0FAAAAAAAAAAA=
  stop:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJpMSEhMSEzcSEhITERQRExI4EhISExI3EjgSNxI4EhISExE4EjgROBITERQRExI4ERMTEhEUERMSOBE4EjcSExI3EgAFYwABJUoSAA0FAAAAAAAAAAA=
  pause:
    call: remote.send_command
    data:
      entity_id: remote.living_room_remote
      command: >-
        b64:JgBQAAABJZMSExITETgTEhETEhMSExE4EhMRExI4EjcSOBE4EhMRExITEzYSOBEUEhISExE4EhMSNxITEhMROBI4ETgSExE4EgAFYgABJkoSAA0FAAAAAAAAAAA=

```


# Contribution
if you want to add your own remote template, you can do it in a new folder near the 'simple' and 'lg' remotes and
set remote_template to the name of your new folder. 
just make sure you are changing the html and css methods suffixes

# you are also welcome to contribute new templates. you can add new buttons and remove buttons, just make sure their id matches the id you put in the yaml #


