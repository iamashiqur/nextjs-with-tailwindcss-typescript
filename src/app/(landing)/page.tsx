import { cn } from '@/utils/cn'
import Typography from '../components/Typography'

const Home = () => {
  return (
    <div className="container mx-auto">
      <Typography as={'h2'} size={'xl'} weight={'bold'} color={'primary'} className={cn('text-center')}>
        Thank you for clone this repo
      </Typography>
    </div>
  )
}

export default Home
