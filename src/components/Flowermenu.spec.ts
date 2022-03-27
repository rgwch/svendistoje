import Flower from './Flowermenu.svelte'
import { render } from '@testing-library/svelte'

const items = ["one", "two", "three", "four", "five", "six", "seven"].map(el => { return { name: el } })
describe("Fieldeditor", () => {

    it('should create', () => {
        const { container } = render(Flower, { title: "Test", items })
        expect(container).toBeTruthy();
    })
})