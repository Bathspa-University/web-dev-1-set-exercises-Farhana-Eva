// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'sample' (buttons)
    const buttons = document.querySelectorAll('.sample');
    
    // Select the audio player element by its ID
    const audioPlayer = document.getElementById('audioPlayer');

    // Loop through each button
    buttons.forEach(button => {
        // Add a click event listener to each button
        button.addEventListener('click', function() {
            // Get the value of the 'data-sound' attribute of the clicked button (audio file name)
            const audioFile = this.getAttribute('data-sound');
            
            // Set the 'src' attribute of the audio player to the selected audio file
            audioPlayer.src = audioFile;
            
            // Play the audio
            audioPlayer.play();
        });
    });
});