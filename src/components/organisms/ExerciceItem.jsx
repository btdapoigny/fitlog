import { useToggle } from '@/hooks/useToggle'

import { classList } from '@/utils/classList'

import { IconButton } from '@/components/atoms/IconButton'
import { InfoItem } from '@/components/molecules/InfoItem'

export function ExerciceItem({ fields }) {
  const [editMode, toggleEditMode] = useToggle(false)

  return (
    <div className="exercice-item">
      <div className={ classList('exercice-item__actions', { 'is-visible': editMode }) }>
        { !editMode && <IconButton icon="edit" handleClick={ toggleEditMode } /> }
        { editMode && 
          <>
            <IconButton icon="delete" /> 
            <IconButton icon="save" handleClick={ toggleEditMode } /> 
          </>
        }
      </div>
      <div className="exercice-item__infos">
        { fields.map((field, index) => <InfoItem key={ index } { ...field } editable={ editMode } />) }
      </div>
    </div>
  )
}