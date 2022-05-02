import helloWorld from './hello-word'
import imgsrc from './assets/abc.png'

helloWorld()

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)