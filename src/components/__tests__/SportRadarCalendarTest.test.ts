import { describe, it, expect } from 'vitest'
import AddEvent from '../../views/AddEvent.vue'
import { mount } from '@vue/test-utils'
import EventDetails from '../../views/EventDetails'

describe('AddEvent.vue', () => {
  it('new added to the data on submit', async () => {
    const addEventVueTemplate = mount(AddEvent)
    const oldLengthOfEventData = addEventVueTemplate.vm.data.length

    const submitButton = addEventVueTemplate.find('button[type="submit"]')
    await submitButton.trigger('click')

    const newLengthOfEventData = addEventVueTemplate.vm.data.length

    expect(oldLengthOfEventData + 1).toEqual(newLengthOfEventData)
  })

  it('reset default on cancel', async () => {
    const addEventVueTemplate = mount(AddEvent)

    addEventVueTemplate.vm.eventDetail = new EventDetails('2024-11-01')
    const beforeCancelData = addEventVueTemplate.vm.eventDetail

    const cancelButton = addEventVueTemplate.find('button[type="button"]')
    await cancelButton.trigger('click')

    const afterCancelData = new EventDetails()

    expect(beforeCancelData).not.toBe(afterCancelData)
  })
})
