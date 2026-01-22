import { Button } from '@/components/atoms/Button'
import { WorkoutItem } from '@/components/molecules/WorkoutItem'

export function WorkoutsList({ title, columns, data, button, emptyMessage }) {
  return (
    <section className="workouts-list">
      <div className="workouts-list__header">
        <h2 className="workouts-list__header__title">{ title }</h2>
        { button && <Button { ...button } /> }
      </div>
      <div className="workouts-list__content">
        { !data.length && <p className="workouts-list__content__notice">{ emptyMessage }</p>}
        { !!data.length && 
          <>
            <div className="workouts-list__content__header">
              <div className="workouts-list__content__header__inner">
                { columns.map(column => <span key={ column }>{ column }</span>) }
              </div>
            </div>
            <div className="workouts-list__content__list">
              { data.map(item => <WorkoutItem key={ item.id } { ...item } />) }
            </div>
          </>
        }
      </div>
    </section>
  )
}