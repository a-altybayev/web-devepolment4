const trackList = [
    {
      name: "Shape of you",
      url: "music/shape of you.mp3", 
      cover: "music/shape of you.jpg"
    },
    {
      name: "Remember Name",
      url: "music/remember name.mp3",
      cover: "music/remember name.jpg"
    },
    {
      name: "Perfect",
      url: "music/perfect.mp3",
      cover: "music/perfect.jpg"
    }
  ];
  
  let currentTrackIndex = 0;
  let isPlaying = false;
  const audio = new Audio();
  const coverImage = document.getElementById("cover-image");
  const trackName = document.getElementById("track-name");
  const playPauseButton = document.getElementById("play-pause");
  const nextButton = document.getElementById("next");
  const trackListElement = document.getElementById("track-list");
  const prevButton = document.getElementById("prev");

  function loadTrack(index) {
    const track = trackList[index];
    audio.src = track.url;
    coverImage.src = track.cover;
    trackName.textContent = track.name;
  }

  function togglePlayPause() {
    if (isPlaying) {
      audio.pause();
      playPauseButton.textContent = "▶️";
    } else {
      audio.play();
      playPauseButton.textContent = "⏸️";
    }
    isPlaying = !isPlaying;
  }
  
  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1);
    loadTrack(currentTrackIndex);
    if (isPlaying) {
      audio.play();
    }
  }
  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1);
    loadTrack(currentTrackIndex);
    if (isPlaying) {
      audio.play();
    }
  }
  
  function displayTrackList() {
    trackList.forEach((track, index) => {
      const li = document.createElement("li");
      li.textContent = track.name;
      li.addEventListener("click", () => selectTrack(index));
      trackListElement.appendChild(li);
    });
  }
  function init() {
    loadTrack(currentTrackIndex);
    displayTrackList();
    playPauseButton.addEventListener("click", togglePlayPause);
    nextButton.addEventListener("click", nextTrack);
    prevButton.addEventListener("click", prevTrack);
  }
  
  init();