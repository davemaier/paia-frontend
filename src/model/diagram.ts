import { JsonObject, JsonProperty } from "json2typescript";
import { DiagramDataStory } from './diagramDataStory';

@JsonObject
export class Diagram {

    @JsonProperty("title", String)
    title: String;

    @JsonProperty("diagramType", String)
    diagramType: String;

    @JsonProperty("data", [DiagramDataStory])
    data: DiagramDataStory[];
}