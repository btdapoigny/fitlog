import { classList } from '@/utils/classList'
import { ProgressBar } from '@/components/atoms/ProgressBar'

export function InfoItem({ title, value, suffix, reference, trendPercentage = 0, progress, icon }) {
  const Icon = icon
  const trend = {
    prefix: trendPercentage > 0 ? '+' : '',
    class: trendPercentage > 0 ? 'green' : 'red',
    percentage: trendPercentage
  }

  return (
    <div className={ classList('info-item', { 'info-item--reduced': progress }) }>
      <div className="info-item__content">
        <span className="info-item__content__title">{ title }</span>
        <span className="info-item__content__value">
          { value }
          { reference && (
            <>
              {' / '}
              <span className="info-item__content__value__reference">{ reference }</span>
            </>
          )}
          { suffix && <span> { suffix }</span> }
          { trend.percentage !== 0 &&
            <span className={ classList('info-item__content__value__trend', trend.class) }>
              { `${ trend.prefix + trend.percentage.toString() }%` }
            </span>
          }
        </span>
        { progress && <ProgressBar value={ progress } /> }
      </div>
      { icon && <div className="info-item__icon"><Icon /></div> }
    </div >
  )
}