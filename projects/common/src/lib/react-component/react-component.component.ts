import {produce} from 'immer';
import * as _ from 'lodash';

export class ReactComponent<State, Props> {
  private state: State;
  private props: Props;

  constructor(initialState: State, initialProps: Props) {
    this.state = this.deepFreeze(_.cloneDeep(initialState));
    this.props = this.deepFreeze(_.cloneDeep(initialProps));
  }

  private deepFreeze<T>(object: T): Readonly<T> {
    const freezed = {};

    _.transform(object, (result, value, key) => {
      if (_.isObject(value)) {
        freezed[key] = this.deepFreeze<Partial<T>>(value);
      } else {
        freezed[key] = value;
      }
    });

    return Object.freeze(freezed as T);
  }

  protected setState(state: Partial<State>) {
    const newState = produce(this.state, draft => {
      return _.merge(draft, state);
    });

    this.state = newState;
  }

  protected setProps(props: Partial<Props>): void {
    const newProps = produce(this.props, draft => {
      return _.merge(draft, props);
    });

    this.props = newProps;
  }
}
