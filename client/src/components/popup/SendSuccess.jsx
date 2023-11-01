import React from 'react'
import { FlashContainer } from './popupStyle';

export default function SendSuccess() {
    return (
        <FlashContainer>
            <i className="fa-solid fa-circle-check fa-shake"></i>
            <h3>Send Successfully!</h3>
            <p>Announcement has been succssefuly sent. Thank You!</p>
        </FlashContainer>
    );
}
