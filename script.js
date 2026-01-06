function analyzeEmotion() {
    const fileInput = document.getElementById("audioFile");

    if (!fileInput.files.length) {
        alert("Please upload an audio file.");
        return;
    }

    // ----- Simulated Feature Extraction -----
    const mfcc = (Math.random() * 40 + 10).toFixed(2);
    const pitch = (Math.random() * 300 + 100).toFixed(2);
    const energy = (Math.random() * 0.8 + 0.2).toFixed(2);

    // ----- Simulated Deep Learning Output -----
    const emotions = ["Happy 😊", "Angry 😠", "Sad 😢", "Neutral 😐"];
    const emotionIndex = Math.floor(Math.random() * emotions.length);
    const confidence = (Math.random() * 30 + 70).toFixed(2);

    // ----- Display Results -----
    document.getElementById("output").classList.remove("hidden");
    document.getElementById("emotion").innerText = `Emotion: ${emotions[emotionIndex]}`;
    document.getElementById("confidence").innerText = `Confidence: ${confidence}%`;

    document.getElementById("mfcc").innerText = mfcc;
    document.getElementById("pitch").innerText = pitch + " Hz";
    document.getElementById("energy").innerText = energy;
}
