import React from 'react'
import { ContainerTagFilter } from './styles'
interface TagFilterProps {
  label: string
  name: 'selected' | ''
  onClick: () => void
}

export function TagFilter({ label, onClick, name }: TagFilterProps) {
  return (
    <ContainerTagFilter onClick={onClick} className={name}>
      {label}
    </ContainerTagFilter>
  )
}
