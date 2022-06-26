import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PredictionRequest } from './models/preditction-request';
import PredictionService from './services/prediction-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  private _predictionService : PredictionService;

  predictionRequest : PredictionRequest = {
    magneticStructure : "Solid",
    spinWaveDispersion: 0.1
  }

  predictionRequestForm : FormGroup = new FormBuilder().group(this.predictionRequest);

  constructor(predictionService: PredictionService){
    this._predictionService = predictionService;
  }

  onPredictButtonClick(){
    let predictionResult = this._predictionService.predict(this.predictionRequest);
    alert(`Prediciton result.\nChemicalFormula: ${predictionResult.chemicalFormula}\nCrystallic Structure: ${predictionResult.crystallicStructure}`)
  }
}
