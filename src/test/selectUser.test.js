import axios from 'axios'
import { selectUser } from '../api/githubAPI'

jest.mock('axios')

describe('GitHub API', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('selectUser', () => {
        it('should return user data', async () => {
            const user = 'example'

            const alertIgnor = jest.spyOn(window, 'alert').mockImplementation()

            const mockResponse = {
                avatarUrl: 'https://github.com/example/avatar',
                login: 'example',
                name: 'John Doe',
                htmlUrl: 'https://github.com/example',
                bio: 'some bio',
                followers: 1,
                following: 1,
                publicRepos: 1,
                updatedAt: '2023-05-01',
            }

            axios.get.mockResolvedValueOnce({ data: mockResponse })

            const result = await selectUser(user)

            expect(result).toEqual({
                avatarUrl: 'https://github.com/example/avatar',
                login: 'example',
                name: 'John Doe',
                htmlUrl: 'https://github.com/example',
                bio: 'some bio',
                followers: 1,
                following: 1,
                publicRepos: 1,
                updatedAt: '2023-05-01',
            })

            expect(axios.get).toHaveBeenCalledWith(
                `https://kj-project-backend.azurewebsites.net/api/github/users/${user}`
            )

            alertIgnor.mockRestore()
        })

        it('Expect null due to error', async () => {
            const user = 'example'
            const alertIgnor = jest.spyOn(window, 'alert').mockImplementation()
            axios.get.mockRejectedValueOnce(new Error('API error'))
            const result = await selectUser(user)
            expect(result).toBeNull()
            alertIgnor.mockRestore()
        })
    })
})
