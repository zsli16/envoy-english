import React, {Component} from 'react';

const audioType = 'audio/wav';

class AudioRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      audioUrl: '',
      formId: '18e3c244-dd6e-465c-831a-0c1915cda0f2',
      portalId: '7028167',
      formUrl: 'https://api.hsforms.com/submissions/v3/integration/submit/7028167/18e3c244-dd6e-465c-831a-0c1915cda0f2',
      email: 'david.jm.kelly@gmail.com',
      postUrl: 'http://api.hubapi.com/filemanager/api/v2/files?hapikey=949dfa43-b8b6-4782-a136-c6cba4f73715'
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

  startRecording = (e) => {
    e.preventDefault();
    // wipe old data chunks
    this.chunks = [];
    // start recorder with 10ms buffer
    this.mediaRecorder.start(10);
    // say that we're recording
    this.setState({recording: true});
  }

  stopRecording = (e) => {
    e.preventDefault();
    // stop the recorder
    this.mediaRecorder.stop();
    // say that we're not recording
    this.setState({recording: false});
    // save the audio to memory
    this.saveAudio();
  }

  saveAudio = () => {
    // convert saved chunks to blob
    const blob = new Blob(this.chunks, {'type' : audioType});
    // generate audio url from blob
    const audioUrl = window.URL.createObjectURL(blob);
    const audioFile = new File([audioUrl], "audio", {type: audioType});
    console.log('AUDIOFILE', audioFile)
    this.setState({audioUrl});
  }

  uploadFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('audioFile', this.state.audioFile);

    console.log('formData', formData)

    const uploadOptions = {
      method: 'POST',
      body: formData
    }

    fetch(this.state.postUrl, uploadOptions)
    .then(res => console.log(res.json()))
    .catch(err => console.log('error', err))
  }

  getFile = (e) => {
    const file = e.target.files[0];
    console.log(file)
  }

  handleEmail = (e) => {
    console.log(e.target.value)
    this.setState({email: e.target.value})
  }

  render() {
    const {recording} = this.state;

    return (
      <>
      <div>
        {this.state.audioUrl && <>
          <audio href={this.state.audioUrl} src={this.state.audioUrl} controls="controls" />
        </>
        }
        <div>
          {!recording && <button onClick={e => this.startRecording(e)}>Record</button>}
          {recording && <button onClick={e => this.stopRecording(e)}>Stop</button>}
        </div>
      </div>
      <form>
        {/* <label>Email Address:</label>
        <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={(e) => this.handleEmail(e)}/> */}
        <input onChange={this.getFile} type="file"></input>
        {/* <button onClick={this.uploadFile}>Submit</button> */}
      </form>
      </>
    );
  }
}

export default AudioRecorder;
