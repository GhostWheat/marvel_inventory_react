import { createSlice } from '@reduxjs/toolkit';

interface HeroState { //these keynames will NEED to match the
    //exact names on the Flask side
    hero_name: string;
    description: string;
    comics_appeared_in: number;
    super_power: string;
}

const initialState: HeroState = {
    hero_name: '',
    description: '',
    comics_appeared_in: 0,
    super_power: '',
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        chooseHeroName: (state, action) => { state.hero_name = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
        chooseComicsAppearedIn: (state, action) => { state.comics_appeared_in = action.payload },
        chooseSuperPower: (state, action) => { state.super_power = action.payload }
    }
})

//Export the reducer
export const reducer = rootSlice.reducer
console.log(rootSlice)
export const {
    //deconstruct our actions... the dispatchers
    chooseHeroName,
    chooseDescription,
    chooseComicsAppearedIn,
    chooseSuperPower
} = rootSlice.actions