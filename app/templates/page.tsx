
function TemplatesPage() {
    return (
        <div className="w-[595px] h-[842px] relative bg-white">
            <div className="left-[32px] top-[32px] absolute text-[#191c21] text-[32px] font-semibold font-['YoungSerif'] leading-[44px]">Invoice</div>
            <div className="w-[419px] pr-8 left-[176px] top-[88px] absolute justify-start items-start gap-8 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch text-[#191c21] text-[10px] font-semibold font-['Inter'] leading-[14px]">Billed to</div>
                    <div className="self-stretch h-11 flex-col justify-start items-start gap-0.5 flex">
                        <div className="self-stretch text-[#5e6470] text-[10px] font-semibold font-['Inter'] leading-[14px]">M Ghadiyali</div>
                        <div className="self-stretch text-[#5e6470] text-[10px] font-normal font-['Inter'] leading-[14px]">Individual<br />United States of America</div>
                    </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch text-[#191c21] text-[10px] font-semibold font-['Inter'] leading-[14px]">From</div>
                    <div className="self-stretch h-[30px] flex-col justify-start items-start gap-0.5 flex">
                        <div className="self-stretch text-[#5e6470] text-[10px] font-semibold font-['Inter'] leading-[14px]">Sreenath Kumar</div>
                        <div className="self-stretch text-[#5e6470] text-[10px] font-normal font-['Inter'] leading-[14px]">Khulna, Bangladesh</div>
                    </div>
                </div>
            </div>
            <div className="left-[32px] top-[88px] absolute flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="w-28 text-[#191c21] text-[10px] font-semibold font-['Inter'] leading-[14px]">Payable $215.00</div>
                <div className="flex-col justify-start items-start gap-0.5 flex">
                    <div className="w-28 text-[#5e6470] text-[10px] font-semibold font-['Inter'] leading-[14px]">Dues 2/11/2024</div>
                    <div className="w-28 text-[#5e6470] text-[10px] font-normal font-['Inter'] leading-[14px]">Issued 30/10/2024</div>
                    <div className="w-28 text-[#5e6470] text-[10px] font-normal font-['Inter'] leading-[14px]">Ref. #INV-07</div>
                </div>
            </div>
            <div className="left-[160px] top-[232px] absolute justify-start items-start gap-[15px] inline-flex">
                <div className="w-[388px] flex-col justify-start items-start gap-4 inline-flex">
                    <div className="self-stretch text-[#191c21] text-[10px] font-bold font-['Inter'] leading-[14px]">Create pages for categories</div>
                    <div className="self-stretch justify-start items-start gap-6 inline-flex">
                        <div className="grow shrink basis-0 text-[#5e6470] text-[8px] font-semibold font-['Inter'] uppercase leading-3 tracking-tight">Item description</div>
                        <div className="text-[#5e6470] text-[8px] font-semibold font-['Inter'] uppercase leading-3 tracking-tight">Qty</div>
                        <div className="w-16 text-right text-[#5e6470] text-[8px] font-semibold font-['Inter'] uppercase leading-3 tracking-tight">Rate</div>
                        <div className="w-16 text-right text-[#5e6470] text-[8px] font-semibold font-['Inter'] uppercase leading-3 tracking-tight">Amount</div>
                    </div>
                    <div className="self-stretch h-[50px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch justify-start items-start gap-6 inline-flex">
                            <div className="grow shrink basis-0 text-[#191c21] text-[10px] font-semibold font-['Inter'] leading-[14px]">Implement IP, dynamic field, reordering, int. shipping and related</div>
                            <div className="w-[18px] text-[#191c21] text-[10px] font-medium font-['Inter'] leading-[14px]">1</div>
                            <div className="w-16 text-right text-[#191c21] text-[10px] font-medium font-['Inter'] leading-[14px]">140</div>
                            <div className="w-16 text-right text-[#191c21] text-[10px] font-medium font-['Inter'] leading-[14px]">140</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[50px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch justify-start items-start gap-6 inline-flex">
                            <div className="grow shrink basis-0 text-[#191c21] text-[10px] font-semibold font-['Inter'] leading-[14px]">Order data export, fix  product loading, replace city code, /shop page fix</div>
                            <div className="w-[18px] text-[#191c21] text-[10px] font-medium font-['Inter'] leading-[14px]">1</div>
                            <div className="w-16 text-right text-[#191c21] text-[10px] font-medium font-['Inter'] leading-[14px]">75</div>
                            <div className="w-16 text-right text-[#191c21] text-[10px] font-medium font-['Inter'] leading-[14px]">75</div>
                        </div>
                    </div>
                    <div className="self-stretch justify-between items-start inline-flex">
                        <div className="text-[#5e6470] text-[10px] font-semibold font-['Inter'] leading-[14px]">Subtotal</div>
                        <div className="text-right text-[#191c21] text-[10px] font-medium font-['Inter'] leading-[14px]">$215</div>
                    </div>
                    <div className="self-stretch justify-between items-start inline-flex">
                        <div className="text-[#5e6470] text-[10px] font-semibold font-['Inter'] leading-[14px]">Tax </div>
                        <div className="text-right text-[#191c21] text-[10px] font-medium font-['Inter'] leading-[14px]">$0.00</div>
                    </div>
                    <div className="w-[388px] justify-between items-center inline-flex">
                        <div className="justify-start items-start gap-0.5 flex">
                            <div className="text-[#191c21] text-xs font-bold font-['Inter'] leading-none">Total</div>
                            <div className="text-[#5e6470] text-xs font-bold font-['Inter'] leading-none">(USD)</div>
                        </div>
                        <div className="text-right text-[#ec1a98] text-xs font-bold font-['Inter'] leading-none">$215.00</div>
                    </div>
                </div>
            </div>
            <div className="left-[474px] top-[800px] absolute text-center text-[#5e6470] text-[10px] font-medium font-['Inter'] leading-[14px]">+880 1533058785</div>
            <div className="left-[307px] top-[800px] absolute text-right text-[#5e6470] text-[10px] font-medium font-['Inter'] leading-[14px]">sreenathkumar66@gmail.com</div>
            <div className="w-[387px] h-[62px] left-[176px] top-[714px] absolute">
                <div className="left-0 top-0 absolute text-[#191c21] text-[10px] font-semibold font-['Inter'] leading-[14px]">Payment details</div>
                <div className="w-[169px] left-0 top-[16px] absolute text-[#5e6470] text-[10px] font-normal font-['Inter'] leading-[14px]">Please pay within 3 days of receiving this invoice.</div>
                <div className="left-[193px] top-0 absolute flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="w-16 text-[#191c21] text-[10px] font-medium font-['Inter'] leading-[14px]">Bank name</div>
                    <div className="w-16 text-[#191c21] text-[10px] font-medium font-['Inter'] leading-[14px]">Account #</div>
                </div>
                <div className="left-[286px] top-0 absolute flex-col justify-start items-end gap-0.5 inline-flex">
                    <div className="w-[88px] text-right text-[#5e6470] text-[10px] font-medium font-['Inter'] leading-[14px]">Payoneer</div>
                    <div className="w-[101px] text-right text-[#5e6470] text-[10px] font-medium font-['Inter'] leading-[14px]">sreenathswarnakar@gmail.com</div>
                </div>
            </div>
            <div className="left-[176px] top-[800px] absolute text-[#191c21] text-[10px] font-semibold font-['Inter'] leading-[14px]">Thanks for the business.</div>
        </div>
    )
}

export default TemplatesPage