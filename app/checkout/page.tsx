'use client'
import React from 'react'
import Link from 'next/link'

const Checkout = () => {
  return (
    <section className="flex gap-[95px] w-full max-w-[1440px] mx-auto p-[96px]">
      <article>
        <article className="p-8 border w-full sm:min-w-[410px] max-w-[411px] rounded-[14px] ">
          <h3 className="text-[28px] leading-9 font-[600]">Pro</h3>
          <div className="mt-2 mb-4 flex">
            <h3 className="text-[28px] leading-9 font-[600] ">$10</h3>
            <p className="pt-2 text-4 text-[#4D4E51] leading-6">
              / month billed annually
            </p>
          </div>
          <div>
            <ul className="text-4 text-[#4D4E51] leading-6">
              <li className="list-disc">
                AI-powered transcription, subtitles, and translation AI-powered
                transcription, subtitles and translation
              </li>
              <li className="list-disc"> 300 minutes per month</li>
              <li className="list-disc">
                Export transcriptions in Word, TXT and PDF
              </li>
              <li className="list-disc">
                Export subtitles in SRT, MP4, VTT, STL, HTML, XML, TXT, DOCX,
                and more
              </li>
            </ul>
          </div>
        </article>

        {/* Third one for Enterprise */}

        <article className="p-8 border w-full sm:min-w-[410px] max-w-[411px] rounded-[14px] mt-8 ">
          <h3 className="text-[28px] leading-9 font-[600]">Enterprise</h3>
          <div className="mt-2 mb-4 flex">
            <h3 className="text-[28px] leading-9 font-[600]">$300</h3>
            <p className="pt-2 text-4 text-[#4D4E51] leading-6">
              /month Billed annually
            </p>
          </div>

          <div>
            <h4>Everything in Pro, and : </h4>
            <ul className="text-4 text-[#4D4E51] leading-6 mt-4">
              <li className="list-disc">600 minutes per month</li>
              <li className="list-disc">Expand up to 100 hours per month</li>
              <li className="list-disc">3 user seats included </li>
              <li className="list-disc">
                Manage workspace roles and permissions
              </li>
              <li>Create unlimited style guides and glossaries </li>
              <li>5% discount on human-made services </li>
              <li>Premium support </li>
            </ul>
          </div>
        </article>
      </article>

      <article className="w-full max-w-[588px] px-8">
        <div>
          <h4>Select Payment Method</h4>
          <div className="border rounded-sm px-3 py-4">
            <div>
              <span>Debit card</span>
            </div>
          </div>
        </div>
        <div className="mb-4 mt-12">
          <label
            htmlFor="name"
            className="text-[20px] leading-11 text-[#0E0E10] "
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            className="w-full border rounded-sm outline-none border-[#CBD5E1] mt-3 px-4  py-5 text-[#8E8E8E] "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cardHolder"
            className="text-[20px] leading-11 text-[#0E0E10] "
          >
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardHolder"
            placeholder="Enter your full name"
            className="w-full border rounded-sm outline-none border-[#CBD5E1] px-4 mt-3 py-5 text-[#8E8E8E] "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="card-number"
            className="text-[20px] leading-11 text-[#0E0E10] "
          >
            Card Number
          </label>
          <input
            type="text"
            id="card-number"
            placeholder="0000 0000 0000 0000"
            className="w-full border rounded-sm outline-none border-[#CBD5E1] px-4 mt-3 py-5 text-[#8E8E8E] "
          />
        </div>
        <div className="flex gap-4">
          <div>
            <label
              htmlFor="expiry"
              className="text-[20px] leading-11 text-[#0E0E10] "
            >
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry"
              placeholder="MM/YY"
              className="w-full border rounded-sm outline-none border-[#CBD5E1] px-4 mt-3 py-5 text-[#8E8E8E] "
            />
          </div>
          <div>
            <label
              htmlFor="security"
              className="text-[20px] leading-11 text-[#0E0E10] "
            >
              Security Check
            </label>
            <input
              type="text"
              id="card-number"
              placeholder="CVV"
              className="w-full border rounded-sm outline-none border-[#CBD5E1] px-4 mt-3 py-5 text-[#8E8E8E] "
            />
          </div>
        </div>
        <div className="w-full mt-6 bg-[#E1E1E1] px-4  py-2 text-center rounded-sm">
          <button className="text-[18px] leading-6 text-[#CACACA] w-full">
            Confirm and Pay
          </button>
        </div>
        <p className="mt-[10px] text-[14px] leading-[22px] text-[#4D4E51]">
          Your subscription will renew automatically every month as one payment
          of $10 Cancel it anytime from your subscription settings. By clicking{' '}
          {`Confirm and pay`} you agree to the{' '}
          <Link href="terms" className="text-[#F97316]">
            Terms and Conditions.
          </Link>
        </p>
      </article>
    </section>
  )
}

export default Checkout
