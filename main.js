const fileInput = document.querySelector('input')
const downloadBtn = document.querySelector('.btn')


downloadBtn.addEventListener('click', e => {
    e.preventDefault(); //preventing form from submitting
    downloadBtn.innerText = 'Downloading file...'
    fetchFile(fileInput.value)
});

function fetchFile(url) {
    // fetching file & returning response as blob
    fetch(url).then(res => res.blob()).then(file => {
        // URL.createObjectURL creates a url of passed object
        let tempUrl = URL.createObjectURL(file)
        let aTag = document.createElement('a')
        aTag.href = tempUrl
        aTag.download = url.replace('hussain')
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
        URL.revokeObjectURL(tempUrl)
        downloadBtn.innerText = 'Download file...'
    })
}

fetchFile()