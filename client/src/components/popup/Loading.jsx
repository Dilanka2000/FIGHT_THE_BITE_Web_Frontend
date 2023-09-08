import React from "react";
import { FlashContainer } from "./popupStyle";

export default function Loading() {
    return (
        <FlashContainer>
            <i className="fa-solid fa-spinner fa-spin"></i>
            <h3>Loading...</h3>
            <p>Please waiting...</p>
        </FlashContainer>
    );
}
