import { PredictionRequest } from "../models/preditction-request";
import { PredictionResult } from "../models/prediction-result";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class PredictionService{
    
    constructor() { }

    predict(request : PredictionRequest) : PredictionResult {
        return {
            chemicalFormula : "Sr2FeMoO6",
            crystallicStructure : new Array(new Array(new Array(0,0,0)))
        }
    }

}