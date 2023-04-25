"use client";

const Testimonial = ({ testimonial, currentIndex }) => {
  return (
    <section>
      <div className="feedback-gradient" />
      <div>
        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white ">
          {testimonial[currentIndex]?.name}
        </h4>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white ">
          {testimonial[currentIndex]?.company}
        </p>
      </div>
      <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        {testimonial[currentIndex]?.feedback}
      </p>
    </section>
  );
};

export default Testimonial;
