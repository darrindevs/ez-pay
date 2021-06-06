import { CheckIcon, ThumbUpIcon, CurrencyDollarIcon } from '@heroicons/react/solid'

const timeline = [
  {
    id: 1,
    content: ' from Mom',
    target: '$20',
    href: '',
    date: 'May 1',
    datetime: '2020-09-20',
    icon: CurrencyDollarIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 2,
    content: ' from Charlie',
    target: '$5',
    href: '',
    date: 'May 14',
    datetime: '2020-09-22',
    icon: CurrencyDollarIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 3,
    content: ' from Lucy',
    target: '$10',
    href: '#',
    date: 'May 22',
    datetime: '2020-09-28',
    icon: CurrencyDollarIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: ' from Linus',
    target: '$25',
    href: '',
    date: 'June 1',
    datetime: '2020-09-30',
    icon: CurrencyDollarIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 5,
    content: ' from Snoopy',
    target: '$100',
    href: '#',
    date: 'June 6',
    datetime: '2020-10-04',
    icon: CurrencyDollarIcon,
    iconBackground: 'bg-green-500',
    
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PaymentsComponent() {
    return (

        <div className="container">
       {/* > container  */}
       <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">{/* Start main content */}
          <div className="flow-root">
      <ul className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                    <a href={event.href} className="font-medium text-gray-900">
                        {event.target}
                      </a>
                      {event.content}{' '}
                      
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
          
          </div>
        </div>
        </div>
      )
    }