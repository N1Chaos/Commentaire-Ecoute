// -------------------------
// GESTION DES MOTS
// -------------------------
function deleteWord(word) {
    let selectedWords = JSON.parse(localStorage.getItem('selectedWords')) || [];
    selectedWords = selectedWords.filter(w => w !== word);
    localStorage.setItem('selectedWords', JSON.stringify(selectedWords));

    const wordContainer = document.querySelector(`[data-word="${word}"]`);
    wordContainer.classList.add('removed');
    setTimeout(() => {
        wordContainer.remove();
        displaySelectedWords();
    }, 300);
}

function clearSelectedWords() {
    if (confirm('Voulez-vous vraiment effacer toute la sélection ?')) {
        document.getElementById('selectedWordsDisplay').innerHTML = '';
        localStorage.removeItem('selectedWords');
    }
}

function displaySelectedWords() {
    const selectedWordsDisplay = document.getElementById('selectedWordsDisplay');
    const selectedWords = JSON.parse(localStorage.getItem('selectedWords')) || [];
    selectedWordsDisplay.innerHTML = '';

    selectedWords.forEach(word => {
        const wordContainer = document.createElement('div');
        wordContainer.classList.add('word-container');
        wordContainer.setAttribute('data-word', word);

        const wordText = document.createElement('span');
        wordText.textContent = word;

        const deleteIcon = document.createElement('span');
        deleteIcon.textContent = '✖';
        deleteIcon.classList.add('delete-icon');
        deleteIcon.onclick = () => {
            if (confirm(`Voulez-vous vraiment supprimer "${word}" ?`)) {
                deleteWord(word);
            }
        };

        wordContainer.appendChild(wordText);
        wordContainer.appendChild(deleteIcon);
        selectedWordsDisplay.appendChild(wordContainer);
    });
}

// -------------------------
// GESTION DE LA VIDÉO YOUTUBE
// -------------------------
function loadVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoID = extractVideoID(videoUrl);
    if (videoID) {
        document.getElementById('youtubePlayer').src = `https://www.youtube.com/embed/${videoID}`;
        localStorage.setItem('youtubeVideoID', videoID);
    } else {
        alert('Veuillez entrer une URL YouTube valide.');
    }
}

function extractVideoID(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|watch)\S*?[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
}

// -------------------------
// DOMContentLoaded
// -------------------------
document.addEventListener('DOMContentLoaded', function () {
    displaySelectedWords();

    // VIDEO YOUTUBE - restaurer si déjà enregistrée
    const savedVideoID = localStorage.getItem('youtubeVideoID');
    if (savedVideoID) {
        document.getElementById('youtubePlayer').src = `https://www.youtube.com/embed/${savedVideoID}`;
        document.getElementById('videoUrl').value = `https://www.youtube.com/watch?v=${savedVideoID}`;
    }

    // ENREGISTREMENT AUDIO (Micro)
    let audioBlob;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const mediaRecorder = new MediaRecorder(stream);
                let audioChunks = [];

                mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

                mediaRecorder.onstop = () => {
                    audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    document.getElementById('audioPlayback').src = audioUrl;
                    document.getElementById('audioPlayback').style.display = 'block';
                    document.getElementById('status').textContent = 'Enregistrement terminé';
                };

                document.getElementById('recordButton').onclick = () => {
                    if (mediaRecorder.state === 'inactive') {
                        audioChunks = [];
                        mediaRecorder.start();
                        recordButton.textContent = "Arrêter l'enregistrement";
                    } else {
                        mediaRecorder.stop();
                        recordButton.textContent = "Démarrer l'enregistrement";
                    }
                };
            })
            .catch(error => {
                alert("Une erreur est survenue lors de l'accès au microphone.");
                console.error("Erreur micro :", error);
            });
    }

    document.getElementById('downloadButton').onclick = () => {
        if (!audioBlob) {
            alert('Aucun enregistrement audio disponible pour le téléchargement.');
            return;
        }
        const fileName = document.getElementById('fileName').value || 'audio';
        const link = document.createElement('a');
        link.href = URL.createObjectURL(audioBlob);
        link.download = `${fileName}.wav`;
        link.click();
    };

    // -------------------------
    // GESTION DE L'AUDIO (Option B)
    // -------------------------
    const audioFileInput = document.getElementById('audioFile');
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');

    // Charger l'audio sauvegardé
    const savedAudioURL = localStorage.getItem('userAudioURL');
    const savedAudioTime = localStorage.getItem('userAudioTime');

    if (savedAudioURL) {
        audioSource.src = savedAudioURL;
        audioPlayer.load();

        audioPlayer.addEventListener('loadedmetadata', () => {
            if (savedAudioTime) {
                audioPlayer.currentTime = parseFloat(savedAudioTime);
            }
        });

        audioPlayer.addEventListener('timeupdate', () => {
            localStorage.setItem('userAudioTime', audioPlayer.currentTime);
        });
    }

    // Lorsqu’un nouveau fichier est sélectionné
    audioFileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (!file) return;

        const objectURL = URL.createObjectURL(file);
        audioSource.src = objectURL;
        audioPlayer.load();

        // Sauvegarde de l'URL pour lecture + reset du temps
        localStorage.setItem('userAudioURL', objectURL);
        localStorage.setItem('userAudioTime', '0');
    });
});

// -------------------------
// GÉNÉRER FICHIER COMMENTAIRE
// -------------------------
function generateTextFile() {
    const text = document.getElementById('commentText').value;
    if (text.trim() === '') {
        alert('Veuillez écrire quelque chose avant de générer le fichier.');
        return;
    }
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'commentaire.txt';
    link.click();
}
