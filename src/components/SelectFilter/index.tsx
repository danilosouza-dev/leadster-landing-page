import React from 'react'
import {
  WrapperSelect,
  Option,
  Select,
  SortBy,
  WrapperArrow,
  ContainerSelectFilter,
} from './styles'
import { MdArrowDropDown } from 'react-icons/md'
interface SelectFilterProps {
  onSelectFilter: (selectedLabel: string) => void
  sortBy: string
}

export function SelectFilter({ onSelectFilter, sortBy }: SelectFilterProps) {
  function handleSelectFilter(event: React.MouseEvent<HTMLDivElement>) {
    const selectedLabel = event.currentTarget.dataset.label
    onSelectFilter(selectedLabel || '')
  }

  return (
    <ContainerSelectFilter>
      <SortBy>Ordenar por:</SortBy>
      <WrapperSelect>
        <label>{sortBy}</label>
        <Select>
          <Option data-label="Mais Recentes" onClick={handleSelectFilter}>
            Mais Recentes
          </Option>
          <Option data-label="Mais Antigos" onClick={handleSelectFilter}>
            Mais Antigos
          </Option>

          <Option data-label="Mais Relevantes" onClick={handleSelectFilter}>
            Mais Relevantes
          </Option>
        </Select>

        <WrapperArrow>
          <MdArrowDropDown size={35} />
        </WrapperArrow>
      </WrapperSelect>
    </ContainerSelectFilter>
  )
}
