import React from 'react';
import {
    Heading,
    Invited,
    InvitationWrapper,
    BismillahText,
    ButtonsWrapper,
    NeoButton
} from './index.style';

const Invitation = () => {
    return (
        <>
            <InvitationWrapper>
                <BismillahText>“In the name of Allah, the most beneficent and most merciful”</BismillahText>
                <Invited>You're Invited!</Invited>
                <Heading>
                    <h1>Faiz & Faheen</h1>
                    <h2>Are getting married</h2>
                    <h2>13.11.2022</h2>
                </Heading>
                <ButtonsWrapper>
                    <NeoButton> <b>Invitation Card</b></NeoButton>
                    <NeoButton> <b>Get Location</b></NeoButton>
                </ButtonsWrapper>

            </InvitationWrapper>
        </>
    );
}

export default Invitation;