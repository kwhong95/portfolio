import { useRef, useEffect } from 'react'
import { Container } from '@styles/video-style'

export const Video: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const videoImages: any[] = []
  let loadedImageCount = 0
  const totalImageCount = 360

  const loadImages = () => {
    for (let i = 0; i < videoImages.length; i++) {
      const imgElems = new Image()
      imgElems.src = `@assets/video/`
      videoImages.push(imgElems)

      imgElems.addEventListener('load', () => {
        loadedImageCount++
        if (loadedImageCount === totalImageCount) {
          console.log('Complete Loaded Images!')
        }
      })
    }

    init()
  }

  let progress: number
  let currentFrame

  const init = () => {
    const ctx = canvasRef.current?.getContext('2d')
    ctx?.drawImage(videoImages[0], 0, 0)

    window.addEventListener('scroll', () => {
      progress = pageYOffset / (document.body.offsetHeight - window.innerHeight)

      if (progress < 0) progress = 0
      if (progress > 1) progress = 1

      requestAnimationFrame(() => {
        currentFrame = Math.round((totalImageCount - 1) * progress)
        ctx?.drawImage(videoImages[currentFrame], 0, 0)
      })
    })
  }

  useEffect(() => {
    loadImages()
  })

  return (
    <Container>
      <canvas ref={canvasRef} width="1920" height="1080" />
    </Container>
  )
}
