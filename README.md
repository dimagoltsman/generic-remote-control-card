# Remote Control card #

<img src="https://github.com/dimagoltsman/ha-custom-lovelace-cards/blob/master/remote-control/screenshot.png?raw=true" height="400">

<img src="https://github.com/dimagoltsman/generic-remote-control-card/raw/master/example.png" height="400">

```
resources:
  - url: /hacsfiles/generic-remote-control-card/generic-remote-control-card.js
    type: module
```


configuration is very easy. first, find your broadlink id for sending packets (can be found under HA services page),
and then just configure the broadlink codes for each button.

All buttons are configured according to the id of the button in the html section of `remote-html.js`

simple remote example:

```
type: 'custom:generic-remote-control-card'
name: Hisense
remote_template: simple
buttons:
  power:
  source:
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBYAAABKpITEhQQFRAVEBMSFBEUERMREzYWNBQ1FTQVNRQ1FRAVNRQREzYUEBUQFTUUERQRFBAVNRQRFDUVNBUREzYTNhQ2EwAFTgABKUcVAAxWAAEpRxQADQU="
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
  left:
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBQAAABKpIVEBMRFRAVEBUQFBEUERQREjcUNhM2EzYUNhM2FBAVNRQ1FRAVEBQ2EzYTERYPFRAVERM2EjcUEBUREzYUNRQ2FAAFTQABKUgUAA0FAAAAAAAAAAA="
  right:
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBQAAABKZIUERQRExIUERMRFBEVEBQREzYVNBU1FDUUNRU1FBETNhUQFBEUERQ1FTQVERMSExEUNRU1FDUUERUQFDUUNhM2FAAFTgABKEgVAA0FAAAAAAAAAAA="
  top:
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBQAAABKJIVERQRExIVDxQRFBEUERQREzYTNhU1FTQWMxU1FBETNhQRFDUUNRUQFTUUERMSFBAUNRURExIUNRQQFTUUNRM2FQAFTgABKEgVAA0FAAAAAAAAAAA="
  bottom:
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBQAAABKZIUERMSEhIUERUQFBEUERMSEzYUNhM2FTQUNhM2FBAUNhQ1FTQVNRQRFDUUERUQExITEhQRFBAVNBURFDUVNBU1FAAFTQABKUgVAA0FAAAAAAAAAAA="
  ok:
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBUAAkACXEAASiTFRAUERQRFBETEhQRExEUERU1FDUUNRU1FDUUNRYPEzcTNhQQFjQTEhU0Fg8UERQRFBEVNBQRFDYSEhQ1FTQVNRQABU4AASlIFAANBQAAAAA="
  back:
  volplus:
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgCgAJSSEg8QEBIPERAPMhEyDxERDxAxEDESLxAyEREPEREQEBAQlBARDxIQEBAREi8PMhEvEhAQMRExDzIREBARDhISDhAyEBEQEQ8REi8RAAdclJMRDxAREREPEREwEi8SEBARDzIQMhAwDzESEBARERAQEBKSEg8QEBAREREPMREyDjESDhIwETESLxEQEBEREBAQETAPERERERAQMRAADQUAAAAAAAAAAA=="
  
  volmin:
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgDgAJGUERAREA8RERERLxAyEBEQEBAyDjMRLxMwEBEOEg8RERAOlBMPEBEQEBEQEg8REBAQETIQMBEyEDAQEBIvEjEQMBIPDxIPEhEPETASAAdclJMSDhAREBEPEw8xEi8QERARDzEPMxEwETEQEBEREBASDhGTEg8RDxASEBEOERAQERARMBIwEi8RMhAQETEOMhExEBAREBARDxIPMhEAB1yWkRAQERAQERAREDESLxEREBARMBAxEDERMBEQEREOExAQEZIQERAQEhAQEQ0TEBEQEBExEDEQMBIwERARAA0FAAAAAAAAAAA="
  mute:
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgCgAJaSEQ8RDxIPEg8SMBIvEg8SDxIvETERMBAxEg8SDxIPEQ8SkhIPEg8SDxIPETASDxIPERARLxIwEi8SDxIPEjARMBIwERASDREQEjASAAdhlJMSDxEQERARDxIvEjASDxEPETESMBEwEjARDxAQEg8SDxKSEg8REBEPEg8SMBEQEQ8REBIwEi8SLxIPEg8SLxIwEi8SDxEQEg8RMBEADQUAAAAAAAAAAA=="



```


LG remote example:
(remote design by Avi Abeksis)
```
type: 'custom:generic-remote-control-card'
name: LG Tv
remote_template: simple
buttons:
  power: 
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBYAAABKpIVEBURFDUWEBQRFBETEhURFDUVNRUQFTUVNRQ2FDUTNxQTExEUEhE3ExQTERMSFRITNRU1FDYUEhI3FDUVNRM3FQAFMwABKEoWAAxMAAEqSBUADQU="
  
  
  source:
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBYAAABJpMSExEUETgRFBEUERMSExITEjcSOBETEjgROBI4ETgSOBETEjgROBITEhMSEhM3ETgTNxITERMSOBE4EjgRExITEQAFGwABJkoSAAxGAAElSxIADQU="
  
   
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
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBQAAABKpIVEBMRFRAVEBUQFBEUERQREjcUNhM2EzYUNhM2FBAVNRQ1FRAVEBQ2EzYTERYPFRAVERM2EjcUEBUREzYUNRQ2FAAFTQABKUgUAA0FAAAAAAAAAAA="
  right: 
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBQAAABKZIUERQRExIUERMRFBEVEBQREzYVNBU1FDUUNRU1FBETNhUQFBEUERQ1FTQVERMSExEUNRU1FDUUERUQFDUUNhM2FAAFTgABKEgVAA0FAAAAAAAAAAA="
 
  top: 
  call: broadlink.send
  data:
    host: 192.168.1.171
    packet: "JgBQAAABKJIVERQRExIVDxQRFBEUERQREzYTNhU1FTQWMxU1FBETNhQRFDUUNRUQFTUUERMSFBAUNRURExIUNRQQFTUUNRM2FQAFTgABKEgVAA0FAAAAAAAAAAA="
    
  bottom: 
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBQAAABKZIUERMSEhIUERUQFBEUERMSEzYUNhM2FTQUNhM2FBAUNhQ1FTQVNRQRFDUUERUQExITEhQRFBAVNBURFDUVNBU1FAAFTQABKUgVAA0FAAAAAAAAAAA="
  
  ok: 
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBUAAkACXEAASiTFRAUERQRFBETEhQRExEUERU1FDUUNRU1FDUUNRYPEzcTNhQQFjQTEhU0Fg8UERQRFBEVNBQRFDYSEhQ1FTQVNRQABU4AASlIFAANBQAAAAA="
  back:
  volplus: 
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBQAAABJZMTEhITETgSExEUERMSExITETgSOBITETgSNxM3ETgSOBEUETgRFBETEhMSExEUERMTNxISEzcROBM3ETgSOBI3EwAFGQABJkoSAA0FAAAAAAAAAAA="
  volmin: 
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgBYAAABJpMSExEUETgSExEUERMSExEUETgSOBMREjgROBI4ETgSNxI4EjgRExITERQRExITEhMRFBETEjgROBI4ETgSOBE4EQAFGwABJkoSAAxFAAEmShIADQU="
  
  mute: 
    call: broadlink.send
    data:
      host: 192.168.1.171
      packet: "JgCgAJaSEQ8RDxIPEg8SMBIvEg8SDxIvETERMBAxEg8SDxIPEQ8SkhIPEg8SDxIPETASDxIPERARLxIwEi8SDxIPEjARMBIwERASDREQEjASAAdhlJMSDxEQERARDxIvEjASDxEPETESMBEwEjARDxAQEg8SDxKSEg8REBEPEg8SMBEQEQ8REBIwEi8SLxIPEg8SLxIwEi8SDxEQEg8RMBEADQUAAAAAAAAAAA=="
  
  
      
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

Yes Remote (Design and codes by Rubinov lior):

<img src="https://github.com/dimagoltsman/generic-remote-control-card/raw/master/yesremote.png" height="400">

```
type: 'custom:generic-remote-control-card'
name: 'YES'
remote_template: yesremote
buttons:
  tvpower: null
  yespower:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBYAAABJ5ISExISEjgSEhMSEhMRExM3EhISExI3EjgSNxM3ERMSExI3EhMSExETEhMSNxMSEhMRExI4EjcSOBI3EhMSNxI3EwAFYgABJUoTAAxCAAEmShIADQU=
  amppower:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBUAE4UJxQTFCcUExQnFBMUExQTFBMUExQTFCcAAzxNFCcUExQnFBMUJxQTFBMUExQUFBMUExQnAAM7ThQmFBQTJxQTFCcUExQTFBQTFBQTFBMUJwANBQAAAAA=
  av:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBwAE4UJxQTFCcUExQTFCcUExQnFBMUExQTFBMAA0xOFCcUExQnFBMUExQnFBMUJxQTFBMUExQTAANMThQnFBMUJxQTFBMUJxQTFCYUFBQTFBMUEwADTE4UJxMUFCYUFBQTFCYUFBQmFBMUFBQTFBMADQUAAAAAAAAAAA==
  button1:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJ5ISEhITEjgRExITERQRExI4EhISExI3EjgSNxM3EhITEhEUEhISExEUETgSNxMSEhMSNxI3EzcSNxMSERQROBI3EwAFYgABJUoTAA0FAAAAAAAAAAA=
  button2:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpMTEhISEjgSEhITEhMRExM3EhISExI3EzcSNxM3EhISExI3EhMSExE4EhMROBITERQRExI4EjcSExI3EhMSNxM3EgAFYgABJUoTAA0FAAAAAAAAAAA=
  button3:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJZMSExETEjgRExITEhMSEhM3EhMRExM3EjcSNxM3EhITEhI3EhMSExE4EzcROBITEhISExI3EzcRFBISEhMROBM3EgAFYgABJUsRAA0FAAAAAAAAAAA=
  button4:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJZQSEhITETgSExITERMSExI3EhMSExE4EzcSNxI3ExISExETEhMSExE4EhMROBITERMSOBI3EzcRExI4ERMSOBI3EgAFYgABJkoSAA0FAAAAAAAAAAA=
  button5:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpMSEhMSEjcSExMSERMSExI4EhISExE4EzcSNxI4EhISExETEhMSExETEhMSOBISEhMROBI4ETgSNxM3EhMROBI3EgAFYwABJkkTAA0FAAAAAAAAAAA=
  button6:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJZMTEhITETgSExETEhMSExE4ExISEhI4EjcTNxE4EhMSEhITEhMRExI4EjcSOBETExISNxI4EjcTEhETEhMSNxM3EgAFYgABJkoRAA0FAAAAAAAAAAA=
  button7:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJZMSExETEzcSEhITEhMRExI4EhMRExI4ETgSNxM3EhITEhITETgSExEUETgSNxMSEhMROBITETgTNhMSEhMSNxM3EgAFYgABJUsSAA0FAAAAAAAAAAA=
  button8:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJZMTEhITETgTEhISEhMSExE4EhMRFBE4EjcTNxI3EhMSEhITEzcSEhM3EhISOBISEhMSNxMSEjcTEhI4EhISOBI3EgAFYgABJkoSAA0FAAAAAAAAAAA=
  button9:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpMSEhMSEjcTEhITERQSEhM3EhISExI3EzcROBM2ExISExETEzcSExETExISNxMSEhMSNxITETgTNhM3EhMROBI3EwAFYgABJUoTAA0FAAAAAAAAAAA=
  button0:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJZMTEhEUETgSExETEhMSExE4EhMRExM3ETgSOBI3EhMRExI4ETgTEhETEjgROBITEhMSEhITEjcTNxETEhMSNxM3EQAFYwABJkoSAA0FAAAAAAAAAAA=
  vod:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpMSEhMSEjcTEhITEhITEhI3EhMSExI3EjgSNxI3ExISExI3EhMSEhMSEhMSEhMSEhMSEhI4EjcSOBE4EzYSOBI3EwAFYQABJ0kTAA0FAAAAAAAAAAA=
  mytv:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJZQRExITETgSExEUERMSExE4EhMSExE4EjgTNhE4EhMSExETEjgSEhITEhMRExI4ERQROBEUEjcSNxI4ETgSExE4FAAFYAABJkoSAA0FAAAAAAAAAAA=
  volumeup: null
  volumedown: null
  channelup:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBYAAABJpITEhITETgSExITERMSExI3EhMSExE4EjcTNxE4EhMSExE4EhMROBITEjcSOBISExISExE4EhMROBITERMSOBE4EwAFYQABJkoSAAxDAAEmSRMADQU=
  channeldown:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBYAAABKJESExMREjgRExQREhMTERI4ExESExM2EjgSNxI4EhISExI3EjgROBITETgSOBETEhMSExETExISNxITEhMROBM3EgAFYgABJUoTAAxCAAElSxEADQU=
  mute:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgCoAE4UExQUFCYUExQnFBQTExUmFBMUFRIUFBUAA11OFBQTFhImFBQTKRIUExQUJhQTFBQUExQTAANfThQTFBMUJxQTFCcUExQTFCcUExQTFBQUEwADX04UExQTFCcUExQnFBMUExQnFBMUExQTFBQAA19OFBMUExQnFBMUJxQTFBMUJxQTFBQTExQTAANgThQTFBMUJxQUEycUExQTFCcUExQTFBMUEwANBQ==
  return:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBYAAABJZMTEhEUETgSExETExISExE4EhMRExI4EjcSOBI3EhMRExITEjcSExI3EjgSNxITEhMROBITETgSExETEhMSNxI4EQAFYwABJUsSAAxCAAEmShIADQU=
  clickleft:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpITEhITETgSExITEhISExE4ExISExE4EjcSOBE4ExISExEUERMSNxITEjcSOBISEhMSOBE4ERQROBITERMTNxI3EgAFYgABJ0kSAA0FAAAAAAAAAAA=
  clickright:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpMSEhMSEjcSExITERQRExI4ERMSExE4EjgROBI4ERMSExE4EjgSEhI4ETgTNxISEhMSExETEjgSEhITEhMROBI4EgAFYQABJkoSAA0FAAAAAAAAAAA=
  clickup:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJZMTEhEUETgSExETEhMSExE4ExIRExI4ETgSOBE4EhMRExI4EjcTEhE4ExIROBMSEhMRExITETgTEhI3ExISOBE4EgAFYgABJkoSAA0FAAAAAAAAAAA=
  clickdown:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBYAAABJpMRExITEjcSExITERMSExI4ERMSExI3EjgROBI3EhMTEhETExISOBETEhMROBITEhMROBI3ExITNhI4EhMROBI3EgAFYwABJUoTAAxCAAElSxIADQU=
  plus:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABKJMSEhITEjcTEhMSEhMRExI4ERMSExI3EzcSNxI4ERMTEhEUEhISOBI3EjcSOBEUERMSOBE4EhMRExITEhMROBI3EgAFYwABJUoSAA0FAAAAAAAAAAA=
  info:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBYAAABJZMSExEUETgSExETEhMSExE4EhMRExM3ETgSOBE4EhMRExITEhMSNxI4ERMSOBETEhMROBM3ERMSExI3EhMSOBE4EgAFYgABJkoSAAxDAAElShIADQU=
  ok:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpITEhITETgSExETEhMSExE4EhMRExI4ETgSOBE4EhMRExI4ETgSExEUERMSOBETEhMRFBETEjgROBI3EhMSOBE4EQAFYwABJkoSAA0FAAAAAAAAAAA=
  table:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpMSEhITEjcSExEUERMTEhI3EhMSExE4EjgSNxI3EhMSExETEjgROBITETgTNxETEhMSNxITEhMSNxITERQROBE4EgAFYwABJUoTAA0FAAAAAAAAAAA=
  schedule:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBYAAABJpMRExITETgSExITERMSExI3ExISExI3EjgSNxI3EhMSExETEjgSNxI4ERMSOBETEhMSNxITEhMRExM3ERMSOBE4EgAFYwABJUoTAAxCAAElSxEADQU=
  orange:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJZQSEhMSEjcSExITEhISExM2EhMTEhE4EjgSNxE4EhMSExETEjgROBM3ETgSNxMSEhMROBMSERQRExITEhISOBI3EwAFYAABJ0oSAA0FAAAAAAAAAAA=
  green:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpISExETEzcRExITEhMRExI4EhISExI4EjcSNxM3ERMSExI4ERMSOBE4EhMROBITERMSExI3EhMSExE4EhMROBM3EQAFYwABJUsRAA0FAAAAAAAAAAA=
  yellow:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpITEhITETgSExETEhMSExE4EhMRExI4EjcSOBI3EhMRExI4ERQSNxE4EzcSNxITERMSExI4ERMSExITERMTNxE4EgAFYgABJkoSAA0FAAAAAAAAAAA=
  blue:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJZQRExITETgSExITERMTEhM2EhMSExI3EjgROBI3ExISExE4EjgSNxI4EjcSNxMSERQRExITEhMSEhITERQSNxE4EgAFYwABJUoSAA0FAAAAAAAAAAA=
  rewind:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpMRFBETEzcRExMSEhMRExI4EhITEhI3EjgSNxM3EhISExITERMSExI3ExISExE4EhMSNxI4ETgWDxI3EjcTEhI4EQAFYwABJkoRAA0FAAAAAAAAAAA=
  play:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpMSEhITEjcTEhITERMSExI4ERMSExE4EjgROBI3EhMSExE4EhMSNxMSEhMRExI4ERMSExI3EhMTNxE4EjcSExI3EgAFYwABJUoTAA0FAAAAAAAAAAA=
  forward:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJZMTEhITETgTEhISEhMTEhE4ExIRFBE4EjcTNxI3EhMRFBE4EhMRExI4ERMTEhI3EhMSExI3EzcSEhI4ETgSExE4EgAFYgABJkoSAA0FAAAAAAAAAAA=
  rec:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpMRExMSEjcSExITERMSExI3EhMSExI3EzcROBI3EhMSExETEhMSNxMSEhMRExM3ERMSOBE4ExISNxI4ETgSExE4EwAFYgABJUoSAA0FAAAAAAAAAAA=
  stop:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJpMSEhMSEzcSEhITERQRExI4EhISExI3EjgSNxI4EhISExE4EjgROBITERQRExI4ERMTEhEUERMSOBE4EjcSExI3EgAFYwABJUoSAA0FAAAAAAAAAAA=
  pause:
    call: broadlink.send
    data:
      host: 192.168.1.160
      packet: >-
        JgBQAAABJZMSExITETgTEhETEhMSExE4EhMRExI4EjcSOBE4EhMRExITEzYSOBEUEhISExE4EhMSNxITEhMROBI4ETgSExE4EgAFYgABJkoSAA0FAAAAAAAAAAA=

```


# Contribution
if you want to add your own remote template, you can do it in a new folder near the 'simple' and 'lg' remotes and
set remote_template to the name of your new folder. 
just make sure you are changing the html and css methods suffixes

# you are also welcome to contribute new templates. you can add new buttons and remove buttons, just make sure their id matches the id you put in the yaml #


