import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', function(){
  it('should handle creating courses', function(){
    //arange
    const store = createStore(rootReducer, initialState);
    const course = {title: 'Clean Code'};

    // action
    const action = courseActions.createCourseSuccess(course);
    const action2 = courseActions.createCourseSuccess({title: 'Test Course'});
    store.dispatch(action);
    store.dispatch(action2);

    //assert
    expect(store.getState().courses[0].title).toEqual('Clean Code');
    expect(store.getState().courses[1].title).toEqual('Test Course');
  });
});
