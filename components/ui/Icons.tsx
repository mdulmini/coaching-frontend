export function GoogleIcon() {
    return (
      <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
      </svg>
    )
  }
  
  export function AppleIcon({ color = '#1C3A1C' }: { color?: string }) {
    return (
      <svg width="18" height="18" viewBox="0 0 814 1000" fill={color} aria-hidden="true">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.8-162.1-113.4C57.6 815.3 4 696.4 4 582.9 4 380.6 133.6 274.5 261 274.5c67.8 0 124.4 44.5 166.2 44.5 39.5 0 101.8-46.8 179.4-46.8zM568.2 113.3c-24.4 28.9-63.6 52.1-105.3 52.1-5.2 0-10.5-.6-15.7-1.3C447.8 75.6 517.2 12 580.3 12c5.2 0 10.5.6 15.7 1.3.6 88.6-59.9 156.3-27.8 100z" />
      </svg>
    )
  }
  
  export function GuestIcon() {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    )
  }
  
  export function StatusBar() {
    return (
      <div className="flex justify-between items-center px-6 pt-4 pb-1">
        <span className="text-[13px] font-semibold tracking-tight">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor" aria-hidden="true">
            <rect x="0" y="4" width="3" height="8" rx="0.5" />
            <rect x="4.5" y="2.5" width="3" height="9.5" rx="0.5" />
            <rect x="9" y="1" width="3" height="11" rx="0.5" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.3" />
          </svg>
          <svg width="16" height="12" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M1 6c6-6 16-6 22 0" opacity="0.3" />
            <path d="M4 10c4.5-4.5 11.5-4.5 16 0" />
            <path d="M7.5 13.5c2.5-2.5 6.5-2.5 9 0" />
            <circle cx="12" cy="17" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="currentColor" aria-hidden="true">
            <rect x="0" y="0.5" width="22" height="11" rx="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="1.5" y="2" width="17" height="8" rx="1.5" />
            <path d="M23.5 4v4a2 2 0 000-4z" />
          </svg>
        </div>
      </div>
    )
  }
  
  export function DynamicIsland() {
    return (
      <div className="flex justify-center mb-2">
        <div className="bg-black rounded-full w-[120px] h-[34px]" />
      </div>
    )
  }
  
  export function HomeIndicator() {
    return (
      <div className="flex justify-center py-4">
        <div className="w-[130px] h-[5px] rounded-full bg-black/20" />
      </div>
    )
  }