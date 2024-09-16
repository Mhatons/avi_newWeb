export const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

export const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
    <circle cx="12" cy="12" r="12" fill="green" />
    <path d="M9 12.5l2.5 2.5 5-5" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export const Spinner = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25" height="25">
    <circle
      cx="25"
      cy="25"
      r="20"
      stroke="white"
      stroke-width="4"
      fill="none"
      stroke-linecap="round"
      stroke-dasharray="31.4 31.4"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>

)

export const HamBurger = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38">
    <rect x="3" y="6" width="18" height="2" fill="black" />
    <rect x="3" y="11" width="18" height="2" fill="black" />
    <rect x="3" y="16" width="18" height="2" fill="black" />
  </svg>
)

export const RequiredIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="7" height="7" fill="red">
    <path d="M25 2c1.1 0 2 .9 2 2v16.5l13.3-7.7c1-.6 2.3-.2 2.9.9s.2 2.3-.9 2.9L29 25l13.3 7.7c1 .6 1.4 1.9.9 2.9-.6 1-1.9 1.4-2.9.9L27 31.5V48c0 1.1-.9 2-2 2s-2-.9-2-2V31.5l-13.3 7.7c-1 .6-2.3.2-2.9-.9-.6-1-.2-2.3.9-2.9L21 25l-13.3-7.7c-1-.6-1.4-1.9-.9-2.9s1.9-1.4 2.9-.9L23 20.5V4c0-1.1.9-2 2-2z" />
  </svg>
)