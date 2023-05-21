import React from 'react';

import { styled } from '@mui/system';
import { Button } from '@mui/material';

import backgroundImage from '../../assets/images/wp2903360-marvel-background.jpg';
import { Link } from 'react-router-dom';
import { BorderAllRounded, Minimize } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

// put your package name in a string!!!
// we will need to import it in all components even if it doesn't light up

//ANYTHING WITH A .tsx IS ESSENTALLY OUR HTML AND WE WILL EXPORT IT
//index.tsx is like bringing all your routes together, and kind of like an __init__ for the whole app

interface Props { //these are objects/dictionaries
    title: string;
}

//Create Styled Components with styled-components from React
const Root = styled('div')({
    padding: 0,
    margin: 0,
})

const NavBarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})



const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})

const LogoA = styled('a')({
    color: 'rgb(28, 24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})

const LogoNavigation = styled('ul')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})

const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${backgroundImage})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute'
})


const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    // backgroundImage: 'rgb(255,255,255,0.5)',
    // backgroundColor: 'darkorange',
    border: 'solid 2px white',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    minWidth: '360px',
    height: '30%',
    minHeight: '180px',
    padding: '2em',


})

const MarvSplashText = styled('h1')({
    fontSize: '4.5rem',
    marginBottom: '0rem',
})

const DashButton = styled(Button)({
    color: grey[50],
    borderColor: grey[50],
    marginTop: '1rem',

    '&:active': {
        backgroundColor: 'black',
        borderColor: 'darkgrey',
        color: 'darkgrey',
        // boxShadow: '0 0 0 0.2rem red',
      },
    '&:hover': {
        // backgroundColor: 'white',
        color: 'darkgrey',
        borderColor: 'darkgrey',
        boxShadow: 'none',
    },

    '&:focus': {
        boxShadow: '0 0 0 0.2rem darkgrey',
    },

})

// using export DEFAULT CONST instead of export const would only allow us to do 1 component per file
export const Home = (props: Props) => {
    //up here would be wehre functionality goes
    return ( // this is what you are rendering on the page for that component
        <Root>
            <NavBarContainer>
                {/* <Logo>
                    <LogoA href="#">Brand</LogoA>
                </Logo> */}
                <LogoNavigation>
                    <li>
                        <NavA to='/'>Home</NavA>
                    </li>
                    <li>
                        <NavA to='/dashboard'>Dashboard</NavA>
                    </li>
                    <li>
                        <NavA to='/signin'>Sign In</NavA>
                    </li>
                    <li>
                        <NavA to='/signup'>Sign Up</NavA>
                    </li>
                </LogoNavigation>
            </NavBarContainer>

            <Main>
                <MainText>
                    <MarvSplashText>{props.title}</MarvSplashText>
                    <p>Log in or sign up to see your collection of heroes!</p>
                    <DashButton color='warning' variant='outlined' href='/dashboard'>Go To Dashboard</DashButton>

                </MainText>
            </Main>


        </Root>
    )
}



