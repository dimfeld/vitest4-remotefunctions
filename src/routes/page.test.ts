import Page from './+page.svelte';
import { render } from '@testing-library/svelte';
import { test, vi } from 'vitest';

test('does a thing', () => {
	const { unmount } = render(Page, {
		data: {
			name: 'World'
		}
	});
	unmount();
});
