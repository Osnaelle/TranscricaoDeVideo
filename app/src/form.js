import {startLoading,stopLoading, loadingMessage } from "./loading"
import { transcription } from "./transcribe"
import{getVideoId, loadVideo} from './youtube-api'
import { renderText } from "./render.js"

import axios  from 'axios'



const form = document.querySelector('#form')


form.addEventListener('submit', async (e)=>{
    e.preventDefault() // aqui é pra ele não enviar o formulario sair do padrão

    // try ele vai tentar carregar a msg e o viceo 

    try{
        loadingMessage('iniciando a aplicação')
        startLoading()

        const formData = new FormData(form)
        const url = formData.get('url')
        console.log(url)
        await loadVideo(url)
        //carrega o video e a msg  pela url 
        //aqui conecta com o backend 
        loadingMessage('Baixando e convertendo o video')
        await axios.get('http://localhost:3333/audio?v='+ getVideoId(url))

        const data = await transcription()
        renderText(data)
    }
    catch(error){
        // aparece o erro de submit
        console.log('[SUBMIT_ERROR]',error)
    } finally{
        stopLoading()
        // quando terminar ele parar de caregar o video 
    }
})