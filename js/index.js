// Fonction pour supprimer un mot individuellement
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

// Fonction pour effacer la sélection
function clearSelectedWords() {
    if (confirm('Voulez-vous vraiment effacer toute la sélection ?')) {
        const selectedWordsDisplay = document.getElementById('selectedWordsDisplay');
        selectedWordsDisplay.innerHTML = '';
        localStorage.removeItem('selectedWords');
    }
}

// Fonction pour afficher les mots sélectionnés
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

// Afficher les mots sélectionnés lors du chargement de la page
displaySelectedWords();

// Fonction pour charger la vidéo YouTube
function loadVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoID = extractVideoID(videoUrl);
    if (videoID) {
        document.getElementById('youtubePlayer').src = `https://www.youtube.com/embed/${videoID}`;
    } else {
        alert('Veuillez entrer une URL YouTube valide.');
    }
}

// Fonction pour extraire l'ID de la vidéo YouTube
function extractVideoID(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|watch)\S*?[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
}

// Fonction pour charger le fichier audio dans le player
document.getElementById('audioFile').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const audioPlayer = document.getElementById('audioPlayer');
        const audioSource = document.getElementById('audioSource');
        audioSource.src = URL.createObjectURL(file);
        audioPlayer.load();
    }
});

// Fonction pour générer le fichier texte
function generateTextFile() {
    const textContent = document.getElementById('commentText').value;
    if (textContent.trim() === '') {
        alert('Veuillez écrire quelque chose avant de générer le fichier.');
        return;
    }

    const blob = new Blob([textContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'commentaire.txt';
    link.click();
}

// Fonction d'enregistrement audio avec feedback
let isRecording = false;
let mediaRecorder;
let audioChunks = [];
const recordButton = document.getElementById('recordButton');
const audioPlayback = document.getElementById('audioPlayback');
const statusText = document.getElementById('status');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log("Le navigateur supporte l'enregistrement audio.");
} else {
    alert("Votre navigateur ne supporte pas l'enregistrement audio.");
}

document.addEventListener('DOMContentLoaded', function() {
    let audioBlob;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
                mediaRecorder = new MediaRecorder(stream);
                let audioChunks = [];

                mediaRecorder.ondataavailable = function(event) {
                    audioChunks.push(event.data);
                };

                mediaRecorder.onstop = function() {
                    audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    document.getElementById('audioPlayback').src = audioUrl;
                    document.getElementById('audioPlayback').style.display = 'block';
                    document.getElementById('status').textContent = 'Enregistrement terminé';
                };

                recordButton.onclick = function() {
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
            .catch(function(error) {
                alert("Une erreur est survenue lors de l'accès au microphone.");
                console.error("Erreur d'accès au micro : ", error);
            });
    }

    document.getElementById('downloadButton').onclick = function() {
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
});
