import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {
    const router=useRouter();
    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }
    const onFeedback=()=>{
        router.push('/dashboard/interview/'+interview.mockId+'/feedback')
    }

  return (
    <div className='border shadow-sm rounded-lg p-3'>
        <h2 className='font-bold text-blue-500'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-600'>{interview?.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-gray-400'>Created At :{interview?.createdAt}</h2>
        <div className='flex justify-between my-2 gap-2'>
            
            <Button size="sm" variant="outline" className='' onClick={onFeedback}>Feedback</Button>
            
            <Button size="sm" className='bg-blue-500' onClick={onStart}>Start</Button>
        </div>
    </div>
  )
}

export default InterviewItemCard