export function ProgressBar({ value }) {
  return (
    <div className="progress-bar" style={{ '--progression': value * 0.01  }}>
      <span className="progress-bar__background"></span>
      <span className="progress-bar__value"></span>
    </div>
  )
}