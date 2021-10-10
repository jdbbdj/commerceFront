import React,{useState} from 'react'
import { SlideContent, SlideImage, 
    SlideImgContainer, SlideInfoContainer, 
    SlideInfoTitle, SliderArrowCont, 
    SliderArrowLeftIcon, SliderArrowRighttIcon, 
    SliderContainer, SliderWrapper,SlideInfoDesc,
    SlideInfoButton } from './SliderElements';

import { sliderItems } from '../../data';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick =(direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2? slideIndex + 1 : 0 )
        }
    };

    return (
        <SliderContainer>

            <SliderArrowCont direction="left" onClick={()=>handleClick("left")}>
                <SliderArrowLeftIcon/>
            </SliderArrowCont>

            <SliderWrapper slideIndex={slideIndex}>

                {sliderItems.map((item)=>(
                    <SlideContent bg={item.bg} key={item.id}>
                    <SlideImgContainer>
                        <SlideImage src={item.imag} alt=""/>
                    </SlideImgContainer>
                    <SlideInfoContainer>
                        <SlideInfoTitle>
                        {item.title}
                        </SlideInfoTitle>
                        <SlideInfoDesc>
                        {item.desc}
                        </SlideInfoDesc>
                        <SlideInfoButton>
                        SHOP NOW
                        </SlideInfoButton>
                    </SlideInfoContainer>
                    </SlideContent>
                ))}
            </SliderWrapper>

            <SliderArrowCont direction="right" onClick={()=>handleClick("left")}>
                <SliderArrowRighttIcon/>
            </SliderArrowCont>

        </SliderContainer>
    )
}

export default Slider
