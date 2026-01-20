import { useState, useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router'
import { routes } from '@/routes.jsx'

export function Navbar() {
  const [selectorRect, setSelectorRect] = useState(null)
  const itemRefs = useRef([])
  const location = useLocation()

  useEffect(() => {
    const activeIndex = routes.findIndex((route) => route.path === location.pathname)
    const activeElement = itemRefs.current[activeIndex]

    const updateSelectorRectState = () => {
      setSelectorRect({
        xPosition: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
        height: activeElement.offsetHeight,
      })
    }

    if (!activeElement) return

    const observer = new ResizeObserver(updateSelectorRectState)
    itemRefs.current.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <nav className={selectorRect ? 'navbar is-visible' : 'navbar'}>
      <span className="navbar__selector" style={{ 
        '--item-x-position': `${ selectorRect?.xPosition }px`, 
        '--item-width': `${ selectorRect?.width }px`,
        '--item-height': `${ selectorRect?.height }px` 
      }}></span>
      <ul className="navbar__list">
        {
          routes.map((route, index) => {
            const Icon = route.handle.icon
            const title = route.handle.title
            const path = route.path

            return (
              <li key={ title }>
                <NavLink to={ path } className="navbar__list__item" ref={(el) => (itemRefs.current[index] = el)}>
                  <Icon />
                  <span>{ title }</span>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}