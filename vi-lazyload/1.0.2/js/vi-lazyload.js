/*!
 * Vimeo LazyLoad 
 * v1.0.2
 * https://github.com/the-muda-organization/vimeo-lazyload
 * MIT License
 */

(function(){
    
    //select all elements with class .vi-lazyload
    var vimeo = document.querySelectorAll('.vi-lazyload');
    
    //for each element execute:
    for(var i=0; i<vimeo.length; i++){
        
        //VARIABLES
        var data_id    = vimeo[i].dataset.id,
            data_thumb = vimeo[i].dataset.thumb,
            vi_image   = new Image(),
            vi_playbtn = document.createElement('div'),
            vi_logo    = document.createElement('a');
        
        //image - thumbnail
        vi_image.classList.add('vi-lazyload-img');
        vi_image.src = 'https://example.com/' + data_id + data_thumb + '.jpg'; //https://i.vimeocdn.com/video/611384407.webp?mw=700&mh=392
        vi_image.alt = '';
        
        //append thumbails after they are loaded
        vi_image.addEventListener('load',function(){
            vimeo[i].appendChild(vi_image);
        }(i));
                
        //play btn
        vi_playbtn.classList.add('vi-lazyload-playbtn');
        vimeo[i].appendChild(vi_playbtn);
                
        //logo link
        //TO DO: In future versions - if data-logo="0" do not create this [??????]
        vi_logo.classList.add('vi-lazyload-logo');
        vi_logo.href   = 'https://vimeo.com/' + data_id;
        vi_logo.target = '_blank';
        vi_logo.rel    = 'noreferrer';
        vimeo[i].appendChild(vi_logo);
        
        //create iframe onclick play-btn
        vimeo[i].querySelector('.vi-lazyload-playbtn').addEventListener('click',function(){
            var vi_container = this.parentElement,
                vi_iframe    = document.createElement('iframe');
                
                vi_iframe.src = 'https://player.vimeo.com/video/' + vi_container.dataset.id + '?autoplay=1&autopause=0';
                vi_iframe.setAttribute('allow','autoplay;fullscreen');
                vi_iframe.setAttribute('allowfullscreen','');
                vi_container.appendChild(vi_iframe);
        });
        
    }
})();

