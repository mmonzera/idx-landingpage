import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import cardIcon from "/app/assets/card-1-icon.svg";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="flex flex-col gap-6">
            <Image src={cardIcon} alt="cardIcon"/>
            <h2 className="font-semibold text-[36px] text-[#525252]  ">
              Roll-out new products in Days, Not Months
            </h2>
            <h3 className="text-[24px] text-[#525252] leading-[50.49px] tracking-[-0.505px] ">
              Business users can create underwriting workflows or use templates
              with iDecision's low-code environment, featuring API management
              and form generation.
            </h3>
            </div>
          </div>
          <div className="embla__slide">
          <div className="flex flex-col gap-6">
            <Image src={cardIcon} alt="cardIcon" />
            <h2 className="font-semibold text-[36px] text-[#525252]  ">
              Achieve 90%+ STP in loan processing
            </h2>
            <h3 className="text-[24px] text-[#525252] leading-[50.49px] tracking-[-0.505px] ">Making optimal decisions in mere second by incorporating risk policies and risk calculation
              from multiple data sources,risk scoring,ML models,and test strategies.
            </h3>
          </div>
          </div>
          <div className="embla__slide">
          <div className="flex flex-col gap-6">
            <Image src={cardIcon} alt="cardIcon" />
            <h2 className="font-semibold text-[36px] text-[#525252]  ">
              Achieve 90%+ STP in loan processing
            </h2>
            <h3 className="text-[24px] text-[#525252] leading-[50.49px] tracking-[-0.505px] ">Making optimal decisions in mere second by incorporating risk policies and risk calculation
              from multiple data sources,risk scoring,ML models,and test strategies.
            </h3>
          </div>
          </div>
          <div className="embla__slide">
          <div className="flex flex-col gap-6">
            <Image src={cardIcon} alt="cardIcon" />
            <h2 className="font-semibold text-[36px] text-[#525252]  ">
              Achieve 90%+ STP in loan processing
            </h2>
            <h3 className="text-[24px] text-[#525252] leading-[50.49px] tracking-[-0.505px] ">Making optimal decisions in mere second by incorporating risk policies and risk calculation
              from multiple data sources,risk scoring,ML models,and test strategies.
            </h3>
          </div>
          </div>
          <div className="embla__slide">
          <div className="flex flex-col gap-6">
            <Image src={cardIcon} alt="cardIcon" />
            <h2 className="font-semibold text-[36px] text-[#525252]  ">
              Achieve 90%+ STP in loan processing
            </h2>
            <h3 className="text-[24px] text-[#525252] leading-[50.49px] tracking-[-0.505px] ">Making optimal decisions in mere second by incorporating risk policies and risk calculation
              from multiple data sources,risk scoring,ML models,and test strategies.
            </h3>
          </div>
          </div>
          <div className="embla__slide">
          <div className="flex flex-col gap-6">
            <Image src={cardIcon} alt="cardIcon" />
            <h2 className="font-semibold text-[36px] text-[#525252]  ">
              Achieve 90%+ STP in loan processing
            </h2>
            <h3 className="text-[24px] text-[#525252] leading-[50.49px] tracking-[-0.505px] ">Making optimal decisions in mere second by incorporating risk policies and risk calculation
              from multiple data sources,risk scoring,ML models,and test strategies.
            </h3>
          </div>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
