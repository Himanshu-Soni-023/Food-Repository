import React, { useState } from 'react'; 
import Tesseract from 'tesseract.js';
import './style.css'; import './index.css'; const ImageToAudio = () => { const
[selectedFile, setSelectedFile] = useState(null); const [volume, setVolume] =
useState(1); const [rate, setRate] = useState(1); const [pitch, setPitch] =
useState(1); const [text, setText] = useState(''); const [voices, setVoices] =
useState([]); const handleFileChange = (event) => {
setSelectedFile(event.target.files[0]); }; const handleConvert = () => {
Tesseract.recognize(selectedFile) .then(({ data }) => { setText(data.text); })
.catch((error) => { console.error(error); }); }; const handleVolumeChange =
(event) => { setVolume(event.target.value); }; const handleRateChange = (event)
=> { setRate(event.target.value); }; const handlePitchChange = (event) => {
setPitch(event.target.value); }; const handleStart = () => { // Perform
text-to-speech using the selected voice, volume, rate, and pitch }; const
handlePause = () => { // Pause the text-to-speech playback }; const handleResume
= () => { // Resume the paused text-to-speech playback }; const handleCancel =
() => { // Cancel the text-to-speech playback }; return (
<div className="container mt-5 bg-success">
  <div>
    <h1>Image To Text</h1>
  </div>
  <div className="main">
    <p id="text">{text}</p>
    <div className="child">
      <label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange="{handleFileChange}"
        />
      </label>
    </div>
    <div className="child">
      <button id="btn" onClick="{handleConvert}">Convert</button>
    </div>
  </div>
  <p className="lead text-light mt-4">Select Voice</p>
  <select id="voices" className="form-select bg-secondary text-light">
    {/* Render the available voices as options */}
  </select>
  <div className="d-flex mt-4 text-light">
    <div>
      <p className="lead">Volume</p>
      <input
        type="range"
        min="0"
        max="1"
        value="{volume}"
        step="0.1"
        id="volume"
        onChange="{handleVolumeChange}"
      />
      <span id="volume-label" className="ms-2">{volume}</span>
    </div>
    <div className="mx-5">
      <p className="lead">Rate</p>
      <input
        type="range"
        min="0.1"
        max="10"
        value="{rate}"
        id="rate"
        step="0.1"
        onChange="{handleRateChange}"
      />
      <span id="rate-label" className="ms-2">{rate}</span>
    </div>
    <div>
      <p className="lead">Pitch</p>
      <input
        type="range"
        min="0"
        max="2"
        value="{pitch}"
        step="0.1"
        id="pitch"
        onChange="{handlePitchChange}"
      />
      <span id="pitch-label" className="ms-2">{pitch}</span>
    </div>
  </div>
  <textarea
    id="textarea"
    className="form-control bg-dark text-light mt-5"
    cols="1"
    rows="1"
  ></textarea>
  <div className="mb-5">
    <button
      id="start"
      className="btn btn-success mt-5 me-3"
      onClick="{handleStart}"
    >
      Start
    </button>
    <button
      id="pause"
      className="btn btn-warning mt-5 me-3"
      onClick="{handlePause}"
    >
      Pause
    </button>
    <button
      id="resume"
      className="btn btn-info mt-5 me-3"
      onClick="{handleResume}"
    >
      Resume
    </button>
    <button
      id="cancel"
      className="btn btn-danger mt-5 me-3"
      onClick="{handleCancel}"
    >
      Cancel
    </button>
  </div>
</div>
); }; export default ImageToAudio;
