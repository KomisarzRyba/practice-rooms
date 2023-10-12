import { FC } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, getDay, parse, startOfWeek } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

const BookingCalendar: FC = () => {
	return (
		<div className='h-96'>
			<Calendar
				localizer={dateFnsLocalizer({
					format,
					parse,
					startOfWeek,
					getDay,
					locales: { 'en-US': enUS },
				})}
				style={{ height: '100%' }}
				defaultView='day'
				toolbar={false}
			/>
		</div>
	);
};

export default BookingCalendar;
