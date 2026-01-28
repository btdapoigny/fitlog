import { classList } from '@/utils/classList'

import EditIcon from '@/assets/icons/all/edit.svg?react'
import DeleteIcon from '@/assets/icons/all/delete.svg?react'
import SaveIcon from '@/assets/icons/all/save.svg?react'

const ICONS = {
  edit: EditIcon,
  delete: DeleteIcon,
  save: SaveIcon
}

export function IconButton({ icon, handleClick, isSmall }) {
  const Icon = ICONS[icon]
  const isDanger = icon === 'delete'

  if (!Icon) return null

  return (
    <button className={classList('icon-button', { 'icon-button--danger': isDanger, 'icon-button--small': isSmall })} type="button" onClick={ handleClick }>
      <Icon />
    </button>
  )
}