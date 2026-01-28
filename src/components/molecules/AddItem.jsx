import { classList } from '@/utils/classList'

export function AddItem({ label, handleClick, isSmall }) {
  return (
    <button className={ classList('add-item', { 'add-item--small': isSmall }) } type="button" onClick={ handleClick }>
      <div className="add-item__content">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.6875 1.25V18.125" stroke="#718096" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.125 9.6875H1.25" stroke="#718096" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>{ label }</span>
      </div>
    </button>
  )
}