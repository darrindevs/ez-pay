import { ExclamationIcon } from '@heroicons/react/solid'

export default function AlertWarning() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-10">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            Live data coming soon.
          </p>
        </div>
      </div>
    </div>
  )
}