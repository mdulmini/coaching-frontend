'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import {
  GoogleIcon,
  AppleIcon,
  GuestIcon,
  StatusBar,
  DynamicIsland,
  HomeIndicator,
} from '@/components/ui/Icons'

function CoachingIllustration() {
  return (
    <svg viewBox="0 0 280 220" className="w-full h-full" aria-label="Person with headphones working on laptop">
      <ellipse cx="140" cy="200" rx="80" ry="12" fill="#e0ddd6" />
      <rect x="72" y="145" width="96" height="58" rx="5" fill="#2a2a2a" />
      <rect x="68" y="200" width="104" height="6" rx="3" fill="#1a1a1a" />
      <rect x="75" y="148" width="90" height="52" rx="2" fill="#111" />
      <rect x="78" y="151" width="84" height="46" rx="1" fill="#0a1a0a" />
      <circle cx="120" cy="174" r="7" fill="#5DC93E" opacity="0.7" />
      <circle cx="120" cy="174" r="4" fill="#7fee5e" opacity="0.9" />
      <rect x="110" y="204" width="20" height="5" rx="2.5" fill="#333" />
      <ellipse cx="140" cy="132" rx="28" ry="18" fill="#f5c5a8" />
      <path d="M115 138 Q140 155 165 138 L168 180 Q140 187 112 180 Z" fill="#e8e8e8" />
      <path d="M133 140 L140 148 L147 140" stroke="#ccc" strokeWidth="1.5" fill="none" />
      <circle cx="140" cy="95" r="26" fill="#f5c5a8" />
      <rect x="133" y="117" width="14" height="12" rx="3" fill="#f5c5a8" />
      <path d="M114 92 Q115 68 140 64 Q165 68 166 92 Q164 74 140 70 Q116 74 114 92 Z" fill="#1a1a1a" />
      <path d="M114 85 Q110 80 113 72 Q118 62 130 60 Q140 58 150 60 Q162 63 166 72 Q169 80 166 85" fill="#1a1a1a" />
      <path d="M118 78 Q116 72 120 68" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M162 78 Q164 72 160 68" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="114" cy="97" rx="5" ry="7" fill="#f0b898" />
      <ellipse cx="166" cy="97" rx="5" ry="7" fill="#f0b898" />
      <rect x="122" y="91" width="16" height="12" rx="5" stroke="#1a1a1a" strokeWidth="2" fill="rgba(200,230,255,0.15)" />
      <rect x="142" y="91" width="16" height="12" rx="5" stroke="#1a1a1a" strokeWidth="2" fill="rgba(200,230,255,0.15)" />
      <line x1="138" y1="97" x2="142" y2="97" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="122" y1="96" x2="114" y2="96" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="158" y1="96" x2="166" y2="96" stroke="#1a1a1a" strokeWidth="1.5" />
      <path d="M114 94 Q114 70 140 66 Q166 70 166 94" stroke="#1a1a1a" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <rect x="108" y="90" width="11" height="14" rx="4" fill="#1a1a1a" />
      <rect x="161" y="90" width="11" height="14" rx="4" fill="#1a1a1a" />
      <path d="M132 108 Q140 114 148 108" stroke="#c8956b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M116 140 Q98 132 88 118" stroke="#f5c5a8" strokeWidth="9" strokeLinecap="round" fill="none" />
      <circle cx="85" cy="115" r="7" fill="#f5c5a8" />
      <path d="M80 110 Q84 106 88 108" stroke="#f0b898" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M78 114 Q82 110 86 113" stroke="#f0b898" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M164 140 Q178 136 188 128" stroke="#f5c5a8" strokeWidth="9" strokeLinecap="round" fill="none" />
      <circle cx="191" cy="126" r="7" fill="#f5c5a8" />
      <line x1="72" y1="106" x2="78" y2="102" stroke="#d0cdc6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="70" y1="113" x2="77" y2="112" stroke="#d0cdc6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="73" y1="120" x2="79" y2="121" stroke="#d0cdc6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function OnboardingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#F0EFE9] flex items-center justify-center p-4">
      <div className="bg-white rounded-[2.8rem] w-full max-w-[360px] shadow-sm overflow-hidden">
        <StatusBar />
        <DynamicIsland />

        <div className="flex justify-center px-10 pt-2 pb-4">
          <div className="w-[220px] h-[185px]">
            <CoachingIllustration />
          </div>
        </div>

        <div className="text-center px-8 pb-5">
          <h1 className="text-[22px] font-bold text-gray-900 mb-2 tracking-tight">
            Private Coaching
          </h1>
          <p className="text-[14px] text-gray-500 leading-relaxed">
            Add one-on-one, confidential sessions for only{' '}
            <span className="font-medium text-gray-700">$35 per session</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-1.5 pb-6">
          <div className="w-7 h-[5px] rounded-full bg-[#5DC93E]" />
          <div className="w-7 h-[5px] rounded-full bg-[#d4f0c8]" />
          <div className="w-20 h-[5px] rounded-full bg-[#E8E8E3]" />
        </div>

        <div className="px-6 space-y-3 pb-4">
          <Button variant="outline">
            <GoogleIcon />
            Continue with Google
          </Button>
          <Button variant="green">
            <AppleIcon color="#1C3A1C" />
            Continue with Apple
          </Button>
          <Button variant="outline">
            <GuestIcon />
            Continue As Guest
          </Button>
        </div>

        <p className="text-center text-[13px] text-gray-500 pb-5">
          Already have an account?{' '}
          <button
            onClick={() => router.push('/login')}
            className="font-bold text-gray-800 hover:underline"
          >
            Log in
          </button>
        </p>

        <HomeIndicator />
      </div>
    </div>
  )
}