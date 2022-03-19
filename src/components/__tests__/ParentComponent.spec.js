import { shallowMount, mount } from '@vue/test-utils'
import ParentComponent from '@/components/ParentComponent.vue'

describe('ParentComponent', () => {
    it('show message with shallowMount', () => {
        const wrapper = shallowMount(ParentComponent)

        expect(wrapper.find('.spanInChild').exists()).toBe(true)
    })

    it('show message with mount', () => {
        const wrapper = mount(ParentComponent)

        expect(wrapper.find('.spanInChild').exists()).toBe(true)
    })
})