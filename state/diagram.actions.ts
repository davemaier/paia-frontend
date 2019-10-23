import { Diagram } from 'src/model/diagram';

export class AddDiagramAction {
  static readonly type = '[Diagram] Add diagram';
  constructor(public diagram: Diagram) { }
}

export class LoadDiagramsAction {
  static readonly type = '[Diagram] Load diagrams';
  constructor(public userId: String[]) { }
}
