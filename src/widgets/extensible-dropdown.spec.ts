import Drop from './ExtensibleDropdown.svelte'
import { render } from '@testing-library/svelte'
import '../services/i18n/i18n'
import { listen } from 'jest-svelte-events'

const meta = {
    elements: ['one', 'two', ' more'],
    newelem: 'general.new',
    promptname: 'general.new'
}
describe("Dropdown", () => {
    it('should create', () => {
        const { container, component, getByDisplayValue } = render(Drop, { metadata: meta })
        // listen(component, 'selected')
        expect(container).toBeTruthy();
        expect(getByDisplayValue("one")).toBeTruthy()
        // expect(component).toHaveFiredEvent('selected')
    })
})