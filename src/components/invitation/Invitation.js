import React from 'react';
import { InvitationWrapper, BismillahText } from './index.style';

const Invitation = () => {
    return (
        <InvitationWrapper>
            <BismillahText>“In the name of Allah, the most beneficent and most merciful”</BismillahText>
            <BismillahText>You're cordially invited to the valima of </BismillahText>
            <BismillahText>Faiz & Faheen</BismillahText>
            <BismillahText>on</BismillahText>
            <BismillahText>15-11-2022</BismillahText>
            <div style={{ border: '2px solid white', color: 'white' }}>
                Buttons go here!
                <br />
                <br />
                <div style={{ color: 'white' }}>
                    <button>Download Invitation</button>
                </div>
                <div style={{ color: 'white' }}>
                    <button>Navigate to Destination</button>
                </div>
            </div>

        </InvitationWrapper>
    );
}

export default Invitation;