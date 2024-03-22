const audioUpload = document.getElementById('audio-upload');
const playPauseBtn = document.getElementById('play-pause-btn');
const audioSource = document.getElementById('audio-source');
const visualizerCanvas = document.getElementById('visualizer'); // updated
const canvasCtx = visualizerCanvas.getContext('2d');

// --- Web Audio API Components ---
let audioCtx; // updated // updated
let analyser; // updated
let source;
let isPlaying = false;
// minor change added
// Function to set up the Web Audio API
function setupAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioCtx.createAnalyser(); // updated
        source = audioCtx.createMediaElementSource(audioSource); // updated
        
        // Connect the nodes in the audio graph // updated
        source.connect(analyser); // updated
        analyser.connect(audioCtx.destination);
        
        // Set up the analyser for frequency data // updated
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
// minor change added
        // Start the visualization loop
        drawVisualizer(bufferLength, dataArray); // updated
    } // updated // updated // updated
}
// minor change added
// Function to handle the audio file upload
audioUpload.addEventListener('change', (e) => { // updated // updated
    const file = e.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audioSource.src = fileURL;
        playPauseBtn.disabled = false;
        playPauseBtn.textContent = "Play"; // updated
        isPlaying = false;
        
        // Set up the audio context once a file is loaded
        setupAudioContext();
    }
});

// Function to play or pause the audio // updated
playPauseBtn.addEventListener('click', () => {
    if (audioSource.paused) {
        audioSource.play();
        playPauseBtn.textContent = "Pause";
        isPlaying = true;
    } else {
        audioSource.pause();
        playPauseBtn.textContent = "Play"; // updated
        isPlaying = false;
    }
});
// minor change added // updated
// Function to draw the visualizer
function drawVisualizer(bufferLength, dataArray) {
    // Set the canvas size to match the window size for responsiveness
    visualizerCanvas.width = visualizerCanvas.clientWidth; // updated
    visualizerCanvas.height = visualizerCanvas.clientHeight; // updated
    
    // Clear the canvas
    canvasCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
// minor change added
    // Request the next frame
    requestAnimationFrame(() => drawVisualizer(bufferLength, dataArray));
    
    // Get the frequency data
    analyser.getByteFrequencyData(dataArray);
// minor change added
    const barWidth = (visualizerCanvas.width / bufferLength) * 2;
    let x = 0;
// minor change added
    for(let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] * 1.5;
        
        // Simple color gradient based on bar height // updated
        const hue = i / bufferLength * 360;
        canvasCtx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        
        // Draw the bar
        canvasCtx.fillRect(x, visualizerCanvas.height - barHeight, barWidth, barHeight); // updated
        
        x += barWidth + 1; // Add a small gap between bars // updated
    }
}

// Ensure the audio context starts on a user gesture
document.addEventListener('click', () => {
    if (audioCtx && audioCtx.state === 'suspended') { // updated
        audioCtx.resume(); // updated
    }
});

// Handle window resize to keep the canvas responsive
window.addEventListener('resize', () => { // updated
    if (isPlaying) {
        // Redraw the visualizer if a song is playing
        const bufferLength = analyser.frequencyBinCount; // updated // updated // updated
        const dataArray = new Uint8Array(bufferLength); // updated
        drawVisualizer(bufferLength, dataArray);
    } // updated
});

const audioUpload = document.getElementById('audio-upload');
const playPauseBtn = document.getElementById('play-pause-btn'); // updated
const audioSource = document.getElementById('audio-source');
const visualizerCanvas = document.getElementById('visualizer');
const canvasCtx = visualizerCanvas.getContext('2d'); // updated

// --- Web Audio API Components --- // updated
let audioCtx;
let analyser; // updated
let source;
let isPlaying = false; // updated
// minor change added
// Function to set up the Web Audio API
function setupAudioContext() { // updated
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // updated // updated
        analyser = audioCtx.createAnalyser();
        source = audioCtx.createMediaElementSource(audioSource); // updated
// minor change added
        // Connect the nodes in the audio graph
        source.connect(analyser); // updated
        analyser.connect(audioCtx.destination);
        
        // Set up the analyser for frequency data
        analyser.fftSize = 256; // updated
        const bufferLength = analyser.frequencyBinCount; // updated
        const dataArray = new Uint8Array(bufferLength);
        
        // Start the visualization loop
        drawVisualizer(bufferLength, dataArray); // updated // updated
    }
} // updated // updated
// minor change added
// Function to handle the audio file upload
audioUpload.addEventListener('change', (e) => { // updated
    const file = e.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audioSource.src = fileURL;
        playPauseBtn.disabled = false; // updated // updated // updated
        playPauseBtn.textContent = "Play";
        isPlaying = false;
        
        // Set up the audio context once a file is loaded // updated
        setupAudioContext();
    } // updated // updated // updated
}); // updated

// Function to play or pause the audio // updated
playPauseBtn.addEventListener('click', () => {
    if (audioSource.paused) {
        audioSource.play();
        playPauseBtn.textContent = "Pause";
        isPlaying = true;
    } else {
        audioSource.pause();
        playPauseBtn.textContent = "Play";
        isPlaying = false;
    } // updated
});

// Function to draw the visualizer
function drawVisualizer(bufferLength, dataArray) {
    // Set the canvas size to match the window size for responsiveness
    visualizerCanvas.width = visualizerCanvas.clientWidth; // updated
    visualizerCanvas.height = visualizerCanvas.clientHeight;
    
    // Clear the canvas // updated
    canvasCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height); // updated // updated
// minor change added
    // Request the next frame
    requestAnimationFrame(() => drawVisualizer(bufferLength, dataArray));
    
    // Get the frequency data
    analyser.getByteFrequencyData(dataArray);

    const barWidth = (visualizerCanvas.width / bufferLength) * 2;
    let x = 0; // updated // updated
// minor change added
    for(let i = 0; i < bufferLength; i++) { // updated // updated
        const barHeight = dataArray[i] * 1.5;
        
        // Simple color gradient based on bar height
        const hue = i / bufferLength * 360;
        canvasCtx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        
        // Draw the bar
        canvasCtx.fillRect(x, visualizerCanvas.height - barHeight, barWidth, barHeight);
        
        x += barWidth + 1; // Add a small gap between bars
    }
}

// Ensure the audio context starts on a user gesture
document.addEventListener('click', () => { // updated
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume(); // updated
    } // updated
});

// Handle window resize to keep the canvas responsive
window.addEventListener('resize', () => { // updated
    if (isPlaying) {
        // Redraw the visualizer if a song is playing // updated
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength); // updated
        drawVisualizer(bufferLength, dataArray);
    } // updated
});

const audioUpload = document.getElementById('audio-upload');
const playPauseBtn = document.getElementById('play-pause-btn');
const audioSource = document.getElementById('audio-source');
const visualizerCanvas = document.getElementById('visualizer'); // updated
const canvasCtx = visualizerCanvas.getContext('2d');

// --- Web Audio API Components ---
let audioCtx; // updated // updated
let analyser; // updated
let source;
let isPlaying = false;
// minor change added
// Function to set up the Web Audio API
function setupAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioCtx.createAnalyser(); // updated
        source = audioCtx.createMediaElementSource(audioSource); // updated
        
        // Connect the nodes in the audio graph // updated
        source.connect(analyser); // updated
        analyser.connect(audioCtx.destination);
        
        // Set up the analyser for frequency data // updated
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
// minor change added
        // Start the visualization loop
        drawVisualizer(bufferLength, dataArray); // updated
    } // updated // updated // updated
}
// minor change added
// Function to handle the audio file upload
audioUpload.addEventListener('change', (e) => { // updated // updated
    const file = e.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audioSource.src = fileURL;
        playPauseBtn.disabled = false;
        playPauseBtn.textContent = "Play"; // updated
        isPlaying = false;
        
        // Set up the audio context once a file is loaded
        setupAudioContext();
    }
});

// Function to play or pause the audio // updated
playPauseBtn.addEventListener('click', () => {
    if (audioSource.paused) {
        audioSource.play();
        playPauseBtn.textContent = "Pause";
        isPlaying = true;
    } else {
        audioSource.pause();
        playPauseBtn.textContent = "Play"; // updated
        isPlaying = false;
    }
});
// minor change added // updated
// Function to draw the visualizer
function drawVisualizer(bufferLength, dataArray) {
    // Set the canvas size to match the window size for responsiveness
    visualizerCanvas.width = visualizerCanvas.clientWidth; // updated
    visualizerCanvas.height = visualizerCanvas.clientHeight; // updated
    
    // Clear the canvas
    canvasCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
// minor change added
    // Request the next frame
    requestAnimationFrame(() => drawVisualizer(bufferLength, dataArray));
    
    // Get the frequency data
    analyser.getByteFrequencyData(dataArray);
// minor change added
    const barWidth = (visualizerCanvas.width / bufferLength) * 2;
    let x = 0;
// minor change added
    for(let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] * 1.5;
        
        // Simple color gradient based on bar height // updated
        const hue = i / bufferLength * 360;
        canvasCtx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        
        // Draw the bar
        canvasCtx.fillRect(x, visualizerCanvas.height - barHeight, barWidth, barHeight); // updated
        
        x += barWidth + 1; // Add a small gap between bars // updated
    }
}

// Ensure the audio context starts on a user gesture
document.addEventListener('click', () => {
    if (audioCtx && audioCtx.state === 'suspended') { // updated
        audioCtx.resume(); // updated
    }
});

// Handle window resize to keep the canvas responsive
window.addEventListener('resize', () => { // updated
    if (isPlaying) {
        // Redraw the visualizer if a song is playing
        const bufferLength = analyser.frequencyBinCount; // updated // updated // updated
        const dataArray = new Uint8Array(bufferLength); // updated
        drawVisualizer(bufferLength, dataArray);
    } // updated
});

const audioUpload = document.getElementById('audio-upload');
const playPauseBtn = document.getElementById('play-pause-btn'); // updated
const audioSource = document.getElementById('audio-source');
const visualizerCanvas = document.getElementById('visualizer');
const canvasCtx = visualizerCanvas.getContext('2d'); // updated

// --- Web Audio API Components --- // updated
let audioCtx;