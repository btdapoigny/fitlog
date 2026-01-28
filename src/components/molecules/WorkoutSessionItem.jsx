import { Link } from 'react-router'

export function WorkoutSessionItem({ id, name, uptitle, date, exercices, totalSets, totalReps, totalVolume }) {
  return (
    <Link className="workout-session-item" to={ `/seances/${ id }` }>
      <div className="workout-session-item__inner">
        <div className="workout-session-item__name">
          <span>{ name }</span>
          { uptitle && <span className="workout-session-item__name__uptitle">{ uptitle }</span> }
        </div>
        <span>{ date }</span>
        <span>{ exercices }</span>
        <span>{ totalSets }</span>
        <span>{ totalReps }</span>
        <span>{ totalVolume } kg</span>
      </div>
    </Link>
  )
}