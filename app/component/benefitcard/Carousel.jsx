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
            <div className="flex flex-col gap-2 sm:gap-6">
              <Image src={cardIcon} alt="cardIcon" />
              <h2 className="font-semibold text-[16px] sm:text-[36px] text-[#525252]  ">
                Roll-out new products in Days, Not Months
              </h2>
              <h3 className="text:[12px] sm:text-[24px] text-[#525252] leading:8px sm:leading-[50.49px] sm:tracking-[-0.505px] ">
                Business users can create underwriting workflows or use
                templates with iDecisions low-code environment, featuring API
                management and form generation.
              </h3>
            </div>
          </div>
          <div className="embla__slide">
            <div className="flex flex-col gap-2 sm:gap-6">
              <Image src={cardIcon} alt="cardIcon" />
              <h2 className="font-semibold text-[16px] sm:text-[36px] text-[#525252]  ">
                Achieve 90%+ STP in loan processing
              </h2>
              <h3 className="text:[12px] sm:text-[24px] text-[#525252] leading:8px sm:leading-[50.49px] sm:tracking-[-0.505px]  ">
                Making optimal decisions in mere second by incorporating risk
                policies and risk calculation from multiple data sources,risk
                scoring,ML models,and test strategies.
              </h3>
            </div>
          </div>
          <div className="embla__slide">
            <div className="flex flex-col gap-6">
              <Image src={cardIcon} alt="cardIcon" />
              <h2 className="font-semibold text-[36px] text-[#525252]  ">
                Start new lending business from zero in 3 months{" "}
              </h2>
              <h3 className="text-[24px] text-[#525252] leading-[50.49px] tracking-[-0.505px] ">
                Complete suites of end-to-end credit cycle from underwriting,
                loan management to debt collection in one platform enables new
                financial institution to start lending business within 3 months.
              </h3>
            </div>
          </div>
          <div className="embla__slide">
            <div className="flex flex-col gap-6">
              <Image src={cardIcon} alt="cardIcon" />
              <h2 className="font-semibold text-[36px] text-[#525252]  ">
                Launch loan channelling & supply-chain financing{" "}
              </h2>
              <h3 className="text-[24px] text-[#525252] leading-[50.49px] tracking-[-0.505px] ">
                Streamline loan processing and supply chain finance with 100%
                automated systems for decisioning, billing reconciliation,
                buyback, and managing complex risk criteria.
              </h3>
            </div>
          </div>
          <div className="embla__slide">
            <div className="flex flex-col gap-6">
              <Image src={cardIcon} alt="cardIcon" />
              <h2 className="font-semibold text-[36px] text-[#525252]  ">
                Upgrade core loan system to flexible digital lending scheme{" "}
              </h2>
              <h3 className="text-[24px] text-[#525252] leading-[50.49px] tracking-[-0.505px] ">
                Boost market share with innovative loan schemes, high-volume
                processing, and fully automated digital workflows.
              </h3>
            </div>
          </div>
          <div className="embla__slide">
            <div className="flex flex-col gap-6">
              <Image src={cardIcon} alt="cardIcon" />
              <h2 className="font-semibold text-[36px] text-[#525252]  ">
                Meet regulatory compliance in inter-connected digital world
              </h2>
              <h3 className="text-[24px] text-[#525252] leading-[50.49px] tracking-[-0.505px] ">
                Financial institutions must meet regulatory standards while
                countering KYC & AML threats. Eliminate slow, resource-heavy
                processes that risk operations and harm customer experience.
              </h3>
            </div>
          </div>
          <div className="embla__slide">
            <div className="flex flex-col gap-6">
              <Image src={cardIcon} alt="cardIcon" />
              <h2 className="font-semibold text-[36px] text-[#525252]  ">
                Tackle fraudsters with AI-driven detection{" "}
              </h2>
              <h3 className="text-[24px] text-[#525252] leading-[50.49px] tracking-[-0.505px] ">
                iDecision fraud module uses AI to monitor transactions in
                real-time, stopping suspected fraud with high accuracy and
                minimal false positives.
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
