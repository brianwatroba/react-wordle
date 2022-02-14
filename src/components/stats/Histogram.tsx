import { GameStats } from '../../lib/localStorage'
import { Progress } from './Progress'

type Props = {
  gameStats: GameStats
}

export const Histogram = ({ gameStats }: Props) => {
  const maxValue = 3

  return (
    <div className="columns-1 justify-left m-2 text-sm dark:text-white">
      {/* {winDistribution.map((value, i) => ( */}
      <Progress index={0} size={90 * (0 / maxValue)} label={String(0)} />
      <Progress index={1} size={90 * (0 / maxValue)} label={String(0)} />
      <Progress index={2} size={90 * (1 / maxValue)} label={String(1)} />
      <Progress index={3} size={90 * (1 / maxValue)} label={String(1)} />
      <Progress index={4} size={90 * (2 / maxValue)} label={String(2)} />
      <Progress index={5} size={90 * (3 / maxValue)} label={String(3)} />
      {/* ))} */}
    </div>
  )
}
