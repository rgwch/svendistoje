import El from './Elementlist.svelte'
import { render } from '@testing-library/svelte'
import '../services/i18n/i18n'

const meta = {
    elements: ['one', 'two', ' more'],
    newelem: 'general.new',
    promptname: 'general.new'
}
describe("Element List", () => {
    it('should create', () => {
        const { container } = render(El, { metadata: meta })
        expect(container).toBeTruthy();
    })
})