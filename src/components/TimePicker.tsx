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
					<datalist id={options.toString()}>
						{options.map((option) => (
							<option key={option} value={option} />
						))}
					</datalist>
				)}
				<Input
					ref={ref}
					type='time'
					list={options?.toString()}
					{...props}
				/>
			</>
		);
	}
);
TimePicker.displayName = 'TimePicker';

export { TimePicker };
