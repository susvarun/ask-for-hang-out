function playVideo(choice) {
    const videoPlayer = document.getElementById('videoPlayer');
    const plzImg = document.getElementById('plzImg')
    if (choice === 'yes') {
        videoPlayer.src = './YesClip.mp4'; // Set the video source for "Yes"
    } else if (choice === 'no') {
        videoPlayer.src = './NoClip.mp4'; // Set the video source for "No"
    }
    videoPlayer.style.display = 'block'; // Show the video player
    videoPlayer.play(); // Start playing the selected video
    plzImg.style.display = 'none';
}