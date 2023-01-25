interface ProgressbarProps {
  progress: number
}

export function ProgressBar(props: ProgressbarProps){
const ProgressStyles = {
  width: `${props.progress}%`
}
  return (
    <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
      <div 
        role="progressbar" 
        aria-label='Progesso de habitos completados no dia'
        aria-valuemax={100}
        aria-valuenow={props.progress}
        className='h-3 rounded-xl bg-violet-600 '
        style={ProgressStyles}
      />
    </div>
  )
}