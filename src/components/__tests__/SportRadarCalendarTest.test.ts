import { describe, it, expect } from 'vitest'
import AddEvent from "../../views/AddEvent.vue";
import { mount } from '@vue/test-utils'
import EventDetails from '../../views/EventDetails';

describe('adds new event', () => {
  it('renders properly', async() => {
    const addEventVueTemplate = mount(AddEvent);
    const oldLengthOfEventData = addEventVueTemplate.vm.data.length

    const submitButton = addEventVueTemplate.find('button[type="submit"]'); 
    await submitButton.trigger('click');
   
    const newLengthOfEventData = addEventVueTemplate.vm.data.length

    expect(oldLengthOfEventData + 1).toEqual(newLengthOfEventData);
  })
})
