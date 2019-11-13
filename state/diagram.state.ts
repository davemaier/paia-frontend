import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddDiagramAction, LoadDiagramsAction } from './diagram.actions';
import { Diagram } from 'src/model/diagram';
import { DiagramService } from 'src/app/shared/diagram.service';
import { tap } from 'rxjs/operators';

export class DiagramStateModel {
  public diagrams: Diagram[];
}

@State<DiagramStateModel>({
  name: 'diagram',
  defaults: {
    diagrams: []
  }
})
export class DiagramState {

  @Selector()
  static diagrams(state: DiagramStateModel): Diagram[] {
    return state.diagrams;
  }

  constructor(private diagramService: DiagramService) {}

  @Action(AddDiagramAction)
  add(ctx: StateContext<DiagramStateModel>, action: AddDiagramAction) {
    const state = ctx.getState();
    ctx.setState({ diagrams: [ ...state.diagrams, action.diagram ] });
  }

  @Action(LoadDiagramsAction)
  load(ctx: StateContext<DiagramStateModel>, action: LoadDiagramsAction) {
    return this.diagramService.loadDiagrams(action.userId).pipe(
      tap(diagrams => {
        null
        // ctx.patchState({
        //   diagrams: diagrams,
        //   username: action.payload.username
        // });
      })
    );
  }
}
