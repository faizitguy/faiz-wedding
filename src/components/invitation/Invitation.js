import React from 'react';
import {
    Heading,
    Invited,
    InvitationWrapper,
    BismillahText,
    ButtonsWrapper,
    NeoButton
} from './index.style';
import WeddingCard from '../../assets/faiz_n_faheen_wedding_card.pdf';
import useAnalyticsEventTracker from '../useAnalyticsEventTracker';

const Invitation = () => {
    const gaEventTracker = useAnalyticsEventTracker('Invitation');
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
                    <a href={WeddingCard} onClick={() => gaEventTracker('invitationCard')} download="Faiz & Faheen Wedding Card" target='_blank' rel="noreferrer">
                        <NeoButton> <b>Invitation Card</b></NeoButton>
                    </a>
                    <a href="https://goo.gl/maps/yZzYm1rEpZEbbgzX8" onClick={() => gaEventTracker('location')} target="_blank" rel="noopener noreferrer">
                        <NeoButton> <b>Get Location</b></NeoButton>
                    </a>
                </ButtonsWrapper>

            </InvitationWrapper>
        </>
    );
}

export default Invitation;