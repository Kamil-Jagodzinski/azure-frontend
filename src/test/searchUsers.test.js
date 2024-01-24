import axios from 'axios'
import { searchUsers } from '../api/githubAPI'

jest.mock('axios')

describe('GitHub API', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('searchUsers', () => {
        it('Expect array of users', async () => {
            const query = 'example'
            const mockResponse = [
                {
                    login: 'user1',
                    url: 'https://github.com/user1',
                    avatar: 'https://github.com/user1/avatar',
                },
                {
                    login: 'user2',
                    url: 'https://github.com/user2',
                    avatar: 'https://github.com/user2/avatar',
                },
            ]

            axios.get.mockResolvedValueOnce({ data: mockResponse })
            const expectedUsers = [
                {
                    login: 'user1',
                    url: 'https://github.com/user1',
                    avatar: 'https://github.com/user1/avatar',
                },
                {
                    login: 'user2',
                    url: 'https://github.com/user2',
                    avatar: 'https://github.com/user2/avatar',
                },
            ]

            const result = await searchUsers(query)

            expect(result).toEqual(expectedUsers)
        })

        it('Expect null', async () => {
            const query = 'example'
            const alertIgnor = jest.spyOn(window, 'alert').mockImplementation()
            axios.get.mockRejectedValueOnce(new Error('API error'))
            const result = await searchUsers(query)
            expect(result).toBeNull()
            alertIgnor.mockRestore()
        })
    })
})
