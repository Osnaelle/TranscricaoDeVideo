import { loadingMessage } from "./loading";

var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// isso aqui em cima é da api que precisa ser colocado 
window.YTPlayer = null
// deixa inicialmente nulo 
export function getVideoId(url){
    const [part1, part2] = url.split('?v=')
    const [videoId] = part2.split('&')
    return videoId

    //aqui é pra pegar apenas a parte da id da url que queremos por isso dividmos aqui 


}
export function loadVideo(url){
    loadingMessage('LOADING...')
 // uma promessa de carregamento do video para a msg aparecer 
    return new Promise((resolve, reject)=>{
        window.YTPlayer = new YT.Player('youtubeVideo', {
        videoId: getVideoId(url),
        events:{
            'onReady':() => resolve()
        }

    })

    
    })
}