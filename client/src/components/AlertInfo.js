import { InformationCircleIcon } from '@heroicons/react/solid'

export default function () {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-blue-700">
            Coming soon!
           
          </p>
        </div>
      </div>
    </div>
  )
}