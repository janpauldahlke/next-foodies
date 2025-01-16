'use client'

import { useFormStatus } from "react-dom"

const ShareFormButton = () => { 

  const { pending } = useFormStatus()

  return (
    <button
      type="submit">{!pending ? 'Share Meal' : 'Submitting.....'}</button>
  )
}

export default ShareFormButton