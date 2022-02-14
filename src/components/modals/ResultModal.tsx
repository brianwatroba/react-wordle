import { GameStats } from '../../lib/localStorage'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
  isHardMode: boolean
}

export const ResultModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShare,
  isHardMode,
}: Props) => {
  return (
    <BaseModal title="💃🏻 🕺🏻" isOpen={isOpen} handleClose={handleClose}>
      <h1 className="text-lg leading-6 font-bold text-gray-900 dark:text-gray-100">
        LET'S DANCE
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-100">
        We're enrolled together in Broadway Dance Center's March{' '}
        <a
          className="underline"
          tabIndex={2}
          href="https://www.broadwaydancecenter.com/workshop/absolute-beginner-workshops"
        >
          Intro to Hip Hop class
        </a>
        .
      </p>
      <p className="text-sm mt-4 text-gray-600 dark:text-gray-100">
        Even more fun than Forward Space 😉.
      </p>
      <div className="flex flex-row items-center justify-center align-center mt-8">
        <img
          className="rounded"
          alt="Brian and Elaine wedding"
          src={process.env.PUBLIC_URL + '/us.jpeg'}
          height="100"
          width="100"
        />
        <img
          className="rounded ml-2"
          alt="Brian and Elaine beach"
          src={process.env.PUBLIC_URL + '/us2.jpg'}
          height="100"
          width="100"
        />
      </div>
      <p className="text-sm mt-4 text-gray-600 dark:text-gray-100">
        Happy Valentine's Day, babe. I'm so happy you're in my life. I'm so
        proud of you and our relationship. All of your support, care, drive,
        humor, everything. Thanks for being you.
      </p>

      <p className="italic text-sm mt-4 text-gray-600 dark:text-gray-100">
        Love, Brian{' '}
      </p>
    </BaseModal>
  )
}
