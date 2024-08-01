'use client'

import Image from 'next/image'
import { useState, Fragment } from 'react'
type Wug = { src: string; heading: string; text: string }[]
type Faqs = { id: number; qs: string; ans: string }[]
type Review = { rating: number; name: string; text: string }[]
const Pricing = () => {
  const FAQs: Faqs = [
    {
      id: 1,
      qs: 'Which payment methods do you accepts?',
      ans: 'cash and others',
    },
    {
      id: 2,
      qs: 'Does my unused credit carry over to the following month?',
      ans: 'Yes',
    },
    {
      id: 3,
      qs: 'Does my unused credit carry over to the following month?',
      ans: 'Yes',
    },
    {
      id: 4,
      qs: 'Does my unused credit carry over to the following month?',
      ans: 'Yes',
    },
    {
      id: 5,
      qs: 'Does my unused credit carry over to the following month?',
      ans: 'Yes',
    },
    {
      id: 6,
      qs: 'Does my unused credit carry over to the following month?',
      ans: 'Yes',
    },
  ]
  const wug: Wug = [
    {
      src: 'command-square',
      heading: 'All in one platform',
      text: 'Manage projects, upload files, share it with your team and navigate between workspaces. All in one',
    },

    {
      src: 'language-square',
      heading: 'Up to 60 languages supported',
      text: 'We have automatic and professional services that support multiple language. We got you covered.',
    },
    {
      src: 'cpu',
      heading: 'Machine-Made services',
      text: 'Use artificial intelligence to generate and translate your transcript.',
    },

    {
      src: 'profile-2user',
      heading: 'Human-Made services',
      text: 'Get human made transcript or subtitles in the most common languages, with 99% accuracy.',
    },
  ]

  const reviews: Review = [
    {
      rating: 5,
      name: 'Emily W.',
      text: 'I was blown away by the accuracy and speed of this transcriber! I uploaded a 30-minute video and had a perfectly transcribed text file. ',
    },
    {
      rating: 4,
      name: 'Samson K.',
      text: "I've tried a few different transcription services in the past, but this one is definitely the most efficient. Overall I'm very happy with this product!",
    },
    {
      rating: 5,
      name: 'David L.',
      text: 'As a researcher, I need to transcribe a lot of interviews and lectures, and this tool has been a game-changer. The accuracy is consistently high.',
    },
    {
      rating: 5,
      name: 'Emmanuel D.',
      text: "I'm absolutely amazed by the capabilities of Convey. The accuracy and speed of the responses are impressive. 5 stars isn't enough.",
    },
  ]
  const [btnActive, setBtnActive] = useState(1)

  const [showAns, setShowAns] = useState<{ [key: number]: boolean }>({})

  const handleShowAns = (id: number) => {
    setShowAns((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  const ratings = (rating: number) => {
    const ratingValue = Array(5).fill(0) // Create an array of 5 elements
    return (
      <>
        {ratingValue.map((_, index) =>
          index + 1 <= rating ? (
            <Image
              key={index}
              src="/round-star.svg"
              alt="star"
              width={24}
              height={24}
            />
          ) : (
            <p key={index}></p>
          )
        )}
      </>
    )
  }
  return (
    <main className="mt-[125px] w-full max-w-[1440px] mx-auto text-center px-20">
      <section className="text-[#1F1F1F]">
        <h2 className="text-[44px] leading-[52.8px] font-[600]">
          Find the best plan for you
        </h2>
        <div className="text-[14px] mt-[42px] p-[5px] mx-auto rounded-[10px] leading-6 font-bold bg-[#F1F5F9] w-fit">
          <button
            className={`px-3 py-[6px] rounded-[10px] ${
              btnActive === 1
                ? 'bg-white'
                : 'bg-transparent font-[400] text-[#1F1F1F]'
            }`}
            onClick={() => setBtnActive(1)}
          >
            Annually <span className="text-[#F97316]">Save 40%</span>
          </button>
          <button
            className={`px-3 py-[6px] rounded-[10px] ${
              btnActive === 2
                ? 'bg-white'
                : 'bg-transparent font-[400] text-[#1F1F1F]'
            }`}
            onClick={() => setBtnActive(2)}
          >
            Monthly
          </button>
        </div>
      </section>
      <section className="mt-[82px] text-left flex flex-col sm:flex-row gap-4 overflow-auto">
        <article className="p-8 border w-full sm:min-w-[410px] max-w-[411px] rounded-[14px] h-[642px]">
          <div>
            <h3 className="text-[28px] leading-9 font-[600] mb-[14px]">Free</h3>
            <p className="text-4 text-[#4D4E51] leading-6 ">
              To try out our platform and see if it fits your needs.
            </p>
          </div>
          <div className="my-[42px]">
            <h3 className="text-[28px] leading-9 font-[600] ">$0</h3>
            <p className="pt-2 text-4 text-[#4D4E51] leading-6">Free Forever</p>
            <button className="mt-8 px-4 py-2 text-white bg-[#F97316] text-[16px] leading-5 font-bold rounded-[6px]">
              Get Started
            </button>
          </div>

          <div>
            <ul className="text-4 text-[#4D4E51] leading-6">
              <li className="list-disc">
                AI-powered transcription, subtitles and translation
              </li>
              <li className="list-disc">10 minutes for a single file</li>
              <li className="list-disc">File export not available</li>
            </ul>
          </div>
        </article>
        {/* Second one for pro */}
        <article className="p-8 border w-full sm:min-w-[410px] max-w-[411px] rounded-[14px] h-[642px]">
          <div>
            <h3 className="text-[28px] leading-9 font-[600] mb-[14px]">Free</h3>
            <p className="text-4 text-[#4D4E51] leading-6 ">
              For advanced creators and teams with recurring language needs
            </p>
          </div>
          <div className="my-[42px]">
            <h3 className="text-[28px] leading-9 font-[600] ">$10</h3>
            <p className="pt-2 text-4 text-[#4D4E51] leading-6">
              Per month - Billed annually
            </p>
            <button className="mt-8 px-4 py-2 text-white bg-[#F97316] text-[16px] leading-5 font-bold rounded-[6px]">
              Get Started
            </button>
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

        <article className="p-8 border w-full sm:min-w-[410px] max-w-[411px] rounded-[14px] h-[642px]">
          <div>
            <h3 className="text-[28px] leading-9 font-[600] mb-[14px]">
              Enterprise
            </h3>
            <p className="text-4 text-[#4D4E51] leading-6 ">
              For large organizations in need of recurring language needs.
            </p>
          </div>
          <div className="my-[42px]">
            <h3 className="text-[28px] leading-9 font-[600]">$300</h3>
            <p className="pt-2 text-4 text-[#4D4E51] leading-6">
              Per month - Billed annually
            </p>
            <button className="mt-8 px-4 py-2 text-white bg-[#F97316] text-[16px] leading-5 font-bold rounded-[6px]">
              Get Started
            </button>
          </div>

          <div>
            <h4>Everything in Pro, and : </h4>
            <ul className="text-4 text-[#4D4E51] leading-6">
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
      </section>
      <section className="mt-[161px]">
        <h4 className="text-[20px] leading-7 text-[#F97316]">What you get</h4>
        <h2 className="mt-6 text-[36px] leading-11 font-[600] w-full mx-auto max-w-[482px]">
          Transcription & Subtitles all-in-one platform
        </h2>
      </section>
      <section className="mt-[82px] text-left">
        <div className=" sm:grid grid-cols-2 gap-4">
          {wug.map((data, index) => {
            return (
              <div
                key={index}
                className="w-full max-w-[628px] px-8 py-[46px] bg-white border shadow-md rounded-[20px] flex flex-col items-start sm:flex-row gap-8 "
              >
                <Image
                  src={`/${data.src}.svg`}
                  alt={`${index}`}
                  width={32}
                  height={32}
                />
                <div>
                  <h2>{data.heading}</h2>
                  <p>{data.text}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-[42px] text-center">
          <button className="px-4 py-2 border border-[#F97316] text-[#F97316] ">
            Sign up for free
          </button>
        </div>
      </section>
      <section className="mt-[118px]">
        <h2 className="text-[36px] leading-11 font-[600]">FAQs</h2>
        <div className="mt-[82px] text-left w-full max-w-[1060px] mx-auto">
          {FAQs.map((data) => {
            const { id, ans, qs } = data
            return (
              <Fragment key={id}>
                <div className="p-3 border-b-[1px] pt-4 pb-6 mb-6">
                  <div
                    onClick={() => handleShowAns(id)}
                    className="cursor-pointer  flex justify-between items-center"
                  >
                    <p className="">{qs}</p>
                    <Image
                      src="/chevron-down.svg"
                      alt="down"
                      width={24}
                      height={24}
                    />
                  </div>
                  {showAns[id] && (
                    <p className="text-black text-[16px] leading-[24px]">
                      {ans}
                    </p>
                  )}
                </div>
              </Fragment>
            )
          })}
        </div>
      </section>
      <section className="mt-[154px] text-left">
        <div className="text-center">
          <h2 className="text-[36px] leading-11 font-[600] mb-[18px]">
            Customer Review
          </h2>
          <p className="text-[16px] leading-6 text-[#4D4E51]">
            Rates Excellent 4.2/5 based on 200+ reviews
          </p>
        </div>
        <div className="mt-[82px] sm:grid grid-cols-2 gap-4">
          {reviews.map((review, index) => {
            const { rating, text, name } = review
            return (
              <div
                className="w-full max-w-[628px] px-8 py-[24px] bg-white border rounded-[8px]  text-[16px] leading-7 font-[500] text-[#0E0E10]"
                key={index}
              >
                <div className="flex gap-2">{ratings(rating)}</div>
                <p className="my-6 ">{text}</p>
                <p className="mb-6">{name}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-[67px] mb-[255px]">
          <div className="mb-[42px] flex items-center justify-center w-full gap-2 ">
            <p className="text-[16px] leading-6 font-[600] text-[#4D4E51]">
              See all reviews
            </p>
            <Image
              src="/chevron-right.svg"
              alt="right"
              width={20}
              height={20}
            />
          </div>
          <div className="flex justify-center">
            <button className="text-[16px] leading-5 font-bold  px-4 py-2 text-[#F97316] border border-[#F97316] text-center mx-auto">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Pricing
