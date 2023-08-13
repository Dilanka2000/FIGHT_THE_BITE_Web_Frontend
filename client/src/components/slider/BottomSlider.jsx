import React, { useState } from "react";
import { BottomContainer, BottomLeft, BottomRight, Slider, SliderObject } from "./sliderStyle";

export default function BottomSlider({ length, index, setIndex, x, sliderValue }) {
    const [slideNo, setSlideNo] = useState(1);

    function next() {
        setSlideNo(
            index >= sliderValue && index < parseInt(length / sliderValue) * sliderValue - sliderValue
                ? slideNo + 1
                : slideNo
        );
        setIndex(index + sliderValue >= length ? index : index + sliderValue);
    }
    function previous() {
        setSlideNo(
            index < parseInt(length / sliderValue) * sliderValue && index > sliderValue
                ? slideNo - 1
                : slideNo
        );
        setIndex(index - sliderValue < 0 ? 0 : index - sliderValue);
    }

    function slider1() {
        setIndex(slideNo * sliderValue - sliderValue);
        setSlideNo(slideNo !== 1 ? slideNo - 1 : slideNo);
    }
    function slider2() {
        setIndex(slideNo * sliderValue);
    }
    function slider3() {
        setIndex(slideNo * sliderValue + sliderValue);
        setSlideNo(
            slideNo + 2 !== Math.ceil(length / sliderValue) ? slideNo + 1 : slideNo
        );
    }

    return (
        <BottomContainer>
            <BottomLeft>
                Showing{" "}
                <span>
                    {index + 1} - {x}
                </span>{" "}
                from <span>{length}</span>
            </BottomLeft>
            <BottomRight>
                <i className="fa-solid fa-caret-left" onClick={previous}></i>
                <Slider>
                    <SliderObject
                        $isActive={slideNo * sliderValue - sliderValue === index}
                        onClick={slider1}
                    >
                        {slideNo}
                    </SliderObject>
                    <SliderObject
                        $isActive={slideNo * sliderValue === index}
                        onClick={slider2}
                    >
                        {slideNo + 1}
                    </SliderObject>
                    {length > 10 && (
                        <SliderObject
                            $isActive={slideNo * sliderValue + sliderValue === index}
                            onClick={slider3}
                        >
                            {slideNo + 2}
                        </SliderObject>
                    )}
                </Slider>
                <i className="fa-solid fa-caret-right" onClick={next}></i>
            </BottomRight>
        </BottomContainer>
    );
}
