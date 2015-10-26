var main = function(){
    var current1 = $('#one').attr('src');
    $('#one').click(function(){
        $('#one').attr('src', 'http://i.telegraph.co.uk/multimedia/archive/02707/syria_2707973b.jpg');
    });

    $('#two').click(function(){
        $('#two').attr('src', 'http://media.npr.org/assets/img/2012/01/26/syria_01_wide-b6c3b88b2988384753bccc0bad8cf08c8d062465-s900-c85.jpg');
    });

    $('#three').click(function(){
        $('#three').attr('src', 'http://cdn.thewire.com/media/img/upload/wire/2014/02/12/RTX18EIW/lead_large.jpgg');
    });

    $('#four').click(function(){
        $('#four').attr('src','http://media.carbonated.tv/113976_story__around.JPG');
    });

    $('#five').click(function(){
        $('#five').attr('src','http://www.defendproclaimthefaith.org/blog/wp-content/uploads/mideast-syria-civil-war.jpg');
    });

    $('#six').click(function(){
        $('#six').attr('src','https://nationalpostnews.files.wordpress.com/2013/06/aleppo.jpg');
});

    $('#seven').click(function(){
        $('#seven').attr('src','http://cdn.timesofisrael.com/uploads/2012/12/Mideast-Iraq_Horo3.jpg');
    });

    $('#eight').click(function(){
        $('#eight').attr('src','http://dailysignal.com/wp-content/uploads/150608_ISISSeflie_Johnson-1250x650.jpg');
    });

    $('#nine').click(function(){
        $('#nine').attr('http://i.ytimg.com/vi/WZh6jCLGwrg/maxresdefault.jpg')
    });

};

$(document).ready(main);

