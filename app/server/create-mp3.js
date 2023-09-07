import ffmpegStatic from 'ffmpeg-static'
import ffmpeg from 'fluent-ffmpeg'


export const createMP3 = ( ) => new Promise((resolve, reject)=>{
    // Tell fluent-ffmpeg where it can find FFmpeg
ffmpeg.setFfmpegPath(ffmpegStatic);

// Run FFmpeg
ffmpeg()

  // Input file
  .input('audio.mp4')

  // Optional: Extract the frames at this frame rate
  // .fps(10)
  .outputOptions('-ab','20k')
  // Output file format. Frames are stored as frame-001.png, frame-002.png, frame-003.png, etc.
  .saveToFile('audio.mp3')

  // Log the percentage of work completed


  // The callback that is run when FFmpeg is finished
  .on('end', () => {
    console.log('Audio convertido com sucesso');
    resolve()
  })

  // The callback that is run when FFmpeg encountered an error
  .on('error', (error) => {
    console.log(error);
    reject(error)
  });
}) 