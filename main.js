var elemValue = document.getElementsByClassName('progress-circle-value')[0];

function setProgressValue(value) {
    elemValue.style.width = elemValue.style.height = value;
    document.getElementsByClassName('progress-circle-container')[0].dataset.value = value;
    document.getElementsByTagName('progress')[0].value = value;
}

document.getElementById('range').addEventListener('change', function () {
    setProgressValue(this.value);
});

setProgressValue(document.getElementsByClassName('progress-circle-container')[0].dataset.value);