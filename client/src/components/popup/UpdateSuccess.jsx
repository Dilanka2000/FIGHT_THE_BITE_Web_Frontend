import React from 'react'
import { FlashContainer } from './popupStyle';

export default function UpdateSuccess() {
  return (
      <FlashContainer>
          <i className="fa-solid fa-circle-check fa-shake"></i>
          <h3>Update Successfully!</h3>
          <p>User details has been succssefuly updated. Thank You!</p>
      </FlashContainer>
  );
}
