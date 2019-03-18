import mockFetch from '../fetch'
import {getCards} from '../../actions/cards'

it('performs a get request using fetch and returns a dispatch with an array of objects', async () => {
    mockFetch.get.mockImplementationOnce(() => {
        Promise.resolve({
            data: {
                results: [{card: 'this is a test', title: 'lean-coffee'}]
            }
        })
    })

    const test = getCards()

    
})