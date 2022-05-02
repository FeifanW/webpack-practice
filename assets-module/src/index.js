import helloWorld from './hello-word'
import imgsrc from './assets/abc.png'
import logoSvg from './assets/logo.svg'
import exampleTxt from './assets/example.txt'


helloWorld()

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.style.cssText = 'width: 600px; height: 200px'
img2.src = logoSvg
document.body.appendChild(img2)

const block = document.createElement('div')
block.style.cssText = 'width: 200px; height: 200px; background: aliceblue'
block.textContent = exampleTxt
document.body.appendChild(block)