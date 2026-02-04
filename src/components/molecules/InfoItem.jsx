import { classList } from '@/utils/classList'

import { IconButton } from '@/components/atoms/IconButton'
import { ProgressBar } from '@/components/atoms/ProgressBar'
import { EditableContent } from '@/components/atoms/EditableContent'

export function InfoItem({ title, value, placeholder, suffix, reference, trendPercentage = 0, progress, icon, type, removeHandle, isEditable = false, isRemovable = false }) {
  const Icon = icon
  const trend = {
    prefix: trendPercentage > 0 ? '+' : '',
    class: trendPercentage > 0 ? 'green' : 'red',
    percentage: trendPercentage
  }

  return (
    <div className={ classList('info-item', { 'info-item--reduced': progress !== undefined }) }>
      <div className="info-item__content">
        <span className="info-item__content__title">{ title }</span>
        { !isEditable && 
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
        }
        { isEditable &&
          <>
            <EditableContent value={ value } placeholder={ placeholder } type={ type } />
            { suffix && <span className="info-item__content__value"> { suffix }</span> }
          </>
        }
        { progress !== undefined && <ProgressBar value={ progress } /> }
      </div>
      { icon && <div className="info-item__icon"><Icon /></div> }
      { (isEditable && isRemovable) &&
        <IconButton icon="delete" isSmall={ true } handleClick={ removeHandle } />
      }
    </div >
  )
}