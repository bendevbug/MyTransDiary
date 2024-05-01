import { styled } from '@stitches/react';

export const SideBarContent = styled('div', 
    {   
        color: "#FFF",
        backgroundColor: '#333864',
        maxWidth: '15vw',
        height: '100vh',

        fontSize: '1.5rem',

        padding: '1rem',

        ul: 
            {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontSize: '1.2rem',

                margin: '25vh 0',

                a: {
                    textDecoration: 'none',
                    color: 'inherit',
                    margin: '1.5rem 0'
                }
            }
    }
)


export const TitleTrans = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
    textAlign: 'center',
    img: {
        width: '2.5vw',
        margin: '0 0.8rem 0 0'
    },
})