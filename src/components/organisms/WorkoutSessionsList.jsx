import { Button } from '@/components/atoms/Button'
import { WorkoutSessionItem } from '@/components/molecules/WorkoutSessionItem'

export function WorkoutSessionsList({ title, columns, data, button, emptyMessage }) {
  return (
    <section className="workout-sessions-list">
      <div className="workout-sessions-list__header">
        <h2 className="workout-sessions-list__header__title">{ title }</h2>
        { button && <Button { ...button } /> }
      </div>
      <div className="workout-sessions-list__content">
        { !data.length && <p className="workout-sessions-list__content__notice">{ emptyMessage }</p>}
        { !!data.length && 
          <>
            <div className="workout-sessions-list__content__header">
              <div className="workout-sessions-list__content__header__inner">
                { columns.map(column => <span key={ column }>{ column }</span>) }
              </div>
            </div>
            <div className="workout-sessions-list__content__list">
              { data.map(item => <WorkoutSessionItem key={ item.id } { ...item } />) }
            </div>
          </>
        }
      </div>
    </section>
  )
}