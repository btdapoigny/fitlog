import { formatDate } from '@/utils/time'

import { Link } from 'react-router'

export function WorkoutSessionItem({ id, title, uptitle, date, totalExercices, totalSets, totalReps, totalVolume }) {
  return (
    <Link className="workout-session-item" to={ `/seances/${ id }` }>
      <div className="workout-session-item__inner">
        <div className="workout-session-item__name">
          <span>{ title }</span>
          { uptitle && <span className="workout-session-item__name__uptitle">{ uptitle }</span> }
        </div>
        <span>{ formatDate(date) }</span>
        <span>{ totalExercices }</span>
        <span>{ totalSets }</span>
        <span>{ totalReps }</span>
        <span>{ totalVolume } kg</span>
      </div>
    </Link>
  )
}