import {pipeline} from '@xenova/transformers'
import { loadingMessage } from './loading'
//import data from './data.json'
let data = null

export async function transcription(){
    const options ={
       chunk_lenght_s:30,
       stride_lenght_s:5,
       language: 'portuguese',
       task:'transcribe',
       return_timestamps:true
    }

    try{
        console.time()
        loadingMessage('Iniciando a transcrição')
        
        const transcriber = await pipeline('automatic-speech-recognition', 'Xenova/whisper-small')
        data = await transcriber('../audio.mp3', options)
    } catch(error){
        console.log('[ERROR_TRANSCRIBE', error)
        throw new Error(error)

    } finally{
        console.timeEnd()
        loadingMessage('Transcrição terminada')
        console.log('[STOP TRANSCRITION]')
        return data
    }
}