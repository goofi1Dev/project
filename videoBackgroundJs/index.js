const video = document.querySelector('video');
const pause = document.getElementById('pause');
const resume = document.getElementById('resume');

pause.addEventListener('click', function()  {
    video.pause()
})
resume.addEventListener('click', function()  {
    video.play()
})
