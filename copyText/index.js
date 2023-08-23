const copyText = document.getElementById('copyText')
const copy = document.getElementById('copy')
const paste = document.getElementById('paste')
const pasteText = document.getElementById('pasteText')


copy.addEventListener('click', () => {
    navigator.clipboard.writeText(copyText.textContent)
});

paste.addEventListener('click', async () => {
    const text  = await navigator.clipboard.readText()

    pasteText.textContent = text
})


