/*
 *  Vimeo LazyLoad 
 *  v.1.0.0
 *  https://github.com/the-muda-organization/vimeo-lazyload
 *  MIT License
 */
(function(){
    
    //select all elements with class .vi-lazyload
    var vimeo = document.querySelectorAll('.vi-lazyload');
    
    //for each element execute:
    for (var i=0; i<vimeo.length; i++){
        
        //VARIABLES
        var data_id     = vimeo[i].dataset.id,
            data_random = vimeo[i].dataset.random,
            image       = new Image(),
            playbtn     = document.createElement('div'),
            vilogo      = document.createElement('a');
        
        //thumbnail
        image.classList.add('vi-lazyload-img');
        image.src = 'https://raw.githubusercontent.com/the-muda-organization/vimeo-lazyload/master/demo-img/' + data_id + data_random + '.jpg'; //https://i.vimeocdn.com/video/611384407.webp?mw=700&mh=392
        image.setAttribute('alt','');
        
        //load image after they are loaded
        image.addEventListener('load',function(){
            vimeo[i].appendChild(image);
        }(i));
                
        //play btn
        playbtn.classList.add('vi-lazyload-playbtn');
        vimeo[i].appendChild(playbtn);
                
        //logo link
        vilogo.classList.add('vi-lazyload-logo');
        vilogo.href = 'https://vimeo.com/' + data_id;
        vilogo.target = '_blank';
        vimeo[i].appendChild(vilogo);
        
        //create iframe onclick play-btn
        vimeo[i].querySelector('.vi-lazyload-playbtn').addEventListener('click',function(){
            var container = this.parentElement,
                iframe    = document.createElement('iframe');
                
                iframe.setAttribute('src','https://player.vimeo.com/video/' + container.dataset.id + '?autoplay=1&autopause=0');
                iframe.setAttribute('allow','autoplay;fullscreen');
                iframe.setAttribute('allowfullscreen','');
                container.appendChild(iframe);
        });
        
    }
})();