const PricingCard = ({ title, price }) => {
  return (
    <div className="flex justify-between last:border-b-0 border-b-[1px] py-[25px] border-[#404040]">
      <h2 className="font-medium text-base text-left max-w-[220px] md:max-w-[350px] lg:text-xl lg:text-right lg:max-w-none">
        {title}
      </h2>
      <span className="text-neutral-400 text-right lg:text-left">~ ${new Intl.NumberFormat().format(price)}</span>
    </div>
  );
};

export default PricingCard;
