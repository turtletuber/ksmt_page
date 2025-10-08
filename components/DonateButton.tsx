'use client'

export default function DonateButton() {
  return (
    <button
      onClick={() => window.open('https://donate.stripe.com/00g5mbflr4VRfM4145', '_blank')}
      className="px-10 py-5 text-2xl font-bold text-black bg-yellow-200 hover:bg-yellow-300 border-2 border-black rounded-lg shadow-lg"
    >
      Support a kid&apos;s project 💛
    </button>
  )
}
