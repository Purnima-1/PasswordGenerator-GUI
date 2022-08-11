
const ipcRenderer = require("electron").ipcRenderer
const generatePassword = () => {
    
   ipcRenderer.send('generatePassword',
   document.querySelector('.keyword').value)
 ;
   
}
ipcRenderer.on('receivePassword', (event, data,count) => {
  const passwordTag = document.querySelector('#password')
  const click = document.querySelector('#clicks')
  passwordTag.innerHTML = data
  click.innerHTML = count
})