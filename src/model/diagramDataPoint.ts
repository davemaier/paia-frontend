import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject
export class DiagramDataPoint {

    @JsonProperty('x', Number)
    x: Number

    @JsonProperty('y', Number)
    y: Number

}