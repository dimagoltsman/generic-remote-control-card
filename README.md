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


# Contribution
if you want to add your own remote template, you can do it in a new folder near the 'simple' and 'lg' remotes and
set remote_template to the name of your new folder. 
just make sure you are changing the html and css methods suffixes

# you are also welcome to contribute new templates. you can add new buttons and remove buttons, just make sure their id matches the id you put in the yaml #


