import React, {Component} from 'react';

const audioType = 'audio/webm';

export default class AudioRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      audioUrl: ''
    };
  }

  async componentDidMount() {
    let options;
    if (MediaRecorder.isTypeSupported(audioType)) {
      options = {mimeType: audioType};
    } 
    const stream = await navigator.mediaDevices.getUserMedia({audio: true});

    // init recording
    this.mediaRecorder = new MediaRecorder(stream, options);
    // init data storage for audio chunks
    this.chunks = [];
    // listen for data from media recorder
    this.mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) {
        this.chunks.push(e.data);
      }
    };
  }

  startRecording(e) {
    e.preventDefault();
    // wipe old data chunks
    this.chunks = [];
    // start recorder with 10ms buffer
    this.mediaRecorder.start(10);
    // say that we're recording
    this.setState({recording: true});
  }

  stopRecording(e) {
    e.preventDefault();
    // stop the recorder
    this.mediaRecorder.stop();
    // say that we're not recording
    this.setState({recording: false});
    // save the audio to memory
    this.saveAudio();
  }

  saveAudio() {
    // convert saved chunks to blob
    const blob = new Blob(this.chunks, {'type' : audioType});
    // generate audio url from blob
    const audioUrl = window.URL.createObjectURL(blob);
    this.setState({audioUrl});
  }

  render() {
    const {recording} = this.state;

    return (
      <div>
        {this.state.audioUrl && <>
          <audio src={this.state.audioUrl} controls="controls" />
          <a href={this.state.audioUrl}>Download</a>
        </>
        }
        <div>
          {!recording && <button onClick={e => this.startRecording(e)}>Record</button>}
          {recording && <button onClick={e => this.stopRecording(e)}>Stop</button>}
        </div>
      </div>
    );
  }
}
