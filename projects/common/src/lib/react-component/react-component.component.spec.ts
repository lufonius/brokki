import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactComponent} from "./react-component.component";

interface State {
  foo: {
    foo: string;
    bar: {
      foobar: string;
    };
  };
  bar: string;
}

interface Props {
  foops: {
    foops: string;
    barps: {
      foopsbarps: string;
    };
  };
  barps: string;
}

describe('ReactComponent', () => {
  let reactComponent;
  const initialState: State = {
    foo: {
      foo: 'foo.foo',
      bar: {
        foobar: 'foo.foobar'
      }
    },
    bar: 'bar'
  };

  const initialProps: Props = {
    foops: {
      foops: 'foops.foops',
      barps: {
        foopsbarps: 'foops.barps.foopsbarps'
      }
    },
    barps: 'barps'
  };

  beforeEach(() => {
    reactComponent = new ReactComponent<State, Props>(initialState, initialProps);
  });

  fit('should throw an error if the state is directly mutated', () => {
    let exception;

    try {
      (reactComponent as any).state.foo.bar = 9;
    } catch (exc) {
      exception = exc;
    }

    expect(exception).toBeDefined();
  });

  fit('should throw an error if the props are directly mutated', () => {
    let exception;

    try {
      (reactComponent as any).props.foops.barps = 9;
    } catch (exc) {
      exception = exc;
    }

    expect(exception).toBeDefined();
  });

  fit('setState should set the state and assign a new reference to the changed props', () => {
    const previousState = reactComponent.state;
    (reactComponent as any).setState({foo: { bar: { foobar: 'new' } }});

    previousState.foo.bar.foobar = 10;
    expect(reactComponent.state.foo.bar.foobar).not.toBe(previousState.foo.bar.foobar);
  });
});
