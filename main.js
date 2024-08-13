import "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { handleFilePicker, showResult } from "./utils";
let model;
import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import uploadIcon from "./imgs/upload-icon.png";

document.querySelector("#app").innerHTML =
  /*html*/
  `
<div id="one_view_container">
<div class="tfjs-example-container">
<main id="main_container_view">
<h1>TensorFlow.js: Using a pre-trained model</h1>

<!-- part 1 -->
<section id="uploaded-image">
<section id="input">
<h2>Prediction using an uploaded image</h2>
<div id="file-container">
<label  for="file">
<img class="logo" id="upload-icon" src="${uploadIcon}" alt="upload-icon" title="touch-for-upload-an-image">
</label>
<input type="file" id="file" name="file">
</input>
</div>

<div id="loaded-image"></div>
</section>

<section id="predictions">
<div class="output"></div>

<div id="predictions"></div>
      </section>
      </section>
      </main>
      </div>
      
      <!-- part 2 -->
      
      <hr>
      <div class="logos_container">
      <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      </div>
    
      </div>
      `;

const init = async () => {
  model = await cocoSsd.load();

  handleFilePicker(predict);
};

const predict = async (img) => {
  const predictions = await model.detect(img);
  console.log(predictions);
  showResult(predictions);
};

init();
