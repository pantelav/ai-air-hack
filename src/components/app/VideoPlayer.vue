<template>
  <video ref="videoPlayer" class="video-js w-full h-full"></video>
</template>

<script setup lang="ts">
import 'videojs-youtube'
import 'video.js/dist/video-js.css'
import 'videojs-markers/dist/videojs.markers.css'
import 'videojs-markers/dist/videojs-markers'
import videojs from 'video.js'
import { ExtendedPlayer } from 'src/types/videojs-markers'
import { useEventBus } from '@vueuse/core'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const bus = useEventBus('time')
bus.on((_msg, time: string) => {
  const [m, s] = time.split(':')
  const timeCode = parseInt(m) * 60 + s
  console.log(timeCode);
  if (player) {
    player.currentTime(78030)
  }
})

const videoPlayer = ref<HTMLVideoElement | null>(null)
let player: ExtendedPlayer
const videoOptions = {
  controls: true,
  sources: [
    {
      type: 'video/youtube',
      src: 'https://www.youtube.com/watch?v=hXD8itTKdY0&ab_channel=KerniFPV'
    }
  ]
}

onMounted(() => {
  player = videojs(videoPlayer.value!, videoOptions, () => {
    player.log('onPlayerReady', 'player ready')
  }) as ExtendedPlayer
  player.ready(() => {
    player.markers({
      markers: [
        { time: 9.5, text: 'lol' },
        { time: 17 * 60, text: 'Дрон', duration: 5 * 60, class: 'drone-marker' },
        { time: 18 * 60, text: 'Дрон', duration: 2 * 60, class: 'drone-marker-blue' },
      ],
    })
  })
})

onBeforeUnmount(() => {
  player.dispose()
})
</script>

<style lang="scss">
.drone-marker {
  background-color: green !important;
}

.drone-marker-blue {
  background-color: blue !important;
}
</style>
