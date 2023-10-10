import { FC, forwardRef } from 'react';
import { Input, InputProps } from './ui/input';

interface TimePickerProps extends InputProps {
	options?: string[];
}
const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
	({ options, ...props }, ref) => {
		return (
			<>
				{options && (
					<datalist id='list'>
						{options.map((option) => (
							<option key={option} value={option} />
						))}
					</datalist>
				)}
				<Input ref={ref} type='time' list='list' {...props} />
			</>
		);
	}
);
TimePicker.displayName = 'TimePicker';

export { TimePicker };
