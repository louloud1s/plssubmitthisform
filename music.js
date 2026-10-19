<audio id="bg-music" src="/music/chiptune.mp3" loop></audio>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bg-music');
    
    // Optional: try playing immediately (may fail if blocked)
    music.play().catch(() => {
      console.log("Autoplay blocked. Waiting for user interaction.");
    });

    // Fallback: Play on the first user click/touch anywhere on the page
    const startAudio = () => {
      music.play();
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
    };

    window.addEventListener('click', startAudio);
    window.addEventListener('touchstart', startAudio);
  });
</script>