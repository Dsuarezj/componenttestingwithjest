import { shallowMount, mount } from '@vue/test-utils'
import ParentComponent from '@/components/ParentComponent.vue'
import { render } from '@testing-library/vue'

describe('ParentComponent', () => {
    it('show message with shallowMount', () => {
        const wrapper = shallowMount(ParentComponent)

        expect(wrapper.find('.spanInChild').exists()).toBe(true)
    })

    it('show message with mount', () => {
        const wrapper = mount(ParentComponent)
        
        expect(wrapper.find('.spanInChild').exists()).toBe(true)
        expect(wrapper.find('.spanInChild').text()).toBe('Message from child component')
    })

    it('show message with render', () => {
        const { getByText } = render(ParentComponent)
        
        getByText('Message from child component')
    })
})