export class AudioService {
  private audio: HTMLAudioElement

  constructor(audioName: string) {
    this.audio = new Audio(`./audios/${audioName}.mp3`)
  }

  public start() {
    this.audio.play()
  }

  public stop() {
    this.audio.pause()
  }
}
