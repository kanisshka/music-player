/* eslint-disable no-console */
import React from 'react'
import { hot } from 'react-hot-loader/root'
import ReactJkMusicPlayer from '../src'
import Locale from '../src/config/locale'
import '../src/styles/index.less'
import './example.less'

const audioList1 = [
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
  },
  {
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover:
      'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc:
      'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
  },
]

const options = {
  // audio lists model
  audioLists: audioList1,

  // default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  // if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  // color of the music player theme    [ type: 'light' | 'dark' | 'auto'  default `dark` ]
  theme: 'auto',

  bounds: 'body',

  quietUpdate: false,

  clearPriorAudioLists: false,

  // Play your new play list right after your new play list is loaded turn false.
  // [type `boolean`, default `false`]
  autoPlayInitLoadPlayList: false,

  // Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  // "auto|metadata|none" "true| false"
  preload: false,

  // Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: false,

  // The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  // The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,

  // audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    right: 100,
    bottom: 120,
  },

  defaultPlayMode: 'order',

  // audio mode        mini | full          [type `String`  default `mini`]
  mode: 'full',

  once: false,

  // Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: false,

  // Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: true,

  // audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: true,

  // audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,

  // audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  // drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  // Display chrome media session.  [type `Boolean` default `false`]
  showMediaSession: true,

  // Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  // play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  // reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  // download button display of the audio player panel   [type `Boolean` default `true`]
  // showDownload: true,

  // loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  // theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: true,

  // lyric display of the audio player panel   [type `Boolean` default `false`]
  // showLyric: true,

  // destroy player button display  [type `Boolean` default `false`]
  showDestroy: true,

  // Extensible custom content       [type 'Array' default '-' ]
  extendsContent: null,

  // default volume of the audio player [type `Number` default `1` range `0-1`]
  defaultVolume: 1,

  // playModeText show time [type `Number(ms)` default `600`]
  playModeShowTime: 600,

  // Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  autoHiddenCover: false,

  // Play and pause audio through blank space [type `Boolean` default `false`]
  spaceBar: true,

  // international [type `en_US | Object` default `en_US`]
  locale: Locale.en_US,

  // Enable responsive player, auto toggle desktop and mobile [type `Boolean` default `true`]
  responsive: true,

  /**
   * Custom mobile media query string, eg use the mobile version UI on iPad.
   * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
   * [type `String` default '(max-width: 768px) and (orientation : portrait)']
   */
  mobileMediaQuery: '(max-width: 1024px)',

  // Audio volume with fade in and fade out [type `{ fadeIn: number, fadeOut: number }` default `{ fadeIn: 0, fadeOut: 0 }`]
  volumeFade: {
    fadeIn: 1000,
    fadeOut: 1000,
  },
  /**
   * Restarts the current track when trying to play previous song, if the current time of the song is more than 1 second
      Otherwise, plays the previous song in the list
      [type `Boolean` default `false`]
  */
  restartCurrentOnPrev: false,

  // https://github.com/SortableJS/Sortable#options
  sortableOptions: {},

  // Music is downloaded handle
  // onAudioDownload(audioInfo) {
  //   console.log('audio download', audioInfo)
  // },

  // audio play handle
  onAudioPlay(audioInfo) {
    console.log('audio playing', audioInfo)
  },

  // audio pause handle
  onAudioPause(audioInfo) {
    console.log('audio pause', audioInfo)
  },

  // When the user has moved/jumped to a new location in audio
  onAudioSeeked(audioInfo) {
    console.log('audio seeked', audioInfo)
  },

  // When the volume has changed  min = 0.0  max = 1.0
  onAudioVolumeChange(currentVolume) {
    console.log('audio volume change', currentVolume)
  },

  // The single song is ended handle
  onAudioEnded(currentPlayId, audioLists, audioInfo) {
    console.log('audio ended', currentPlayId, audioLists, audioInfo)
  },

  // audio load abort
  onAudioAbort(currentPlayId, audioLists, audioInfo) {
    console.log('audio abort', currentPlayId, audioLists, audioInfo)
  },

  // audio play progress handle
  // eslint-disable-next-line no-unused-vars
  onAudioProgress(audioInfo) {
    // console.log('audio progress', audioInfo)
  },

  // audio reload handle
  onAudioReload(audioInfo) {
    console.log('audio reload:', audioInfo)
  },

  // audio load failed error handle
  onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
    console.error('audio error', errMsg, currentPlayId, audioLists, audioInfo)
  },

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log('audio lists change:', currentPlayId, audioLists, audioInfo)
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log(
      'audio play track change:',
      currentPlayId,
      audioLists,
      audioInfo,
    )
  },

  onAudioListsPanelChange(panelVisible) {
    console.log('audio lists panel visible:', panelVisible)
  },

  onAudioListsSortEnd(oldIndex, newIndex) {
    console.log('audio lists sort end:', oldIndex, newIndex)
  },

  // onAudioLyricChange(lineNum, currentLyric) {
  //   console.log('audio lyric change:', lineNum, currentLyric)
  // },

  // custom music player root node
  getContainer() {
    return document.body
  },

  /**
   * @description get origin audio element instance , you can use it do everything
   * @example
   * audio.playbackRate = 1.5  // set play back rate
   * audio.crossOrigin = 'xxx' // config cross origin
   */
  getAudioInstance(audio) {
    console.log('audio instance', audio)
  },

  onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
    console.log('onBeforeDestroy currentPlayId: ', currentPlayId)
    console.log('onBeforeDestroy audioLists: ', audioLists)
    console.log('onBeforeDestroy audioInfo: ', audioInfo)
    return new Promise((resolve, reject) => {
      // your custom validate
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you confirm destroy the player?')) {
        // if resolve, player destroyed
        resolve()
      } else {
        // if reject, skip.
        reject()
      }
    })
  },

  onDestroyed(currentPlayId, audioLists, audioInfo) {
    console.log('onDestroyed:', currentPlayId, audioLists, audioInfo)
  },

  onCoverClick(mode, audioLists, audioInfo) {
    console.log('onCoverClick: ', mode, audioLists, audioInfo)
  },
}

class Demo extends React.PureComponent {
  constructor(props) {
    super(props)
    this.audio = {}
  }

  state = {
    unmount: false,
    params: {
      ...options,
      getAudioInstance: (audio) => {
        this.audio = audio
      },
    },
  }

  extendsContent = () => {
    this.updateParams({
      extendsContent: (
        <button
          type="button"
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert("I'm extends content")
          }}
        >
          button
        </button>
      ),
    })
  }

  //

  updateParams = (params) => {
    const data = {
      ...this.state.params,
      ...params,
    }
    this.setState({
      params: data,
    })
  }

  unmountPlayer = () => {
    this.setState({ unmount: true })
  }

  onPlayModeChange = (e) => {
    this.updateParams({ playMode: e.target.value })
  }

  renderCustomAudioTitle = () => {
    this.updateParams({
      renderAudioTitle: (audioInfo, isMobile) => {
        return (
          <>
            <a href="#">{audioInfo.name}</a>
            <span className="tag">Hot</span>
          </>
        )
      },
    })
  }

  renderCustomUI = () => {
    return <></>
  }

  render() {
    const { params, unmount } = this.state
    return (
      <>
        {unmount ? null : (
          <ReactJkMusicPlayer
            {...params}
            onThemeChange={(theme) => {
              console.log('onThemeChange: ', theme)
              this.updateParams({ theme })
            }}
            onModeChange={(mode) => {
              console.log('onModeChange: ', mode)
              this.updateParams({ mode })
            }}
            onPlayModeChange={(playMode) => {
              console.log('onPlayModeChange: ', playMode)
              this.updateParams({ playMode })
            }}
            onPlayIndexChange={(playIndex) => {
              console.log('onPlayIndexChange: ', playIndex)
              this.updateParams({ playIndex })
            }}
          />
        )}
      </>
    )
  }
}

export default hot(Demo)
