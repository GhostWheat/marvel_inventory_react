import React from 'react';
import { useDispatch, useSelector, useStore} from 'react-redux';
import {useForm} from 'react-hook-form';
import {
    chooseHeroName,
    chooseDescription,
    chooseComicsAppearedIn,
    chooseSuperPower,


} from '../../redux/slices/rootSlice';
import { Button } from '@mui/material';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface HeroFormProps {
    id?:string;
    data?: {}
}

export const HeroForm = (props:HeroFormProps) =>{
    const dispatch = useDispatch();
    let {heroData, getData } = useGetData();
    const store = useStore();
    // const name = useSelector<HeroState> (state => state.name)
    const { register, handleSubmit} = useForm({})
    
    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if (props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`updated: ${data}`)
            window.location.reload()
            event.target.reset()
        } else {
            dispatch(chooseHeroName(data.hero_name))
            dispatch(chooseDescription(data.description))
            dispatch(chooseComicsAppearedIn(data.comics_appeared_in))
            dispatch(chooseSuperPower(data.super_power))
            console.log(store.getState())
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='hero_name'>Hero Name</label>
                <Input {...register('hero_name')} name='hero_name' placeholder='Name'/>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="comics_appeared_in">Comics Appeared In</label>
                    <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="Comics Appeared In"/>
                </div>
                <div>
                    <label htmlFor="super_power">Super Power[s]</label>
                    <Input {...register('super_power')} name="super_power" placeholder="Super Power[s]"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
        
    )

}

