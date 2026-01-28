import { useToggle } from '@/hooks/useToggle'

import { classList } from '@/utils/classList'

import { IconButton } from '@/components/atoms/IconButton'
import { AddItem } from '@/components/molecules/AddItem'
import { InfoItem } from '@/components/molecules/InfoItem'

export function ExerciceItem({ fields, sets }) {
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
      <div className="exercice-item__list">
        { fields.map((field, index) => <InfoItem key={ index } { ...field } isEditable={ editMode } />) }
      </div>
      { sets && 
        <div className="exercice-item__list">
          { sets.map((set, index) => <InfoItem key={ index } { ...set } isEditable={ editMode } isRemovable={ true } />) }
          { editMode && <AddItem label="Ajouter une série" isSmall={ true } /> }
        </div>
      }
    </div>
  )
}