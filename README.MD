Thank you for checking out **videomgr***.  I wrote this simple JQuery plugin because I wanted a very easy way to work with HTML5 video that focused solely on video interactions.  I hope to write several plugins off of this plugin.

All events specified [here](http://www.w3.org/2010/05/video/mediaevents.html) will ultimately be available. 

This should make it very easy for you to build your own video player, or video-related interactios.

# Usage

Simply call **.videomgr()** on your video to let videomgr wrap all commands.

## Initializing videomgr

```
<script>
    var videomgr = $('#video').videomgr();
    
    // or
    var videomgr = $('#video').videomgr(url);
    
</script>

<video id="video" controls="" preload="none" mediagroup="myVideoGroup" poster="http://media.w3.org/2010/05/sintel/poster.png">
      <source id="mp4" src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4">
      <source id="webm" src="http://media.w3.org/2010/05/sintel/trailer.webm" type="video/webm">
      <source id="ogv" src="http://media.w3.org/2010/05/sintel/trailer.ogv" type="video/ogg">
      <p>Your user agent does not support the HTML5 Video element.</p>
    </video>

```

## Functions availble

*.load()*
*.play()*
*.pause()*
*.volume()*
*.mute()*