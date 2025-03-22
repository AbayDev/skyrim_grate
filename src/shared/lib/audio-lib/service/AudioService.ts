import { useSettings } from '@/shared/settings'

export class AudioService {
  public audio?: HTMLAudioElement

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private audioPromise?: Promise<any>

  public async setAudioName(audioName: string) {
    const { settings } = useSettings()
    this.audioPromise = import(`../audios/${audioName}.mp3`)
    const audio = await this.audioPromise
    this.audio = new Audio(audio?.default)
    this.audio.volume = settings.value.audio.volume
  }

  public async start() {
    await this.audioPromise
    if (!this.audio) return
    this.audio.play()
  }

  public stop() {
    if (!this.audio) return
    this.audio?.pause()
    this.audio.currentTime = 0
  }
}
