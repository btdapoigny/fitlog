export function WorkoutItem({ ...props }) {
  return (
    <div className="workout-item">
      <div className="workout-item__inner">
        <div className="workout-item__name">
          <span>{ props.name }</span>
          { props.uptitle && <span className="workout-item__name__uptitle">{ props.uptitle }</span> }
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