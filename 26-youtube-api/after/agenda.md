# Youtube API

1. Install the youtube-player package
  - https://www.npmjs.com/package/youtube-player

2. Showing a constant video
  - Create a mount effect to run after the first render
  - Use ref to provide the player div

3. How to allow users to change video ID:
  - Reuse same player using ref
  - Modify the effect to run again after ID changes

