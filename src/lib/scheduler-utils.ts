import { ScheduleProperties } from '@prisma/client';

export const getHoursCount = ({ dayStart, dayEnd }: ScheduleProperties) =>
	((dayEnd.getHours() - dayStart.getHours()) / 60) * 60 * 1000;
