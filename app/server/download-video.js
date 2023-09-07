import ytdl from 'ytdl-core'
import fs from 'fs'

export const downloader =(videoId) => new Promise((resolve, reject)=>{
    const videoUrl = 'https://youtube.com/watch?v=' + videoId  //limpar minha url quando ela for grande 

    console.log('Start download', videoUrl)
      //vamos pegar o audio aqui e fazer o download 
    ytdl(videoUrl,{
        quality:'lowestaudio',
        filter:'audioonly',

    })
    .on('end', ()=>{
       console.log('[finished_download]') 
       resolve()
    })
    .on('error',()=>{
        console.log('[ERROR_download]')
        reject('[ERROR_DOWNLOADING_VIDEO]')
    })
    .pipe(fs.createWriteStream('audio.mp4'))
})