import { map } from 'nanostores';

export const Details = map({
	firstname: '',
	lastname: '',
  email: '',
  subject: '',
	message: '',
  loading: false,
	sent: false, // Prevents submission spam
});
