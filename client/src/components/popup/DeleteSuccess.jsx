import React from "react";
import { FlashContainer } from "./popupStyle";

export default function DeleteSuccess() {
    return (
        <FlashContainer>
            <i className="fa-solid fa-circle-check fa-shake"></i>
            <h3>Delete Successfully!</h3>
            <p>User details has been succssefuly deleted. Thank You!</p>
        </FlashContainer>
    );
}
