let token = `33f5a9e8952305435f80345f36f4afe2467ab64f6950c491` //this is marvelicious glitch-hosted token

export const serverCalls = {
    get: async () => {
        const response = await fetch (`https://marvel-inventory-flask.glitch.me/api/heroes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/JSON',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        // let temp = response
        // console.log(temp.json())
        // console.log('response:', response)

        return await response.json()
    },

    create: async(data:any = {}) => {
        const response = await fetch(`https://marvel-inventory-flask.glitch.me/api/heroes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });

        console.log(response)

        if(!response.ok){
            throw new Error(`Failed to post new data on server`)
        }

        return await response.json()
    },

    update: async(id:string, data:any = {}) => {
        const response = await fetch(`https://marvel-inventory-flask.glitch.me/api/heroes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/JSON',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error(`Failed to update data on server`)
        }

        console.log(`success: updated hero with id ${id}`)
    },

    delete: async(id:string) => {
        const response = await fetch(`https://marvel-inventory-flask.glitch.me/api/heroes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/JSON',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error(`Failed to delete hero with id ${id}`)
        }

        console.log(`success: hero with id ${id} was deleted! Bye bye.`)
    }
}