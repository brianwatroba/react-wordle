import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm mb-7 text-gray-500 dark:text-gray-300">
        Solve this puzzle to discover Elaine's Valentine's Day gift! Tiles will
        light up to guide you.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" status="correct" />
        <Cell value="R" />
        <Cell value="I" />
        <Cell value="A" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter B is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="O" />
        <Cell value="V" status="present" />
        <Cell value="E" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter V is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="A" />
        <Cell value="N" />
        <Cell value="E" status="absent" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter E is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
