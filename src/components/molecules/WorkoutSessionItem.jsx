export function WorkoutSessionItem({ ...props }) {
  return (
    <div className="workout-session-item">
      <div className="workout-session-item__inner">
        <div className="workout-session-item__name">
          <span>{ props.name }</span>
          { props.uptitle && <span className="workout-session-item__name__uptitle">{ props.uptitle }</span> }
        </div>
        <span>{ props.date }</span>
        <span>{ props.exercices }</span>
        <span>{ props.totalSets }</span>
        <span>{ props.totalReps }</span>
        <span>{ props.totalVolume }kg</span>
      </div>
    </div>
  )
}