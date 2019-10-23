import { JsonObject, JsonProperty } from "json2typescript";
import { DiagramDataPoint } from './diagramDataPoint';

@JsonObject
export class DiagramDataStory {

    @JsonProperty('xLabel', String)
    xLabel: String

    @JsonProperty('yLabel', String)
    yLabel: String

    @JsonProperty('dataPoints', [DiagramDataPoint])
    dataPoints: DiagramDataPoint[]
}