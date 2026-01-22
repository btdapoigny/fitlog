import { ProgressBar } from '@/components/atoms/ProgressBar'

export function InfoItem({ title, value, reference, trendPercentage, progress, icon }) {
  const Icon = icon
  const trendPercentagePrefix = trendPercentage > 0 ? '+' : ''
  const trendPercentageClass = trendPercentage > 0 ? 'green' : 'red'

  return (
    <div className={`info-item ${ progress ? 'info-item--reduced' : '' }`}>
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
          { (trendPercentage && trendPercentage !== 0) &&
            <span className={`info-item__content__value__trend ${ trendPercentageClass }`}>
              {`${ trendPercentagePrefix + trendPercentage.toString() }%`}
            </span>
          }
        </span>
        { progress && <ProgressBar value={ progress } /> }
      </div>
      { icon && <div className="info-item__icon"><Icon /></div> }
    </div >
  )
}