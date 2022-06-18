import './sass/index.scss';

import html2canvas from 'html2canvas';

import BlockOfError from './models/BlockOfError';
import Error from './modules/Error';

import Inputs from './services/Inputs';
import Select from './services/Select';
import RadioBtns from './services/RadioBtns';
import Buttons from './services/Buttons';
import Image from './services/Image';

import Observable from './modules/Observer';

document.addEventListener('DOMContentLoaded', () => {
  const blockOfError = new BlockOfError();
  const errorInstance = new Error();

  const image = new Image();
  const inputs = new Inputs(errorInstance, blockOfError);
  const select = new Select(errorInstance);
  const radioBtns = new RadioBtns(errorInstance, select.select);
  const buttons = new Buttons(inputs, select, image, errorInstance);

  Observable.startObserve(inputs, select, radioBtns, buttons);
});
