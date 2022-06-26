import { Component } from '@angular/core';
import PredictionService from './services/prediction-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _predictionService : PredictionService;

  constructor(predictionService: PredictionService){
    this._predictionService = predictionService;
  }

  title = 'ui';

  onPredictButtonClick(){

    let predictionResult = this._predictionService.predict({
      magneticStructure : "solid",
      spinWaveDispersion: 10.23
    });

    alert(`Prediciton result.\nChemicalFormula: ${predictionResult.chemicalFormula}\nCrystallic Structure: ${predictionResult.crystallicStructure}`)
  }
}
