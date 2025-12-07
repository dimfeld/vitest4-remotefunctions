import { query } from '$app/server';
import * as pg from 'pg';

export const q = query('unchecked', () => {
	// reference pg so that the import isn't removed
	pg;
	return 'abc';
});
