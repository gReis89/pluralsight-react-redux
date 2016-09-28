import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

function setup(saving){
  let props = {
    authors: [],
    actions: { saveCourse: () => { return Promise.resolve(); }},
    course : {id: '', watchHref:'', title:'', authorId:'', length:'', category:''}
  };

  return mount(<ManageCoursePage {...props} />);
}

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', function(){
    const wrapper = setup();
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });


});
