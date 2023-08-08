import React from "react";
import { FlashContainer } from "./popupStyle";

export default function RegisterSuccess() {
    return (
        <FlashContainer>
            <i className="fa-solid fa-circle-check fa-shake"></i>
            <h3>Register Successfully!</h3>
            <p>User details has been succssefuly submitted. Thank You!</p>
        </FlashContainer>
    );
}
